/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { nodeResolve } from "@rollup/plugin-node-resolve";
import assert from "node:assert/strict";
import path from "node:path";
import type { OutputChunk, Plugin } from "rollup";
import { rollup } from "rollup";
import { describe, it } from "vitest";

const ENTRY_ID = "\0platform-sdk-tree-shaking-entry";
const modulePaths = [path.resolve("node_modules")];
const endpointsBuildPath = "/packages/foundry.endpoints/build/esm";
const coreBuildPath = "/packages/foundry.core/build/esm";

describe("Platform SDK package bundling", () => {
  it("tree-shakes unused v3 resources", async () => {
    const { chunk, packageModules } = await bundleConsumer(
      `
        import { EndpointSets } from "@osdk/foundry.endpoints/unstable_do_not_use_v3";
        export const get = EndpointSets.get;
      `,
      endpointsBuildPath,
    );

    const renderedPackageModules = Object.keys(chunk.modules)
      .map(normalizePath)
      .filter(moduleId => moduleId.includes(endpointsBuildPath))
      .map(moduleId => moduleId.slice(moduleId.indexOf(endpointsBuildPath)));
    assert.deepEqual(renderedPackageModules, [
      `${endpointsBuildPath}/unstable_do_not_use_v3/public/EndpointSet.js`,
    ]);
    assert(packageModules.size > 0);
    assert(chunk.code.includes("/v3/platform/endpointSets/{0}"));
    assert(!chunk.code.includes("/v2/platform/"));
  });

  it("does not resolve v2 modules from a v3 subpath", async () => {
    const { packageModules } = await bundleConsumer(
      `
        import * as Core from "@osdk/foundry.core/unstable_do_not_use_v3";
        export { Core };
      `,
      coreBuildPath,
    );

    const moduleIds = [...packageModules];
    assert(moduleIds.some(moduleId =>
      moduleId.endsWith(
        `${coreBuildPath}/public/unstable_do_not_use_v3.js`,
      )
    ));
    assert(
      moduleIds.some(moduleId =>
        moduleId.endsWith(`${coreBuildPath}/unstable_do_not_use_v3/index.js`)
      ),
    );
    assert(
      !moduleIds.some(moduleId =>
        moduleId.includes(`${coreBuildPath}/v2/`)
        || moduleId.endsWith(`${coreBuildPath}/public/v2.js`)
      ),
    );
  });
});

async function bundleConsumer(
  source: string,
  packageBuildPath: string,
): Promise<{ chunk: OutputChunk; packageModules: Set<string> }> {
  const packageModules = new Set<string>();
  const bundle = await rollup({
    input: ENTRY_ID,
    plugins: [
      consumerEntry(source),
      nodeResolve({ modulePaths }),
      capturePackageModules(packageBuildPath, packageModules),
    ],
    treeshake: true,
  });

  try {
    const output = await bundle.generate({ format: "esm" });
    const chunks = output.output.filter(
      (entry): entry is OutputChunk => entry.type === "chunk",
    );
    assert.equal(chunks.length, 1);
    return { chunk: chunks[0], packageModules };
  } finally {
    await bundle.close();
  }
}

function consumerEntry(source: string): Plugin {
  return {
    name: "platform-sdk-tree-shaking-entry",
    resolveId(importSource) {
      return importSource === ENTRY_ID ? ENTRY_ID : null;
    },
    load(id) {
      if (id !== ENTRY_ID) return null;
      return source;
    },
  };
}

function capturePackageModules(
  packageBuildPath: string,
  packageModules: Set<string>,
): Plugin {
  return {
    name: "capture-platform-sdk-modules",
    moduleParsed(moduleInfo) {
      const moduleId = normalizePath(moduleInfo.id);
      if (moduleId.includes(packageBuildPath)) {
        packageModules.add(moduleId);
      }
    },
  };
}

function normalizePath(value: string): string {
  return value.split(path.sep).join("/");
}
