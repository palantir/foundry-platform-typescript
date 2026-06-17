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

import { getExecOutput } from "@actions/exec";
import { read as readChangesetConfig } from "@changesets/config";
import type { Package } from "@manypkg/get-packages";
import { getPackages } from "@manypkg/get-packages";
import { consola } from "consola";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import yargs from "yargs";

const CHANGESET_FILE_NAME =
  `regenerate-sdk-${process.env.API_GATEWAY_VERSION}-${Date.now()}.md`;
const CHANGESET_SUMMARY =
  `Regenerate SDKs with API version ${process.env.API_GATEWAY_VERSION}`;

/**
 * Writes a single changeset bumping every package that has uncommitted changes
 * in the working tree by a patch. Intended to be run immediately after the
 * platform SDKs are regenerated so the regeneration gets released.
 *
 * @returns the path of the written changeset, or undefined if nothing changed.
 */
export async function writeRegeneratedChangeset(
  cwd: string = process.cwd(),
): Promise<string | undefined> {
  const packages = await getPackages(cwd);
  const config = await readChangesetConfig(cwd, packages);
  const ignored = new Set(config.ignore);

  const changedFiles = await getChangedFiles(cwd);

  const changedPackageNames = new Set<string>();
  for (const file of changedFiles) {
    const pkg = findPackageForFile(packages.packages, path.resolve(cwd, file));
    if (pkg != null && !ignored.has(pkg.packageJson.name)) {
      changedPackageNames.add(pkg.packageJson.name);
    }
  }

  if (changedPackageNames.size === 0) {
    consola.info("No changed packages detected; skipping changeset.");
    return undefined;
  }

  const frontmatter = [...changedPackageNames]
    .sort()
    .map((name) => `"${name}": patch`)
    .join("\n");
  const contents = `---\n${frontmatter}\n---\n\n${CHANGESET_SUMMARY}\n`;

  const changesetPath = path.join(cwd, ".changeset", CHANGESET_FILE_NAME);
  fs.writeFileSync(changesetPath, contents);

  consola.info(
    `Wrote changeset for ${changedPackageNames.size} package(s) to ${changesetPath}`,
  );
  return changesetPath;
}

async function getChangedFiles(cwd: string): Promise<string[]> {
  const { stdout } = await getExecOutput("git", ["status", "--porcelain"], {
    cwd,
    silent: true,
  });

  return stdout
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => {
      // Porcelain lines are "XY <path>"; renames are "XY <old> -> <new>".
      const withoutStatus = line.slice(3);
      const arrowIndex = withoutStatus.lastIndexOf(" -> ");
      return arrowIndex === -1
        ? withoutStatus
        : withoutStatus.slice(arrowIndex + 4);
    });
}

function findPackageForFile(
  packages: Package[],
  absFile: string,
): Package | undefined {
  let best: Package | undefined;
  for (const pkg of packages) {
    if (absFile === pkg.dir || absFile.startsWith(pkg.dir + path.sep)) {
      if (best == null || pkg.dir.length > best.dir.length) {
        best = pkg;
      }
    }
  }
  return best;
}

if (
  process.argv[1] != null
  && import.meta.url === pathToFileURL(process.argv[1]).href
) {
  void (async () => {
    const args = await yargs(process.argv.slice(2))
      .options({
        cwd: { type: "string", description: "Change working directory" },
      })
      .parseAsync();

    await writeRegeneratedChangeset(args.cwd ?? process.cwd());
  })().catch((err) => {
    consola.error(err);
    process.exit(1);
  });
}
