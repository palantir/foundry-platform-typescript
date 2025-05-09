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
import type * as _Datasets from "@osdk/foundry.datasets";
import type * as _Filesystem from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * Compression helps reduce the size of the data being sent, resulting in lower network usage and
storage, at the cost of some additional CPU usage for compression and decompression. This stream type
is only recommended if your stream contains a high volume of repetitive strings and is experiencing poor
network bandwidth symptoms like non-zero lag, lower than expected throughput, or dropped records.
   *
   * Log Safety: SAFE
   */
export type Compressed = boolean;

/**
 * Log Safety: UNSAFE
 */
export interface CreateStreamingDatasetRequest {
  name: _Datasets.DatasetName;
  parentFolderRid: _Filesystem.FolderRid;
  schema: _Core.StreamSchema;
  branchName?: _Datasets.BranchName;
  partitionsCount?: PartitionsCount;
  streamType?: StreamType;
  compressed?: Compressed;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateStreamRequest {
  schema: CreateStreamRequestStreamSchema;
  partitionsCount?: PartitionsCount;
  streamType?: StreamType;
  branchName: _Datasets.BranchName;
  compressed?: Compressed;
}

/**
   * Configuration for utilizing the stream as a change data capture (CDC) dataset. To configure CDC on a stream, at
least one key needs to be provided.
For more information on CDC in
Foundry, see the Change Data Capture user documentation.
   *
   * Log Safety: UNSAFE
   */
export type CreateStreamRequestChangeDataCaptureConfiguration = {
  type: "fullRow";
} & CreateStreamRequestFullRowChangeDataCaptureConfiguration;

/**
 * Log Safety: UNSAFE
 */
export interface CreateStreamRequestFullRowChangeDataCaptureConfiguration {
  orderingFieldName: _Core.FieldName;
  deletionFieldName: _Core.FieldName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateStreamRequestStreamSchema {
  keyFieldNames?: Array<_Core.FieldName>;
  fields: Array<_Core.Field>;
  changeDataCapture?: _Core.ChangeDataCaptureConfiguration;
}

/**
 * Log Safety: UNSAFE
 */
export interface Dataset {
  rid: _Datasets.DatasetRid;
  name: _Datasets.DatasetName;
  parentFolderRid: _Filesystem.FolderRid;
}

/**
 * The number of partitions for a Foundry stream.
 *
 * Log Safety: SAFE
 */
export type PartitionsCount = number;

/**
 * Log Safety: DO_NOT_LOG
 */
export interface PublishRecordsToStreamRequest {
  records: Array<_Record>;
  viewRid?: ViewRid;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface PublishRecordToStreamRequest {
  record: _Record;
  viewRid?: ViewRid;
}

/**
 * A record to be published to a stream.
 *
 * Log Safety: DO_NOT_LOG
 */
export type _Record = Record<string, any | undefined>;

/**
 * Log Safety: UNSAFE
 */
export interface ResetStreamRequest {
  schema?: _Core.StreamSchema;
  partitionsCount?: PartitionsCount;
  streamType?: StreamType;
  compressed?: Compressed;
}

/**
 * Log Safety: UNSAFE
 */
export interface Stream {
  branchName: _Datasets.BranchName;
  schema: _Core.StreamSchema;
  viewRid: ViewRid;
  partitionsCount: PartitionsCount;
  streamType: StreamType;
  compressed: Compressed;
}

/**
   * LOW_LATENCY: The default stream type. Recommended for most use cases.
HIGH_THROUGHPUT: Best for streams that send large amounts of data every second. Using this stream type might
introduce some non-zero latency at the expense of a higher throughput. This stream type is only
recommended if you inspect your stream metrics in-platform and observe that the average batch size is equal
to the max match size, or if jobs using the stream are failing due to Kafka producer batches expiring. For
additional information on inspecting stream metrics, refer to the
(stream monitoring)[/docs/foundry/data-integration/stream-monitoring/#viewing-metrics] documentation.
For more information, refer to the stream types
documentation.
   *
   * Log Safety: SAFE
   */
export type StreamType = "LOW_LATENCY" | "HIGH_THROUGHPUT";

/**
 * The resource identifier (RID) of the view that represents a stream.
 *
 * Log Safety: SAFE
 */
export type ViewRid = LooselyBrandedString<"ViewRid">;
