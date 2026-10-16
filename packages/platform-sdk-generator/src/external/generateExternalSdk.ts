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
import fs from "node:fs/promises";
import * as path from "node:path";
import { emitNamespacePackage } from "../emitNamespacePackage.js";
import { Model } from "../model/Model.js";
import type { Namespace } from "../model/Namespace.js";

/**
 * Options for the external generation extension: emit the requested
 * namespace(s) plus their transitive dependency closure as self-contained,
 * inline-compilable source for use outside this monorepo.
 */
export interface ExternalGenerateOptions {
  /** npm org/scope for the generated packages, e.g. "@osdk". */
  npmOrg: string;
  /** Namespace(s) to emit; their dependency closure is pulled in automatically. */
  seedNamespaces: string[];
  /**
   * Version specifiers for the runtime deps the generated code imports. Defaults
   * to {@link DEFAULT_SHARED_DEPENDENCIES}.
   */
  sharedDependencies?: Record<string, string>;
}

/** Runtime deps the generated code imports, resolved from npm (not generated). */
export const DEFAULT_SHARED_DEPENDENCIES: Record<string, string> = {
  "@osdk/shared.client": "^1.0.1",
  "@osdk/shared.client2": "^1.0.0",
  "@osdk/shared.net.platformapi": "^1.8.0",
};

// External closures target the foundry platform's promoted version.
const PACKAGE_PREFIX = "foundry";
const ENDPOINT_VERSION = "v2";
const PACKAGE_SUBPATH = "v2";

/**
 * Generate a single namespace (and its transitive dependency closure) as
 * self-contained source. The full model is built so cross-namespace references
 * resolve, but only the closure is emitted; the empty packages the model
 * scaffolds for every other namespace are pruned. Each emitted package gets a
 * minimal `package.json` — real `@osdk/shared.*` versions, no `workspace:`
 * protocols, sls, or build scaffolding.
 *
 * Cross-namespace `@osdk/<prefix>.*` imports are resolved against the
 * co-generated local sources via the `tsconfig.paths.json` written to the
 * output root (the consumer `extends` it) — not via npm, so those deps are
 * intentionally absent from the manifests. Pruning only removes directories
 * this invocation created, so pointing `--outputDir` at an existing tree (or
 * re-running with a different `--namespace`) never deletes unrelated packages.
 */
export async function generateExternalSdk(
  ir: ApiSpec,
  outputDir: string,
  options: ExternalGenerateOptions,
): Promise<string[]> {
  const sharedDependencies = options.sharedDependencies
    ?? DEFAULT_SHARED_DEPENDENCIES;

  // Snapshot what already lives in the destination so pruning below can tell
  // "empty scaffold this run created" from "a package that was already here".
  const preExisting = await readdirSafe(outputDir);

  const model = await Model.create(ir, {
    npmOrg: options.npmOrg,
    outputDir,
    packagePrefix: PACKAGE_PREFIX,
    endpointVersion: ENDPOINT_VERSION,
    packageSubpath: PACKAGE_SUBPATH,
    deprecatedIr: undefined,
  });

  const allNamespaces = [...model.namespaces];
  const closure = computeNamespaceClosure(
    allNamespaces,
    options.seedNamespaces,
  );

  for (const ns of closure) {
    await emitNamespacePackage(ns, model, PACKAGE_SUBPATH, true);
  }

  for (const ns of closure) {
    await writeMinimalPackageJson(ns, sharedDependencies);
  }

  // Model.create scaffolds an (otherwise empty) package dir for every namespace
  // under the prefix. Remove the out-of-closure ones — but only those this run
  // created; anything that pre-existed (a prior run's packages, a hand-authored
  // tree) is left untouched.
  for (const ns of allNamespaces) {
    if (closure.has(ns)) continue;
    if (preExisting.has(path.basename(ns.paths.packagePath))) continue;
    await fs.rm(ns.paths.packagePath, { recursive: true, force: true });
  }

  await writeTsconfigPaths(outputDir, [...closure], PACKAGE_SUBPATH);

  return [...closure].map(ns => ns.paths.packagePath);
}

