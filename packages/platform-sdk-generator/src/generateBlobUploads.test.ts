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

import type { ApiSpec, Parameter, RequestBody } from "@osdk/docs-spec-platform";
import { foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import ts from "typescript";
import { afterEach, describe, expect, it, vi } from "vitest";
import { generatePlatformSdkVersions } from "./generatePlatformSdks.js";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map(directory =>
      fs.rm(directory, { recursive: true, force: true })
    ),
  );
});

describe("generated Blob uploads", () => {
  it.each([
    ["application/pdf", "application/pdf"],
    ["", "application/octet-stream"],
  ])(
    "infers headers without declared header parameters for Blob type %s",
    async (type, expected) => {
      const { upload, parameters } = await generateUpload();
      const body = new Blob(["é"], { type });
      const request = await captureRequest(upload, body);

      expect(request.body).toBe(body);
      expect(new Headers(request.headers).get("Content-Type")).toBe(expected);
      expect(new Headers(request.headers).get("Content-Length")).toBe("2");
      expect(parameters).toMatch(/\$headerParams\?:/);
      expect(parameters).toMatch(/"Content-Type"\?: string/);
      expect(parameters).not.toContain("Content-Length");
    },
  );

  it("preserves explicit content types and existing optional media headers", async () => {
    const { upload, parameters } = await generateUpload({
      parameters: [parameter("attribution", "HEADER", true)],
    });
    const request = await captureRequest(
      upload,
      new Blob(["data"], { type: "text/plain" }),
      {
        attribution: "resource",
        "Content-Type": "application/pdf",
      },
    );

    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/pdf",
    );
    expect(new Headers(request.headers).get("attribution")).toBe("resource");
    expect(parameters).toMatch(/\$headerParams\?:/);
    expect(parameters).toMatch(/attribution\?:/);
  });

  it.each([
    ["image/png", undefined, "image/png"],
    ["", undefined, "application/octet-stream"],
    ["image/png", "application/pdf", "application/pdf"],
  ])(
    "keeps attachment headers optional and resolves %s with override %s",
    async (type, override, expected) => {
      const { upload, parameters } = await generateUpload({
        parameters: [
          parameter("Content-Type", "HEADER"),
          parameter("Content-Length", "HEADER"),
          parameter("attribution", "HEADER", true),
        ],
      });
      const request = await captureRequest(
        upload,
        new Blob(["data"], { type }),
        {
          "Content-Type": override,
          "Content-Length": "999",
        },
      );

      expect(new Headers(request.headers).get("Content-Type")).toBe(expected);
      expect(new Headers(request.headers).get("Content-Length")).toBe("4");
      expect(parameters).toMatch(/\$headerParams\?:/);
      expect(parameters.match(/"Content-Type"/g)).toHaveLength(1);
      expect(parameters).not.toContain("Content-Length");
    },
  );

  it("keeps unrelated required headers required", async () => {
    const { upload, parameters } = await generateUpload({
      parameters: [parameter("Token", "HEADER")],
    });
    const request = await captureRequest(upload, new Blob(["data"]), {
      Token: "read-token",
    });

    expect(new Headers(request.headers).get("Token")).toBe("read-token");
    expect(parameters).toMatch(/\$headerParams:/);
    expect(parameters).toMatch(/Token: string/);
    expect(parameters).toMatch(/"Content-Type"\?:/);
  });

  it("preserves all path arguments, query parameters, and headers", async () => {
    const { upload } = await generateUpload({
      path: "/v2/ontologies/{ontology}/objects/{objectType}/media/{property}",
      parameters: [
        parameter("property", "PATH"),
        parameter("objectType", "PATH"),
        parameter("ontology", "PATH"),
        parameter("filename", "QUERY"),
      ],
    });
    const body = new Blob(["data"], { type: "image/png" });
    const request = await captureRequest(
      upload,
      "my ontology",
      "my/object",
      "photo",
      body,
      { filename: "photo.png" },
      { "Content-Type": "image/jpeg" },
    );

    expect(request.url).toBe(
      "https://example.com/api/v2/ontologies/my%20ontology/objects/my%2Fobject/media/photo?filename=photo.png",
    );
    expect(request.body).toBe(body);
    expect(new Headers(request.headers).get("Content-Type")).toBe("image/jpeg");
    expect(new Headers(request.headers).get("Content-Length")).toBe("4");
  });

  it("supports a path argument without query parameters", async () => {
    const { upload } = await generateUpload({
      path: "/v2/uploads/{id}",
      parameters: [parameter("id", "PATH")],
    });
    const request = await captureRequest(upload, "file", new Blob(["data"]));

    expect(request.url).toBe("https://example.com/api/v2/uploads/file");
    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/octet-stream",
    );
  });

  it("supports omitted optional query and header parameters", async () => {
    const { upload } = await generateUpload({
      parameters: [parameter("filename", "QUERY", true)],
    });
    const request = await captureRequest(upload, new Blob(["data"]));

    expect(request.url).toBe("https://example.com/api/v2/uploads");
    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/octet-stream",
    );
  });

  it.each(["application/pdf", "application/octet-stream", "application/json"])(
    "preserves the endpoint's concrete media type %s",
    async mediaType => {
      const { upload } = await generateUpload({ mediaType });
      const body = new Blob(["data"], { type: "text/plain" });
      const request = await captureRequest(upload, body);

      expect(request.body).toBe(body);
      expect(new Headers(request.headers).get("Content-Type")).toBe(mediaType);
    },
  );

  it("leaves JSON request parameters and serialization unchanged", async () => {
    const { upload, parameters } = await generateUpload({
      requestBody: {
        body: {
          type: "component",
          component: {
            mediaType: "application/json",
            type: {
              type: {
                type: "builtin",
                builtin: { type: "string", string: {} },
              },
              safety: "SAFE",
            },
          },
        },
      },
    });
    const request = await captureRequest(upload, "data");

    expect(request.body).toBe("\"data\"");
    expect(new Headers(request.headers).get("Content-Type")).toBe(
      "application/json",
    );
    expect(new Headers(request.headers).has("Content-Length")).toBe(false);
    expect(parameters).not.toContain("$headerParams");
  });
});

