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

import type * as _Core from "@osdk/foundry.core/unstable_do_not_use_v3";
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
import type * as _Tiles from "../_components.js";

//

const _computeElevation: $FoundryPlatformMethod<
  (
    tileSourceId: _Tiles.TileSourceId,
    $body: _Tiles.ComputeElevationRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Tiles.ComputeElevationResponse>
> = [1, "/v3/platform/tileSources/{0}/computeElevation", 3];

/**
 * Compute ground elevation at one or more points using this tile source. Results are returned in
 * the same order as the requested points. Returns a not-found error if the source does not exist
 * or the token cannot access it.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:tile-source:read:compute-elevation]
 * URL: /v3/platform/tileSources/{tileSourceId}/computeElevation
 */
export function computeElevation(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    tileSourceId: _Tiles.TileSourceId,
    $body: _Tiles.ComputeElevationRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Tiles.ComputeElevationResponse> {
  return $foundryPlatformFetch($ctx, _computeElevation, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    tileSourceId: _Tiles.TileSourceId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Tiles.TileSource>
> = [0, "/v3/platform/tileSources/{0}", 2];

/**
 * Get metadata for a single tile source, including its tile sets. Returns a not-found error if
 * the source does not exist or the token cannot access it.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:tile-source:read:get]
 * URL: /v3/platform/tileSources/{tileSourceId}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    tileSourceId: _Tiles.TileSourceId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Tiles.TileSource> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _list: $FoundryPlatformMethod<
  ($queryParams?: {
    capability?: _Tiles.Capability | undefined;
    pageSize?: _Core.PageSize | undefined;
    pageToken?: _Core.PageToken | undefined;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Tiles.ListTileSourcesResponse>
> = [0, "/v3/platform/tileSources", 2];

/**
 * List the tile sources accessible by the token.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:tile-source:read:list]
 * URL: /v3/platform/tileSources
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $queryParams?: {
      capability?: _Tiles.Capability | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Tiles.ListTileSourcesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}
