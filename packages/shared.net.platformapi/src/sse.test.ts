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

import { PalantirApiError, UnknownError } from "@osdk/shared.net.errors";
import { describe, expect, it } from "vitest";
import { sseStream } from "./sse.js";

function sseResponse(...chunks: string[]): Response {
  return new Response(streamOf(...chunks), {
    headers: { "content-type": "text/event-stream" },
  });
}

function streamOf(...chunks: string[]): ReadableStream<Uint8Array> {
  const enc = new TextEncoder();
  return new ReadableStream({
    start(c) {
      for (const chunk of chunks) c.enqueue(enc.encode(chunk));
      c.close();
    },
  });
}

function cancellableResponse(...chunks: string[]) {
  const enc = new TextEncoder();
  const cancelled = { value: false };
  const body = new ReadableStream({
    start(c) {
      for (const chunk of chunks) c.enqueue(enc.encode(chunk));
    },
    cancel() {
      cancelled.value = true;
    },
  });
  return {
    response: new Response(body, {
      headers: { "content-type": "text/event-stream" },
    }),
    cancelled,
  };
}

async function collect<T>(it: AsyncIterable<T>): Promise<T[]> {
  const out: T[] = [];
  for await (const x of it) out.push(x);
  return out;
}

const ERROR_EVENT =
  "data: {\"type\":\"error\",\"errorCode\":\"INVALID_ARGUMENT\","
  + "\"errorName\":\"QueryRuntimeError\","
  + "\"errorInstanceId\":\"3f8a9c7b-2e4d-4a1f-9b8c-7d6e5f4a3b2c\","
  + "\"errorDescription\":\"Division by zero\",\"parameters\":{}}\n\n";

describe("sseStream", () => {
  it("handles an empty stream", async () => {
    const response = sseResponse();

    expect(await collect(sseStream(response))).toEqual([]);
  });

  it("ignores comments", async () => {
    const response = sseResponse(
      ": keepalive\n\ndata: {\"a\":1}\n\n",
    );

    expect(await (collect(sseStream(response)))).toEqual([
      { a: 1 },
    ]);
  });

  it("emits a single data event carrying an entire result", async () => {
    const response = sseResponse(
      "data: {\"type\":\"data\",\"value\":[{\"productId\":\"SKU-001\",\"price\":29.99}]}\n\n",
    );

    expect(await collect(sseStream(response))).toEqual([
      { type: "data", value: [{ productId: "SKU-001", price: 29.99 }] },
    ]);
  });

  it("throws PalantirApiError on an in band error event", async () => {
    const response = sseResponse(ERROR_EVENT);

    // Asserted field by field: the constructor is positional, so a
    // reordered argument list is invisible to the type checker.
    const error = await collect(sseStream(response)).catch(e => e);

    expect(error).toBeInstanceOf(PalantirApiError);
    expect(error.message).toBe("Division by zero");
    expect(error.errorName).toBe("QueryRuntimeError");
    expect(error.errorCode).toBe("INVALID_ARGUMENT");
    expect(error.errorDescription).toBe("Division by zero");
    expect(error.errorInstanceId)
      .toBe("3f8a9c7b-2e4d-4a1f-9b8c-7d6e5f4a3b2c");
    expect(error.parameters).toEqual({});
    // The status line was sent long before the error event.
    expect(error.statusCode).toBe(200);
  });

  it("yields data events preceding an error before throwing", async () => {
    const response = sseResponse(
      "data: {\"type\":\"data\",\"value\":[1]}\n\n",
      "data: {\"type\":\"data\",\"value\":[2]}\n\n",
      ERROR_EVENT,
    );

    const seen: unknown[] = [];
    await expect(async () => {
      for await (const event of sseStream(response)) seen.push(event);
    }).rejects.toThrow(PalantirApiError);

    expect(seen).toEqual([
      { type: "data", value: [1] },
      { type: "data", value: [2] },
    ]);
  });

  it("falls back to errorName when errorDescription is absent", async () => {
    const response = sseResponse(
      "data: {\"type\":\"error\",\"errorCode\":\"INTERNAL\","
        + "\"errorName\":\"QueryRuntimeError\","
        + "\"errorInstanceId\":\"abc\",\"parameters\":{}}\n\n",
    );

    await expect(collect(sseStream(response)))
      .rejects.toThrow("QueryRuntimeError");
  });

  it("throws with the offending payload when data is not JSON", async () => {
    const response = sseResponse("data: <!DOCTYPE html>\n\n");

    const error = await collect(sseStream(response)).catch(e => e);

    expect(error).toBeInstanceOf(UnknownError);
    expect(error.message).toContain("<!DOCTYPE html>");
  });

  it("truncates an oversized payload in the parse error message", async () => {
    const payload = "x".repeat(600);
    const response = sseResponse(`data: ${payload}\n\n`);

    const error = await collect(sseStream(response)).catch(e => e);

    expect(error.message).toContain("…");
    expect(error.message).not.toContain(payload);
  });

  it("skips data lines with an empty payload", async () => {
    const response = sseResponse("data:\n\ndata: {\"a\":1}\n\ndata: \n\n");

    expect(await collect(sseStream(response))).toEqual([{ a: 1 }]);
  });

  it("joins a payload split across multiple data lines", async () => {
    const response = sseResponse("data: {\"a\":\ndata: 1}\n\n");

    expect(await collect(sseStream(response))).toEqual([{ a: 1 }]);
  });

  it("ignores event, id and retry fields", async () => {
    const response = sseResponse(
      "event: message\nid: 42\nretry: 1000\ndata: {\"a\":1}\n\n",
    );

    expect(await collect(sseStream(response))).toEqual([{ a: 1 }]);
  });

  it("handles CRLF line endings", async () => {
    const response = sseResponse(
      "data: {\"a\":1}\r\n\r\ndata: {\"b\":2}\r\n\r\n",
    );

    expect(await collect(sseStream(response))).toEqual([{ a: 1 }, { b: 2 }]);
  });

  it("throws when the response has no body", async () => {
    const response = new Response(null, {
      headers: { "content-type": "text/event-stream" },
    });

    await expect(collect(sseStream(response)))
      .rejects.toThrow(UnknownError);
  });

  it("cancels the underlying body when the consumer stops early", async () => {
    const { response, cancelled } = cancellableResponse(
      "data: {\"a\":1}\n\n",
      "data: {\"b\":2}\n\n",
    );

    for await (const event of sseStream(response)) {
      expect(event).toEqual({ a: 1 });
      break;
    }

    expect(cancelled.value).toBe(true);
  });

  it("cancels the underlying body when an error event throws", async () => {
    const { response, cancelled } = cancellableResponse(ERROR_EVENT);

    await expect(collect(sseStream(response)))
      .rejects.toThrow(PalantirApiError);

    expect(cancelled.value).toBe(true);
  });

  it("terminates when an event exceeds the parser buffer", async () => {
    const response = sseResponse(`data: ${"x".repeat(1024 * 1024 + 1)}`);

    await expect(collect(sseStream(response)))
      .rejects.toThrow(/exceeded max buffer size/);
  });
});
