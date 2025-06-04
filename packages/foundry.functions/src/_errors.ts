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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Could not execute the Query.
 *
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteQueryPermissionDenied";
  errorInstanceId: string;
  parameters: {
    queryApiName: unknown;
  };
}

/**
 * Could not getByRid the Query.
 *
 * Log Safety: SAFE
 */
export interface GetByRidQueriesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetByRidQueriesPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The value of the query's output is invalid. This may be because the return value did not match the specified
output type or constraints.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidQueryOutputValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidQueryOutputValue";
  errorInstanceId: string;
  parameters: {
    outputDataType: unknown;
    outputValue: unknown;
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
   * The value of the given parameter is invalid. See the documentation of DataValue for details on
how parameters are represented.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidQueryParameterValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidQueryParameterValue";
  errorInstanceId: string;
  parameters: {
    parameterDataType: unknown;
    parameterId: unknown;
    parameterValue: unknown;
  };
}

/**
   * Required parameters are missing. Please look at the parameters field to see which required parameters are
missing from the request.
   *
   * Log Safety: UNSAFE
   */
export interface MissingParameter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingParameter";
  errorInstanceId: string;
  parameters: {
    parameters: unknown;
  };
}

/**
   * The authored Query failed to execute because of a user induced error. The message argument
is meant to be displayed to the user.
   *
   * Log Safety: UNSAFE
   */
export interface QueryEncounteredUserFacingError {
  errorCode: "CONFLICT";
  errorName: "QueryEncounteredUserFacingError";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
    message: unknown;
  };
}

/**
 * Memory limits were exceeded for the Query execution.
 *
 * Log Safety: UNSAFE
 */
export interface QueryMemoryExceededLimit {
  errorCode: "TIMEOUT";
  errorName: "QueryMemoryExceededLimit";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
 * The given Query could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface QueryNotFound {
  errorCode: "NOT_FOUND";
  errorName: "QueryNotFound";
  errorInstanceId: string;
  parameters: {
    queryApiName: unknown;
  };
}

/**
 * The authored Query failed to execute because of a runtime error.
 *
 * Log Safety: UNSAFE
 */
export interface QueryRuntimeError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "QueryRuntimeError";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
    message: unknown;
    stacktrace: unknown;
    parameters: unknown;
  };
}

/**
 * Time limits were exceeded for the Query execution.
 *
 * Log Safety: UNSAFE
 */
export interface QueryTimeExceededLimit {
  errorCode: "TIMEOUT";
  errorName: "QueryTimeExceededLimit";
  errorInstanceId: string;
  parameters: {
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
 * The query could not be found at the provided version.
 *
 * Log Safety: UNSAFE
 */
export interface QueryVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "QueryVersionNotFound";
  errorInstanceId: string;
  parameters: {
    apiName: unknown;
    version: unknown;
  };
}

/**
   * The provided parameters were not found. Please look at the knownParameters field
to see which ones are available.
   *
   * Log Safety: UNSAFE
   */
export interface UnknownParameter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnknownParameter";
  errorInstanceId: string;
  parameters: {
    unknownParameters: unknown;
    expectedParameters: unknown;
  };
}

/**
 * The given ValueType could not be found.
 *
 * Log Safety: SAFE
 */
export interface ValueTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ValueTypeNotFound";
  errorInstanceId: string;
  parameters: {
    valueTypeRid: unknown;
  };
}

/**
 * The given VersionId could not be found.
 *
 * Log Safety: SAFE
 */
export interface VersionIdNotFound {
  errorCode: "NOT_FOUND";
  errorName: "VersionIdNotFound";
  errorInstanceId: string;
  parameters: {
    valueTypeRid: unknown;
    versionIdVersionId: unknown;
  };
}
