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

export async function addPackagesToPackageJson(
  packageJsonPath: string,
  packagesToAdd: string[],
  section: "dependencies" | "devDependencies" = "dependencies",
): Promise<void> {
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
  Object.assign(
    packageJson[section],
    Object.fromEntries(packagesToAdd.map(a => [a, "workspace:*"])),
  );
  packageJson.dependencies["@osdk/shared.client"] = "1.0.1";
  packageJson.dependencies["@osdk/shared.client2"] = "1.0.0";
  packageJson.dependencies["@osdk/shared.net.platformapi"] = "workspace:~";
  await fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, undefined, 2),
  );
}
