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

const _abort: $FoundryPlatformMethod<
  (
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/marketplaceInstallationJobs/{0}/abort", 2];

/**
 * Abort an installation job draft or request cancellation of a submitted installation job. This operation is
 * idempotent while the job remains available. Poll the job with `get` after aborting: submitted jobs may report
 * `ABORTING` before reaching `ABORTED`. Aborting a job that has already finished leaves its terminal status
 * unchanged.
 *
 * A submitted job may already have created resources. Cancelling it can leave the installation in an
 * inconsistent state. To recover to a consistent state, attempt a new job to the same target version.
 *
 * An aborted draft remains queryable only until automatic cleanup.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-job:write:abort]
 * URL: /v3/platform/marketplaceInstallationJobs/{marketplaceInstallationJobRid}/abort
 */
export function abort(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _abort, ...args);
}

const _discoverInputs: $FoundryPlatformMethod<
  (
    $body: _Marketplace.DiscoverInstallationJobInputsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.DiscoverInstallationJobInputsResponse>
> = [1, "/v3/platform/marketplaceInstallationJobs/discoverInputs", 3];

/**
 * Discover required and optional inputs for existing installations and their proposed target versions.
 *
 * Resolves input requirements and available sources using the requested target versions, location overrides,
 * and recommendation strategies.
 *
 * The request token must have permission to edit each target. Every input in the target product versions must
 * have an API name.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-job:read:discover-inputs]
 * URL: /v3/platform/marketplaceInstallationJobs/discoverInputs
 */
export function discoverInputs(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Marketplace.DiscoverInstallationJobInputsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.DiscoverInstallationJobInputsResponse> {
  return $foundryPlatformFetch($ctx, _discoverInputs, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    $body: _Marketplace.CreateMarketplaceInstallationJobRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.MarketplaceInstallationJob>
> = [1, "/v3/platform/marketplaceInstallationJobs", 3];

/**
 * Create a job to upgrade existing installations to their target versions.
 *
 * The operation returns before preparation and validation complete. Poll the job's status to track progress.
 *
 * Specify 1 to 10 distinct installations, with at most one installation per product. Targets must share a
 * namespace and marketplace and have at most one resulting ontology after applying overrides.
 *
 * For each target, `values` and `explicitlyUnset` replace all previously provided values and explicit unsets.
 *
 * Inputs omitted from both fields may be fulfilled by defaults, automatic mapping, or recommendations. Use
 * `discoverInputs` to inspect available sources.
 *
 * This operation is not idempotent. Repeating it may create another draft or return a conflict.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-job:write:create]
 * URL: /v3/platform/marketplaceInstallationJobs
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Marketplace.CreateMarketplaceInstallationJobRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.MarketplaceInstallationJob> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Marketplace.MarketplaceInstallationJob>
> = [0, "/v3/platform/marketplaceInstallationJobs/{0}", 2];

/**
 * Get the current status of an installation job through draft preparation and execution.
 *
 * The request token must have permission to view the draft or submitted job. Missing or inaccessible jobs return
 * `MarketplaceInstallationJobNotFound`. A failed or aborted job still returns HTTP 200 with its current status.
 *
 * @beta
 *
 * Required Scopes: [api:v3:marketplace-installation-job:read:get]
 * URL: /v3/platform/marketplaceInstallationJobs/{marketplaceInstallationJobRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    marketplaceInstallationJobRid: _Marketplace.MarketplaceInstallationJobRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Marketplace.MarketplaceInstallationJob> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
