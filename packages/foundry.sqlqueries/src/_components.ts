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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface AnyColumnType {}

/**
 * Log Safety: SAFE
 */
export interface CanceledQueryStatus {}

/**
 * The type of a column in a SQL query result or parameter.
 *
 * Log Safety: UNSAFE
 */
export type ColumnType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & StructColumnType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "list" } & ListColumnType)
  | ({ type: "any" } & AnyColumnType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "binary" } & _Core.BinaryType)
  | ({ type: "short" } & _Core.ShortType)
  | ({ type: "decimal" } & DecimalColumnType)
  | ({ type: "map" } & MapColumnType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: SAFE
 */
export interface DecimalColumnType {
  precision: number;
  scale: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteOntologySqlQueryRequest {
  query: string;
  parameters?: Parameters;
  rowLimit?: number;
  dryRun?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteSqlQueryRequest {
  query: string;
  fallbackBranchIds?: Array<_Core.BranchName>;
  serializationFormat?: SerializationFormat;
}

/**
 * Log Safety: UNSAFE
 */
export interface FailedQueryStatus {
  errorMessage: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListColumnType {
  elementType: ColumnType;
}

/**
 * Log Safety: UNSAFE
 */
export interface MapColumnType {
  keyType: ColumnType;
  valueType: ColumnType;
}

/**
 * A key for a map parameter value.
 *
 * Log Safety: UNSAFE
 */
export type MapParameterKey = LooselyBrandedString<"MapParameterKey">;

/**
 * A named mapping of parameter names to values.
 *
 * Log Safety: UNSAFE
 */
export interface NamedParameterMapping {
  mapping: ParameterMapping;
}

/**
 * An untyped parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterAnyValue {
  value: any;
}

/**
 * A boolean parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterBooleanValue {
  value: boolean;
}

/**
 * A date parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterDateValue {
  value: string;
}

/**
 * A decimal parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterDecimalValue {
  value: string;
}

/**
 * A double parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterDoubleValue {
  value: number;
}

/**
 * A float parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterFloatValue {
  value: number;
}

/**
 * An integer parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterIntegerValue {
  value: number;
}

/**
 * A parameter value that is a list of other parameter values. All values in the list must be of the same type.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterListValue {
  values: Array<ParameterValue>;
  elementType: ColumnType;
}

/**
 * A long integer parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterLongValue {
  value: string;
}

/**
 * A mapping of named parameters to their values.
 *
 * Log Safety: UNSAFE
 */
export type ParameterMapping = Record<ParameterName, ParameterValue>;

/**
 * A map parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterMapValue {
  values: Record<MapParameterKey, ParameterValue>;
}

/**
 * The name of a SQL query parameter.
 *
 * Log Safety: UNSAFE
 */
export type ParameterName = LooselyBrandedString<"ParameterName">;

/**
 * A null parameter value.
 *
 * Log Safety: SAFE
 */
export interface ParameterNullValue {}

/**
   * Parameters for SQL query execution. Can be either unnamed positional parameters
or named parameter mappings.
   *
   * Log Safety: UNSAFE
   */
export type Parameters =
  | ({ type: "unnamedParameterValues" } & UnnamedParameterValues)
  | ({ type: "namedParameterMapping" } & NamedParameterMapping);

/**
 * A short integer parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterShortValue {
  value: number;
}

/**
 * A string parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterStringValue {
  value: string;
}

/**
 * A struct composed of ordered elements, each with a name and value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterStructValue {
  structElements: Array<StructElement>;
}

/**
 * A timestamp parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterTimestampValue {
  value: string;
}

/**
 * A typed parameter value for SQL query execution.
 *
 * Log Safety: UNSAFE
 */
export type ParameterValue =
  | ({ type: "date" } & ParameterDateValue)
  | ({ type: "struct" } & ParameterStructValue)
  | ({ type: "string" } & ParameterStringValue)
  | ({ type: "double" } & ParameterDoubleValue)
  | ({ type: "integer" } & ParameterIntegerValue)
  | ({ type: "float" } & ParameterFloatValue)
  | ({ type: "list" } & ParameterListValue)
  | ({ type: "any" } & ParameterAnyValue)
  | ({ type: "long" } & ParameterLongValue)
  | ({ type: "boolean" } & ParameterBooleanValue)
  | ({ type: "null" } & ParameterNullValue)
  | ({ type: "short" } & ParameterShortValue)
  | ({ type: "decimal" } & ParameterDecimalValue)
  | ({ type: "map" } & ParameterMapValue)
  | ({ type: "timestamp" } & ParameterTimestampValue);

/**
 * Log Safety: DO_NOT_LOG
 */
export type QueryStatus =
  | ({ type: "running" } & RunningQueryStatus)
  | ({ type: "canceled" } & CanceledQueryStatus)
  | ({ type: "failed" } & FailedQueryStatus)
  | ({ type: "succeeded" } & SucceededQueryStatus);

/**
 * Log Safety: DO_NOT_LOG
 */
export interface RunningQueryStatus {
  queryId: SqlQueryId;
}

/**
 * Format for SQL query result serialization.
 *
 * Log Safety: SAFE
 */
export type SerializationFormat = "ARROW" | "CSV";

/**
 * Log Safety: DO_NOT_LOG
 */
export interface SqlQuery {
  id: SqlQueryId;
}

/**
 * The identifier of a SQL Query.
 *
 * Log Safety: DO_NOT_LOG
 */
export type SqlQueryId = LooselyBrandedString<"SqlQueryId">;

/**
 * Log Safety: UNSAFE
 */
export interface StructColumnFieldType {
  name: string;
  type: ColumnType;
}

/**
 * Log Safety: UNSAFE
 */
export interface StructColumnType {
  fields: Array<StructColumnFieldType>;
}

/**
 * Represents an entry in a struct.
 *
 * Log Safety: UNSAFE
 */
export interface StructElement {
  structElementName: StructElementName;
  structElementValue: ParameterValue;
}

/**
 * The name of a struct element.
 *
 * Log Safety: UNSAFE
 */
export type StructElementName =
  | ({ type: "structFieldRid" } & StructFieldRid)
  | ({ type: "structFieldKey" } & StructFieldKeyValue);

/**
 * A string key for a struct field.
 *
 * Log Safety: UNSAFE
 */
export interface StructFieldKeyValue {
  value: string;
}

/**
 * A unique identifier for a field of a struct property type.
 *
 * Log Safety: SAFE
 */
export interface StructFieldRid {
  value: string;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface SucceededQueryStatus {
  queryId: SqlQueryId;
}

/**
 * An ordered list of unnamed positional parameter values.
 *
 * Log Safety: UNSAFE
 */
export interface UnnamedParameterValues {
  values: Array<ParameterValue>;
}
