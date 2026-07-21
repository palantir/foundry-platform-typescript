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
import type * as _Pack from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    $body: _Pack.CreateDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.Document>
> = [1, "/v2/pack/documents", 3];

/**
 * Creates a new Document.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.CreateDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.Document> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteDocument: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/pack/documents/{0}", 2];

/**
 * Delete the Document with the specified id.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/{documentId}
 */
export function deleteDocument(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteDocument, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.Document>
> = [0, "/v2/pack/documents/{0}", 2];

/**
 * Get the Document with the specified id.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.Document> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _search: $FoundryPlatformMethod<
  (
    $body: _Pack.SearchDocumentsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.DocumentSearchResponse>
> = [1, "/v2/pack/documents/search", 3];

/**
 * Loads all PACK Documents visible to the user of the provided Document Type Name. If a search request
 * is provided, filters and sorts the results based on the user's query, sort, and pagination options.
 * When an ontology RID is provided on the request, results are scoped to that ontology; otherwise the
 * document type name is searched across all ontologies.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/search
 */
export function search(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.SearchDocumentsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.DocumentSearchResponse> {
  return $foundryPlatformFetch($ctx, _search, ...args);
}

const _update: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $body: _Pack.UpdateDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.Document>
> = [1, "/v2/pack/documents/{0}/update", 3];

/**
 * Updates the metadata (name, description, and/or security) of a PACK Document.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/{documentId}/update
 */
export function update(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,
    $body: _Pack.UpdateDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.Document> {
  return $foundryPlatformFetch($ctx, _update, ...args);
}

const _resolveApplication: $FoundryPlatformMethod<
  (
    documentId: _Pack.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.ResolveDocumentApplicationResponse>
> = [0, "/v2/pack/documents/{0}/resolveApplication", 2];

/**
 * Resolves a PACK Document to the application that owns its Document Type. Returns the owning
 * application id from the document type metadata, or empty if none is configured.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documents/{documentId}/resolveApplication
 */
export function resolveApplication(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Pack.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.ResolveDocumentApplicationResponse> {
  return $foundryPlatformFetch($ctx, _resolveApplication, ...args);
}

const _createChild: $FoundryPlatformMethod<
  (
    $body: _Pack.CreateDocumentAsChildRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.Document>
> = [1, "/v2/pack/documents/createChild", 3];

/**
 * Creates a PACK Document as a hidden child of the given folder or document, inheriting its security and staying
 * in sync as the parent's security changes.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/createChild
 */
export function createChild(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.CreateDocumentAsChildRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.Document> {
  return $foundryPlatformFetch($ctx, _createChild, ...args);
}

const _createMatchingSecurity: $FoundryPlatformMethod<
  (
    $body: _Pack.CreateDocumentWithMatchingSecurityRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.Document>
> = [1, "/v2/pack/documents/createMatchingSecurity", 3];

/**
 * Creates a PACK Document that copies the directly-applied security markings of a source Document. The
 * new Document's security is independent of the source's afterward.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documents/createMatchingSecurity
 */
export function createMatchingSecurity(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.CreateDocumentWithMatchingSecurityRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.Document> {
  return $foundryPlatformFetch($ctx, _createMatchingSecurity, ...args);
}
