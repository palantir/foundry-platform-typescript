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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Client provided more than one of branch name, branch rid, or view rid as arguments.  Only one may be specified.
 *
 * Log Safety: SAFE
 */
export interface ConflictingMediaSetIdentifiers {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ConflictingMediaSetIdentifiers";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The token does not have permission to view paths in this media set.
 *
 * Log Safety: SAFE
 */
export interface GetMediaItemRidByPathPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMediaItemRidByPathPermissionDenied";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}

/**
 * The requested media item could not be found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface MediaItemNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MediaItemNotFound";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    mediaItemRid: unknown;
  };
}

/**
 * The requested media set could not be found, or the client token does not have access to it.
 *
 * Log Safety: SAFE
 */
export interface MediaSetNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MediaSetNotFound";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}

/**
 * The given media set requires paths but no path was provided.
 *
 * Log Safety: SAFE
 */
export interface MissingMediaItemPath {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingMediaItemPath";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}
