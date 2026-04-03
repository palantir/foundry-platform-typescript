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
 * Combines multiple filters with AND logic. All filters must match.
 *
 * Log Safety: UNSAFE
 */
export interface AndExecutionFilter {
  filters: Array<ExecutionFilter>;
}

/**
   * Filter executions by caller. When callerRid is provided, matches executions
triggered by that specific caller. When callerRid is absent, matches executions
that have no caller.
   *
   * Log Safety: SAFE
   */
export interface CallerExecutionFilter {
  callerRid?: string;
}

/**
 * Filter executions by duration range.
 *
 * Log Safety: SAFE
 */
export interface DurationExecutionFilter {
  minDuration?: _Core.Duration;
  maxDuration?: _Core.Duration;
}

/**
 * Filter executions that started before the specified time.
 *
 * Log Safety: SAFE
 */
export interface EndTimeExecutionFilter {
  endTime: string;
}

/**
   * A single run of a Foundry compute resource (e.g., one function invocation,
one automation run).
   *
   * Log Safety: UNSAFE
   */
export interface Execution {
  traceLocator: string;
  traceId: string;
  resourceRid: _Filesystem.ResourceRid;
  resourceVersion?: string;
  status: ExecutionStatus;
  failureReason?: string;
  startTime: string;
  duration: _Core.Duration;
  userId?: _Core.UserId;
  callerRid?: string;
}

/**
   * Filters for narrowing execution search results. Filters can be composed with boolean
logic using and, or, and not variants.
Note: startTime and endTime filters can only be used at the top level or inside
and filters. Using them inside or or not will result in an error.
   *
   * Log Safety: UNSAFE
   */
export type ExecutionFilter =
  | ({ type: "result" } & ResultExecutionFilter)
  | ({ type: "duration" } & DurationExecutionFilter)
  | ({ type: "traceId" } & TraceIdExecutionFilter)
  | ({ type: "caller" } & CallerExecutionFilter)
  | ({ type: "not" } & NotExecutionFilter)
  | ({ type: "or" } & OrExecutionFilter)
  | ({ type: "and" } & AndExecutionFilter)
  | ({ type: "resourceVersion" } & ResourceVersionExecutionFilter)
  | ({ type: "failureReason" } & FailureReasonExecutionFilter)
  | ({ type: "startTime" } & StartTimeExecutionFilter)
  | ({ type: "endTime" } & EndTimeExecutionFilter)
  | ({ type: "userId" } & UserIdExecutionFilter);

/**
 * The status of an execution.
 *
 * Log Safety: SAFE
 */
export type ExecutionStatus = "SUCCEEDED" | "FAILED";

/**
 * Filter executions by failure reason.
 *
 * Log Safety: SAFE
 */
export interface FailureReasonExecutionFilter {
  failureReason: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListExecutionsResourceRequest {
  filter?: ExecutionFilter;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * A page of execution results.
 *
 * Log Safety: UNSAFE
 */
export interface ListExecutionsResponse {
  data: Array<Execution>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Negates a filter.
 *
 * Log Safety: UNSAFE
 */
export interface NotExecutionFilter {
  filter: ExecutionFilter;
}

/**
 * Combines multiple filters with OR logic. At least one filter must match.
 *
 * Log Safety: UNSAFE
 */
export interface OrExecutionFilter {
  filters: Array<ExecutionFilter>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Resource {
  rid: _Filesystem.ResourceRid;
}

/**
 * Filter executions by the resource version.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceVersionExecutionFilter {
  resourceVersion: string;
}

/**
 * Filter executions by their result status.
 *
 * Log Safety: SAFE
 */
export interface ResultExecutionFilter {
  status: ExecutionStatus;
}

/**
 * Filter executions that started at or after the specified time.
 *
 * Log Safety: SAFE
 */
export interface StartTimeExecutionFilter {
  startTime: string;
}

/**
 * Filter executions by a specific trace ID. Returns at most one execution.
 *
 * Log Safety: SAFE
 */
export interface TraceIdExecutionFilter {
  traceId: string;
}

/**
 * Filter executions by the user who triggered them.
 *
 * Log Safety: SAFE
 */
export interface UserIdExecutionFilter {
  userId: _Core.UserId;
}
