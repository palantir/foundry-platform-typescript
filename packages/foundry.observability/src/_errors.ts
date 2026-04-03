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
   * The provided execution filter is invalid. This may be due to missing required fields,
an invalid time range, or other malformed filter parameters.
Time-based filters (startTime, endTime) cannot be used inside or or not filters.
   *
   * Log Safety: SAFE
   */
export interface InvalidExecutionFilter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidExecutionFilter";
  errorDescription:
    "The provided execution filter is invalid. This may be due to missing required fields, an invalid time range, or other malformed filter parameters. Time-based filters (startTime, endTime) cannot be used inside or or not filters.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The provided token does not have permission to list executions for this resource.
 *
 * Log Safety: UNSAFE
 */
export interface ListExecutionsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListExecutionsPermissionDenied";
  errorDescription:
    "The provided token does not have permission to list executions for this resource.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not listExecutions the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface ListExecutionsResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListExecutionsResourcePermissionDenied";
  errorDescription: "Could not listExecutions the Resource.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}
