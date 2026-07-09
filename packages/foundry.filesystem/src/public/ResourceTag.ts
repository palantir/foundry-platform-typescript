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
import type * as _Filesystem from "../_components.js";

//

const _list: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.ListResourceTagsResponse>
> = [0, "/v2/filesystem/resources/{0}/tags", 2];

/**
 * List the tags applied to a resource.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/resources/{resourceRid}/tags
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.ListResourceTagsResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _add: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $body: _Filesystem.AddResourceTagsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/filesystem/resources/{0}/tags/add", 3];

/**
 * Apply tags to a resource.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/resources/{resourceRid}/tags/add
 */
export function add(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,
    $body: _Filesystem.AddResourceTagsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _add, ...args);
}

const _remove: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $body: _Filesystem.RemoveResourceTagsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/filesystem/resources/{0}/tags/remove", 3];

/**
 * Remove tags from a resource.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/resources/{resourceRid}/tags/remove
 */
export function remove(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,
    $body: _Filesystem.RemoveResourceTagsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _remove, ...args);
}
