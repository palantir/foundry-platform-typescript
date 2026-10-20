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
import type * as _Marketplace from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    marketplaceInstallationRid: _Marketplace.MarketplaceInstallationRid,
    $queryParams?: {
      selection?: _Marketplace.InstallationInputSelection | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Marketplace.MarketplaceInstallationInputs>
> = [0, "/v3/platform/marketplaceInstallations/{0}/inputs", 2];

/**
 * Get the current fulfilled input values and explicit unset inputs of an installation.
 *
 * By default, only manually fulfilled inputs are returned. Set `selection` to `ALL` to return fulfilled inputs
 * from every stored source. Explicitly unset inputs are returned regardless of `selection`.
 *
 * Optional inputs with neither a value nor an explicit unset are omitted.
 *
 * Returned values may use a different supported representation from the value originally provided.
 *
 * Credential values expose secret names only, never plaintext, and cannot be submitted to another installation job.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-inputs:read:get]
 * URL: /v3/platform/marketplaceInstallations/{marketplaceInstallationRid}/inputs
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceInstallationRid: _Marketplace.MarketplaceInstallationRid,

    $queryParams?: {
      selection?: _Marketplace.InstallationInputSelection | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Marketplace.MarketplaceInstallationInputs> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
