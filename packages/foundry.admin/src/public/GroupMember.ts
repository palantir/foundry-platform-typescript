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
import type * as _Admin from "../_components.js";

//

const _list: $FoundryPlatformMethod<
  (
    groupId: _Core.PrincipalId,
    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Admin.ListGroupMembersResponse>
> = [0, "/v2/admin/groups/{0}/groupMembers", 2];

/**
 * Lists all members (which can be a User or a Group) of a given Group.
 *
 * This is a paged endpoint. Each page may be smaller or larger than the requested page size. However,
 * it is guaranteed that if there are more results available, the `nextPageToken` field will be populated.
 * To get the next page, make the same request again, but set the value of the `pageToken` query parameter
 * to be value of the `nextPageToken` value of the previous response. If there is no `nextPageToken` field
 * in the response, you are on the last page.
 *
 * @public
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/groups/{groupId}/groupMembers
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    groupId: _Core.PrincipalId,

    $queryParams?: {
      transitive?: boolean | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Admin.ListGroupMembersResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _add: $FoundryPlatformMethod<
  (
    groupId: _Core.PrincipalId,
    $body: _Admin.AddGroupMembersRequest,
  ) => Promise<void>
> = [1, "/v2/admin/groups/{0}/groupMembers/add", 1];

/**
 * @public
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups/{groupId}/groupMembers/add
 */
export function add(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [groupId: _Core.PrincipalId, $body: _Admin.AddGroupMembersRequest]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _add, ...args);
}

const _remove: $FoundryPlatformMethod<
  (
    groupId: _Core.PrincipalId,
    $body: _Admin.RemoveGroupMembersRequest,
  ) => Promise<void>
> = [1, "/v2/admin/groups/{0}/groupMembers/remove", 1];

/**
 * @public
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/groups/{groupId}/groupMembers/remove
 */
export function remove(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [groupId: _Core.PrincipalId, $body: _Admin.RemoveGroupMembersRequest]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _remove, ...args);
}
