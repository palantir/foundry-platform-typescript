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
import type * as _Connectivity from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.Connection>
> = [0, "/v2/connectivity/connections/{0}", 2];

/**
 * Get the Connection with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-connection-read]
 * URL: /v2/connectivity/connections/{connectionRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.Connection> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _updateSecrets: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    $body: _Connectivity.UpdateSecretsConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/connectivity/connections/{0}/updateSecrets", 3];

/**
 * Updates the secrets on the connection to the specified secret values.
 * Secrets that are currently configured on the connection but are omitted in the request will remain unchanged.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-connection-write]
 * URL: /v2/connectivity/connections/{connectionRid}/updateSecrets
 */
export function updateSecrets(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    $body: _Connectivity.UpdateSecretsConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _updateSecrets, ...args);
}