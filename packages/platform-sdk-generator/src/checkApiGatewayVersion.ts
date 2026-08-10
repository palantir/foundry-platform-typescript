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

import { execFileSync } from "node:child_process";
import { compare, gt, valid } from "semver";

/**
 * Guards against the pinned api-gateway version being raised by hand.
 *
 * `updateSls` writes this version into every generated package from the
 * downloaded bundle's manifest. The regeneration is driven by the internal
 * `excavator/foundry-platform-typescript-sdk-upgrade` check, which pins the
 * version deployed to the STABLE_3 release channel. Running
 * `scripts/fetchAndGenerate.sh` locally without `--api-gateway-version` instead
 * resolves the latest Maven release, which is typically well ahead of STABLE_3,
 * so a manual regeneration pins a version that is not yet broadly deployed and
 * gets reverted by the next excavator run.
 *
 * Only an *increase* is a failure. Changes to the generator itself legitimately
 * touch generated sources without moving the pinned version.
 */

export const SLS_DEP_KEY = "com.palantir.foundry.api:api-gateway";
export const OVERRIDE_LABEL = "allow-manual-regen";

export interface VersionIncrease {
  /** Repository-relative path of the package.json whose pin increased. */
  path: string;
  baseVersion: string;
  headVersion: string;
}

export interface CheckResult {
  ok: boolean;
  /** Human readable explanation, ready to print. */
  message: string;
}

function git(args: readonly string[]): string {
  return execFileSync("git", [...args], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function assertRefExists(ref: string): void {
  try {
    git(["rev-parse", "--verify", "--quiet", `${ref}^{commit}`]);
  } catch {
    throw new Error(
      `Not a git ref that resolves here: ${ref}\n`
        + `In CI this usually means the base branch was not fetched.`,
    );
  }
}

/** Top level package.json files under packages/ at the given ref. */
function listPackageJsonPaths(ref: string): string[] {
  return git(["ls-tree", "-r", "--name-only", ref, "--", "packages/"])
    .split("\n")
    .filter((p) => /^packages\/[^/]+\/package\.json$/.test(p));
}

function assertValid(version: string, source: string): string {
  if (valid(version) == null) {
    throw new Error(
      `Not a valid version for "${SLS_DEP_KEY}" in ${source}: ${version}`,
    );
  }
  return version;
}

/** Map of package.json path to its pinned api-gateway version at `ref`. */
export function readMinVersions(ref: string): Map<string, string> {
  assertRefExists(ref);

  const found = new Map<string, string>();
  for (const path of listPackageJsonPaths(ref)) {
    let packageJson: any;
    try {
      packageJson = JSON.parse(git(["show", `${ref}:${path}`]));
    } catch {
      // A package.json that is unreadable or unparseable at this ref is not
      // something this check should fail on.
      continue;
    }
    const minVersion = packageJson?.sls?.dependencies?.[SLS_DEP_KEY]
      ?.minVersion;
    if (typeof minVersion === "string") {
      found.set(path, assertValid(minVersion, `${ref}:${path}`));
    }
  }
  return found;
}

function maxVersion(versions: Iterable<string>): string | undefined {
  let max: string | undefined;
  for (const version of versions) {
    if (max == null || gt(version, max)) {
      max = version;
    }
  }
  return max;
}

/**
 * Compared per package rather than repo wide, because some packages are no
 * longer regenerated and sit permanently behind the rest. Those are stable, so
 * comparing each package against itself ignores them.
 *
 * A package absent from `baseVersions` is compared against the highest version
 * pinned on the base ref, so that a newly generated namespace cannot introduce
 * a version ahead of the rest of the repository either.
 */
export function findVersionIncreases(
  baseVersions: ReadonlyMap<string, string>,
  headVersions: ReadonlyMap<string, string>,
): VersionIncrease[] {
  const baseMax = maxVersion(baseVersions.values());
  if (baseMax == null) {
    throw new Error(
      `No package.json under packages/ pins "${SLS_DEP_KEY}" on the base ref.`,
    );
  }

  const increased: VersionIncrease[] = [];
  for (const [path, headVersion] of headVersions) {
    const baseVersion = baseVersions.get(path) ?? baseMax;
    if (gt(headVersion, baseVersion)) {
      increased.push({ path, baseVersion, headVersion });
    }
  }
  return increased.sort((a, b) => (a.path < b.path ? -1 : 1));
}

export function formatVersionIncreases(
  increased: readonly VersionIncrease[],
): string {
  const highest = maxVersion(increased.map((i) => i.headVersion));
  const lowest = increased.map((i) => i.baseVersion).sort(compare)[0];

  return [
    `This PR increases the pinned ${SLS_DEP_KEY} version from ${lowest} to `
    + `${highest} in ${increased.length} package(s):`,
    "",
    ...increased.map(({ path, baseVersion, headVersion }) =>
      `  ${baseVersion} -> ${headVersion}  ${path}`
    ),
    "",
    `PRs to bump the generated SDK are automatically created with the title`,
    `"Excavator: Upgrade API Version". Platform SDKs should not be manually`,
    `regenerated.`,
    "",
    `If you did not mean to change the api-gateway version, revert the sls`,
    `blocks in the generated package.json files.`,
    "",
    `If this bump is intentional, a maintainer can add the`,
    `"${OVERRIDE_LABEL}" label to this PR to skip this check.`,
  ].join("\n");
}

export function checkApiGatewayVersion(
  base: string,
  head: string = "HEAD",
): CheckResult {
  const headVersions = readMinVersions(head);
  if (headVersions.size === 0) {
    return {
      ok: false,
      message:
        `No package.json under packages/ pins "${SLS_DEP_KEY}" at ${head}.\n`
        + `This check has probably drifted from how the sls block is written; `
        + `see updateSls.ts.`,
    };
  }

  const increased = findVersionIncreases(readMinVersions(base), headVersions);
  if (increased.length === 0) {
    return {
      ok: true,
      message:
        `No package increases its pinned ${SLS_DEP_KEY} version relative to `
        + `${base}. Highest pin is ${maxVersion(headVersions.values())}.`,
    };
  }

  return { ok: false, message: formatVersionIncreases(increased) };
}
