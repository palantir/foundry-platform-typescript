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

import type { Documentation, Example, Locator } from "./Common.js";
import type { Error as ApiError } from "./Error.js";
import type { ParameterValue } from "./ParameterValue.js";

export interface Resource {
  component: Locator;
  operations: Operation[];
  pluralName: string;
  documentation: Documentation;
  singleton?: boolean;
  pathSegment?: string;
  idPropertyName?: string;
  parentResource?: Locator;
  relativeName?: string;
  pluralRelativeName?: string;
}

export interface Operation {
  name: string;
  verb: string;
  documentation?: Documentation;
  http: Http;
  auth: Auth;
  auditCategories: string[];
  releaseStage: undefined | "PUBLIC_BETA" | "PRIVATE_BETA" | "STABLE";
  throwableErrors: ApiError[];
}

export type Http = {
  path: string;
  httpMethod: HttpMethod;
  parameters: Parameter[];
  requestBody?: RequestBody;
  response: Response;
  conjureServerAsync?: boolean;
  conjureRequestContext?: boolean;
};

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface Auth {
  includeAuthHeader: boolean;
  scopes: string[];
}

export type InputType =
  | "HEADER"
  | "PATH"
  | "QUERY"
  | "BODY";

export interface Parameter {
  name: string;
  documentation: Documentation;
  inputType: InputType;
  type: ParameterValue;
}

export type MediaType = "application/json" | "*/*";

export interface ComponentRequestType {
  type: "component";
  component: {
    mediaType: MediaType;
    type: ParameterValue;
    example?: Example[];
  };
}

export interface ComponentResponseType {
  type: "component";
  component: {
    mediaType: MediaType;
    type: ParameterValue;
    example?: Example[];
  };
}

export interface BinaryResponseType {
  type: "binary";
  binary: {
    mediaType: string;
  };
}

export interface NoContentResponseBody {
  type: "noContent";
  noContent: Record<string, never>;
}

export interface ReferenceResponseType {
  mediaType: string;
  type: ParameterValue;
}

export type ResponseType =
  | ComponentResponseType
  | BinaryResponseType
  | ReferenceResponseType;

export interface OkResponseBody {
  type: "ok";
  ok: {
    responseType: ResponseType;
    required: boolean;
  };
}

export interface AcceptedResponseBody {
  type: "accepted";
  accepted: {
    responseType: ResponseType;
  };
}

export type ResponseBody =
  | OkResponseBody
  | NoContentResponseBody
  | AcceptedResponseBody;

export type RequestBodyType = ComponentRequestType | BinaryResponseType;

export interface RequestBody {
  body: RequestBodyType;
  documentation?: Documentation;
}

export interface Response {
  documentation?: Documentation;
  body: ResponseBody;
  code: string;
}
