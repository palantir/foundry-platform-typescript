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
import { addPackagesToPackageJson } from "./addPackagesToPackageJson.js";
import { copyright } from "./copyright.js";
import { emitNamespacePackage } from "./emitNamespacePackage.js";
import { generateDocsPackage } from "./generateDocsPackage.js";
import { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import { PLATFORM_SDK_CONFIG } from "./PlatformSdkConfig.js";
import { fileExists } from "./util/fileExists.js";
import { writeCode } from "./writeCode.js";

interface PlatformSdkGeneration {
  ir: ApiSpec;
  endpointVersion: string;
  deprecatedIr?: ApiSpec;
  packageSubpath: string;
  isPromoted: boolean;
}

export async function generatePlatformSdks(
  ir: ApiSpec,
  outputDir: string,
  deprecatedIrs: readonly ApiSpec[],
): Promise<string[]> {
  const packageDirectories = new Set<string>();
  for (
    const [packagePrefix, config] of Object.entries(PLATFORM_SDK_CONFIG)
  ) {
    for (
      const packageDirectory of await generatePlatformSdkVersions(
        ir,
        outputDir,
        packagePrefix,
        deprecatedIrs,
      )
    ) {
      packageDirectories.add(packageDirectory);
    }
    if (config.docs) {
      packageDirectories.add(await generateDocsPackage(ir, outputDir));
    }
  }
  return [...packageDirectories];
}

export async function generatePlatformSdkVersions(
  ir: ApiSpec,
  outputDir: string,
  packagePrefix: string,
  deprecatedIrs: readonly ApiSpec[] = [],
): Promise<string[]> {
  const versionConfig = PLATFORM_SDK_CONFIG[packagePrefix]?.versions;
  if (versionConfig == null) {
    throw new Error(`No version configuration found for ${packagePrefix}.`);
  }
  const generations: PlatformSdkGeneration[] = Object.entries(versionConfig)
    .map(
      ([endpointVersion, config]) => ({
        ir,
        endpointVersion,
        packageSubpath: config.packageSubpath,
        deprecatedIr: config.includeDeprecatedIr
          ? deprecatedIrs.find(deprecatedIr =>
            deprecatedIr.namespaces.some(namespace =>
              namespace.name === "Core"
              && namespace.version === endpointVersion
            )
          )
          : undefined,
        isPromoted: config.isPromoted,
      }),
    );
  const defaultExports = generations.filter(generation =>
    generation.isPromoted
  );
  if (defaultExports.length !== 1) {
    throw new Error("Exactly one generation must be promoted.");
  }

  const packageDirectories: string[] = [];
  for (const generation of generations) {
    for (
      const packageDirectory of await generatePlatformSdk(
        generation.ir,
        outputDir,
        packagePrefix,
        generation.endpointVersion,
        generation.deprecatedIr,
        generation.packageSubpath,
        generation.isPromoted,
      )
    ) {
      packageDirectories.push(packageDirectory);
    }
  }
  return packageDirectories;
}

export async function generatePlatformSdk(
  ir: ApiSpec,
  outputDir: string,
  packagePrefix: string,
  endpointVersion: string,
  deprecatedIr: ApiSpec | undefined,
  packageSubpath: string,
  isPromoted: boolean,
): Promise<string[]> {
  const npmOrg = "@osdk";
  const model = await Model.create(ir, {
    npmOrg,
    outputDir,
    packagePrefix,
    deprecatedIr,
    endpointVersion,
    packageSubpath,
  });

  for (const ns of model.namespaces) {
    // Emit the package source (shared with external generation).
    await emitNamespacePackage(ns, model, packageSubpath, isPromoted);

    // Internal packaging: declare the cross-namespace deps as workspace
    // protocols so they resolve within this monorepo.
    const deps = new Set<Namespace>();
    for (const r of ns.resources) {
      for (const method of r.operations) {
        for (const rc of method.referencedComponents) {
          deps.add(rc.namespace);
        }
      }
    }
    for (const comp of ns.components) {
      for (const rc of comp.referencedComponents) {
        if (!comp.isDeprecated) deps.add(rc.namespace);
      }
    }
    deps.delete(ns);
    await addPackagesToPackageJson(
      path.join(ns.paths.packagePath, "package.json"),
      [...deps].map(n => n.dependencyImportPath).filter(p =>
        p !== ns.dependencyImportPath
      ),
    );

    await writeCode(
      path.join(ns.paths.packagePath, `${packageSubpath}.d.ts`),
      `${copyright}\n\nexport * from "./build/esm/public/${packageSubpath}.js";\n`,
    );
    await addPackageSubpathExport(
      path.join(ns.paths.packagePath, "package.json"),
      packageSubpath,
    );
  }

  if (!isPromoted) {
    return [...model.namespaces].map(ns => ns.paths.packagePath);
  }

  let rootIndexTsContents = `${copyright}\n\n`;
  for (const ns of model.namespaces) {
    if (ns.name === "") {
      rootIndexTsContents += `export * from "${ns.dependencyImportPath}";\n`;
    } else {
      rootIndexTsContents +=
        `export * as ${ns.name} from "${ns.dependencyImportPath}";\n`;
    }
  }

  const primaryPackagePath = path.join(outputDir, packagePrefix);
  const primaryPackageName = `${npmOrg}/${packagePrefix}`;
  const megaInfo = await ensurePackageSetup(
    primaryPackagePath,
    primaryPackageName,
    [...model.namespaces].map(n => n.dependencyImportPath),
  );

  await writeCode(
    path.join(megaInfo.srcDir, "index.ts"),
    rootIndexTsContents,
  );

  return [
    primaryPackagePath,
    ...[...model.namespaces].map(ns => ns.paths.packagePath),
  ];
}

export async function ensurePackageSetup(
  packagePath: string,
  packageName: string,
  packagesToAdd: string[],
  sourceSubdir?: string,
): Promise<{ srcDir: string; resourcesDir: string; packagePath: string }> {
  const srcDir = sourceSubdir == null
    ? path.join(packagePath, "src")
    : path.join(packagePath, "src", sourceSubdir);
  const resourcesDir = path.join(srcDir, "public");
  const packageJsonPath = path.join(packagePath, "package.json");

  await fs.mkdir(srcDir, { recursive: true });
  await fs.mkdir(resourcesDir, { recursive: true });

  if (!await fileExists(packageJsonPath)) {
    await createPackageJson(
      packagePath,
      packageName,
    );
  }

  await addPackagesToPackageJson(packageJsonPath, packagesToAdd);

  return {
    srcDir,
    resourcesDir,
    packagePath,
  };
}

async function addPackageSubpathExport(
  packageJsonPath: string,
  packageSubpath: string,
): Promise<void> {
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
  packageJson.exports[`./${packageSubpath}/*`] = {
    browser: `./build/browser/${packageSubpath}/public/*.js`,
    import: `./build/esm/${packageSubpath}/public/*.js`,
    default: `./build/esm/${packageSubpath}/public/*.js`,
  };
  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, undefined, 2),
  );
}

