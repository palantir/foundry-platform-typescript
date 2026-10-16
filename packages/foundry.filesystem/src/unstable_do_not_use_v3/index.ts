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
  AdditionalField,
  AdditionalFields,
  Branch,
  BranchName,
  BranchRid,
  Contact,
  ContactInformation,
  ContactInformationField,
  CreateFolderRequest,
  DefaultBranchField,
  DeleteFoldersBatchRequestElement,
  DeleteProjectsBatchRequestElement,
  DeleteResourcesBatchRequestElement,
  DeleteSpacesBatchRequestElement,
  DescriptionField,
  DisplayName,
  DocumentationField,
  FileSystemId,
  Folder,
  FolderBatchResult,
  FolderNotFoundError,
  GetFoldersBatchRequestElement,
  GetFoldersBatchResponse,
  GetProjectsBatchRequestElement,
  GetProjectsBatchResponse,
  GetResourcesBatchRequestElement,
  GetResourcesBatchResponse,
  GetSpacesBatchRequestElement,
  GetSpacesBatchResponse,
  ListSpacesResponse,
  MavenIdentifier,
  NamedAncestorsField,
  NamedResourceIdentifier,
  OrganizationRid,
  PathField,
  Project,
  ProjectBatchResult,
  ProjectNotFoundError,
  ProjectRid,
  Resource,
  ResourceBatchResult,
  ResourceNotFoundError,
  ResourcePath,
  ResourceRid,
  ResourceType,
  RoleSetId,
  Space,
  SpaceBatchResult,
  SpaceNotFoundError,
  SpaceRid,
  SpaceRidField,
  TrashStatus,
  TrashStatusField,
  UsageAccountRid,
  UserId,
} from "./_components.js";
export type {
  CreateFolderOutsideProjectNotSupported,
  CreateFolderPermissionDenied,
  DeleteFolderPermissionDenied,
  DeleteOntologyResourcePermissionDenied,
  DeleteProjectPermissionDenied,
  DeleteResourcePermissionDenied,
  DeleteServiceSpaceNotSupported,
  DeleteSpacePermissionDenied,
  DeleteUserSpaceNotSupported,
  FolderNotFound,
  FoldersNotFound,
  GetResourceTimedOut,
  GetRootFolderNotSupported,
  InvalidDisplayName,
  InvalidDisplayNameOnRestore,
  InvalidFolders,
  InvalidParentFolder,
  InvalidPath,
  InvalidProjects,
  InvalidSpaces,
  ListSpacesTimedOut,
  MissingDisplayName,
  ParentFolderNotFound,
  PathNotFound,
  ProjectNotFound,
  ProjectsNotFound,
  ResourceDisplayNameAlreadyExists,
  ResourceNotDirectlyTrashed,
  ResourceNotFound,
  ResourceRegisteredForDeletion,
  RestoreOntologyResourcePermissionDenied,
  RestoreResourcePermissionDenied,
  SpaceNotFound,
  SpacesNotFound,
  TrashingAutosavedResourcesNotSupported,
  TrashingHiddenResourcesNotSupported,
  TrashingHomeFoldersNotSupported,
  TrashingRootFolderNotSupported,
  TrashingSpacesNotSupported,
} from "./_errors.js";
export * as Folders from "./public/Folder.js";
export * as Projects from "./public/Project.js";
export * as Resources from "./public/Resource.js";
export * as Spaces from "./public/Space.js";
