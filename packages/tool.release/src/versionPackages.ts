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

import { exec } from "@actions/exec";
import applyReleasePlan from "@changesets/apply-release-plan";
import assembleReleasePlan from "@changesets/assemble-release-plan";
import { read as readChangesetConfig } from "@changesets/config";
import { getCurrentCommitId } from "@changesets/git";
import { readPreState } from "@changesets/pre";
import readChangesets from "@changesets/read";
import type { Config, PreState } from "@changesets/types";
import { getPackages } from "@manypkg/get-packages";
import { consola } from "consola";
import { pathToFileURL } from "node:url";
import yargs from "yargs";
import { mutateReleasePlan } from "./mutateReleasePlan.js";

export interface VersionPackagesOptions {
  cwd?: string;
  releaseType: "patch" | "main";
  commit?: boolean;
  snapshot?: string | boolean;
}

export interface VersionPackagesResult {
  touchedFiles: string[];
  preState: PreState | undefined;
}

export async function versionPackages({
  cwd = process.cwd(),
  releaseType,
  commit = false,
  snapshot,
}: VersionPackagesOptions): Promise<VersionPackagesResult> {
  const packages = await getPackages(cwd);
  const config = await readChangesetConfig(cwd, packages);

  const [changesets, preState] = await Promise.all([
    readChangesets(cwd),
    readPreState(cwd),
  ]);

  const releaseConfig: Config = {
    ...config,
    commit: snapshot || !commit ? false : config.commit,
    changelog: ["@changesets/changelog-git", null],
  };

  const releasePlan = assembleReleasePlan(
    changesets,
    packages,
    releaseConfig,
    preState,
    snapshot
      ? {
        tag: snapshot === true ? undefined : snapshot,
        commit: config.snapshot.prereleaseTemplate?.includes("{commit}")
          ? await getCurrentCommitId({ cwd })
          : undefined,
      }
      : undefined,
  );

  mutateReleasePlan(releasePlan, releaseType);

  const touchedFiles = await applyReleasePlan(
    releasePlan,
    packages,
    releaseConfig,
    snapshot,
  );

  if (touchedFiles.length > 0) {
    await exec("pnpm", ["run", "postVersionCmd"], { cwd });
  }

  return { touchedFiles, preState };
}

if (
  process.argv[1] != null
  && import.meta.url === pathToFileURL(process.argv[1]).href
) {
  void (async () => {
    const args = await yargs(process.argv.slice(2))
      .options({
        cwd: { type: "string", description: "Change working directory" },
        releaseType: {
          choices: ["patch", "main"] as const,
          default: "main" as const,
          description:
            "\"main\" promotes patch changesets to minor bumps, \"patch\" keeps them as patches",
        },
      })
      .parseAsync();

    const { touchedFiles } = await versionPackages({
      cwd: args.cwd ?? process.cwd(),
      releaseType: args.releaseType,
    });

    consola.info(
      touchedFiles.length === 0
        ? "No changesets to apply; versions unchanged."
        : `Versioned packages; touched ${touchedFiles.length} file(s).`,
    );
  })().catch((err) => {
    consola.error(err);
    process.exit(1);
  });
}
