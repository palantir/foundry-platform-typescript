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
import type * as _Widgets from "../_components.js";

//

const _enable: $FoundryPlatformMethod<
  ($queryParams?: {
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Widgets.DevModeSettingsV2>
> = [1, "/v2/widgets/devModeSettingsV2/enable", 2];

/**
 * Enable dev mode for the user associated with the provided token.
 *
 * @alpha
 *
 * Required Scopes: [api:widgets-write]
 * URL: /v2/widgets/devModeSettingsV2/enable
 */
export function enable(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [$queryParams?: { preview?: _Core.PreviewMode | undefined }]
): Promise<_Widgets.DevModeSettingsV2> {
  return $foundryPlatformFetch($ctx, _enable, ...args);
}

const _setWidgetSetManifest: $FoundryPlatformMethod<
  (
    $body: _Widgets.SetWidgetSetManifestDevModeSettingsV2Request,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Widgets.DevModeSettingsV2>
> = [1, "/v2/widgets/devModeSettingsV2/setWidgetSetManifest", 3];

/**
 * Set the dev mode settings for the given widget set using the manifest format.
 * The request body is a dev settings manifest JSON object with the following
 * structure:
 *
 * {
 * "manifestVersion": "1.0.0",
 * "devSettings": {
 * "baseHref": "...",
 * "widgets": { ... },
 * "inputSpec": { ... }
 * }
 * }
 *
 * See https://github.com/palantir/osdk-ts for the widget library API types for the
 * dev settings manifest.
 *
 * @alpha
 *
 * Required Scopes: [api:widgets-write]
 * URL: /v2/widgets/devModeSettingsV2/setWidgetSetManifest
 */
export function setWidgetSetManifest(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Widgets.SetWidgetSetManifestDevModeSettingsV2Request,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Widgets.DevModeSettingsV2> {
  return $foundryPlatformFetch($ctx, _setWidgetSetManifest, ...args);
}
