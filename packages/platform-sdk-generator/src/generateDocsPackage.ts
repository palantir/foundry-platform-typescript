/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import { ensurePackageSetup } from "./generatePlatformSdkv2.js";
import type { ApiSpec } from "./ir/index.js";

const PACKAGE_NAME = "platform-docs-spec";

export async function generateDocsPackage(ir: ApiSpec, packagesDir: string) {
  const outputDir = path.join(packagesDir, PACKAGE_NAME);
  await ensurePackageSetup(outputDir, PACKAGE_NAME, []);

  await fs.writeFile(
    path.join(outputDir, "src", "spec.ts"),
    `${copyright}
        
        export const PLATFORM_API_IR: any = ${JSON.stringify(ir, null, 2)}`,
  );

  await fs.writeFile(
    path.join(outputDir, "src", "index.ts"),
    `${copyright}
        
        export { PLATFORM_API_IR } from "./spec.js";`,
  );
}
