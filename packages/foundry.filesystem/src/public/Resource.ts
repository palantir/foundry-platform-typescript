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

const _deleteResource: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/filesystem/resources/{0}", 2];

/**
 * Move the given resource to the trash. Following this operation, the resource can be restored, using the
 * `restore` operation, or permanently deleted using the `permanentlyDelete` operation.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/resources/{resourceRid}
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

const _get: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Resource>
> = [0, "/v2/filesystem/resources/{0}", 2];

/**
 * Get the Resource with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/resources/{resourceRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Resource> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getByPath: $FoundryPlatformMethod<
  ($queryParams: {
    path: _Filesystem.ResourcePath;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Filesystem.Resource>
> = [0, "/v2/filesystem/resources/getByPath", 2];

/**
 * Get a Resource by its absolute path.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/resources/getByPath
 */
export function getByPath(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $queryParams: {
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
> = [1, "/v2/filesystem/resources/{0}/restore", 2];

/**
 * Restore the given resource and any directly trashed ancestors from the trash. If the resource is not
 * trashed, this operation will be ignored.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/resources/{resourceRid}/restore
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

const _permanentlyDelete: $FoundryPlatformMethod<
  (
    resourceRid: _Filesystem.ResourceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/filesystem/resources/{0}/permanentlyDelete", 2];

/**
 * Permanently delete the given resource from the trash. If the Resource is not directly trashed, a
 * `ResourceNotTrashed` error will be thrown.
 *
 * @alpha
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/resources/{resourceRid}/permanentlyDelete
 */
export function permanentlyDelete(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    resourceRid: _Filesystem.ResourceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _permanentlyDelete, ...args);
}
