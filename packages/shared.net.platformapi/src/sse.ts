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
import { EventSourceParserStream } from "eventsource-parser/stream";

const MAX_BUFFER_SIZE = 1024 * 1024;

export async function* sseStream<T>(
  response: Response,
): AsyncGenerator<T, void, void> {
  if (!response.body) {
    throw new UnknownError(
      "Expected a text/event-stream body, but the response had none",
      "UNKNOWN",
      undefined,
      response.status,
    );
  }

  const stream = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(
      new EventSourceParserStream({
        maxBufferSize: MAX_BUFFER_SIZE,
        onError: "terminate",
      }),
    );

  for await (const value of stream) {
    if (value.data === "") continue;

    let data: any;
    try {
      data = JSON.parse(value.data);
    } catch (e) {
      throw new UnknownError(
        `Unable to parse event data as JSON: ${truncate(value.data)}`,
        "UNKNOWN",
        e instanceof Error ? e : undefined,
        response.status,
      );
    }

    if (data?.type === "error") {
      throw new PalantirApiError(
        data.errorDescription ?? data.errorName
          ?? "Streaming request failed",
        data.errorName,
        data.errorCode,
        data.errorDescription,
        response.status,
        data.errorInstanceId,
        data.parameters,
      );
    }

    yield data;
  }
}

function truncate(data: string): string {
  return data.length > 512 ? `${data.slice(0, 512)}…` : data;
}
