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

const _list: $FoundryPlatformMethod<
  (
    marketplaceRid: _Marketplace.MarketplaceRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Marketplace.ListMarketplaceProductsResponse>
> = [0, "/v3/platform/marketplaces/{0}/products", 2];

/**
 * List products with a published version available in this Marketplace, ordered by product creation time, newest
 * first. Each product's metadata describes its latest published version, including deprecated versions.
 *
 * The default and maximum page size is 100. A page may be empty even when `nextPageToken` is present;
 * continue paging until it is absent.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:marketplace-product:read:list]
 * URL: /v3/platform/marketplaces/{marketplaceRid}/products
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceRid: _Marketplace.MarketplaceRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Marketplace.ListMarketplaceProductsResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}
