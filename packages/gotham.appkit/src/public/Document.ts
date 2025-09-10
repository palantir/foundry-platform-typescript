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

import type * as _Core from "@osdk/gotham.core";
import type {
  SharedClient as $OldClient,
  SharedClientContext as $OldClientContext,
} from "@osdk/shared.client";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client2";
import type { FoundryPlatformMethod as $PlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $platformFetch } from "@osdk/shared.net.platformapi";
import type * as _Appkit from "../_components.js";

//

const _get: $PlatformMethod<
  (
    documentId: _Appkit.DocumentRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Appkit.Document>
> = [0, "/v2/appkit/documents/{0}", 2];

/**
 * Get the Document with the specified id.
 *
 * @alpha
 *
 * Required Scopes: [api:appkit-read]
 * URL: /v2/appkit/documents/{documentId}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    documentId: _Appkit.DocumentRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Appkit.Document> {
  return $platformFetch($ctx, _get, ...args);
}
