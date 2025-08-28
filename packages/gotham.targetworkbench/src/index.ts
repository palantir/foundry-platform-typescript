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

export type {
  ArtifactSecurity,
  BaseRevisionId,
  ColumnColor,
  CreateTargetBoardRequest,
  EmptySuccessResponse,
  GeoLocation,
  HighPriorityTargetListRid,
  LoadedTargetBoard,
  LoadLevel,
  LoadTargetBoardResponse,
  ModifyTargetBoardRequest,
  PortionMarking,
  SpaceRid,
  TargetBoard,
  TargetBoardColumnConfiguration,
  TargetBoardColumnConfigurationId,
  TargetBoardConfiguration,
  TargetBoardName,
  TargetBoardRid,
  TargetBranchId,
  TargetColumnStatus,
  TargetDetails,
  TargetIdentifierEnum,
  TargetLocation,
  TargetRid,
} from "./_components.js";
export type {
  CannotUpdateColumnsWithTargets,
  CreateTargetBoardPermissionDenied,
  DeleteTargetBoardPermissionDenied,
  InvalidClassificationPortionMarkings,
  InvalidSpaceRid,
  LoadTargetBoardPermissionDenied,
  ModifyTargetBoardPermissionDenied,
  MultitenantModeUnknown,
  TargetBoardNotFound,
  UserHasNoOwnerPerms,
} from "./_errors.js";
export * as TargetBoards from "./public/TargetBoard.js";
