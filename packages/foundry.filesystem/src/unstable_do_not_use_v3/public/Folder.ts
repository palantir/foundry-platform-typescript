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

const _restore: $FoundryPlatformMethod<
  (
    folderRid: _Core.FolderRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/folders/{0}/restore", 2];

/**
 * Restore the given folder and any directly trashed ancestors from the trash. If the folder is not
 * directly trashed, this operation will return an error.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:write:restore]
 * URL: /v3/platform/folders/{folderRid}/restore
 */
export function restore(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    folderRid: _Core.FolderRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _restore, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    $body: _Filesystem.CreateFolderRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Folder>
> = [1, "/v3/platform/folders", 3];

/**
 * Create a new folder in the given parent folder.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:write:create]
 * URL: /v3/platform/folders
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Filesystem.CreateFolderRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Folder> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteFolder: $FoundryPlatformMethod<
  (
    folderRid: _Core.FolderRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v3/platform/folders/{0}", 2];

/**
 * Move the given folder to the trash. Following this operation, the folder can be restored, using the
 * `restore` operation, or permanently deleted using the `permanentlyDelete` operation.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:write:delete]
 * URL: /v3/platform/folders/{folderRid}
 */
export function deleteFolder(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    folderRid: _Core.FolderRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteFolder, ...args);
}

const _deleteBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.DeleteFoldersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/folders/deleteBatch", 3];

/**
 * Trash multiple folders in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:write:delete]
 * URL: /v3/platform/folders/deleteBatch
 */
export function deleteBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.DeleteFoldersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBatch, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    folderRid: _Core.FolderRid,
    $queryParams: {
      include: Array<_Filesystem.AdditionalField>;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Filesystem.Folder>
> = [0, "/v3/platform/folders/{0}", 2];

/**
 * Get the folder with the specified resource identifier (RID).
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:read:get]
 * URL: /v3/platform/folders/{folderRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    folderRid: _Core.FolderRid,

    $queryParams: {
      include: Array<_Filesystem.AdditionalField>;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.Folder> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.GetFoldersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.GetFoldersBatchResponse>
> = [1, "/v3/platform/folders/getBatch", 3];

/**
 * Fetch multiple folders in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:folder:read:get]
 * URL: /v3/platform/folders/getBatch
 */
export function getBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.GetFoldersBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.GetFoldersBatchResponse> {
  return $foundryPlatformFetch($ctx, _getBatch, ...args);
}
