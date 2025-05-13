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

import type * as _Connectivity from "@osdk/foundry.connectivity";
import type * as _Core from "@osdk/foundry.core";
import type * as _Datasets from "@osdk/foundry.datasets";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export interface Check {
  rid: CheckRid;
  groups: Array<CheckGroupRid>;
  subjects: Array<Subject>;
  createdBy?: _Core.CreatedBy;
  createdTime?: _Core.CreatedTime;
  config: Array<CheckConfig>;
}

/**
   * Configuration of a check.
STATUS: Checks whether the most recent build, job, or sync succeeded.
TIME: Checks whether the duration of any activity surpasses the anticipated time.
SIZE: Checks whether the size of each component of a resource aligns with expectations.
CONTENT: Checks that the content of a resource aligns with expectations.
SCHEMA: Checks that the schema of a resource aligns with expectations.
   *
   * Log Safety: UNSAFE
   */
export type CheckConfig = { type: "status" } & StatusCheckConfig;

/**
 * The unique resource identifier (RID) of a CheckGroup.
 *
 * Log Safety: SAFE
 */
export type CheckGroupRid = LooselyBrandedString<"CheckGroupRid">;

/**
 * The unique resource identifier (RID) of a Check.
 *
 * Log Safety: SAFE
 */
export type CheckRid = LooselyBrandedString<"CheckRid">;

/**
 * Log Safety: UNSAFE
 */
export type ColumnName = LooselyBrandedString<"ColumnName">;

/**
 * A data connection agent resource type
 *
 * Log Safety: UNSAFE
 */
export interface DataConnectionAgentSubject {
  agentRid: _Connectivity.AgentRid;
}

/**
 * A dataset resource type
 *
 * Log Safety: UNSAFE
 */
export interface DatasetSubject {
  datasetRid: _Datasets.DatasetRid;
  branchId: _Datasets.BranchName;
  columnNames: Array<string>;
}

/**
 * A schedule resource type
 *
 * Log Safety: SAFE
 */
export interface ScheduleSubject {
  scheduleRid: _Core.ScheduleRid;
}

/**
 * The severity level of the check. Possible values are LOW, MODERATE, or CRITICAL.
 *
 * Log Safety: SAFE
 */
export type SeverityLevel = "LOW" | "MODERATE" | "CRITICAL";

/**
 * A check on the status of a dataset build.
 *
 * Log Safety: UNSAFE
 */
export interface StatusCheckConfig {
  statusCheckType: StatusCheckType;
  severity: SeverityLevel;
  failuresToCritical: number;
  note?: string;
}

/**
 * Different types of status checks
 *
 * Log Safety: SAFE
 */
export type StatusCheckType = "BUILD" | "JOB";

/**
 * The resource that the check is performed on.
 *
 * Log Safety: UNSAFE
 */
export type Subject =
  | ({ type: "Dataset" } & DatasetSubject)
  | ({ type: "DataConnectionAgent" } & DataConnectionAgentSubject)
  | ({ type: "Schedule" } & ScheduleSubject);
