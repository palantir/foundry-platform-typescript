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
import type * as _Functions from "../_components.js";

//

const _get: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $queryParams?: {
      version?: _Functions.FunctionVersion | undefined;
      latestVersionResolution?: _Functions.LatestVersionResolution | undefined;
      includePrerelease?: _Functions.IncludePrerelease | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Functions.Query>
> = [0, "/v2/functions/queries/{0}", 2];

/**
 * Gets a specific query type with the given API name. By default, this returns the highest semantic
 * version of the query, excluding pre-release versions. To resolve the most recently published version
 * instead, including pre-release versions, set `latestVersionResolution` to `PUBLISH_TIME`.
 *
 * @beta
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/{queryApiName}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,

    $queryParams?: {
      version?: _Functions.FunctionVersion | undefined;
      latestVersionResolution?: _Functions.LatestVersionResolution | undefined;
      includePrerelease?: _Functions.IncludePrerelease | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Functions.Query> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getByRid: $FoundryPlatformMethod<
  ($queryParams: {
    rid: _Functions.FunctionRid;
    version?: _Functions.FunctionVersion | undefined;
    includePrerelease?: boolean | undefined;
    preview?: _Core.PreviewMode | undefined;
  }) => Promise<_Functions.Query>
> = [0, "/v2/functions/queries/getByRid", 2];

/**
 * Gets a specific query type with the given RID. By default, this gets the latest version of the query.
 *
 * @beta
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/getByRid
 */
export function getByRid(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $queryParams: {
      rid: _Functions.FunctionRid;
      version?: _Functions.FunctionVersion | undefined;
      includePrerelease?: boolean | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Functions.Query> {
  return $foundryPlatformFetch($ctx, _getByRid, ...args);
}

const _getByRidBatch: $FoundryPlatformMethod<
  (
    $body: Array<_Functions.GetByRidQueriesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Functions.GetByRidQueriesBatchResponse>
> = [1, "/v2/functions/queries/getByRidBatch", 3];

/**
 * Gets a list of query types by RID in bulk. By default, this gets the latest version of each query.
 *
 * Queries are filtered from the response if they don't exist or the requesting token lacks the required
 * permissions.
 *
 * The maximum batch size for this endpoint is 100.
 *
 * @beta
 *
 * Required Scopes: [api:functions-read]
 * URL: /v2/functions/queries/getByRidBatch
 */
export function getByRidBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: Array<_Functions.GetByRidQueriesBatchRequestElement>,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Functions.GetByRidQueriesBatchResponse> {
  return $foundryPlatformFetch($ctx, _getByRidBatch, ...args);
}

const _execute: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ) => Promise<_Functions.ExecuteQueryResponse>
> = [1, "/v2/functions/queries/{0}/execute", 7];

/**
 * Executes a Query and returns the result as a single JSON object. By default, this executes
 * the highest semantic version of the query, excluding pre-release versions. To resolve the
 * most recently published version instead, including pre-release versions, set
 * `latestVersionResolution` to `PUBLISH_TIME`.
 *
 * This endpoint executes global (non-ontology-scoped) query functions. For ontology-scoped
 * functions, use the equivalent endpoint under
 * `/v2/ontologies/{ontology}/queries/{queryApiName}/execute`. For streaming or incremental
 * result delivery, use `streamingExecute`.
 *
 * @beta
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/queries/{queryApiName}/execute
 */
export function execute(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ]
): Promise<_Functions.ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _execute, ...args);
}

const _streamingExecute: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.StreamingExecuteQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ) => Promise<
    AsyncGenerator<_Functions.StreamingExecuteQueryResponse, void, void>
  >
> = [1, "/v2/functions/queries/{0}/streamingExecute", 7, , "text/event-stream"];

