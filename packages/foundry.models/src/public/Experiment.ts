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
import type * as _Models from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.Experiment>
> = [0, "/v2/models/{0}/experiments/{1}", 2];

/**
 * Retrieve a single experiment with all metadata, parameters, series metadata, and summary metrics.
 *
 * @alpha
 *
 * Required Scopes: [api:models-read]
 * URL: /v2/models/{modelRid}/experiments/{experimentRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.Experiment> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _search: $FoundryPlatformMethod<
  (
    modelRid: _Models.ModelRid,
    $body: _Models.SearchExperimentsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.SearchExperimentsResponse>
> = [1, "/v2/models/{0}/experiments/search", 3];

/**
 * Search experiments using complex nested queries on experiment metadata, parameters, series,
 * and summary metrics. Supports AND/OR/NOT combinations and various predicates.
 * Returns a maximum of 100 results per page.
 *
 * @alpha
 *
 * Required Scopes: [api:models-read]
 * URL: /v2/models/{modelRid}/experiments/search
 */
export function search(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    modelRid: _Models.ModelRid,
    $body: _Models.SearchExperimentsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.SearchExperimentsResponse> {
  return $foundryPlatformFetch($ctx, _search, ...args);
}
