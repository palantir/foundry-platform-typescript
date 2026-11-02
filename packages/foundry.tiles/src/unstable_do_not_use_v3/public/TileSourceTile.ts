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

const _get: $FoundryPlatformMethod<
  (
    tileSourceId: _Tiles.TileSourceId,
    z: number,
    x: number,
    y: number,
    $queryParams?: {
      format?: _Tiles.TileFormat | undefined;
      tilingScheme?: _Tiles.TilingScheme | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<Response>
> = [
  0,
  "/v3/media/tileSources/{0}/tiles/{1}/{2}/{3}",
  2,
  ,
  "application/octet-stream",
];

/**
 * Get a tile from a tile source.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:tile-source-tile:read:get]
 * URL: /v3/media/tileSources/{tileSourceId}/tiles/{z}/{x}/{y}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    tileSourceId: _Tiles.TileSourceId,
    z: number,
    x: number,
    y: number,

    $queryParams?: {
      format?: _Tiles.TileFormat | undefined;
      tilingScheme?: _Tiles.TilingScheme | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