/** Top-level entry names in `dir`, or an empty set if `dir` does not exist. */
async function readdirSafe(dir: string): Promise<Set<string>> {
  try {
    return new Set(await fs.readdir(dir));
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return new Set();
    throw e;
  }
}

/**
 * Emit a `tsconfig.paths.json` at the output root that the consumer `extends`
 * to resolve each co-generated `@osdk/<prefix>.*` import (and its subpaths) to
 * the local source. `baseUrl` is the output root, so the mappings resolve
 * relative to this file wherever the consumer's own tsconfig lives.
 */
async function writeTsconfigPaths(
  outputDir: string,
  closure: Namespace[],
  packageSubpath: string,
): Promise<void> {
  const paths: Record<string, string[]> = {};
  const sorted = [...closure].sort((a, b) =>
    a.dependencyImportPath.localeCompare(b.dependencyImportPath)
  );
  for (const ns of sorted) {
    const dirName = path.basename(ns.paths.packagePath); // e.g. foundry.pack
    const importPath = ns.dependencyImportPath; // e.g. @osdk/foundry.pack
    // Root export, and the promoted/unversioned surface: bare subpaths like
    // `@osdk/foundry.pack/Document` and `@osdk/foundry.pack/v2` resolve into
    // src/public (the latter to src/public/v2.ts).
    paths[importPath] = [`./${dirName}/src/index.ts`];
    // Versioned subpaths like `@osdk/foundry.pack/v2/Document` must resolve into
    // src/<subpath>/public, not src/public — mirror the package.json
    // `./<subpath>/*` export. This more specific pattern (longer literal prefix)
    // wins over the `/*` pattern below in tsc path resolution.
    paths[`${importPath}/${packageSubpath}/*`] = [
      `./${dirName}/src/${packageSubpath}/public/*.ts`,
    ];
    paths[`${importPath}/*`] = [`./${dirName}/src/public/*.ts`];
  }
  const tsconfig = { compilerOptions: { baseUrl: ".", paths } };
  await fs.writeFile(
    path.join(outputDir, "tsconfig.paths.json"),
    JSON.stringify(tsconfig, undefined, 2) + "\n",
  );
}

async function writeMinimalPackageJson(
  ns: Namespace,
  sharedDependencies: Record<string, string>,
): Promise<void> {
  const packageJsonPath = path.join(ns.paths.packagePath, "package.json");
  const existing = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
  const minimal = {
    name: existing.name,
    version: existing.version ?? "0.0.0",
    type: "module",
    dependencies: { ...sharedDependencies },
  };
  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(minimal, undefined, 2) + "\n",
  );
}

/** All other namespaces whose components this namespace references. */
function referencedNamespaces(ns: Namespace): Set<Namespace> {
  const deps = new Set<Namespace>();
  for (const r of ns.resources) {
    for (const op of r.operations) {
      for (const rc of op.referencedComponents) deps.add(rc.namespace);
    }
  }
  for (const comp of ns.components) {
    for (const rc of comp.referencedComponents) deps.add(rc.namespace);
  }
  for (const err of ns.errors) {
    for (const rc of err.referencedComponents) deps.add(rc.namespace);
  }
  deps.delete(ns);
  return deps;
}

/**
 * Transitive dependency closure of the seed namespaces: the seeds plus every
 * namespace reachable by following cross-namespace component references.
 */
function computeNamespaceClosure(
  all: Namespace[],
  seedNames: string[],
): Set<Namespace> {
  const byName = new Map(all.map(ns => [ns.name, ns]));
  const closure = new Set<Namespace>();
  const queue: Namespace[] = [];

  for (const name of seedNames) {
    const ns = byName.get(name);
    if (ns == null) {
      throw new Error(
        `Namespace "${name}" not found in the IR. Available: ${
          all.map(n => n.name).filter(n => n.length > 0).sort().join(", ")
        }`,
      );
    }
    if (!closure.has(ns)) {
      closure.add(ns);
      queue.push(ns);
    }
  }

  while (queue.length > 0) {
    const ns = queue.shift()!;
    for (const dep of referencedNamespaces(ns)) {
      if (!closure.has(dep)) {
        closure.add(dep);
        queue.push(dep);
      }
    }
  }

  return closure;
}
