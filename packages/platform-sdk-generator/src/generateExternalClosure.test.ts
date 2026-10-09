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
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { ExternalGenerateOptions } from "./generatePlatformSdks.js";
import { generatePlatformSdks } from "./generatePlatformSdks.js";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map(directory =>
      fs.rm(directory, { recursive: true, force: true })
    ),
  );
});

const SHARED_DEPENDENCIES = {
  "@osdk/shared.client": "^1.0.1",
  "@osdk/shared.client2": "^1.0.0",
  "@osdk/shared.net.platformapi": "^1.8.0",
};

/**
 * Pack references Core (so Core is in Pack's closure); Datasets is unrelated
 * and must be pruned from external output.
 */
const IR: ApiSpec = {
  irVersion: "v2.1",
  namespaces: [
    {
      name: "Core",
      version: "v2",
      resources: [],
      errors: [],
      components: [{
        locator: { namespaceName: "Core", localName: "Identifier" },
        type: { type: "builtin", builtin: { type: "string", string: {} } },
        safety: "SAFE",
        documentation: {},
      }],
    },
    {
      name: "Pack",
      version: "v2",
      resources: [],
      errors: [],
      components: [{
        locator: { namespaceName: "Pack", localName: "DocumentRef" },
        type: {
          type: "reference",
          reference: {
            locator: { namespaceName: "Core", localName: "Identifier" },
          },
        },
        safety: "SAFE",
        documentation: {},
      }],
    },
    {
      name: "Datasets",
      version: "v2",
      resources: [],
      errors: [],
      components: [{
        locator: { namespaceName: "Datasets", localName: "Dataset" },
        type: { type: "builtin", builtin: { type: "string", string: {} } },
        safety: "SAFE",
        documentation: {},
      }],
    },
  ],
};

async function makeOutputDir(): Promise<string> {
  const dir = await fs.mkdtemp(
    path.join(os.tmpdir(), "platform-sdk-generator-external-"),
  );
  temporaryDirectories.push(dir);
  return dir;
}

async function pathExists(p: string): Promise<boolean> {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

function externalOptions(
  overrides: Partial<ExternalGenerateOptions> = {},
): ExternalGenerateOptions {
  return {
    npmOrg: "@osdk",
    seedNamespaces: ["Pack"],
    sharedDependencies: SHARED_DEPENDENCIES,
    ...overrides,
  };
}

describe("external dependency-closure generation", () => {
  it("emits only the seed plus its closure, prunes the rest, no mega-package", async () => {
    const out = await makeOutputDir();
    await generatePlatformSdks(IR, out, [], externalOptions());

    expect(await pathExists(path.join(out, "foundry.pack"))).toBe(true);
    expect(await pathExists(path.join(out, "foundry.core"))).toBe(true);
    // Unrelated namespace is scaffolded by the model but pruned from output.
    expect(await pathExists(path.join(out, "foundry.datasets"))).toBe(false);
    // No aggregator / docs package in external mode.
    expect(await pathExists(path.join(out, "foundry"))).toBe(false);
  });

  it("writes a minimal package.json with real runtime deps and no workspace: protocols", async () => {
    const out = await makeOutputDir();
    await generatePlatformSdks(IR, out, [], externalOptions());

    const raw = await fs.readFile(
      path.join(out, "foundry.pack", "package.json"),
      "utf8",
    );
    expect(raw).not.toContain("workspace:");

    const pkg = JSON.parse(raw);
    expect(pkg.name).toBe("@osdk/foundry.pack");
    expect(pkg.type).toBe("module");
    expect(pkg.dependencies).toEqual(SHARED_DEPENDENCIES);
    // No internal monorepo scaffolding in external output.
    expect(pkg.sls).toBeUndefined();
    expect(pkg.scripts).toBeUndefined();
    expect(pkg.devDependencies).toBeUndefined();
  });

  it("generated code references only namespaces inside the closure", async () => {
    const out = await makeOutputDir();
    await generatePlatformSdks(IR, out, [], externalOptions());

    const components = await fs.readFile(
      path.join(out, "foundry.pack", "src", "v2", "_components.ts"),
      "utf8",
    );
    // Cross-namespace reference resolves to the co-generated Core.
    expect(components).toContain("@osdk/foundry.core");
    // Nothing points at the pruned namespace.
    expect(components).not.toContain("foundry.datasets");
  });

  it("honors a custom npm org in the generated package name", async () => {
    const out = await makeOutputDir();
    await generatePlatformSdks(
      IR,
      out,
      [],
      externalOptions({ npmOrg: "@acme" }),
    );

    const pkg = JSON.parse(
      await fs.readFile(
        path.join(out, "foundry.pack", "package.json"),
        "utf8",
      ),
    );
    expect(pkg.name).toBe("@acme/foundry.pack");
  });

  it("throws a clear error for an unknown seed namespace", async () => {
    const out = await makeOutputDir();
    await expect(
      generatePlatformSdks(
        IR,
        out,
        [],
        externalOptions({
          seedNamespaces: ["NotARealNamespace"],
        }),
      ),
    ).rejects.toThrow(/NotARealNamespace/);
  });
});
