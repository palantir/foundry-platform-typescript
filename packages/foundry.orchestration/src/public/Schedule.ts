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
import type {
  SharedClient as $OldClient,
  SharedClientContext as $OldClientContext,
} from "@osdk/shared.client";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client2";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Orchestration from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    $body: _Orchestration.CreateScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [1, "/v2/orchestration/schedules", 3];

/**
 * Creates a new Schedule.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Orchestration.CreateScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteSchedule: $FoundryPlatformMethod<
  (scheduleRid: _Core.ScheduleRid) => Promise<void>
> = [3, "/v2/orchestration/schedules/{0}"];

/**
 * Delete the Schedule with the specified rid.
 *
 * @public
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function deleteSchedule(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [scheduleRid: _Core.ScheduleRid]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSchedule, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    scheduleRid: _Core.ScheduleRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [0, "/v2/orchestration/schedules/{0}", 2];

/**
 * Get the Schedule with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    scheduleRid: _Core.ScheduleRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Orchestration.GetSchedulesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.GetSchedulesBatchResponse>
> = [1, "/v2/orchestration/schedules/getBatch", 3];

/**
 * Fetch multiple schedules in a single request. Schedules not found or inaccessible to the user will be
 * omitted from the response.
 *
 * The maximum batch size for this endpoint is 1000.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/schedules/getBatch
 */
export function getBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Orchestration.GetSchedulesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.GetSchedulesBatchResponse> {
  return $foundryPlatformFetch($ctx, _getBatch, ...args);
}

const _replace: $FoundryPlatformMethod<
  (
    scheduleRid: _Core.ScheduleRid,
    $body: _Orchestration.ReplaceScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Orchestration.Schedule>
> = [2, "/v2/orchestration/schedules/{0}", 3];

/**
 * Replace the Schedule with the specified rid.
 *
 * @beta
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}
 */
export function replace(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    scheduleRid: _Core.ScheduleRid,
    $body: _Orchestration.ReplaceScheduleRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Orchestration.Schedule> {
  return $foundryPlatformFetch($ctx, _replace, ...args);
}

const _run: $FoundryPlatformMethod<
  (scheduleRid: _Core.ScheduleRid) => Promise<_Orchestration.ScheduleRun>
> = [1, "/v2/orchestration/schedules/{0}/run"];

/**
 * @public
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/run
 */
export function run(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [scheduleRid: _Core.ScheduleRid]
): Promise<_Orchestration.ScheduleRun> {
  return $foundryPlatformFetch($ctx, _run, ...args);
}

const _pause: $FoundryPlatformMethod<
  (scheduleRid: _Core.ScheduleRid) => Promise<void>
> = [1, "/v2/orchestration/schedules/{0}/pause"];

/**
 * @public
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/pause
 */
export function pause(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [scheduleRid: _Core.ScheduleRid]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _pause, ...args);
}

const _unpause: $FoundryPlatformMethod<
  (scheduleRid: _Core.ScheduleRid) => Promise<void>
> = [1, "/v2/orchestration/schedules/{0}/unpause"];

/**
 * @public
 *
 * Required Scopes: [api:orchestration-write]
 * URL: /v2/orchestration/schedules/{scheduleRid}/unpause
 */
export function unpause(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [scheduleRid: _Core.ScheduleRid]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _unpause, ...args);
}

const _runs: $FoundryPlatformMethod<
  (
    scheduleRid: _Core.ScheduleRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Orchestration.ListRunsOfScheduleResponse>
> = [0, "/v2/orchestration/schedules/{0}/runs", 2];

/**
 * Get the most recent runs of a Schedule. If no page size is provided, a page size of 100 will be used.
 *
 * @public
 *
 * Required Scopes: [api:orchestration-read]
 * URL: /v2/orchestration/schedules/{scheduleRid}/runs
 */
export function runs(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    scheduleRid: _Core.ScheduleRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Orchestration.ListRunsOfScheduleResponse> {
  return $foundryPlatformFetch($ctx, _runs, ...args);
}
