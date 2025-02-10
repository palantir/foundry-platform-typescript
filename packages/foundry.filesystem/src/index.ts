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
  AccessRequirements,
  AddMarkingsRequest,
  AddOrganizationsRequest,
  AddResourceRolesRequest,
  CreateFolderRequest,
  CreateProjectFromTemplateRequest,
  CreateProjectRequest,
  Everyone,
  Folder,
  FolderRid,
  FolderType,
  IsDirectlyApplied,
  ListChildrenOfFolderResponse,
  ListMarkingsOfResourceResponse,
  ListOrganizationsOfProjectResponse,
  ListResourceRolesResponse,
  Marking,
  Organization,
  PrincipalWithId,
  Project,
  ProjectRid,
  ProjectTemplateRid,
  ProjectTemplateVariableId,
  ProjectTemplateVariableValue,
  RemoveMarkingsRequest,
  RemoveOrganizationsRequest,
  RemoveResourceRolesRequest,
  Resource,
  ResourceDisplayName,
  ResourcePath,
  ResourceRid,
  ResourceRole,
  ResourceRolePrincipal,
  ResourceType,
  Space,
  SpaceRid,
  TrashStatus,
} from "./_components.js";
export type {
  AddGroupToParentGroupPermissionDenied,
  AddMarkingsPermissionDenied,
  AddOrganizationsPermissionDenied,
  AddResourceRolesPermissionDenied,
  CreateFolderOutsideProjectNotSupported,
  CreateFolderPermissionDenied,
  CreateGroupPermissionDenied,
  CreateProjectFromTemplatePermissionDenied,
  CreateProjectNoOwnerLikeRoleGrant,
  CreateProjectPermissionDenied,
  DefaultRolesNotInSpaceRoleSet,
  DeleteResourcePermissionDenied,
  FolderNotFound,
  ForbiddenOperationOnAutosavedResource,
  ForbiddenOperationOnHiddenResource,
  GetAccessRequirementsPermissionDenied,
  GetByPathPermissionDenied,
  GetRootFolderNotSupported,
  GetSpaceResourceNotSupported,
  InvalidDefaultRoles,
  InvalidDescription,
  InvalidDisplayName,
  InvalidFolder,
  InvalidOrganizationHierarchy,
  InvalidOrganizations,
  InvalidPath,
  InvalidPrincipalIdsForGroupTemplate,
  InvalidRoleIds,
  InvalidVariable,
  InvalidVariableEnumOption,
  MarkingNotFound,
  MissingDisplayName,
  MissingVariableValue,
  NotAuthorizedToApplyOrganization,
  OrganizationMarkingNotOnSpace,
  OrganizationMarkingNotSupported,
  OrganizationsNotFound,
  PathNotFound,
  PermanentlyDeleteResourcePermissionDenied,
  ProjectCreationNotSupported,
  ProjectNameAlreadyExists,
  ProjectNotFound,
  ProjectTemplateNotFound,
  RemoveMarkingsPermissionDenied,
  RemoveOrganizationsPermissionDenied,
  RemoveResourceRolesPermissionDenied,
  ResourceNameAlreadyExists,
  ResourceNotDirectlyTrashed,
  ResourceNotFound,
  ResourceNotTrashed,
  RestoreResourcePermissionDenied,
  SpaceNotFound,
  TemplateGroupNameConflict,
  TemplateMarkingNameConflict,
  TrashingAutosavedResourcesNotSupported,
  TrashingHiddenResourcesNotSupported,
  TrashingSpaceNotSupported,
} from "./_errors.js";
export * as Folders from "./public/Folder.js";
export * as Projects from "./public/Project.js";
export * as Resources from "./public/Resource.js";
export * as ResourceRoles from "./public/ResourceRole.js";
