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
    projectRid: _Filesystem.ProjectRid,
    $queryParams?: {
      referenceType?: _Filesystem.ProjectResourceReferenceType | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Filesystem.ListProjectResourceReferencesResponse>
> = [0, "/v2/filesystem/projects/{0}/references", 2];

/**
 * List all references in the given project
 *
 * @beta
 *
 * Required Scopes: [api:filesystem-read]
 * URL: /v2/filesystem/projects/{projectRid}/references
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,

    $queryParams?: {
      referenceType?: _Filesystem.ProjectResourceReferenceType | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Filesystem.ListProjectResourceReferencesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _add: $FoundryPlatformMethod<
  (
    projectRid: _Filesystem.ProjectRid,
    $body: _Filesystem.AddProjectResourceReferencesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/filesystem/projects/{0}/references/add", 3];

/**
 * Add references to the given project
 *
 * @beta
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/projects/{projectRid}/references/add
 */
export function add(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,
    $body: _Filesystem.AddProjectResourceReferencesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _add, ...args);
}

const _remove: $FoundryPlatformMethod<
  (
    projectRid: _Filesystem.ProjectRid,
    $body: _Filesystem.RemoveProjectResourceReferencesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/filesystem/projects/{0}/references/remove", 3];

/**
 * Remove references from the given project
 *
 * @beta
 *
 * Required Scopes: [api:filesystem-write]
 * URL: /v2/filesystem/projects/{projectRid}/references/remove
 */
export function remove(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,
    $body: _Filesystem.RemoveProjectResourceReferencesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _remove, ...args);
}
