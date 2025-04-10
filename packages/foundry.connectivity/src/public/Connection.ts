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

const _create: $FoundryPlatformMethod<
  (
    $body: _Connectivity.CreateConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.Connection>
> = [1, "/v2/connectivity/connections", 3];

/**
 * Creates a new Connection with a [direct connection](https://www.palantir.com/docs/foundry/data-connection/core-concepts/#direct-connection) runtime.
 *
 * Any secrets specified in the request body are transmitted over the network encrypted using TLS. Once the
 * secrets reach Foundry's servers, they will be temporarily decrypted and remain in plaintext in memory to
 * be processed as needed. They will stay in plaintext in memory until the garbage collection process cleans
 * up the memory. The secrets are always stored encrypted on our servers.
 * By using this endpoint, you acknowledge and accept any potential risks associated with the temporary
 * in-memory handling of secrets. If you do not want your secrets to be temporarily decrypted, you should
 * use the Foundry UI instead.
 *
 * @alpha
 *
 * Required Scopes: [api:connectivity-connection-write]
 * URL: /v2/connectivity/connections
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Connectivity.CreateConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.Connection> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.Connection>
> = [0, "/v2/connectivity/connections/{0}", 2];

/**
 * Get the Connection with the specified rid.
 *
 * @beta
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
    $body: _Connectivity.UpdateSecretsForConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/connectivity/connections/{0}/updateSecrets", 3];

/**
 * Updates the secrets on the connection to the specified secret values.
 * Secrets that are currently configured on the connection but are omitted in the request will remain unchanged.
 *
 * Secrets are transmitted over the network encrypted using TLS. Once the secrets reach Foundry's servers,
 * they will be temporarily decrypted and remain in plaintext in memory to be processed as needed.
 * They will stay in plaintext in memory until the garbage collection process cleans up the memory.
 * The secrets are always stored encrypted on our servers.
 *
 * By using this endpoint, you acknowledge and accept any potential risks associated with the temporary
 * in-memory handling of secrets. If you do not want your secrets to be temporarily decrypted, you should
 * use the Foundry UI instead.
 *
 * @beta
 *
 * Required Scopes: [api:connectivity-connection-write]
 * URL: /v2/connectivity/connections/{connectionRid}/updateSecrets
 */
export function updateSecrets(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,
    $body: _Connectivity.UpdateSecretsForConnectionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _updateSecrets, ...args);
}

const _getConfiguration: $FoundryPlatformMethod<
  (
    connectionRid: _Connectivity.ConnectionRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Connectivity.ConnectionConfiguration>
> = [0, "/v2/connectivity/connections/{0}/getConfiguration", 2];

/**
 * Retrieves the ConnectionConfiguration of the [Connection](https://www.palantir.com/docs/foundry/data-connection/set-up-source/) itself.
 * This operation is intended for use when other Connection data is not required, providing a lighter-weight alternative to `getConnection` operation.
 *
 * @beta
 *
 * Required Scopes: [api:connectivity-connection-read]
 * URL: /v2/connectivity/connections/{connectionRid}/getConfiguration
 */
export function getConfiguration(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    connectionRid: _Connectivity.ConnectionRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Connectivity.ConnectionConfiguration> {
  return $foundryPlatformFetch($ctx, _getConfiguration, ...args);
}
