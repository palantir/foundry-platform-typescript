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

import { describe, expect, it, vi } from "vitest";
import {
  foundryPlatformFetch,
  type FoundryPlatformMethod,
  parseUrl,
} from "./foundryPlatformFetch.js";

// cspell:words openxmlformats officedocument wordprocessingml spreadsheetml presentationml

describe("request content types", () => {
  it.each([
    [
      "document.docx",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    [
      "workbook.xlsx",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
    ["workbook.xls", "application/vnd.ms-excel"],
    ["document.pdf", "application/pdf"],
    [
      "slides.pptx",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ],
    ["image.png", "image/png"],
    ["image.jpg", "image/jpeg"],
    ["image.svg", "image/svg+xml"],
    ["table.csv", "text/csv"],
    ["document.txt", "text/plain"],
    ["document.md", "text/markdown"],
    ["document.html", "text/html"],
    ["context.json", "application/json"],
    ["archive.zip", "application/zip"],
  ])("preserves the Blob content type for %s", async (filename, type) => {
    const bytes = new Uint8Array([0, 255, 80, 75, 37, 80, 68, 70]);
    const data = new Blob([bytes], { type });
    const request = await captureRequest(data, "*/*", undefined, filename);

    expect(new Headers(request.headers).get("Content-Type")).toBe(type);
    expect(request.body).toBe(data);
    expect(new Uint8Array(await data.arrayBuffer())).toEqual(bytes);
  });

  it.skipIf(typeof globalThis.File === "undefined")(
    "preserves a File's content type",
    async () => {
      const data = new File(["file contents"], "document.pdf", {
        type: "application/pdf",
      });
      const request = await captureRequest(data, "*/*");

      expect(new Headers(request.headers).get("Content-Type")).toBe(
        "application/pdf",
      );
      expect(request.body).toBe(data);
    },
  );

  it("uses octet-stream for a Blob without a content type", async () => {
    const data = new Blob(["untyped contents"]);
    const request = await captureRequest(data, "*/*");

    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/octet-stream",
    );
    expect(request.body).toBe(data);
  });

  it.each(["application/octet-stream", "application/pdf"])(
    "preserves the endpoint's concrete content type %s",
    async type => {
      const data = new Blob(["contents"], { type: "text/plain" });
      const request = await captureRequest(data, type);

      expect(new Headers(request.headers).get("Content-Type")).toBe(type);
      expect(request.body).toBe(data);
    },
  );

  it("preserves an explicit content type header override", async () => {
    const request = await captureRequest(
      new Blob(["contents"], { type: "application/pdf" }),
      "*/*",
      { "Content-Type": "application/octet-stream" },
    );

    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/octet-stream",
    );
  });

  it.each([undefined, "application/json", "application/custom+json"])(
    "preserves JSON serialization with content type %s",
    async type => {
      const data = { context: ["workbook.xlsx", "document.pdf"] };
      const request = await captureRequest(data, type);

      expect(new Headers(request.headers).get("Content-Type")).toBe(
        type ?? "application/json",
      );
      expect(request.body).toBe(JSON.stringify(data));
    },
  );
});

describe("test url parsers", () => {
  it("should work if trailing slash is not present", () => {
    const urlOnlyHostName = parseUrl(
      "https://example.domain.com",
      "/v2/ontologies/objectTypes/load",
    );

    expect(urlOnlyHostName.toString()).toEqual(
      "https://example.domain.com/api/v2/ontologies/objectTypes/load",
    );

    const urlWithLongerEntryPoint = parseUrl(
      "https://example.domain.com/otherstuff/some/stuff",
      "/v2/ontologies/objectTypes/load",
    );

    expect(urlWithLongerEntryPoint.toString()).toEqual(
      "https://example.domain.com/otherstuff/some/stuff/api/v2/ontologies/objectTypes/load",
    );
  });

  it("should work if trailing slash is present", () => {
    const urlOnlyHostName = parseUrl(
      "https://example.domain.com/",
      "/v2/ontologies/objectTypes/load",
    );

    expect(urlOnlyHostName.toString()).toEqual(
      "https://example.domain.com/api/v2/ontologies/objectTypes/load",
    );

    const urlWithLongerEntryAndSlash = parseUrl(
      "https://example.domain.com/otherstuff/some/stuff/",
      "/v2/ontologies/objectTypes/load",
    );

    expect(urlWithLongerEntryAndSlash.toString()).toEqual(
      "https://example.domain.com/otherstuff/some/stuff/api/v2/ontologies/objectTypes/load",
    );
  });
});

async function captureRequest(
  data: unknown,
  contentType?: string,
  headers?: Record<string, string>,
  filename = "context",
): Promise<RequestInit> {
  const mockFetch = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
    new Response(null, { status: 204 }),
  );
  const method: FoundryPlatformMethod<(...args: unknown[]) => Promise<void>> = [
    2,
    "/v2/mediasets/media/upload",
    7,
    contentType,
  ];
  await foundryPlatformFetch(
    {
      baseUrl: "https://example.domain.com",
      fetch: mockFetch,
      tokenProvider: async () => "token",
    },
    method,
    data,
    { filename, preview: true },
    headers,
  );

  expect(mockFetch).toHaveBeenCalledOnce();
  const [url, request] = mockFetch.mock.calls[0]!;
  expect(new URL(String(url)).searchParams.get("filename")).toBe(filename);
  expect(new URL(String(url)).searchParams.get("preview")).toBe("true");
  expect(request?.method).toBe("PUT");
  expect(new Headers(request?.headers).get("Accept")).toBe("application/json");
  return request!;
}
