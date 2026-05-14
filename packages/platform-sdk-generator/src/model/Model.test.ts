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

import type * as ir from "@osdk/docs-spec-platform";
import { describe, expect, it } from "vitest";
import { unsupportedResponseTypeVariant } from "./Model.js";

function operationWithResponseBody(body: unknown): ir.Operation {
  return { http: { response: { body } } } as unknown as ir.Operation;
}

describe(unsupportedResponseTypeVariant, () => {
  it("returns undefined for an ok body with a binary response type", () => {
    const so = operationWithResponseBody({
      type: "ok",
      ok: {
        responseType: { type: "binary", binary: { mediaType: "*/*" } },
        required: true,
      },
    });
    expect(unsupportedResponseTypeVariant(so)).toBeUndefined();
  });

  it("returns undefined for an ok body with a component response type", () => {
    const so = operationWithResponseBody({
      type: "ok",
      ok: {
        responseType: {
          type: "component",
          component: { mediaType: "application/json" },
        },
        required: true,
      },
    });
    expect(unsupportedResponseTypeVariant(so)).toBeUndefined();
  });

  it("returns the variant name for an unknown ok response type", () => {
    const so = operationWithResponseBody({
      type: "ok",
      ok: {
        responseType: { type: "sse", sse: {} },
        required: true,
      },
    });
    expect(unsupportedResponseTypeVariant(so)).toBe("sse");
  });

  it("returns the variant name for any future unknown variant", () => {
    const so = operationWithResponseBody({
      type: "ok",
      ok: {
        responseType: { type: "websocket", websocket: {} },
        required: true,
      },
    });
    expect(unsupportedResponseTypeVariant(so)).toBe("websocket");
  });

  it("returns undefined for a noContent body", () => {
    const so = operationWithResponseBody({
      type: "noContent",
      noContent: {},
    });
    expect(unsupportedResponseTypeVariant(so)).toBeUndefined();
  });

  it("returns undefined for an accepted body", () => {
    const so = operationWithResponseBody({
      type: "accepted",
      accepted: {
        responseType: {
          type: "component",
          component: { mediaType: "application/json" },
        },
      },
    });
    expect(unsupportedResponseTypeVariant(so)).toBeUndefined();
  });
});
