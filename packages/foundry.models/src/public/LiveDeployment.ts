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
import type * as _Models from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    $body: _Models.CreateLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.LiveDeployment>
> = [1, "/v2/models/liveDeployments", 3];

/**
 * Creates a new live deployment for a model version with the specified runtime configuration. The deployment will begin provisioning compute resources and deploying the target model version.
 *
 * @alpha
 *
 * Required Scopes: [api:models-write]
 * URL: /v2/models/liveDeployments
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Models.CreateLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.LiveDeployment> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    liveDeploymentRid: _Models.LiveDeploymentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.LiveDeployment>
> = [0, "/v2/models/liveDeployments/{0}", 2];

/**
 * Retrieves a live deployment by its Resource Identifier (RID), including its deployed model version and runtime configuration.
 *
 * @alpha
 *
 * Required Scopes: [api:models-read]
 * URL: /v2/models/liveDeployments/{liveDeploymentRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    liveDeploymentRid: _Models.LiveDeploymentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.LiveDeployment> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _replace: $FoundryPlatformMethod<
  (
    liveDeploymentRid: _Models.LiveDeploymentRid,
    $body: _Models.ReplaceLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.LiveDeployment>
> = [2, "/v2/models/liveDeployments/{0}", 3];

/**
 * Updates the runtime configuration of the live deployment. The deployment will apply the new configuration to the running replicas.
 *
 * @alpha
 *
 * Required Scopes: [api:models-write]
 * URL: /v2/models/liveDeployments/{liveDeploymentRid}
 */
export function replace(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    liveDeploymentRid: _Models.LiveDeploymentRid,
    $body: _Models.ReplaceLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.LiveDeployment> {
  return $foundryPlatformFetch($ctx, _replace, ...args);
}

const _transformJson: $FoundryPlatformMethod<
  (
    liveDeploymentRid: _Models.LiveDeploymentRid,
    $body: _Models.TransformJsonLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Models.TransformLiveDeploymentResponse>
> = [1, "/v2/models/liveDeployments/{0}/transformJson", 3];

/**
 * Performs inference on the live deployment.
 *
 * @beta
 *
 * Required Scopes: [api:models-execute]
 * URL: /v2/models/liveDeployments/{liveDeploymentRid}/transformJson
 */
export function transformJson(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    liveDeploymentRid: _Models.LiveDeploymentRid,
    $body: _Models.TransformJsonLiveDeploymentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Models.TransformLiveDeploymentResponse> {
  return $foundryPlatformFetch($ctx, _transformJson, ...args);
}
