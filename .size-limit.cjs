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

const { existsSync, readFileSync, readdirSync } = require("fs");
const { join } = require("path");

const packagesDirectory = join(__dirname, "packages");

module.exports = readdirSync(packagesDirectory, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .flatMap(entry => {
    const packageDirectory = join(packagesDirectory, entry.name);
    const packageJsonPath = join(packageDirectory, "package.json");
    if (!existsSync(packageJsonPath)) return [];
    const packageJson = JSON.parse(
      readFileSync(packageJsonPath, "utf8"),
    );
    if (!/^@osdk\/(foundry|gotham)\./.test(packageJson.name)) return [];

    return Object.entries(packageJson.exports ?? {}).flatMap(
      ([exportPath, exportConfig]) => {
        if (exportPath.includes("*")) return [];
        const importPath = typeof exportConfig.import === "string"
          ? exportConfig.import
          : exportConfig.import?.default;
        if (importPath == null) return [];

        return [{
          name: exportPath === "."
            ? packageJson.name
            : `${packageJson.name}/${exportPath.slice(2)}`,
          path: join("packages", entry.name, importPath),
          import: "*",
        }];
      },
    );
  });
