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

const _create: $FoundryPlatformMethod<
  (
    $body: _Marketplace.CreateMarketplaceInstallationRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.MarketplaceInstallation>
> = [1, "/v3/platform/marketplaceInstallations", 3];

/**
 * Register a product installation in the given project or folder without running an installation job or
 * installing product resources. Returns the created installation with its current Compass metadata and
 * no latest target version. A subsequent installation job selects the version to install.
 *
 * This operation is not idempotent. Repeated requests create separate installations unless the selected
 * product version's singleton policy prohibits another installation in the destination namespace, in
 * which case SingletonMarketplaceInstallationAlreadyExists is returned.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation:write:create]
 * URL: /v3/platform/marketplaceInstallations
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Marketplace.CreateMarketplaceInstallationRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.MarketplaceInstallation> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    marketplaceInstallationRid: _Marketplace.MarketplaceInstallationRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.MarketplaceInstallation>
> = [0, "/v3/platform/marketplaceInstallations/{0}", 2];

/**
 * Get a registered installation and the product version targeted by its latest submitted job.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation:read:get]
 * URL: /v3/platform/marketplaceInstallations/{marketplaceInstallationRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceInstallationRid: _Marketplace.MarketplaceInstallationRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.MarketplaceInstallation> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
