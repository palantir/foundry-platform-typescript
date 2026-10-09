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

import type * as _Core from "@osdk/foundry.core/v2";
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
import type * as _Pack from "../_components.js";

//

const _deletePublishedVersion: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/pack/documents/{0}/publishedVersions/{1}", 2];

/**
 * Deletes a published version so it can no longer be listed or loaded. Repeating the request is safe.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/{publishedVersionRef}
 */
export function deletePublishedVersion(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deletePublishedVersion, ...args);
}

const _list: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.ListPublishedVersionsResponse>
> = [0, "/v2/pack/documents/{0}/publishedVersions", 2];

/**
 * Lists the document's active published versions, latest-first. When versions from different environments
 * are concurrent, the version published on this environment is first if one exists; otherwise a
 * deterministic ordering selects the latest. The first version is the one returned by getLatest.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/publishedVersions
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.ListPublishedVersionsResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.PublishedVersion>
> = [0, "/v2/pack/documents/{0}/publishedVersions/{1}", 2];

/**
 * Returns a published version's metadata, without its content.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/{publishedVersionRef}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.PublishedVersion> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $body: _Pack.CreatePublishedVersionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.CreatePublishedVersionResponse>
> = [1, "/v2/pack/documents/{0}/publishedVersions/create", 3];

/**
 * Publishes the document's current persisted state as an immutable published version. Republishing an
 * unchanged head returns the existing version. A document retains at most 250 published versions; when it
 * is already at that limit, publishing auto-evicts the oldest versions to make room and reports them in
 * the response.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/create
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,
    $body: _Pack.CreatePublishedVersionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.CreatePublishedVersionResponse> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _getLatest: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.PublishedVersion>
> = [0, "/v2/pack/documents/{0}/publishedVersions/getLatest", 2];

/**
 * Returns the metadata (name, description, creator, timestamp) of the resolved latest active version,
 * without its content. For a linear history this is the global latest; when concurrent tips exist it is
 * the version published on this environment if it has one, otherwise the deterministic global latest -
 * the version at the top of the list.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/getLatest
 */
export function getLatest(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.PublishedVersion> {
  return $foundryPlatformFetch($ctx, _getLatest, ...args);
}

const _getLatestContents: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<Response>
> = [
  0,
  "/v2/pack/documents/{0}/publishedVersions/getLatestContents",
  2,
  ,
  "application/octet-stream",
];

/**
 * Streams the frozen document content of the resolved latest active version as a merged binary Yjs
 * update, with no metadata. The latest is resolved the same way as getLatest:
 * the global latest for a linear history, or the version published on this environment when concurrent
 * tips exist.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/getLatestContents
 */
export function getLatestContents(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _getLatestContents, ...args);
}

const _getContents: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<Response>
> = [
  0,
  "/v2/pack/documents/{0}/publishedVersions/{1}/getContents",
  2,
  ,
  "application/octet-stream",
];

/**
 * Streams the version's frozen document content as a merged binary Yjs update, with no metadata.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/publishedVersions/{publishedVersionRef}/getContents
 */
export function getContents(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,
    publishedVersionRef: _Pack.PublishedVersionRef,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _getContents, ...args);
}
