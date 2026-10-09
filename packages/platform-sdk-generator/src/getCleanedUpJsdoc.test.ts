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

import ts from "typescript";
import { describe, expect, it } from "vitest";
import { getCleanedUpJsdoc } from "./getCleanedUpJsdoc.js";

describe(getCleanedUpJsdoc, () => {
  it("escapes comment terminators in inline code and code blocks", async () => {
    const result = await getCleanedUpJsdoc({
      description:
        "An unsatisfiable range returns `Content-Range: bytes */<total length>`.\n\n```\nContent-Range: bytes */100\n```",
    });

    expect(result).toBe([
      "An unsatisfiable range returns `Content-Range: bytes *&#47;<total length>`.",
      " * ",
      " * ```",
      " * Content-Range: bytes *&#47;100",
      " * ```",
      " * ",
    ].join("\n"));

    const { diagnostics } = ts.transpileModule(
      `/**\n * ${result}\n */\nexport const value: number = 1;`,
      { reportDiagnostics: true },
    );
    expect(diagnostics).toEqual([]);
  });

  it("replaces absolute urls without a hostname with a palantir.com hostname", async () => {
    const result = await getCleanedUpJsdoc({
      description: "This is a [link](/docs/page) to a page.",
    });
    expect(result).toMatchInlineSnapshot(`
      "This is a [link](https://www.palantir.com/docs/page) to a page.
       * "
    `);
  });

  it("does not modify relative urls", async () => {
    const result = await getCleanedUpJsdoc({
      description: "This is a [link](./page) to a page.",
    });
    expect(result).toMatchInlineSnapshot(`
      "This is a [link](./page) to a page.
       * "
    `);
  });

  it("does not modify urls with a hostname", async () => {
    const result = await getCleanedUpJsdoc({
      description: "This is a [link](https://example.com/page) to a page.",
    });
    expect(result).toMatchInlineSnapshot(`
      "This is a [link](https://example.com/page) to a page.
       * "
    `);
  });
});
