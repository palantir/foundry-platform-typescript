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
    projectRid: _Filesystem.ProjectRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/projects/{0}/restore", 2];

/**
 * Restore the given project and any directly trashed ancestors from the trash. If the project is not
 * directly trashed, this operation will return an error.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:project:write:restore]
 * URL: /v3/platform/projects/{projectRid}/restore
 */
export function restore(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _restore, ...args);
}

const _deleteProject: $FoundryPlatformMethod<
  (
    projectRid: _Filesystem.ProjectRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v3/platform/projects/{0}", 2];

/**
 * Move the given project to the trash. Following this operation, the project can be restored, using the
 * `restore` operation, or permanently deleted using the `permanentlyDelete` operation.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:project:write:delete]
 * URL: /v3/platform/projects/{projectRid}
 */
export function deleteProject(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteProject, ...args);
}

const _deleteBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.DeleteProjectsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v3/platform/projects/deleteBatch", 3];

/**
 * Trash multiple projects in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:project:write:delete]
 * URL: /v3/platform/projects/deleteBatch
 */
export function deleteBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.DeleteProjectsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteBatch, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    projectRid: _Filesystem.ProjectRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.Project>
> = [0, "/v3/platform/projects/{0}", 2];

/**
 * Get the project with the specified resource identifier (RID).
 *
 * @alpha
 *
 * Required Scopes: [api:v3:project:read:get]
 * URL: /v3/platform/projects/{projectRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    projectRid: _Filesystem.ProjectRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.Project> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Filesystem.GetProjectsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Filesystem.GetProjectsBatchResponse>
> = [1, "/v3/platform/projects/getBatch", 3];

/**
 * Fetch multiple projects in a single request.
 *
 * @alpha
 *
 * Required Scopes: [api:v3:project:read:get]
 * URL: /v3/platform/projects/getBatch
 */
export function getBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Filesystem.GetProjectsBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Filesystem.GetProjectsBatchResponse> {
  return $foundryPlatformFetch($ctx, _getBatch, ...args);
}
