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
    $body: _Pack.CreateDocumentTypeRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.DocumentType>
> = [1, "/v2/pack/documentTypes", 3];

/**
 * Creates a PACK Document Type with the provided schema and metadata.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documentTypes
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.CreateDocumentTypeRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.DocumentType> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    documentTypeRid: _Pack.DocumentTypeRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.DocumentType>
> = [0, "/v2/pack/documentTypes/{0}", 2];

/**
 * Get the DocumentType with the specified rid.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documentTypes/{documentTypeRid}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentTypeRid: _Pack.DocumentTypeRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.DocumentType> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _loadByName: $FoundryPlatformMethod<
  (
    $body: _Pack.LoadByNameDocumentTypesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.DocumentType>
> = [1, "/v2/pack/documentTypes/loadByName", 3];

/**
 * Loads the PACK Document Type's metadata and schema by the provided Document Type Name.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-read]
 * URL: /v2/pack/documentTypes/loadByName
 */
export function loadByName(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.LoadByNameDocumentTypesRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.DocumentType> {
  return $foundryPlatformFetch($ctx, _loadByName, ...args);
}

const _createFirstParty: $FoundryPlatformMethod<
  (
    $body: _Pack.CreateFirstPartyDocumentTypeRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Pack.CreateFirstPartyDocumentTypeResponse>
> = [1, "/v2/pack/documentTypes/createFirstParty", 3];

/**
 * Creates a first-party Document Type with the given schema in the specified ontology.
 * This is intended for use by internal Palantir workflows. For external application developers,
 * document types should be created through the Create Document Type operation.
 *
 * @alpha
 *
 * Required Scopes: [api:pack-write]
 * URL: /v2/pack/documentTypes/createFirstParty
 */
export function createFirstParty(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Pack.CreateFirstPartyDocumentTypeRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Pack.CreateFirstPartyDocumentTypeResponse> {
  return $foundryPlatformFetch($ctx, _createFirstParty, ...args);
}
