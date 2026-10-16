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
import type * as _Filesystem from "../_components.js";

//

const _getByPath: $FoundryPlatformMethod<
  ($queryParams: {
    include: Array<_Filesystem.AdditionalField>;
    path: _Filesystem.ResourcePath;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Filesystem.Resource>
> = [0, "/v3/platform/resources/getByPath", 2];

/**
 * Get a resource by its absolute path. The leading slash is optional.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:read:get-by-path]
 * URL: /v3/platform/resources/getByPath
 */
export function getByPath(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $queryParams: {
      include: Array<_Filesystem.AdditionalField>;
      path: _Filesystem.ResourcePath;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.Resource> {
  return $foundryPlatformFetch($ctx, _getByPath, ...args);
}

const _restore: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/resources/{0}/restore", 2];

/**
 * Restore the given resource and any directly trashed ancestors from the trash. If the resource is not
 * directly trashed, this operation will return an error.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:write:restore]
 * URL: /v3/platform/resources/{resourceRid}/restore
 */
export function restore(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _restore, ...args);
}

const _deleteResource: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v3/platform/resources/{0}", 2];

/**
 * Move the given resource to the trash. Following this operation, the resource can be restored, using the
 * `restore` operation, or permanently deleted using the `permanentlyDelete` operation.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:write:delete]
 * URL: /v3/platform/resources/{resourceRid}
 */
export function deleteResource(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteResource, ...args);
}

const _deleteBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.DeleteResourcesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/resources/deleteBatch", 3];

/**
 * Trash multiple resources in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:write:delete]
 * URL: /v3/platform/resources/deleteBatch
 */
export function deleteBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.DeleteResourcesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBatch, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams: {
      include: Array<_Filesystem.AdditionalField>;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Filesystem.Resource>
> = [0, "/v3/platform/resources/{0}", 2];

/**
 * Get the resource with the specified resource identifier (RID).
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:read:get]
 * URL: /v3/platform/resources/{resourceRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams: {
      include: Array<_Filesystem.AdditionalField>;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.Resource> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.GetResourcesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.GetResourcesBatchResponse>
> = [1, "/v3/platform/resources/getBatch", 3];

/**
 * Fetch multiple resources in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:resource:read:get]
 * URL: /v3/platform/resources/getBatch
 */
export function getBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.GetResourcesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.GetResourcesBatchResponse> {
  return $foundryPlatformFetch($ctx, _getBatch, ...args);
}
