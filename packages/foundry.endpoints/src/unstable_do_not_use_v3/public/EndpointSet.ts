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
import type * as _Endpoints from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    endpointSetRid: _Endpoints.EndpointSetRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Endpoints.EndpointSet>
> = [0, "/v3/platform/endpointSets/{0}", 2];

/**
 * @alpha
 *
 * Required Scopes: [api:v3:endpoint-set:read:get]
 * URL: /v3/platform/endpointSets/{endpointSetRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    endpointSetRid: _Endpoints.EndpointSetRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Endpoints.EndpointSet> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
