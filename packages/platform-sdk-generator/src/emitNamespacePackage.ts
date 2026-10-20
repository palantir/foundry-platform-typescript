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

import fs from "node:fs/promises";
import * as path from "node:path";
import { copyright } from "./copyright.js";
import { generateImports, SKIP } from "./generateImports.js";
import { writeResource2 } from "./generateResource2.js";
import type { Component } from "./model/Component.js";
import type { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import { addAll } from "./util/addAll.js";
import { fileExists } from "./util/fileExists.js";
import { writeCode } from "./writeCode.js";

export interface EmittedNamespace {
  componentNames: string[];
  errorNames: string[];
}

/**
 * Emits one namespace's package *source*: `_components.ts` / `_errors.ts`, the
 * resource files, the namespace `index.ts`, and the `public/` re-exports.
 *
 * Shared by internal generation (`generatePlatformSdks.ts`) and the external
 * extension (`external/generateExternalSdk.ts`). It intentionally does **not**
 * touch `package.json` — each caller owns its own packaging (internal writes
 * workspace deps + subpath exports; external writes a minimal manifest).
 */
export async function emitNamespacePackage(
  ns: Namespace,
  model: Model,
  packageSubpath: string,
  isPromoted: boolean,
): Promise<EmittedNamespace> {
  ns.components.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
  ns.errors.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  const componentNames = await generateComponents(ns, ns.paths.srcDir);
  const errorNames = await generateErrors(ns, ns.paths.srcDir);

  for (const r of ns.resources) {
    const sourceFilePath = path.join(
      ns.paths.resourcesDir,
      `${r.component}.ts`,
    );
    await writeResource2(ns, r, sourceFilePath, model);
  }

  // The namespace's src/<subpath>/index.ts: re-export resources + the generated
  // component and error types.
  let nsIndexTsContents = `${copyright}\n`;
  for (const r of ns.resources) {
    const resourceDirRelToSrc = "./" // path.join() will strip a single period w do it by hand
      + path.relative(
        ns.paths.srcDir,
        ns.paths.resourcesDir,
      ).split(path.sep).join("/");

    const resourceName = r.pluralName ?? `${r.component}Resource`;
    if (componentNames.some(c => c === resourceName)) {
      throw new Error(
        `Even the duplicated components aren't unique: ${resourceName}`,
      );
    }

    // path utilities are bad for urls like things because they strip the leading period
    nsIndexTsContents +=
      `export * as ${resourceName} from "${resourceDirRelToSrc}/${r.component}.js";\n`;
  }

  nsIndexTsContents += `export type {${
    componentNames.sort().join(",\n")
  }} from "./_components.js";\n`;
  nsIndexTsContents += `export type {${
    errorNames.sort().join(",\n")
  }} from "./_errors.js";\n`;
  await writeCode(
    path.join(ns.paths.srcDir, "index.ts"),
    nsIndexTsContents,
  );

  // The package's public surface: src/index.ts plus public/*.ts re-exports.
  const packageSrcDir = path.join(ns.paths.packagePath, "src");
  const publicDir = path.join(packageSrcDir, "public");
  await fs.mkdir(publicDir, {
    recursive: true,
  });
  const rootIndexPath = path.join(packageSrcDir, "index.ts");
  if (isPromoted) {
    await writeCode(
      rootIndexPath,
      `${copyright}\n\nexport * from "./${packageSubpath}/index.js";\n`,
    );
    for (const resource of ns.resources) {
      await writeCode(
        path.join(publicDir, `${resource.component}.ts`),
        `${copyright}\n\nexport * from "../${packageSubpath}/public/${resource.component}.js";\n`,
      );
    }
  } else if (!await fileExists(rootIndexPath)) {
    await writeCode(rootIndexPath, `${copyright}\n\nexport {};\n`);
  }
  await writeCode(
    path.join(publicDir, `${packageSubpath}.ts`),
    `${copyright}\n\nexport * from "../${packageSubpath}/index.js";\n`,
  );

  return { componentNames, errorNames };
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