type Upload = (...args: unknown[]) => Promise<unknown>;

async function generateUpload(options: {
  path?: string;
  parameters?: Parameter[];
  mediaType?: string;
  requestBody?: RequestBody;
} = {}): Promise<{ upload: Upload; parameters: string }> {
  const outputDirectory = await fs.mkdtemp(
    path.join(os.tmpdir(), "blob-upload-generator-"),
  );
  temporaryDirectories.push(outputDirectory);
  const ir: ApiSpec = {
    irVersion: "v2.1",
    namespaces: [{
      name: "MediaSets",
      version: "v2",
      components: [],
      errors: [],
      resources: [{
        component: { namespaceName: "MediaSets", localName: "Upload" },
        pluralName: "Uploads",
        documentation: {},
        operations: [{
          name: "upload",
          verb: "upload",
          auth: { includeAuthHeader: true, scopes: [], expandedScopes: [] },
          auditCategories: [],
          releaseStage: "STABLE",
          throwableErrors: [],
          http: {
            httpMethod: "POST",
            path: options.path ?? "/v2/uploads",
            parameters: options.parameters ?? [],
            requestBody: options.requestBody
              ?? {
                body: {
                  type: "binary",
                  binary: { mediaType: options.mediaType ?? "*/*" },
                },
              },
            response: {
              code: "204",
              body: { type: "noContent", noContent: {} },
            },
          },
        }],
      }],
    }],
  };
  await generatePlatformSdkVersions(ir, outputDirectory, "foundry");
  const source = await fs.readFile(
    path.join(outputDirectory, "foundry.mediasets/src/v2/public/Upload.ts"),
    "utf8",
  );
  const exports = {} as { upload: Upload };
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  new Function("require", "exports", outputText)((specifier: string) => {
    if (specifier !== "@osdk/shared.net.platformapi") {
      throw new Error(`Unexpected generated import: ${specifier}`);
    }
    return { foundryPlatformFetch };
  }, exports);
  const sourceFile = ts.createSourceFile(
    "Upload.ts",
    source,
    ts.ScriptTarget.Latest,
    true,
  );
  const declaration = sourceFile.statements.find(statement =>
    ts.isFunctionDeclaration(statement) && statement.name?.text === "upload"
  ) as ts.FunctionDeclaration;
  return {
    upload: exports.upload,
    parameters: declaration.parameters[1].type!.getText(sourceFile),
  };
}

function parameter(
  name: string,
  inputType: Parameter["inputType"],
  optional = false,
): Parameter {
  const type = {
    type: "builtin",
    builtin: { type: "string", string: {} },
  } as const;
  return {
    name,
    inputType,
    type: {
      type: optional ? { type: "optional", optional: { subType: type } } : type,
      safety: "SAFE",
    },
  };
}

async function captureRequest(
  upload: Upload,
  ...args: unknown[]
): Promise<RequestInit & { url: string }> {
  const fetch = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
    new Response(null, { status: 204 }),
  );
  await upload({
    baseUrl: "https://example.com",
    fetch,
    tokenProvider: async () => "token",
  }, ...args);
  expect(fetch).toHaveBeenCalledOnce();
  const [url, request] = fetch.mock.calls[0]!;
  return { ...request, url: String(url) };
}
