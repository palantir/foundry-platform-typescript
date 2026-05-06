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
import type * as _Functions from "../_components.js";

//

const _getResult: $FoundryPlatformMethod<
  (
    executionId: _Functions.ExecutionId,
    $body: _Functions.GetResultExecutionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.GetExecutionResultResponse>
> = [1, "/v2/functions/executions/{0}/getResult", 3];

/**
 * Poll for the result of an async query execution.
 *
 * Returns a discriminated union:
 *
 * * running: execution is still in progress.
 * * succeeded: execution completed successfully with a return value.
 *
 * If the execution failed, a service error is thrown.
 *
 * Use the timeout parameter for long-polling: the server holds the
 * connection open for up to the specified number of seconds. If the
 * execution completes within that window, the result is returned
 * immediately. Otherwise, the running variant is returned.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/executions/{executionId}/getResult
 */
export function getResult(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    executionId: _Functions.ExecutionId,
    $body: _Functions.GetResultExecutionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.GetExecutionResultResponse> {
  return $foundryPlatformFetch($ctx, _getResult, ...args);
}

const _cancel: $FoundryPlatformMethod<
  (
    executionId: _Functions.ExecutionId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.CancelExecutionResponse>
> = [1, "/v2/functions/executions/{0}/cancel", 2];

/**
 * Cancel a running async query execution. This endpoint is idempotent.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/executions/{executionId}/cancel
 */
export function cancel(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    executionId: _Functions.ExecutionId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.CancelExecutionResponse> {
  return $foundryPlatformFetch($ctx, _cancel, ...args);
}
