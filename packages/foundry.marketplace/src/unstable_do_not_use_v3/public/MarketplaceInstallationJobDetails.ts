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
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.MarketplaceInstallationJobDetails>
> = [0, "/v3/platform/marketplaceInstallationJobs/{0}/details", 2];

/**
 * Get available validation results and failure diagnostics for an installation job or draft. Use the
 * installation job's `status` to track its progress and outcome. These details can help explain why a draft or
 * job has not progressed or completed as expected.
 *
 * Draft owners receive full validation errors. Other authorized viewers receive a validation summary instead.
 * Failed and aborted jobs return HTTP 200 with their available diagnostics. An explicit abort or a
 * validation-only submission rejection may have no failure diagnostics.
 * The job remains queryable under the same RID after its draft is submitted, subject to retention and access.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-job-details:read:get]
 * URL: /v3/platform/marketplaceInstallationJobs/{marketplaceInstallationJobRid}/details
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.MarketplaceInstallationJobDetails> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
