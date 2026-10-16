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
 * Folders can only be created within a project.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderOutsideProjectNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateFolderOutsideProjectNotSupported";
  errorDescription: "Folders can only be created within a project.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Could not create the folder due to insufficient permissions.
 *
 * Log Safety: SAFE
 */
export interface CreateFolderPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFolderPermissionDenied";
  errorDescription:
    "Could not create the folder due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Could not delete the folder due to insufficient permissions.
 *
 * Log Safety: SAFE
 */
export interface DeleteFolderPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteFolderPermissionDenied";
  errorDescription:
    "Could not delete the folder due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    folderRid: unknown;
  };
}

/**
   * The resource, or one of its descendants, backs an ontology entity. Trashing such a resource through the
filesystem would leave the ontology in an inconsistent state, so it must be deleted through the ontology APIs
instead.
   *
   * Log Safety: UNSAFE
   */
export interface DeleteOntologyResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteOntologyResourcePermissionDenied";
  errorDescription:
    "The resource, or one of its descendants, backs an ontology entity. Trashing such a resource through the filesystem would leave the ontology in an inconsistent state, so it must be deleted through the ontology APIs instead.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * Could not delete the project due to insufficient permissions.
 *
 * Log Safety: SAFE
 */
export interface DeleteProjectPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteProjectPermissionDenied";
  errorDescription:
    "Could not delete the project due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    projectRid: unknown;
  };
}

/**
 * Could not delete the resource due to insufficient permissions.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteResourcePermissionDenied";
  errorDescription:
    "Could not delete the resource due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * The service's space cannot be deleted.
 *
 * Log Safety: SAFE
 */
export interface DeleteServiceSpaceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DeleteServiceSpaceNotSupported";
  errorDescription: "The service's space cannot be deleted.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the space due to insufficient permissions.
 *
 * Log Safety: SAFE
 */
export interface DeleteSpacePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteSpacePermissionDenied";
  errorDescription:
    "Could not delete the space due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
  };
}

/**
 * The user's space cannot be deleted.
 *
 * Log Safety: SAFE
 */
export interface DeleteUserSpaceNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DeleteUserSpaceNotSupported";
  errorDescription: "The user's space cannot be deleted.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Log Safety: SAFE
 */
export interface FolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FolderNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    folderRid: unknown;
  };
}

/**
 * The specified folders could not be found.
 *
 * Log Safety: SAFE
 */
export interface FoldersNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FoldersNotFound";
  errorDescription: "The specified folders could not be found.";
  errorInstanceId: string;
  parameters: {
    folderRids: unknown;
  };
}

/**
 * The request to retrieve resource information timed out.
 *
 * Log Safety: SAFE
 */
export interface GetResourceTimedOut {
  errorCode: "TIMEOUT";
  errorName: "GetResourceTimedOut";
  errorDescription: "The request to retrieve resource information timed out.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The root folder cannot be retrieved.
 *
 * Log Safety: SAFE
 */
export interface GetRootFolderNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GetRootFolderNotSupported";
  errorDescription: "The root folder cannot be retrieved.";
  errorInstanceId: string;
  parameters: {};
}

/**
   * A display name must not be empty, must not be exactly . or .., must not contain a forward slash (/), and
must not exceed 700 characters.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDisplayName";
  errorDescription:
    "A display name must not be empty, must not be exactly . or .., must not contain a forward slash (/), and must not exceed 700 characters.";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
    maxLength: unknown;
  };
}

/**
   * Cannot restore resource because restoring it would produce an invalid display name. While the resource is
still in trash, rename it to a valid name that does not contain the reserved text ' (trashed)', then retry the
restore.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDisplayNameOnRestore {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDisplayNameOnRestore";
  errorDescription:
    "Cannot restore resource because restoring it would produce an invalid display name. While the resource is still in trash, rename it to a valid name that does not contain the reserved text ' (trashed)', then retry the restore.";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
  };
}

/**
 * The given resources are not folders.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidFolders {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFolders";
  errorDescription: "The given resources are not folders.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The specified parent resource is not a folder.
 *
 * Log Safety: SAFE
 */
export interface InvalidParentFolder {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParentFolder";
  errorDescription: "The specified parent resource is not a folder.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
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
  errorDescription:
    "The given path is invalid. A valid path has all components separated by a single /.";
  errorInstanceId: string;
  parameters: {
    path: unknown;
  };
}

