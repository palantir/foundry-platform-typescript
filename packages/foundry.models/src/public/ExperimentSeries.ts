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

const _json: $FoundryPlatformMethod<
  (
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,
    experimentSeriesName: _Models.SeriesName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      offset?: number | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Models.Series>
> = [0, "/v2/models/{0}/experiments/{1}/series/{2}/json", 2];

/**
 * Retrieve raw time-series data for a single series in JSON format.
 * Results are paginated with a default page size of 200 and a maximum of 1000.
 *
 * @alpha
 *
 * Required Scopes: [api:models-read]
 * URL: /v2/models/{modelRid}/experiments/{experimentRid}/series/{experimentSeriesName}/json
 */
export function json(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,
    experimentSeriesName: _Models.SeriesName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      offset?: number | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Models.Series> {
  return $foundryPlatformFetch($ctx, _json, ...args);
}

const _parquet: $FoundryPlatformMethod<
  (
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,
    experimentSeriesName: _Models.SeriesName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<Response>
> = [
  0,
  "/v2/models/{0}/experiments/{1}/series/{2}/parquet",
  2,
  ,
  "application/octet-stream",
];

/**
 * Retrieve raw time-series data for a single series as a streamed binary response in Apache Parquet format.
 *
 * @alpha
 *
 * Required Scopes: [api:models-read]
 * URL: /v2/models/{modelRid}/experiments/{experimentRid}/series/{experimentSeriesName}/parquet
 */
export function parquet(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    modelRid: _Models.ModelRid,
    experimentRid: _Models.ExperimentRid,
    experimentSeriesName: _Models.SeriesName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _parquet, ...args);
}
