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