/**
 * The given resources are not projects.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidProjects {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidProjects";
  errorDescription: "The given resources are not projects.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The given resources are not spaces.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidSpaces {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidSpaces";
  errorDescription: "The given resources are not spaces.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The request to list spaces timed out.
 *
 * Log Safety: SAFE
 */
export interface ListSpacesTimedOut {
  errorCode: "TIMEOUT";
  errorName: "ListSpacesTimedOut";
  errorDescription: "The request to list spaces timed out.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * A display name must be provided.
 *
 * Log Safety: SAFE
 */
export interface MissingDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingDisplayName";
  errorDescription: "A display name must be provided.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The specified parent folder could not be found.
 *
 * Log Safety: SAFE
 */
export interface ParentFolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ParentFolderNotFound";
  errorDescription: "The specified parent folder could not be found.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
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
  errorDescription: "The given path could not be found.";
  errorInstanceId: string;
  parameters: {
    path: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface ProjectNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProjectNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    projectRid: unknown;
  };
}

/**
 * The specified projects could not be found.
 *
 * Log Safety: SAFE
 */
export interface ProjectsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProjectsNotFound";
  errorDescription: "The specified projects could not be found.";
  errorInstanceId: string;
  parameters: {
    projectRids: unknown;
  };
}

/**
 * The provided resource display name is already in use by another resource in the same folder.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceDisplayNameAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "ResourceDisplayNameAlreadyExists";
  errorDescription:
    "The provided resource display name is already in use by another resource in the same folder.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
    displayName: unknown;
  };
}

/**
 * The resource is not directly trashed.
 *
 * Log Safety: UNSAFE
 */
export interface ResourceNotDirectlyTrashed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceNotDirectlyTrashed";
  errorDescription: "The resource is not directly trashed.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Log Safety: UNSAFE
 */
export interface ResourceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ResourceNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
   * The resource, or one of its ancestors, is registered for deletion. Resources cannot be created within, or
restored within, a project or space that is registered for deletion.
   *
   * Log Safety: UNSAFE
   */
export interface ResourceRegisteredForDeletion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ResourceRegisteredForDeletion";
  errorDescription:
    "The resource, or one of its ancestors, is registered for deletion. Resources cannot be created within, or restored within, a project or space that is registered for deletion.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
   * The resource, or one of the trashed ancestors that would be restored alongside it, backs an ontology entity.
Restoring such a resource through the filesystem would leave the ontology in an inconsistent state, so it must be
restored through the ontology APIs instead.
   *
   * Log Safety: UNSAFE
   */
export interface RestoreOntologyResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RestoreOntologyResourcePermissionDenied";
  errorDescription:
    "The resource, or one of the trashed ancestors that would be restored alongside it, backs an ontology entity. Restoring such a resource through the filesystem would leave the ontology in an inconsistent state, so it must be restored through the ontology APIs instead.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * Could not restore the resource due to insufficient permissions.
 *
 * Log Safety: UNSAFE
 */
export interface RestoreResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RestoreResourcePermissionDenied";
  errorDescription:
    "Could not restore the resource due to insufficient permissions.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface SpaceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SpaceNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    spaceRid: unknown;
  };
}

/**
 * The specified spaces could not be found.
 *
 * Log Safety: SAFE
 */
export interface SpacesNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SpacesNotFound";
  errorDescription: "The specified spaces could not be found.";
  errorInstanceId: string;
  parameters: {
    spaceRids: unknown;
  };
}

/**
 * Auto-saved resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingAutosavedResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingAutosavedResourcesNotSupported";
  errorDescription: "Auto-saved resources cannot be trashed.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * Hidden resources cannot be trashed.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingHiddenResourcesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingHiddenResourcesNotSupported";
  errorDescription: "Hidden resources cannot be trashed.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * Home folders cannot be trashed. Home folders are created and managed by the platform.
 *
 * Log Safety: UNSAFE
 */
export interface TrashingHomeFoldersNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingHomeFoldersNotSupported";
  errorDescription:
    "Home folders cannot be trashed. Home folders are created and managed by the platform.";
  errorInstanceId: string;
  parameters: {
    resourceRids: unknown;
  };
}

/**
 * The root folder cannot be trashed.
 *
 * Log Safety: SAFE
 */
export interface TrashingRootFolderNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingRootFolderNotSupported";
  errorDescription: "The root folder cannot be trashed.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Space trashing has been disabled.
 *
 * Log Safety: SAFE
 */
export interface TrashingSpacesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TrashingSpacesNotSupported";
  errorDescription: "Space trashing has been disabled.";
  errorInstanceId: string;
  parameters: {
    spaceRids: unknown;
  };
}
