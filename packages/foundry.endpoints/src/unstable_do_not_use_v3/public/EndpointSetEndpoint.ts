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
    endpointRid: _Endpoints.EndpointSetEndpointRid,
    endpointSetRid: _Endpoints.EndpointSetRid,
  ) => Promise<_Endpoints.EndpointSetEndpoint>
> = [0, "/v3/platform/endpointSets/{0}/endpoints/{1}"];

/**
 * @alpha
 *
 * Required Scopes: [api:v3:endpoint-set-endpoint:read:get]
 * URL: /v3/platform/endpointSets/{endpointSetRid}/endpoints/{endpointRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    endpointRid: _Endpoints.EndpointSetEndpointRid,
    endpointSetRid: _Endpoints.EndpointSetRid,
  ]
): Promise<_Endpoints.EndpointSetEndpoint> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _list: $FoundryPlatformMethod<
  (
    endpointSetRid: _Endpoints.EndpointSetRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Endpoints.ListEndpointSetEndpointsResponse>
> = [0, "/v3/platform/endpointSets/{0}/endpoints", 2];

/**
 * @alpha
 *
 * Required Scopes: [api:v3:endpoint-set-endpoint:read:list]
 * URL: /v3/platform/endpointSets/{endpointSetRid}/endpoints
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    endpointSetRid: _Endpoints.EndpointSetRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Endpoints.ListEndpointSetEndpointsResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}
