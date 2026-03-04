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
import type * as _Streams from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    $body: _Streams.CreateSubscriberRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Subscriber>
> = [1, "/v2/streams/datasets/{0}/streams/{1}/subscribers", 3];

/**
 * Register a new subscriber for a stream. Subscribers maintain server-side offset tracking,
 * allowing reliable consumption without client-side state management.
 *
 * If a subscriber with the same ID already exists for this stream, the existing registration
 * is returned. If a subscriber with the same ID exists for a different stream, an error is returned.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    $body: _Streams.CreateSubscriberRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Subscriber> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _deleteSubscriber: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [3, "/v2/streams/datasets/{0}/streams/{1}/subscribers/{2}", 2];

/**
 * Delete a subscriber and all its committed offset state. After deletion, the subscriber ID
 * can be reused to create a new subscriber.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers/{subscriberSubscriberId}
 */
export function deleteSubscriber(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _deleteSubscriber, ...args);
}

const _readRecords: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.ReadRecordsFromSubscriberRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.ReadSubscriberRecordsResponse>
> = [
  1,
  "/v2/highScale/streams/datasets/{0}/streams/{1}/subscribers/{2}/readRecords",
  3,
];

/**
 * Fetch records for a subscriber starting from their committed offset. Returns records
 * grouped by partition.
 *
 * If `autoCommit` is true, offsets are automatically committed after the records are
 * fetched, so the next read will start from where this one left off.
 *
 * If `autoCommit` is false, you must call `commitOffsets` to update the read position.
 * Use manual commits for at-least-once processing where you need to ensure records are
 * processed before acknowledging them.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-read]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers/{subscriberSubscriberId}/readRecords
 */
export function readRecords(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.ReadRecordsFromSubscriberRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.ReadSubscriberRecordsResponse> {
  return $foundryPlatformFetch($ctx, _readRecords, ...args);
}

const _commitOffsets: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.CommitSubscriberOffsetsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.PartitionOffsets>
> = [
  1,
  "/v2/highScale/streams/datasets/{0}/streams/{1}/subscribers/{2}/commitOffsets",
  3,
];

/**
 * Explicitly commit offsets for a subscriber. Required when `autoCommit` is false.
 *
 * Pass the last offset you processed for each partition.
 *
 * For example, if you processed a record at offset 50, commit `{"0": 50}` and the next
 * read from partition "0" will start at offset 51.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers/{subscriberSubscriberId}/commitOffsets
 */
export function commitOffsets(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.CommitSubscriberOffsetsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.PartitionOffsets> {
  return $foundryPlatformFetch($ctx, _commitOffsets, ...args);
}

const _getReadPosition: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $queryParams?: {
      viewRid?: _Streams.ViewRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Streams.PartitionOffsets>
> = [
  0,
  "/v2/highScale/streams/datasets/{0}/streams/{1}/subscribers/{2}/getReadPosition",
  2,
];

/**
 * Get the current read position for a subscriber. Returns the offset per partition where the next read
 * will begin.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-read]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers/{subscriberSubscriberId}/getReadPosition
 */
export function getReadPosition(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,

    $queryParams?: {
      viewRid?: _Streams.ViewRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Streams.PartitionOffsets> {
  return $foundryPlatformFetch($ctx, _getReadPosition, ...args);
}

const _resetOffsets: $FoundryPlatformMethod<
  (
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.ResetSubscriberOffsetsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.PartitionOffsets>
> = [
  1,
  "/v2/highScale/streams/datasets/{0}/streams/{1}/subscribers/{2}/resetOffsets",
  3,
];

/**
 * Reset subscriber offsets to a specific position. Use this to replay data from the
 * beginning, skip to the latest records, or jump to specific offsets.
 *
 * The `position` parameter determines where reading will resume:
 *
 * * `earliest`: Reset to the beginning of each partition (offset 0)
 * * `latest`: Reset to the current end of each partition
 * * `specific`: Reset to explicit offsets for each partition
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/subscribers/{subscriberSubscriberId}/resetOffsets
 */
export function resetOffsets(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    datasetRid: _Core.DatasetRid,
    streamBranchName: _Core.BranchName,
    subscriberSubscriberId: _Streams.SubscriberId,
    $body: _Streams.ResetSubscriberOffsetsRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.PartitionOffsets> {
  return $foundryPlatformFetch($ctx, _resetOffsets, ...args);
}
