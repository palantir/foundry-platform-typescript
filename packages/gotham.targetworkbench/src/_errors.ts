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
 * Cannot update a target board's columns if targets are present in the column.
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
 * Non-create operations cannot be applied to unknown artifacts.
 *
 * Log Safety: UNSAFE
 */
export interface CannotUpdateUnknownArtifact {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotUpdateUnknownArtifact";
  errorInstanceId: string;
  parameters: {
    artifactId: unknown;
    operation: unknown;
  };
}

/**
 * Could not create the HighPriorityTargetList.
 *
 * Log Safety: SAFE
 */
export interface CreateHighPriorityTargetListPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateHighPriorityTargetListPermissionDenied";
  errorInstanceId: string;
  parameters: {};
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
 * Could not createTargetIntel the Target.
 *
 * Log Safety: SAFE
 */
export interface CreateTargetIntelTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateTargetIntelTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Could not create the Target.
 *
 * Log Safety: SAFE
 */
export interface CreateTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateTargetPermissionDenied";
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
 * Could not delete the Target.
 *
 * Log Safety: SAFE
 */
export interface DeleteTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Cannot find High Priority Target List from provided RID
 *
 * Log Safety: SAFE
 */
export interface HighPriorityTargetListNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "HighPriorityTargetListNotFound";
  errorInstanceId: string;
  parameters: {
    highPriorityTargetListRid: unknown;
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
 * The supplied geotrackable entity does not match the backing entity of the target.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidGeotrackableEntity {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidGeotrackableEntity";
  errorInstanceId: string;
  parameters: {
    targetEntity: unknown;
    geotrackableEntity: unknown;
  };
}

/**
 * The specified symbol identification code (SIDC) was not valid based on MIL-STD-2525C specification.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidSidc {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidSidc";
  errorInstanceId: string;
  parameters: {
    invalidSidc: unknown;
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
 * Could not load the HighPriorityTargetList.
 *
 * Log Safety: SAFE
 */
export interface LoadHighPriorityTargetListPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadHighPriorityTargetListPermissionDenied";
  errorInstanceId: string;
  parameters: {
    highPriorityTargetListRid: unknown;
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
 * Could not load the Target.
 *
 * Log Safety: SAFE
 */
export interface LoadTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Could not modify the HighPriorityTargetList.
 *
 * Log Safety: SAFE
 */
export interface ModifyHighPriorityTargetListPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ModifyHighPriorityTargetListPermissionDenied";
  errorInstanceId: string;
  parameters: {
    highPriorityTargetListRid: unknown;
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
 * Could not modifyTargetIntel the Target.
 *
 * Log Safety: SAFE
 */
export interface ModifyTargetIntelTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ModifyTargetIntelTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Could not modify the Target.
 *
 * Log Safety: SAFE
 */
export interface ModifyTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ModifyTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
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
 * Could not removeTargetIntel the Target.
 *
 * Log Safety: SAFE
 */
export interface RemoveTargetIntelTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveTargetIntelTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * The provided revision id is behind the current id.
 *
 * Log Safety: UNSAFE
 */
export interface RevisionOutdated {
  errorCode: "INVALID_ARGUMENT";
  errorName: "RevisionOutdated";
  errorInstanceId: string;
  parameters: {
    id: unknown;
    revisionId: unknown;
  };
}

/**
 * Could not setTargetColumn the Target.
 *
 * Log Safety: SAFE
 */
export interface SetTargetColumnTargetPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SetTargetColumnTargetPermissionDenied";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Cannot find target board from provided rid.
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
 * Cannot find target from provided rid.
 *
 * Log Safety: SAFE
 */
export interface TargetNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TargetNotFound";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
  };
}

/**
 * Target must be located on the request target board.
 *
 * Log Safety: SAFE
 */
export interface TargetNotOnTargetBoard {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TargetNotOnTargetBoard";
  errorInstanceId: string;
  parameters: {
    targetRid: unknown;
    boardRid: unknown;
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
