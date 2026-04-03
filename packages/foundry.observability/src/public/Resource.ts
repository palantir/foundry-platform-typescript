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
import type * as _Observability from "../_components.js";

//

const _listExecutions: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $body: _Observability.ListExecutionsResourceRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Observability.ListExecutionsResponse>
> = [1, "/v2/observability/resources/{0}/listExecutions", 3];

/**
 * List recent executions (function runs, automation runs, etc.) for a given resource.
 * Returns execution summaries ordered by most recent first.
 * Only completed executions are included in the results.
 *
 * If no time filter is specified via `startTime` or `endTime` in the filter,
 * executions from the last 24 hours are returned.
 *
 * @alpha
 *
 * Required Scopes: [api:observability-read]
 * URL: /v2/observability/resources/{resourceRid}/listExecutions
 */
export function listExecutions(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,
    $body: _Observability.ListExecutionsResourceRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Observability.ListExecutionsResponse> {
  return $foundryPlatformFetch($ctx, _listExecutions, ...args);
}
