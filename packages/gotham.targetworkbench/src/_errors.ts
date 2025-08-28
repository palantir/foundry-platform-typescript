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
 * Cannot update a target board's columns if targets are present in the column
 *
 * Log Safety: SAFE
 */
export interface CannotUpdateColumnsWithTargets {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotUpdateColumnsWithTargets";
  errorInstanceId: string;
  parameters: {
    targetBoardRid: unknown;
  };
}

/**
 * Could not create the TargetBoard.
 *
 * Log Safety: SAFE
 */
export interface CreateTargetBoardPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateTargetBoardPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the TargetBoard.
 *
 * Log Safety: SAFE
 */
export interface DeleteTargetBoardPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteTargetBoardPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetBoardRid: unknown;
  };
}

/**
 * The specified portion markings are not valid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidClassificationPortionMarkings {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidClassificationPortionMarkings";
  errorInstanceId: string;
  parameters: {
    portionMarkings: unknown;
  };
}

/**
 * The space rid is missing or invalid.
 *
 * Log Safety: SAFE
 */
export interface InvalidSpaceRid {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidSpaceRid";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
  };
}

/**
 * Could not load the TargetBoard.
 *
 * Log Safety: SAFE
 */
export interface LoadTargetBoardPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadTargetBoardPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetBoardRid: unknown;
  };
}

/**
 * Could not modify the TargetBoard.
 *
 * Log Safety: SAFE
 */
export interface ModifyTargetBoardPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ModifyTargetBoardPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetBoardRid: unknown;
  };
}

/**
 * Multitenant mode is currently unknown.
 *
 * Log Safety: SAFE
 */
export interface MultitenantModeUnknown {
  errorCode: "INTERNAL";
  errorName: "MultitenantModeUnknown";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Cannot find target board from provided rid
 *
 * Log Safety: SAFE
 */
export interface TargetBoardNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TargetBoardNotFound";
  errorInstanceId: string;
  parameters: {
    targetBoardRid: unknown;
  };
}

/**
 * The user is required to have owner permissions on the artifact.
 *
 * Log Safety: SAFE
 */
export interface UserHasNoOwnerPerms {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UserHasNoOwnerPerms";
  errorInstanceId: string;
  parameters: {
    artifactId: unknown;
  };
}
