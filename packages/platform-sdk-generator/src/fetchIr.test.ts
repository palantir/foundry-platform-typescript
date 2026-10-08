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

import { gzipSync } from "node:zlib";
import { describe, expect, it } from "vitest";
import { extractFromTgz, mergeIrs } from "./fetchIr.js";

/**
 * Builds a single tar header block for a regular file. Only the fields the
 * extractor reads (name, size, and the type byte at offset 156) matter here.
 */
function tarHeader(name: string, size: number): Buffer {
  const header = Buffer.alloc(512);
  header.write(name, 0, "utf8");
  header.write("0000644\0", 100, "ascii"); // mode
  header.write("0000000\0", 108, "ascii"); // uid
  header.write("0000000\0", 116, "ascii"); // gid
  header.write(size.toString(8).padStart(11, "0") + "\0", 124, "ascii"); // size
  header.write("00000000000\0", 136, "ascii"); // mtime
  header.write("        ", 148, "ascii"); // checksum placeholder (spaces)
  header.write("0", 156, "ascii"); // type byte (offset 156): regular file

  let checksum = 0;
  for (let i = 0; i < 512; i++) checksum += header[i];
  header.write(checksum.toString(8).padStart(6, "0") + "\0 ", 148, "ascii");
  return header;
}

/** Builds an uncompressed tar buffer from the given entries. */
function makeTar(entries: Array<{ name: string; content: string }>): Buffer {
  const blocks: Buffer[] = [];
  for (const entry of entries) {
    const content = Buffer.from(entry.content, "utf8");
    blocks.push(tarHeader(entry.name, content.length));
    const padded = Buffer.alloc(Math.ceil(content.length / 512) * 512);
    content.copy(padded);
    blocks.push(padded);
  }
  blocks.push(Buffer.alloc(1024)); // two zero blocks terminate the archive
  return Buffer.concat(blocks);
}

describe("extractFromTgz", () => {
  it("extracts matching regular files and skips non-matches", () => {
    const tar = makeTar([
      {
        name:
          "api-gateway-rosetta-bundle-9.9.9/asset/palantir/ir-v2/combined-ir.json",
        content: `{"irVersion":"v2","namespaces":[]}`,
      },
      {
        // A larger decoy in the same directory to exercise block skipping.
        name: "api-gateway-rosetta-bundle-9.9.9/asset/palantir/ir-v2/decoy.bin",
        content: "x".repeat(1500),
      },
      {
        name: "api-gateway-rosetta-bundle-9.9.9/deployment/manifest.yml",
        content: `manifest-version: "1.0"\n`,
      },
    ]);

    const out = extractFromTgz(gzipSync(tar), {
      combinedIr: p => p.endsWith("/asset/palantir/ir-v2/combined-ir.json"),
      manifest: p => p.endsWith("/deployment/manifest.yml"),
    });

    expect(out.combinedIr?.toString("utf8")).toBe(
      `{"irVersion":"v2","namespaces":[]}`,
    );
    expect(out.manifest?.toString("utf8")).toBe(`manifest-version: "1.0"\n`);
  });

  it("leaves unmatched keys undefined", () => {
    const tar = makeTar([{ name: "some/other/file.txt", content: "nope" }]);
    const out = extractFromTgz(gzipSync(tar), {
      combinedIr: p => p.endsWith("/combined-ir.json"),
    });
    expect(out.combinedIr).toBeUndefined();
  });
});

describe("mergeIrs", () => {
  it("takes the federated irVersion, concatenates namespaces, unions deps", () => {
    const merged = mergeIrs(
      {
        irVersion: "v2",
        namespaces: [{ name: "Core" }],
        dependencies: ["a", "b"],
      } as unknown as Parameters<typeof mergeIrs>[0],
      {
        irVersion: "v2-federated",
        namespaces: [{ name: "Gaia" }],
        dependencies: ["b", "c"],
      } as unknown as Parameters<typeof mergeIrs>[1],
    );

    expect(merged.irVersion).toBe("v2-federated");
    expect(merged.namespaces).toHaveLength(2);
    expect(merged.dependencies).toEqual(["a", "b", "c"]);
  });
});
