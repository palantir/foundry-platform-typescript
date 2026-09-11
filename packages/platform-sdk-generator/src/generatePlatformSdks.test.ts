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
import { generatePlatformSdkVersions } from "./generatePlatformSdks.js";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map(directory =>
      fs.rm(directory, { recursive: true, force: true })
    ),
  );
});

describe(generatePlatformSdkVersions, () => {
  it.each([
    ["foundry", "v2", "v2"],
    ["foundry", "v3", "unstable_do_not_use_v3"],
  ])("generates %s %s resource imports and arguments in URL order", async (
    packagePrefix,
    version,
    subpath,
  ) => {
    const outputDirectory = await fs.mkdtemp(
      path.join(os.tmpdir(), "platform-sdk-generator-"),
    );
    temporaryDirectories.push(outputDirectory);
    const ir: ApiSpec = {
      irVersion: "v2.1",
      namespaces: [{
        name: "Endpoints",
        version,
        components: [],
        errors: [],
        resources: [{
          component: { namespaceName: "Endpoints", localName: "Endpoint" },
          pluralName: "Endpoints",
          documentation: {},
          operations: [{
            name: "getEndpoint",
            verb: "get",
            auth: { includeAuthHeader: true, scopes: [], expandedScopes: [] },
            auditCategories: [],
            releaseStage: "STABLE",
            throwableErrors: [],
            http: {
              httpMethod: "GET",
              path: `/${version}/parents/{parentId}/children/{childId}`,
              parameters: ["childId", "parentId"].map(name => ({
                name,
                inputType: "PATH",
                type: {
                  type: {
                    type: "builtin",
                    builtin: { type: "string", string: {} },
                  },
                  safety: "SAFE",
                },
              })),
              response: {
                code: "204",
                body: { type: "noContent", noContent: {} },
              },
            },
          }],
        }],
      }],
    };

    await generatePlatformSdkVersions(ir, outputDirectory, packagePrefix);

    const packageDirectory = path.join(
      outputDirectory,
      `${packagePrefix}.endpoints`,
    );
    const resource = await fs.readFile(
      path.join(packageDirectory, "src", subpath, "public", "Endpoint.ts"),
      "utf8",
    );
    expect(resource).toMatch(/parentId: string,\s*childId: string/);
    const packageJson = JSON.parse(
      await fs.readFile(
        path.join(packageDirectory, "package.json"),
        "utf8",
      ),
    );
    expect(packageJson.exports[`./${subpath}`]).toBeUndefined();
    expect(packageJson.exports[`./${subpath}/*`]).toEqual({
      browser: `./build/browser/${subpath}/public/*.js`,
      import: `./build/esm/${subpath}/public/*.js`,
      default: `./build/esm/${subpath}/public/*.js`,
    });
  });

  it("rejects v3 references to v2-only components", async () => {
    const outputDirectory = await fs.mkdtemp(
      path.join(os.tmpdir(), "platform-sdk-generator-"),
    );
    temporaryDirectories.push(outputDirectory);
    const ir: ApiSpec = {
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
          name: "Ontologies",
          version: "v3",
          resources: [],
          errors: [],
          components: [{
            locator: { namespaceName: "Ontologies", localName: "ObjectSet" },
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
      ],
    };

    await expect(generatePlatformSdkVersions(
      ir,
      outputDirectory,
      "foundry",
    )).rejects.toThrow("Component Identifier not found in Core");
  });
});