const BASE_PACKAGE_JSON = {
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/palantir/foundry-platform-typescript.git",
  },
  "exports": {
    ".": {
      "types": "./build/types/index.d.ts",
      "browser": "./build/js/index.browser.mjs",
      "import": "./build/js/index.mjs",
    },
    "./*": {
      "types": "./build/types/public/*.d.ts",
      "browser": "./build/js/public/*.browser.mjs",
      "import": "./build/js/public/*.mjs",
    },
  },
  "scripts": {
    "clean": "rm -rf lib dist types build tsconfig.tsbuildinfo",
    "fix-lint": "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
    "lint": "eslint . && dprint check  --config $(find-up dprint.json)",
    "transpile": "tsup",
    "typecheck": "tsc-absolute",
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.4.5",
  },
  "publishConfig": {
    "access": "public",
  },
  "files": [
    "build/types",
    "build/js",
    "CHANGELOG.md",
    "package.json",
    "templates",
    "*.d.ts",
  ],
  "module": "./build/js/index.mjs",
  "types": "./build/types/index.d.ts",
  "sls": {
    "dependencies": {
      "com.palantir.foundry.api:api-gateway": {
        "minVersion": "1.824.0",
        "maxVersion": "1.x.x",
        "optional": false,
      },
    },
  },
  "type": "module",
};

async function createPackageJson(outputDir: string, name: string) {
  await fs.writeFile(
    path.join(outputDir, "package.json"),
    JSON.stringify(
      {
        name,
        version: "0.0.0",
        ...BASE_PACKAGE_JSON,
      },
      undefined,
      2,
    ),
  );
}
