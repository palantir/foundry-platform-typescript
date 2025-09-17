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
  errorDescription:
    "Client provided more than one of branch name, branch rid, or view rid as arguments.  Only one may be specified.";
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
  errorDescription:
    "The token does not have permission to view paths in this media set.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}

/**
 * The media item does not match the schema of the media set.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidMediaItemSchema {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidMediaItemSchema";
  errorDescription:
    "The media item does not match the schema of the media set.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    path: unknown;
  };
}

/**
 * The file cannot be read because it contains unsupported security settings (for example, public-key security handlers in a PDF).
 *
 * Log Safety: UNSAFE
 */
export interface MediaItemHasUnsupportedSecuritySettings {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MediaItemHasUnsupportedSecuritySettings";
  errorDescription:
    "The file cannot be read because it contains unsupported security settings (for example, public-key security handlers in a PDF).";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    path: unknown;
  };
}

/**
 * The file cannot be parsed as an image.
 *
 * Log Safety: UNSAFE
 */
export interface MediaItemImageUnparsable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MediaItemImageUnparsable";
  errorDescription: "The file cannot be parsed as an image.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    path: unknown;
  };
}

/**
 * The file cannot be read because it is password protected.
 *
 * Log Safety: UNSAFE
 */
export interface MediaItemIsPasswordProtected {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MediaItemIsPasswordProtected";
  errorDescription: "The file cannot be read because it is password protected.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    path: unknown;
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
  errorDescription:
    "The requested media item could not be found, or the client token does not have access to it.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    mediaItemRid: unknown;
  };
}

/**
 * The document cannot be parsed due to an unrecognized XML structure.
 *
 * Log Safety: UNSAFE
 */
export interface MediaItemXmlUnparsable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MediaItemXmlUnparsable";
  errorDescription:
    "The document cannot be parsed due to an unrecognized XML structure.";
  errorInstanceId: string;
  parameters: {
    mediaItemXmlFormat: unknown;
    mediaSetRid: unknown;
    path: unknown;
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
  errorDescription:
    "The requested media set could not be found, or the client token does not have access to it.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}

/**
 * The file has no bytes.
 *
 * Log Safety: UNSAFE
 */
export interface MissingMediaItemContent {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingMediaItemContent";
  errorDescription: "The file has no bytes.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
    path: unknown;
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
  errorDescription:
    "The given media set requires paths but no path was provided.";
  errorInstanceId: string;
  parameters: {
    mediaSetRid: unknown;
  };
}
