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
    spaceRid: _Filesystem.SpaceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/spaces/{0}/restore", 2];

/**
 * Restore the given space and any directly trashed ancestors from the trash. If the space is not
 * directly trashed, this operation will return an error.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:write:restore]
 * URL: /v3/platform/spaces/{spaceRid}/restore
 */
export function restore(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    spaceRid: _Filesystem.SpaceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _restore, ...args);
}

const _deleteSpace: $FoundryPlatformMethod<
  (
    spaceRid: _Filesystem.SpaceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v3/platform/spaces/{0}", 2];

/**
 * Move the given space to the trash. Following this operation, the space can be restored, using the
 * `restore` operation, or permanently deleted using the `permanentlyDelete` operation.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:write:delete]
 * URL: /v3/platform/spaces/{spaceRid}
 */
export function deleteSpace(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    spaceRid: _Filesystem.SpaceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSpace, ...args);
}

const _deleteBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.DeleteSpacesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/spaces/deleteBatch", 3];

/**
 * Trash multiple spaces in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:write:delete]
 * URL: /v3/platform/spaces/deleteBatch
 */
export function deleteBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.DeleteSpacesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBatch, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    spaceRid: _Filesystem.SpaceRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Space>
> = [0, "/v3/platform/spaces/{0}", 2];

/**
 * Get the space with the specified resource identifier (RID).
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:read:get]
 * URL: /v3/platform/spaces/{spaceRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    spaceRid: _Filesystem.SpaceRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Space> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.GetSpacesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.GetSpacesBatchResponse>
> = [1, "/v3/platform/spaces/getBatch", 3];

/**
 * Fetch multiple spaces in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:read:get]
 * URL: /v3/platform/spaces/getBatch
 */
export function getBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.GetSpacesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.GetSpacesBatchResponse> {
  return $foundryPlatformFetch($ctx, _getBatch, ...args);
}

const _list: $FoundryPlatformMethod<
  ($queryParams?: {
    pageSize?: _Core.PageSize | undefined;
    pageToken?: _Core.PageToken | undefined;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Filesystem.ListSpacesResponse>
> = [0, "/v3/platform/spaces", 2];

/**
 * Lists all spaces.
 *
 * This is a paginated endpoint. Each page may be smaller or larger than the requested page size.
 * It is guaranteed that if there are more results available, the `nextPageToken` field will be populated.
 * To get the next page, make the same request again, but set the value of the `pageToken` query parameter
 * to be value of the `nextPageToken` value of the previous response.
 * If there is no `nextPageToken` field in the response, you are on the last page.
 *
 * The default page size is 200. The maximum page size is 200. Requests for a larger page size will be
 * clamped to 200. If pageSize is 0, the default page size is used.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:space:read:list]
 * URL: /v3/platform/spaces
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.ListSpacesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}
