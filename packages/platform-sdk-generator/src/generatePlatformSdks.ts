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
import { generateImports, SKIP } from "./generateImports.js";
import { writeResource2 } from "./generateResource2.js";
import type { Component } from "./model/Component.js";
import { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import { PLATFORM_SDK_CONFIG } from "./PlatformSdkConfig.js";
import { addAll } from "./util/addAll.js";
import { fileExists } from "./util/fileExists.js";
import { writeCode } from "./writeCode.js";

interface PlatformSdkGeneration {
  ir: ApiSpec;
  endpointVersion: string;
  deprecatedIr?: ApiSpec;
  packageSubpath?: string;
}

export async function generatePlatformSdks(
  ir: ApiSpec,
  outputDir: string,
  deprecatedIrs: readonly ApiSpec[],
): Promise<string[]> {
  const packageDirectories = new Set<string>();
  for (const packagePrefix of Object.keys(PLATFORM_SDK_CONFIG)) {
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
      }),
    );
  const rootGenerations = generations.filter(generation =>
    generation.packageSubpath == null
  );
  if (rootGenerations.length > 1) {
    throw new Error("Only one generation can target the package root.");
  }

  const packageSubpaths = generations.flatMap(generation =>
    generation.packageSubpath == null ? [] : [generation.packageSubpath]
  );
  if (new Set(packageSubpaths).size !== packageSubpaths.length) {
    throw new Error("Package subpaths must be unique.");
  }

  const packageDirectories = new Set<string>();
  for (const generation of generations) {
    for (
      const packageDirectory of await generatePlatformSdk(
        generation.ir,
        outputDir,
        packagePrefix,
        generation.endpointVersion,
        generation.deprecatedIr,
        generation.packageSubpath,
      )
    ) {
      packageDirectories.add(packageDirectory);
    }
  }
  return [...packageDirectories];
}

export async function generatePlatformSdk(
  ir: ApiSpec,
  outputDir: string,
  packagePrefix: string,
  endpointVersion: string,
  deprecatedIr?: ApiSpec,
  packageSubpath?: string,
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

  const componentsGenerated = new Map<Namespace, string[]>();
  const errorsGenerated = new Map<Namespace, string[]>();

  // We need to make sure the components are all populated before we generate the resources
  for (const ns of model.namespaces) {
    ns.components.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
    ns.errors.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
    componentsGenerated.set(
      ns,
      await generateComponents(ns, ns.paths.srcDir),
    );
    errorsGenerated.set(
      ns,
      await generateErrors(ns, ns.paths.srcDir),
    );
  }

  // Now we can generate the resources
  for (const ns of model.namespaces) {
    for (const r of ns.resources) {
      const sourceFilePath = path.join(
        ns.paths.resourcesDir,
        `${r.component}.ts`,
      );
      await writeResource2(ns, r, sourceFilePath, model);
    }
  }

  // create the package root file
  for (const ns of model.namespaces) {
    let nsIndexTsContents = `${copyright}\n`;

    for (const r of ns.resources) {
      const resourceDirRelToSrc = "./" // path.join() will strip a single period w do it by hand
        + path.relative(
          ns.paths.srcDir,
          ns.paths.resourcesDir,
        ).split(path.sep).join("/");

      const resourceName = r.pluralName;
      if (componentsGenerated.get(ns)!.some(c => c === resourceName)) {
        throw new Error(
          `Even the duplicated components aren't unique: ${resourceName}`,
        );
      }

      // path utilities are bad for urls like things because they strip the leading period
      nsIndexTsContents +=
        `export * as ${resourceName} from "${resourceDirRelToSrc}/${r.component}.js";\n`;
    }

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
      [...deps].map(n => n.dependencyPackageName).filter(p =>
        p !== ns.dependencyPackageName
      ),
    );

    nsIndexTsContents += `export type {${
      componentsGenerated.get(ns)?.sort().join(",\n")
    }} from "./_components.js";\n`;
    nsIndexTsContents += `export type {${
      errorsGenerated.get(ns)?.sort().join(",\n")
    }} from "./_errors.js";\n`;
    await writeCode(
      path.join(ns.paths.srcDir, "index.ts"),
      nsIndexTsContents,
    );
  }

  if (packageSubpath != null) {
    for (const ns of model.namespaces) {
      await fs.mkdir(path.join(ns.paths.packagePath, "src", "public"), {
        recursive: true,
      });
      const rootIndexPath = path.join(ns.paths.packagePath, "src", "index.ts");
      if (!await fileExists(rootIndexPath)) {
        await writeCode(rootIndexPath, `${copyright}\n\nexport {};\n`);
      }
      await writeCode(
        path.join(
          ns.paths.packagePath,
          "src",
          "public",
          `${packageSubpath}.ts`,
        ),
        `${copyright}\n\nexport * from "../${packageSubpath}/index.js";\n`,
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

    return [...model.namespaces].map(ns => ns.paths.packagePath);
  }

  // finally create the re-export package
  let rootIndexTsContents = `${copyright}\n\n`;
  for (const ns of model.namespaces) {
    if (ns.name === "") {
      rootIndexTsContents += `export * from "${ns.packageName}";\n`;
    } else {
      rootIndexTsContents +=
        `export * as ${ns.name} from "${ns.packageName}";\n`;
    }
  }

  const primaryPackagePath = path.join(outputDir, packagePrefix);
  const primaryPackageName = `${npmOrg}/${packagePrefix}`;
  const megaInfo = await ensurePackageSetup(
    primaryPackagePath,
    primaryPackageName,
    [...model.namespaces].map(n => n.packageName),
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

export async function generateComponents(
  ns: Namespace,
  outputDir: string,
): Promise<string[]> {
  const referencedComponents = new Set<Component>();
  const ret = [];

  let out =
    `export type LooselyBrandedString<T extends string> = string & {__LOOSE_BRAND?: T };
      `;

  for (const component of ns.components) {
    out += component.getDeclaration(ns.name);
    ret.push(component.name === "Record" ? "_Record" : component.name);

    addAll(referencedComponents, component.referencedComponents);
  }

  const imports = generateImports(referencedComponents, new Map([[ns, SKIP]]));

  await writeCode(
    path.join(outputDir, "_components.ts"),
    `${copyright}
    
    ${imports}

  ${out}`,
  );

  return ret;
}

export async function generateErrors(
  ns: Namespace,
  outputDir: string,
): Promise<string[]> {
  const referencedComponents = new Set<Component>();
  const ret = [];

  let out =
    `export type LooselyBrandedString<T extends string> = string & {__LOOSE_BRAND?: T };
      `;

  for (const error of ns.errors) {
    out += error.getDeclaration(ns.name);
    ret.push(error.name);

    addAll(referencedComponents, error.referencedComponents);
  }

  const imports = generateImports(referencedComponents, new Map([[ns, SKIP]]));

  await writeCode(
    path.join(outputDir, "_errors.ts"),
    `${copyright}
    
    ${imports}

  ${out}`,
  );

  return ret;
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
  packageJson.exports[`./${packageSubpath}`] = {
    browser: `./build/browser/public/${packageSubpath}.js`,
    import: `./build/esm/public/${packageSubpath}.js`,
    default: `./build/esm/public/${packageSubpath}.js`,
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
