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
 * Could not addMarkings the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface AddMarkingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddMarkingsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not addOrganizations the Project.
 *
 * Log Safety: SAFE
 */
export interface AddOrganizationsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddOrganizationsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    projectRid: unknown;
  };
}

/**
 * Could not add the ResourceRole.
 *
 * Log Safety: UNSAFE
 */
export interface AddResourceRolesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddResourceRolesPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The given Resource is not a folder.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderOutsideProjectNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateFolderOutsideProjectNotSupported";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Could not create the Folder.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFolderPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The create project request would create a project with no principal being granted an owner-like role. As a result, there would be no user with administrative privileges over the project. A role is defined to be owner-like if it has the compass:edit-project operation. In the common case of the default role-set, this is just the compass:manage role.
 *
 * Log Safety: SAFE
 */
export interface CreateProjectNoOwnerLikeRoleGrant {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateProjectNoOwnerLikeRoleGrant";
  errorInstanceId: string;
  parameters: {
    grantedRoleIds: unknown;
    roleSetOwnerLikeRoleIds: unknown;
  };
}

/**
 * Could not create the Project.
 *
 * Log Safety: SAFE
 */
export interface CreateProjectPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateProjectPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The given Folder could not be found.
 *
 * Log Safety: SAFE
 */
export interface FolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FolderNotFound";
  errorInstanceId: string;
  parameters: {
    folderRid: unknown;
  };
}

/**
 * Performing this operation on an autosaved resource is not supported.
 *
 * Log Safety: UNSAFE
 */
export interface ForbiddenOperationOnAutosavedResource {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ForbiddenOperationOnAutosavedResource";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Performing this operation on a hidden resource is not supported.
 *
 * Log Safety: UNSAFE
 */
export interface ForbiddenOperationOnHiddenResource {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ForbiddenOperationOnHiddenResource";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not getAccessRequirements the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface GetAccessRequirementsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetAccessRequirementsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not getByPath the Resource.
 *
 * Log Safety: SAFE
 */
export interface GetByPathPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetByPathPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The display name of a Resource should not be exactly . or .., contain a forward slash / or be
too long.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDisplayName";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
  };
}

/**
 * The given Resource is not a Folder.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidFolder {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFolder";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
   * The given path is invalid.
A valid path has all components separated by a single /.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidPath {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPath";
  errorInstanceId: string;
  parameters: {
    path: unknown;
  };
}

/**
 * A roleId referenced in either default roles or role grants does not exist in the project role set for the space.
 *
 * Log Safety: SAFE
 */
export interface InvalidRoleIds {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidRoleIds";
  errorInstanceId: string;
  parameters: {
    requestedRoleIds: unknown;
  };
}

/**
 * A provided marking ID cannot be found.
 *
 * Log Safety: SAFE
 */
export interface MarkingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarkingNotFound";
  errorInstanceId: string;
  parameters: {
    markingIds: unknown;
  };
}

/**
 * A Display Name must be provided.
 *
 * Log Safety: SAFE
 */
export interface MissingDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingDisplayName";
  errorInstanceId: string;
  parameters: {};
}

/**
 * At least one of the organization markings associated with a passed organization is not applied on the requested space.
 *
 * Log Safety: SAFE
 */
export interface OrganizationMarkingNotOnSpace {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OrganizationMarkingNotOnSpace";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
    organizationRids: unknown;
  };
}

/**
   * Adding an organization marking as a regular marking is not supported. Use the organization endpoints on a
project resource instead.
   *
   * Log Safety: SAFE
   */
export interface OrganizationMarkingNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OrganizationMarkingNotSupported";
  errorInstanceId: string;
  parameters: {
    markingIds: unknown;
  };
}

/**
 * At least one organization RID could not be found.
 *
 * Log Safety: SAFE
 */
export interface OrganizationsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "OrganizationsNotFound";
  errorInstanceId: string;
  parameters: {
    organizationRids: unknown;
  };
}

/**
 * The given path could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface PathNotFound {
  errorCode: "NOT_FOUND";
  errorName: "PathNotFound";
  errorInstanceId: string;
  parameters: {
    path: unknown;
  };
}

/**
 * Could not permanentlyDelete the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface PermanentlyDeleteResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PermanentlyDeleteResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Project creation is not supported in the current user's space.
 *
 * Log Safety: SAFE
 */
export interface ProjectCreationNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ProjectCreationNotSupported";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
  };
}

/**
 * The requested display name for the created project is already being used in the space.
 *
 * Log Safety: UNSAFE
 */
export interface ProjectNameAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "ProjectNameAlreadyExists";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
    spaceRid: unknown;
  };
}

/**
 * The given Project could not be found.
 *
 * Log Safety: SAFE
 */
export interface ProjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProjectNotFound";
  errorInstanceId: string;
  parameters: {
    projectRid: unknown;
  };
}

/**
 * Could not removeMarkings the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface RemoveMarkingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveMarkingsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not removeOrganizations the Project.
 *
 * Log Safety: SAFE
 */
export interface RemoveOrganizationsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveOrganizationsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    projectRid: unknown;
  };
}

/**
 * Could not remove the ResourceRole.
 *
 * Log Safety: UNSAFE
 */
export interface RemoveResourceRolesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveResourceRolesPermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The Resource is not directly trashed.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNotDirectlyTrashed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceNotDirectlyTrashed";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The given Resource could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ResourceNotFound";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The Resource should be directly trashed before being permanently deleted.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNotTrashed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceNotTrashed";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not restore the Resource.
 *
 * Log Safety: UNSAFE
 */
export interface RestoreResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RestoreResourcePermissionDenied";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The referenced space cannot be found.
 *
 * Log Safety: SAFE
 */
export interface SpaceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SpaceNotFound";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
  };
}

/**
 * Auto-saved Resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingAutosavedResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingAutosavedResourcesNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Hidden Resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingHiddenResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingHiddenResourcesNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Spaces cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingSpaceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingSpaceNotSupported";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}
