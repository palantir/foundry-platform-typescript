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
 * The name of a Branch.
 *
 * Log Safety: UNSAFE
 */
export type BranchName = LooselyBrandedString<"BranchName">;

/**
 * Checks the total time a build takes to complete.
 *
 * Log Safety: UNSAFE
 */
export interface BuildDurationCheckConfig {
  subject: DatasetSubject;
  timeCheckConfig: TimeCheckConfig;
}

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
  | ({ type: "columnType" } & ColumnTypeCheckConfig)
  | ({ type: "jobStatus" } & JobStatusCheckConfig)
  | ({ type: "jobDuration" } & JobDurationCheckConfig)
  | ({ type: "totalColumnCount" } & TotalColumnCountCheckConfig)
  | ({ type: "buildDuration" } & BuildDurationCheckConfig)
  | ({ type: "schemaComparison" } & SchemaComparisonCheckConfig)
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
 * Configuration for column count validation with severity settings.
 *
 * Log Safety: SAFE
 */
export interface ColumnCountConfig {
  expectedValue: string;
  severity: SeverityLevel;
}

/**
 * Information about a column including its name and type.
 *
 * Log Safety: UNSAFE
 */
export interface ColumnInfo {
  name: ColumnName;
  columnType?: ColumnType;
}

/**
 * Log Safety: UNSAFE
 */
export type ColumnName = LooselyBrandedString<"ColumnName">;

/**
 * The data type of a column in a dataset schema.
 *
 * Log Safety: SAFE
 */
export type ColumnType =
  | "ARRAY"
  | "BINARY"
  | "BOOLEAN"
  | "BYTE"
  | "DATE"
  | "DECIMAL"
  | "DOUBLE"
  | "FLOAT"
  | "INTEGER"
  | "LONG"
  | "MAP"
  | "SHORT"
  | "STRING"
  | "STRUCT"
  | "TIMESTAMP";

/**
 * Checks the existence and optionally the type of a specific column.
 *
 * Log Safety: UNSAFE
 */
export interface ColumnTypeCheckConfig {
  subject: DatasetSubject;
  columnTypeConfig: ColumnTypeConfig;
}

/**
 * Configuration for column type validation with severity settings.
 *
 * Log Safety: UNSAFE
 */
export interface ColumnTypeConfig {
  columnName: string;
  expectedType?: ColumnType;
  severity: SeverityLevel;
}

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
 * Checks the total time a job takes to complete.
 *
 * Log Safety: UNSAFE
 */
export interface JobDurationCheckConfig {
  subject: DatasetSubject;
  timeCheckConfig: TimeCheckConfig;
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
 * The number of thresholds the build's duration differs from the median.
 *
 * Log Safety: SAFE
 */
export interface MedianDeviation {
  boundsType?: MedianDeviationBoundsType;
  dataPoints: number;
  deviationThreshold: number;
}

/**
 * The three types of median deviations a bounds type can have: - LOWER_BOUND – Tests for significant deviations below the median value, - UPPER_BOUND – Tests for significant deviations above the median value, - TWO_TAILED – Tests for significant deviations in either direction from the median value.
 *
 * Log Safety: SAFE
 */
export type MedianDeviationBoundsType =
  | "LOWER_BOUND"
  | "UPPER_BOUND"
  | "TWO_TAILED";

/**
 * Configuration for median deviation check with severity settings.
 *
 * Log Safety: SAFE
 */
export interface MedianDeviationConfig {
  medianDeviation: MedianDeviation;
  severity: SeverityLevel;
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
 * Checks the dataset schema against an expected schema.
 *
 * Log Safety: UNSAFE
 */
export interface SchemaComparisonCheckConfig {
  subject: DatasetSubject;
  schemaComparisonConfig: SchemaComparisonConfig;
}

/**
 * Configuration for schema comparison validation with severity settings.
 *
 * Log Safety: UNSAFE
 */
export interface SchemaComparisonConfig {
  expectedSchema: SchemaInfo;
  schemaComparisonType: SchemaComparisonType;
  severity: SeverityLevel;
}

/**
   * The type of schema comparison to perform:

EXACT_MATCH_ORDERED_COLUMNS: Schemas must have identical columns in the same order.
EXACT_MATCH_UNORDERED_COLUMNS: Schemas must have identical columns but order doesn't matter.
COLUMN_ADDITIONS_ALLOWED: Expected schema columns must be present, additional columns are allowed and
missing column types are ignored.
COLUMN_ADDITIONS_ALLOWED_STRICT: Expected schema columns must be present, additional columns are allowed.
Both expected and actual columns must specify types and they must match exactly.
   *
   * Log Safety: SAFE
   */
export type SchemaComparisonType =
  | "EXACT_MATCH_ORDERED_COLUMNS"
  | "EXACT_MATCH_UNORDERED_COLUMNS"
  | "COLUMN_ADDITIONS_ALLOWED"
  | "COLUMN_ADDITIONS_ALLOWED_STRICT";

/**
 * Information about a dataset schema including all columns.
 *
 * Log Safety: UNSAFE
 */
export interface SchemaInfo {
  columns: Array<ColumnInfo>;
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

/**
 * The configuration for the range of time between which the health check is expected to succeed.
 *
 * Log Safety: SAFE
 */
export interface TimeBounds {
  lowerBoundInSeconds?: string;
  upperBoundInSeconds?: string;
}

/**
 * Configuration for time bounds check with severity settings.
 *
 * Log Safety: SAFE
 */
export interface TimeBoundsConfig {
  timeBounds: TimeBounds;
  severity: SeverityLevel;
}

/**
 * Log Safety: SAFE
 */
export interface TimeCheckConfig {
  timeBounds?: TimeBoundsConfig;
  medianDeviation?: MedianDeviationConfig;
}

/**
 * Checks the total number of columns in the dataset.
 *
 * Log Safety: UNSAFE
 */
export interface TotalColumnCountCheckConfig {
  subject: DatasetSubject;
  columnCountConfig: ColumnCountConfig;
}
