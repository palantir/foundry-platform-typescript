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
import type * as _Notepad from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    documentRid: _Notepad.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Notepad.GetDocumentResponse>
> = [0, "/v2/notepad/documents/{0}/get", 2];

/**
 * Loads the contents of a Document.
 *
 * Elements that this API cannot represent, that cannot be loaded, or that the caller does not have access
 * to are returned as "placeholder" elements. Requests made with scoped tokens may return additional
 * placeholders.
 *
 * Clients should be aware that new Block or Inline subtypes may be added to this endpoint in the future,
 * and some elements that are currently returned as placeholders will instead be returned as those new
 * subtypes.
 *
 * @alpha
 *
 * Required Scopes: [api:notepad-read]
 * URL: /v2/notepad/documents/{documentRid}/get
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentRid: _Notepad.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Notepad.GetDocumentResponse> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _create: $FoundryPlatformMethod<
  (
    $body: _Notepad.CreateNotepadDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Notepad.Document>
> = [1, "/v2/notepad/documents/create", 3];

/**
 * Creates a Document in the specified parent folder, optionally with a name and content.
 *
 * @alpha
 *
 * Required Scopes: [api:notepad-write]
 * URL: /v2/notepad/documents/create
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Notepad.CreateNotepadDocumentRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Notepad.Document> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}
