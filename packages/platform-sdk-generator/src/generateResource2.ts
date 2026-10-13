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

import { copyright } from "./copyright.js";
import { generateImports } from "./generateImports.js";
import { generateMethodJsdoc } from "./generateMethodJsdoc.js";
import { getNamespacePlatform } from "./getNamespacePlatform.js";
import { HTTP_VERB_MAP } from "./HTTP_VERB_MAP.js";
import { BinaryType } from "./model/BinaryType.js";
import { BuiltinType } from "./model/BuiltinType.js";
import type { Component } from "./model/Component.js";
import type { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import type { Operation } from "./model/Operation.js";
import { OptionalType } from "./model/OptionalType.js";
import type { Resource } from "./model/Resource.js";
import type { Type } from "./model/Type.js";
import { addAll } from "./util/addAll.js";
import { writeCode } from "./writeCode.js";

export async function writeResource2(
  ns: Namespace,
  resource: Resource,
  filePath: string,
  model: Model,
): Promise<void> {
  const platformFetch = (getNamespacePlatform(ns.name) === "gotham")
    ? "platformFetch"
    : "foundryPlatformFetch";
  const platformMethod = (getNamespacePlatform(ns.name) === "gotham")
    ? "PlatformMethod"
    : "FoundryPlatformMethod";

  const { out, referencedTypes } = await generateMethods(
    resource,
    model,
    platformFetch,
    platformMethod,
  );

  return writeCode(
    filePath,
    `${copyright}\n\n
        import type { SharedClient as $OldClient, SharedClientContext as $OldClientContext,  } from "@osdk/shared.client";
        import type { SharedClient as $Client, SharedClientContext as $ClientContext,  } from "@osdk/shared.client2";
        import type { FoundryPlatformMethod as $${platformMethod} } from "@osdk/shared.net.platformapi";
        import { foundryPlatformFetch as $${platformFetch} } from "@osdk/shared.net.platformapi";
        ${
      generateImports(referencedTypes, new Map([[ns, "../_components.js"]]))
    }
        
        //
        ${out}
        `,
  );
}

async function generateMethods(
  resource: Resource,
  model: Model,
  platformFetch: string = "foundryPlatformFetch",
  platformMethod: string = "FoundryPlatformMethod",
) {
  let out = "";
  const referencedTypes = new Set<Component>();

  for (const method of resource.operations) {
    const methodName = (method.verb === "delete")
      ? method.name
      : method.verb;

    addAll(referencedTypes, method.referencedComponents);

    const innerReturnType = typeof method.responseType === "string"
      ? method.responseType
      : method.responseType.getTsReferenceString(undefined);

    const returnType = `Promise<${innerReturnType}>`;

    const byType = getParametersByType(method);
    const parameters = generateMethodParameters(method, byType);
    const requestType = method.requestType;

    const shouldFillBlobHeaders = requestType instanceof BinaryType;
    const blobHeaders = fillBlobHeaders(
      (byType.QUERY?.length ?? 0) > 0,
      byType.PATH?.length ?? 0,
      method.requestMimeType,
    );
    out += `
     const _${methodName}: $${platformMethod}<(${parameters}) => ${returnType}> = ${
      generateOperationArray(method, byType)
    };

    ${await generateMethodJsdoc(method)}
    export function ${methodName}(
      $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
      ...args: [${parameters}]
    ): ${returnType}{${
      shouldFillBlobHeaders
        ? blobHeaders.autofill
        : ""
    }return $${platformFetch}($ctx, _${methodName}, ${
      shouldFillBlobHeaders ? blobHeaders.returnArgs : "...args"
    }); }

    `;
  }
  return { out, referencedTypes };
}

function getParametersByType(method: Operation): Operation["parametersByType"] {
  const byType = method.parametersByType;
  if (
    method.requestType instanceof BinaryType
    && !byType.HEADER?.some(p => p.name === "Content-Type")
  ) {
    byType.HEADER = [
      ...byType.HEADER ?? [],
      {
        name: "Content-Type",
        kind: "HEADER",
        type: new OptionalType(new BuiltinType({ type: "string", string: {} })),
      },
    ];
  }
  return byType;
}

function generateMethodParameters(
  method: Operation,
  byType: Operation["parametersByType"],
) {
  const requestType = method.requestType;

  const bodyArg = requestType === "unknown"
    ? ""
    : `$body: ${requestType.getTsReferenceString(undefined)},`;

  const pathParams = getParamsAsSyntaxListString(byType.PATH);
  const queryParams = getParamsAsObject("$queryParams", byType.QUERY);
  const headerParams = getParamsAsObject(
    "$headerParams",
    byType.HEADER,
    requestType === "unknown" ? undefined : requestType,
  );

  return `
    ${pathParams}
    ${bodyArg}
    ${queryParams}
    ${headerParams}`;
}

function generateOperationArray(
  op: Operation,
  byType: Operation["parametersByType"],
) {
  // bit wise math
  const flag = (op.requestType !== "unknown" ? 1 : 0)
    + (byType.QUERY && byType.QUERY.length > 0 ? 2 : 0)
    + (byType.HEADER && byType.HEADER.length > 0 ? 4 : 0);

  let count = 0;
  const constParts = [
    HTTP_VERB_MAP[op.httpMethod],
    `"${op.path.replace(/{.*?}/g, () => `{${count++}}`)}"`,
    flag > 0 ? flag : "",
    op.requestMimeType,
    op.responseMimeType,
  ];

  while (constParts.at(-1) === "") {
    constParts.pop();
  }

  return `[${constParts.join(",")}]`;
}

function getParamsAsSyntaxListString(
  params: Operation["parameters"] | undefined,
  quoteChar: string = "",
  requestType?: Type,
) {
  if (!params || params.length === 0) return "";

  return params.map((p) => {
    if (
      requestType instanceof BinaryType
      && (p.name === "Content-Length")
    ) {
      return "";
    }

    return `${quoteChar}${p.name}${quoteChar}${
      p.type instanceof OptionalType || (requestType instanceof BinaryType
          && (p.name === "Content-Type"))
        ? "?"
        : ""
    }: ${p.type.getTsReferenceString(undefined)},`;
  }).join("");
}

function getParamsAsObject(
  prefix: "$queryParams" | "$headerParams",
  params: Operation["parameters"] | undefined,
  requestType?: Type,
) {
  if (!params || params.length === 0) return "";
  const opt = params.every(p =>
    p.type instanceof OptionalType || (requestType instanceof BinaryType
      && (p.name === "Content-Type" || p.name === "Content-Length"))
  );
  const parameterString = getParamsAsSyntaxListString(params, `"`, requestType);
  return parameterString === ""
    ? ""
    : `${prefix}${opt ? "?" : ""}: { ${parameterString} },`;
}

function fillBlobHeaders(
  queryParamsPresent: boolean,
  pathParamCount: number,
  requestMediaType: string,
) {
  const bodyArgIndex = pathParamCount;
  const queryArgIndex = bodyArgIndex + 1;
  const headerArgIndex = queryArgIndex + (queryParamsPresent ? 1 : 0);
  const defaultContentType = requestMediaType === "\"*/*\""
    ? `(args[${bodyArgIndex}].type || "application/octet-stream")`
    : requestMediaType || "\"application/json\"";
  return {
    autofill: `
    const headerParams =  {...args[${headerArgIndex}], "Content-Type": args[${headerArgIndex}]?.["Content-Type"] ?? ${defaultContentType}, "Content-Length": args[${bodyArgIndex}].size.toString()};\n
    `,
    returnArgs: `${
      Array.from({ length: pathParamCount }, (_, index) => `args[${index}], `)
        .join("")
    }args[${bodyArgIndex}], ${
      queryParamsPresent ? `args[${queryArgIndex}], ` : ""
    }headerParams`,
  };
}
