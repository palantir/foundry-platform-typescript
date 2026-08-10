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

import { describe, expect, it } from "vitest";
import {
  findVersionIncreases,
  formatVersionIncreases,
} from "./checkApiGatewayVersion.js";

const CORE = "packages/foundry.core/package.json";
const ADMIN = "packages/foundry.admin/package.json";
/** No longer regenerated, so permanently behind the rest. */
const STALE = "packages/internal.foundry.ontologiesv2/package.json";

function versions(entries: Record<string, string>): Map<string, string> {
  return new Map(Object.entries(entries));
}

describe("findVersionIncreases", () => {
  it("reports nothing when no version moves", () => {
    const base = versions({ [CORE]: "1.1734.0", [ADMIN]: "1.1734.0" });
    expect(findVersionIncreases(base, base)).toEqual([]);
  });

  it("reports nothing when the version is walked back", () => {
    // What the excavator does after a manual regeneration jumped ahead.
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.1745.0" }),
        versions({ [CORE]: "1.1734.0" }),
      ),
    ).toEqual([]);
  });

  it("reports every package whose pin increases", () => {
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.1721.0", [ADMIN]: "1.1721.0" }),
        versions({ [CORE]: "1.1745.0", [ADMIN]: "1.1745.0" }),
      ),
    ).toEqual([
      { path: ADMIN, baseVersion: "1.1721.0", headVersion: "1.1745.0" },
      { path: CORE, baseVersion: "1.1721.0", headVersion: "1.1745.0" },
    ]);
  });

  it("ignores packages that are permanently behind but unchanged", () => {
    const base = versions({ [CORE]: "1.1734.0", [STALE]: "1.1062.0" });
    const head = versions({ [CORE]: "1.1734.0", [STALE]: "1.1062.0" });
    expect(findVersionIncreases(base, head)).toEqual([]);
  });

  it("compares numerically rather than lexically", () => {
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.999.0" }),
        versions({ [CORE]: "1.1000.0" }),
      ),
    ).toHaveLength(1);
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.1000.0" }),
        versions({ [CORE]: "1.999.0" }),
      ),
    ).toEqual([]);
  });

  it("orders prerelease and snapshot suffixes below the release", () => {
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.1734.0-rc1" }),
        versions({ [CORE]: "1.1734.0" }),
      ),
    ).toHaveLength(1);
    expect(
      findVersionIncreases(
        versions({ [CORE]: "1.1734.0" }),
        versions({ [CORE]: "1.1734.0-rc1" }),
      ),
    ).toEqual([]);
  });

  it("compares a package new on the head ref against the highest base pin", () => {
    const base = versions({ [CORE]: "1.1734.0", [STALE]: "1.1062.0" });

    // A new namespace generated at the current floor is fine.
    expect(
      findVersionIncreases(
        base,
        versions({ ...Object.fromEntries(base), [ADMIN]: "1.1734.0" }),
      ),
    ).toEqual([]);

    // One generated ahead of the floor is not.
    expect(
      findVersionIncreases(
        base,
        versions({ ...Object.fromEntries(base), [ADMIN]: "1.1745.0" }),
      ),
    ).toEqual([
      { path: ADMIN, baseVersion: "1.1734.0", headVersion: "1.1745.0" },
    ]);
  });

  it("throws when the base ref pins nothing, rather than passing silently", () => {
    expect(() =>
      findVersionIncreases(versions({}), versions({ [CORE]: "1.1734.0" }))
    ).toThrow(/pins/);
  });
});

describe("formatVersionIncreases", () => {
  it("reports the range, every package, and how to override", () => {
    const message = formatVersionIncreases([
      { path: ADMIN, baseVersion: "1.1721.0", headVersion: "1.1745.0" },
      { path: CORE, baseVersion: "1.1721.0", headVersion: "1.1745.0" },
    ]);

    expect(message).toContain("from 1.1721.0 to 1.1745.0 in 2 package(s)");
    expect(message).toContain(`1.1721.0 -> 1.1745.0  ${ADMIN}`);
    expect(message).toContain(`1.1721.0 -> 1.1745.0  ${CORE}`);
    expect(message).toContain("Excavator: Upgrade API Version");
    expect(message).toContain("allow-manual-regen");
  });
});
