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
    organizationRid: _Core.OrganizationRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Admin.ListOrganizationGuestMembersResponse>
> = [0, "/v2/admin/organizations/{0}/guestMembers", 2];

/**
 * Lists all guest members of an Organization.
 *
 * @alpha
 *
 * Required Scopes: [api:admin-read]
 * URL: /v2/admin/organizations/{organizationRid}/guestMembers
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    organizationRid: _Core.OrganizationRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Admin.ListOrganizationGuestMembersResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _add: $FoundryPlatformMethod<
  (
    organizationRid: _Core.OrganizationRid,
    $body: _Admin.AddOrganizationGuestMembersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/admin/organizations/{0}/guestMembers/add", 3];

/**
 * Adds principals as guest members of an Organization. Attempting to add a primary member through this endpoint will not add the principal as a guest, but will still return a successful response.
 *
 * @alpha
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/organizations/{organizationRid}/guestMembers/add
 */
export function add(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    organizationRid: _Core.OrganizationRid,
    $body: _Admin.AddOrganizationGuestMembersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _add, ...args);
}

const _remove: $FoundryPlatformMethod<
  (
    organizationRid: _Core.OrganizationRid,
    $body: _Admin.RemoveOrganizationGuestMembersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/admin/organizations/{0}/guestMembers/remove", 3];

/**
 * Removes principals from being guest members of an Organization. Attempting to remove a primary member through this endpoint will not remove the primary member, but will still return a successful response.
 *
 * @alpha
 *
 * Required Scopes: [api:admin-write]
 * URL: /v2/admin/organizations/{organizationRid}/guestMembers/remove
 */
export function remove(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    organizationRid: _Core.OrganizationRid,
    $body: _Admin.RemoveOrganizationGuestMembersRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _remove, ...args);
}