/**
 * Executes a Query and returns results as a Server-Sent Events (`text/event-stream`) stream.
 * By default, this executes the highest semantic version of the query, excluding pre-release
 * versions. To resolve the most recently published version instead, including pre-release
 * versions, set `latestVersionResolution` to `PUBLISH_TIME`.
 *
 * This endpoint supports all Query functions. Each SSE event's `data` field is a JSON-encoded
 * `StreamingExecuteQueryResponse` – either a data batch (`type: data`) carrying one or more
 * result values, or an error (`type: error`) emitted before stream termination if execution
 * fails. Non-streaming functions emit a single data event containing the entire result;
 * streaming functions emit a data event per batch as results become available.
 *
 * Per the Server-Sent Events specification, each event is terminated by a blank line:
 *
 * ```
 * data: {"type":"data","value":[{"productId":"SKU-001","price":29.99}]}
 *
 * data: {"type":"error","errorCode":"INVALID_ARGUMENT","errorName":"QueryRuntimeError","errorInstanceId":"3f8a9c7b-2e4d-4a1f-9b8c-7d6e5f4a3b2c","errorDescription":"Division by zero","parameters":{}}
 *
 * ```
 *
 * @beta
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/queries/{queryApiName}/streamingExecute
 */
export function streamingExecute(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.StreamingExecuteQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ]
): Promise<
  AsyncGenerator<_Functions.StreamingExecuteQueryResponse, void, void>
> {
  return $foundryPlatformFetch($ctx, _streamingExecute, ...args);
}

const _streamingExecuteEvents: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.StreamingExecuteEventsQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ) => Promise<
    AsyncGenerator<_Functions.StreamingExecuteQueryResponse, void, void>
  >
> = [
  1,
  "/v2/functions/queries/{0}/streamingExecuteEvents",
  7,
  ,
  "text/event-stream",
];

/**
 * Executes a Query and returns results as a Server-Sent Events (`text/event-stream`) stream.
 * By default, this executes the highest semantic version of the query, excluding pre-release
 * versions. To resolve the most recently published version instead, including pre-release
 * versions, set `latestVersionResolution` to `PUBLISH_TIME`.
 *
 * This endpoint supports all Query functions. Each SSE event's `data` field is a JSON-encoded
 * `StreamingExecuteQueryResponse` – either a data batch (`type: data`) carrying one or more
 * result values, or an error (`type: error`) emitted before stream termination if execution
 * fails. Non-streaming functions emit a single data event containing the entire result;
 * streaming functions emit a data event per batch as results become available.
 *
 * Per the Server-Sent Events specification, each event is terminated by a blank line:
 *
 * ```
 * data: {"type":"data","value":[{"productId":"SKU-001","price":29.99}]}
 *
 * data: {"type":"error","errorCode":"INVALID_ARGUMENT","errorName":"QueryRuntimeError","errorInstanceId":"3f8a9c7b-2e4d-4a1f-9b8c-7d6e5f4a3b2c","errorDescription":"Division by zero","parameters":{}}
 *
 * ```
 *
 * @alpha
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/queries/{queryApiName}/streamingExecuteEvents
 */
export function streamingExecuteEvents(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.StreamingExecuteEventsQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ]
): Promise<
  AsyncGenerator<_Functions.StreamingExecuteQueryResponse, void, void>
> {
  return $foundryPlatformFetch($ctx, _streamingExecuteEvents, ...args);
}

const _executeAsync: $FoundryPlatformMethod<
  (
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteAsyncQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ) => Promise<_Functions.ExecuteQueryAsyncResponse>
> = [1, "/v2/functions/queries/{0}/executeAsync", 7];

/**
 * Submits a Query for asynchronous execution. Returns either an execution ID
 * for polling, or the complete result if execution finished immediately.
 *
 * Use the Execution resource's getResult endpoint to poll for the
 * result of a submitted execution.
 *
 * @alpha
 *
 * Required Scopes: [api:functions-execute]
 * URL: /v2/functions/queries/{queryApiName}/executeAsync
 */
export function executeAsync(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    queryApiName: _Functions.QueryApiName,
    $body: _Functions.ExecuteAsyncQueryRequest,
    $queryParams?: {
      transactionId?: _Functions.TransactionId | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
    $headerParams?: {
      attribution?: _Core.Attribution | undefined;
      traceParent?: _Core.TraceParent | undefined;
      traceState?: _Core.TraceState | undefined;
    },
  ]
): Promise<_Functions.ExecuteQueryAsyncResponse> {
  return $foundryPlatformFetch($ctx, _executeAsync, ...args);
}
