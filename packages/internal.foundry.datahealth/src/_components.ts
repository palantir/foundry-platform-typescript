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

import type * as _Connectivity from "@osdk/internal.foundry.connectivity";
import type * as _Core from "@osdk/internal.foundry.core";
import type * as _Datasets from "@osdk/internal.foundry.datasets";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The name of a Branch.
 *
 * Log Safety: UNSAFE
 */
export type BranchName = LooselyBrandedString<"BranchName">;

/**
 * Checks the status of the most recent build of the dataset.
 *
 * Log Safety: UNSAFE
 */
export interface BuildStatusCheckConfig {
  subject: DatasetSubject;
  statusCheckConfig: StatusCheckConfig;
}

/**
 * Log Safety: UNSAFE
 */
export interface Check {
  rid: CheckRid;
  groups: Array<CheckGroupRid>;
  config: CheckConfig;
  intent?: CheckIntent;
  createdBy?: _Core.CreatedBy;
  updatedTime?: _Core.UpdatedTime;
}

/**
 * Configuration of a check.
 *
 * Log Safety: UNSAFE
 */
export type CheckConfig =
  | ({ type: "jobStatus" } & JobStatusCheckConfig)
  | ({ type: "buildStatus" } & BuildStatusCheckConfig);

/**
 * The unique resource identifier (RID) of a CheckGroup.
 *
 * Log Safety: SAFE
 */
export type CheckGroupRid = LooselyBrandedString<"CheckGroupRid">;

/**
 * A note about why the Check was set up.
 *
 * Log Safety: UNSAFE
 */
export type CheckIntent = LooselyBrandedString<"CheckIntent">;

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
 * Log Safety: UNSAFE
 */
export interface CreateCheckRequest {
  config: CheckConfig;
  intent?: CheckIntent;
}

/**
 * A data connection agent resource type.
 *
 * Log Safety: UNSAFE
 */
export interface DataConnectionAgentSubject {
  agentRid: _Connectivity.AgentRid;
}

/**
 * The Resource Identifier (RID) of a Dataset.
 *
 * Log Safety: SAFE
 */
export type DatasetRid = LooselyBrandedString<"DatasetRid">;

/**
 * A dataset resource type.
 *
 * Log Safety: UNSAFE
 */
export interface DatasetSubject {
  datasetRid: _Datasets.DatasetRid;
  branchId: _Datasets.BranchName;
}

/**
 * The configuration for when the severity of the failing health check should be escalated to CRITICAL – after a given number of failures, possibly within a time interval.
 *
 * Log Safety: UNSAFE
 */
export interface EscalationConfig {
  failuresToCritical: number;
  timeIntervalInSeconds?: string;
}

/**
 * Checks the status of the most recent job run on the dataset.
 *
 * Log Safety: UNSAFE
 */
export interface JobStatusCheckConfig {
  subject: DatasetSubject;
  statusCheckConfig: StatusCheckConfig;
}

/**
 * A schedule resource type.
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
 * Log Safety: UNSAFE
 */
export interface StatusCheckConfig {
  severity: SeverityLevel;
  escalationConfig?: EscalationConfig;
}
