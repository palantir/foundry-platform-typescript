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

import type * as _Core from "@osdk/foundry.core";
import type * as _Filesystem from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelRequest {
  name: ModelName;
  parentFolderRid: _Filesystem.FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelVersionRequest {
  modelFiles: ModelFiles;
  backingRepositories: Array<string>;
  condaRequirements: Array<string>;
  modelApi: ModelApi;
}

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: UNSAFE
 */
export interface DillModelFiles {
  serializedModelFunction: string;
}

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: UNSAFE
 */
export interface ListModelVersionsResponse {
  data: Array<ModelVersion>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * Log Safety: SAFE
 */
export interface Model {
  rid: ModelRid;
}

/**
 * The Model API is a specification that describes the inputs and outputs of a machine learning model. It is used to define the interface for the model, including the types of data that can be passed to it and the types of data that it will return.
 *
 * Log Safety: UNSAFE
 */
export interface ModelApi {
  inputs: Array<ModelApiInput>;
  outputs: Array<ModelApiOutput>;
}

/**
 * Log Safety: SAFE
 */
export interface ModelApiAnyType {}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiArrayType {
  itemType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiColumn {
  name: string;
  required?: boolean;
  dataType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type ModelApiDataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "array" } & ModelApiArrayType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "any" } & ModelApiAnyType)
  | ({ type: "map" } & ModelApiMapType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: UNSAFE
 */
export type ModelApiInput =
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "parameter" } & ModelApiParameterType)
  | ({ type: "tabular" } & ModelApiTabularType);

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiMapType {
  keyType: ModelApiDataType;
  valueType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type ModelApiOutput =
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "parameter" } & ModelApiParameterType)
  | ({ type: "tabular" } & ModelApiTabularType);

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiParameterType {
  name: string;
  required?: boolean;
  dataType: ModelApiDataType;
}

/**
 * Log Safety: SAFE
 */
export type ModelApiTabularFormat = "PANDAS" | "SPARK";

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiTabularType {
  name: string;
  required?: boolean;
  columns: Array<ModelApiColumn>;
  format?: ModelApiTabularFormat;
}

/**
   * The serialized data of a machine learning model. This can include the model's parameters, architecture, and any other relevant information needed to reconstruct the model.
Must be a base64-encoded string of a dill-serialized model function.
   *
   * Log Safety: UNSAFE
   */
export type ModelFiles = { type: "dill" } & DillModelFiles;

/**
 * Log Safety: UNSAFE
 */
export type ModelName = LooselyBrandedString<"ModelName">;

/**
 * The Resource Identifier (RID) of a Model.
 *
 * Log Safety: SAFE
 */
export type ModelRid = LooselyBrandedString<"ModelRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ModelVersion {
  rid: ModelVersionRid;
  modelApi: ModelApi;
  condaRequirements: Array<string>;
  backingRepositories: Array<string>;
}

/**
 * The Resource Identifier (RID) of a Model Version.
 *
 * Log Safety: SAFE
 */
export type ModelVersionRid = LooselyBrandedString<"ModelVersionRid">;

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: UNSAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
  params: Record<
    _Core.UnsupportedTypeParamKey,
    _Core.UnsupportedTypeParamValue
  >;
}

/**
 * Log Safety: UNSAFE
 */
export type UnsupportedTypeParamValue = LooselyBrandedString<
  "UnsupportedTypeParamValue"
>;
