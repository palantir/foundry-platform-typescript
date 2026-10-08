/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ApiSpec } from "@osdk/docs-spec-platform";
import { mkdir, writeFile } from "node:fs/promises";
import * as path from "node:path";
import { gunzipSync } from "node:zlib";

/**
 * This is the Node port of `scripts/getOpenApiIr.sh`. It downloads the
 * api-gateway IR (plus the federated IR) from a Maven repository,
 * extracts the combined IR and SLS manifest from the rosetta bundle, merges in
 * the federated namespaces, and writes `combined-ir.json` + `manifest.yml` to
 * `outDir` so they can be fed straight into the `generate` command.
 *
 * Access is network-gated, not credential-gated: the artifactory host must be
 * reachable (e.g. on-VPN). No auth header is sent, matching the shell script.
 */

const ROSETTA_ARTIFACT = "api-gateway-rosetta-bundle";
const FEDERATED_ARTIFACT = "api-gateway-federated-ir";
const DEFAULT_GROUP_ID = "com.palantir.foundry.api";

// The IR on disk carries a `dependencies` array that is not part of the typed
// ApiSpec surface; model it locally for the merge.
interface IrFile extends ApiSpec {
  dependencies?: unknown[];
}

export interface FetchIrOptions {
  /** Base Maven repo url, e.g. the value of $MAVEN_DIST_RELEASE. */
  artifactoryUrl: string;
  /** Pinned api-gateway version; when omitted the latest release is resolved. */
  apiGatewayVersion?: string;
  /** Directory to write combined-ir.json + manifest.yml into. */
  outDir: string;
  /** Maven group id; defaults to com.palantir.foundry.api. */
  groupId?: string;
}

export interface FetchIrResult {
  version: string;
  irPath: string;
  manifestPath: string;
}

/** Progress goes to stderr so stdout stays clean for piping. */
function log(message: string): void {
  process.stderr.write(`${message}\n`);
}

export async function fetchIr(opts: FetchIrOptions): Promise<FetchIrResult> {
  const groupPath = (opts.groupId ?? DEFAULT_GROUP_ID).replace(/\./g, "/");
  const base = opts.artifactoryUrl.replace(/\/+$/, "");
  const rosettaRepo = `${base}/${groupPath}/${ROSETTA_ARTIFACT}`;
  const federatedRepo = `${base}/${groupPath}/${FEDERATED_ARTIFACT}`;

  const version = opts.apiGatewayVersion
    ?? await resolveLatestVersion(rosettaRepo);
  log(`GATEWAY VERSION: ${version}`);

  const bundleUrl =
    `${rosettaRepo}/${version}/${ROSETTA_ARTIFACT}-${version}.sls.tgz`;
  const federatedUrl =
    `${federatedRepo}/${version}/${FEDERATED_ARTIFACT}-${version}.omni.json`;

  log(`Downloading ${bundleUrl}`);
  const bundle = await download(bundleUrl);
  log(`Downloading ${federatedUrl}`);
  const federatedRaw = await download(federatedUrl);

  // Pull the combined IR and the SLS manifest out of the rosetta bundle tgz.
  const entries = extractFromTgz(bundle, {
    combinedIr: p => p.endsWith("/asset/palantir/ir-v2/combined-ir.json"),
    manifest: p => p.endsWith("/deployment/manifest.yml"),
  });
  if (entries.combinedIr == null) {
    throw new Error("combined-ir.json not found in the rosetta bundle");
  }
  if (entries.manifest == null) {
    throw new Error("manifest.yml not found in the rosetta bundle");
  }

  const existing: IrFile = JSON.parse(entries.combinedIr.toString("utf8"));
  const federated: IrFile = JSON.parse(federatedRaw.toString("utf8"));
  const merged = mergeIrs(existing, federated);

  await mkdir(opts.outDir, { recursive: true });
  const irPath = path.join(opts.outDir, "combined-ir.json");
  const manifestPath = path.join(opts.outDir, "manifest.yml");
  await writeFile(irPath, JSON.stringify(merged));
  await writeFile(manifestPath, entries.manifest);

  log(`Wrote ${irPath}`);
  log(`Wrote ${manifestPath}`);
  return { version, irPath, manifestPath };
}

/** Resolves the latest release version from the artifact's maven-metadata.xml. */
async function resolveLatestVersion(repo: string): Promise<string> {
  const url = `${repo}/maven-metadata.xml`;
  const xml = (await download(url)).toString("utf8");
  const match = xml.match(/<release>([^<]+)<\/release>/);
  if (match == null) {
    throw new Error(`Could not resolve a <release> version from ${url}`);
  }
  return match[1].trim();
}

async function download(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${res.status} ${res.statusText}`,
    );
  }
  return Buffer.from(await res.arrayBuffer());
}

/**
 * Mirrors the `jq` merge in getOpenApiIr.sh: keep the base IR, take the
 * federated IR's version, union the dependency lists, and concatenate the
 * namespaces.
 */
export function mergeIrs(existing: IrFile, federated: IrFile): IrFile {
  const dependencies = uniqueByJson([
    ...(existing.dependencies ?? []),
    ...(federated.dependencies ?? []),
  ]);
  return {
    ...existing,
    irVersion: federated.irVersion,
    dependencies,
    namespaces: [...existing.namespaces, ...federated.namespaces],
  };
}

/** De-dupes and sorts an array by its JSON representation (like `jq unique`). */
function uniqueByJson<T>(items: T[]): T[] {
  const byKey = new Map<string, T>();
  for (const item of items) {
    byKey.set(JSON.stringify(item), item);
  }
  return [...byKey.keys()]
    .sort()
    .map(key => byKey.get(key)!);
}

/**
 * Minimal, dependency-free extractor for the handful of files we need out of a
 * gzip-compressed tar archive. Returns a buffer per matcher that matched a
 * regular-file entry (first match wins).
 */
export function extractFromTgz(
  tgz: Buffer,
  matchers: Record<string, (entryPath: string) => boolean>,
): Record<string, Buffer | undefined> {
  const tar = gunzipSync(tgz);
  const result: Record<string, Buffer | undefined> = {};

  let offset = 0;
  while (offset + 512 <= tar.length) {
    const header = tar.subarray(offset, offset + 512);
    offset += 512;

    // Two consecutive all-zero blocks mark the end of the archive.
    if (isZeroBlock(header)) break;

    const name = readCString(header, 0, 100);
    const prefix = readCString(header, 345, 155);
    const entryPath = prefix.length > 0 ? `${prefix}/${name}` : name;
    const size = parseInt(readCString(header, 124, 12).trim(), 8) || 0;
    const typeFlag = String.fromCharCode(header[156]);

    const isRegularFile = typeFlag === "0" || typeFlag === "\0"
      || header[156] === 0;
    if (isRegularFile) {
      for (const [key, matches] of Object.entries(matchers)) {
        if (result[key] == null && matches(entryPath)) {
          result[key] = tar.subarray(offset, offset + size);
        }
      }
    }

    // Entry content is padded to the next 512-byte boundary.
    offset += Math.ceil(size / 512) * 512;
  }

  return result;
}

function readCString(buf: Buffer, start: number, length: number): string {
  let end = start;
  const max = start + length;
  while (end < max && buf[end] !== 0) end++;
  return buf.toString("utf8", start, end);
}

function isZeroBlock(block: Buffer): boolean {
  for (let i = 0; i < block.length; i++) {
    if (block[i] !== 0) return false;
  }
  return true;
}
