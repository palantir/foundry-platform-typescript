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
import type * as _ThirdPartyApplications from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_ThirdPartyApplications.ThirdPartyApplication>
> = [0, "/v2/thirdPartyApplications/{0}", 2];

/**
 * Get the ThirdPartyApplication with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [third-party-application:deploy-application-website]
 * URL: /v2/thirdPartyApplications/{thirdPartyApplicationRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    thirdPartyApplicationRid: _ThirdPartyApplications.ThirdPartyApplicationRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_ThirdPartyApplications.ThirdPartyApplication> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
