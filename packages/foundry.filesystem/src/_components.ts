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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * Access requirements for a resource are composed of Markings and Organizations. Organizations are disjunctive,
while Markings are conjunctive.
   *
   * Log Safety: SAFE
   */
export interface AccessRequirements {
  organizations: Array<Organization>;
  markings: Array<Marking>;
}

/**
 * Log Safety: SAFE
 */
export interface AddMarkingsRequest {
  markingIds: Array<_Core.MarkingId>;
}

/**
 * Log Safety: SAFE
 */
export interface AddOrganizationsRequest {
  organizationRids: Array<_Core.OrganizationRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AddResourceRolesRequest {
  roles: Array<ResourceRole>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateFolderRequest {
  parentFolderRid: FolderRid;
  displayName: ResourceDisplayName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateProjectFromTemplateRequest {
  templateRid: ProjectTemplateRid;
  variableValues: Record<
    ProjectTemplateVariableId,
    ProjectTemplateVariableValue
  >;
  defaultRoles?: Array<_Core.RoleId>;
  organizationRids?: Array<_Core.OrganizationRid>;
  projectDescription?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateProjectRequest {
  displayName: ResourceDisplayName;
  description?: string;
  spaceRid: SpaceRid;
  roleGrants: Record<_Core.RoleId, Array<PrincipalWithId>>;
  defaultRoles: Array<_Core.RoleId>;
  organizationRids: Array<_Core.OrganizationRid>;
}

/**
 * A principal representing all users of the platform.
 *
 * Log Safety: SAFE
 */
export interface Everyone {}

/**
 * Log Safety: UNSAFE
 */
export interface Folder {
  rid: FolderRid;
  displayName: ResourceDisplayName;
  description?: string;
  documentation?: string;
  path: ResourcePath;
  type: FolderType;
  createdBy: _Core.CreatedBy;
  updatedBy: _Core.UpdatedBy;
  createdTime: _Core.CreatedTime;
  updatedTime: _Core.UpdatedTime;
  trashStatus: TrashStatus;
  parentFolderRid: FolderRid;
  projectRid?: ProjectRid;
  spaceRid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a Folder.
 *
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
   * A folder can be a regular Folder, a
Project or a
Space.
   *
   * Log Safety: SAFE
   */
export type FolderType = "FOLDER" | "SPACE" | "PROJECT";

/**
   * Boolean flag to indicate if the marking is directly applied to the resource, or if it's applied
to a parent resource and inherited by the current resource.
   *
   * Log Safety: SAFE
   */
export type IsDirectlyApplied = boolean;

/**
 * Log Safety: UNSAFE
 */
export interface ListChildrenOfFolderResponse {
  data: Array<Resource>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListMarkingsOfResourceResponse {
  data: Array<_Core.MarkingId>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOrganizationsOfProjectResponse {
  data: Array<_Core.OrganizationRid>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListResourceRolesResponse {
  data: Array<ResourceRole>;
  nextPageToken?: _Core.PageToken;
}

/**
   * Markings provide an additional level of access control for files,
folders, and Projects within Foundry. Markings define eligibility criteria that restrict visibility
and actions to users who meet those criteria. To access a resource, a user must be a member of all
Markings applied to a resource to access it.
   *
   * Log Safety: SAFE
   */
export interface Marking {
  markingId: _Core.MarkingId;
  isDirectlyApplied: IsDirectlyApplied;
}

/**
   * Organizations are access requirements applied to
Projects that enforce strict silos between groups of users and resources. Every user is a member of only
one Organization, but can be a guest member of multiple Organizations. In order to meet access requirements,
users must be a member or guest member of at least one Organization applied to a Project.
Organizations are inherited via the file hierarchy and direct dependencies.
   *
   * Log Safety: SAFE
   */
export interface Organization {
  markingId: _Core.MarkingId;
  organizationRid: _Core.OrganizationRid;
  isDirectlyApplied: IsDirectlyApplied;
}

/**
 * Represents a user principal or group principal with an ID.
 *
 * Log Safety: SAFE
 */
export interface PrincipalWithId {
  principalId: _Core.PrincipalId;
  principalType: _Core.PrincipalType;
}

/**
 * Log Safety: UNSAFE
 */
export interface Project {
  rid: ProjectRid;
  displayName: ResourceDisplayName;
  description?: string;
  documentation?: string;
  path: ResourcePath;
  createdBy: _Core.CreatedBy;
  updatedBy: _Core.UpdatedBy;
  createdTime: _Core.CreatedTime;
  updatedTime: _Core.UpdatedTime;
  trashStatus: TrashStatus;
  spaceRid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a Project.
 *
 * Log Safety: SAFE
 */
export type ProjectRid = LooselyBrandedString<"ProjectRid">;

/**
 * The unique resource identifier (RID) of a project template.
 *
 * Log Safety: SAFE
 */
export type ProjectTemplateRid = LooselyBrandedString<"ProjectTemplateRid">;

/**
 * An identifier for a variable used in a project template.
 *
 * Log Safety: UNSAFE
 */
export type ProjectTemplateVariableId = LooselyBrandedString<
  "ProjectTemplateVariableId"
>;

/**
 * The value assigned to a variable used in a project template.
 *
 * Log Safety: UNSAFE
 */
export type ProjectTemplateVariableValue = LooselyBrandedString<
  "ProjectTemplateVariableValue"
>;

/**
 * Log Safety: SAFE
 */
export interface RemoveMarkingsRequest {
  markingIds: Array<_Core.MarkingId>;
}

/**
 * Log Safety: SAFE
 */
export interface RemoveOrganizationsRequest {
  organizationRids: Array<_Core.OrganizationRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface RemoveResourceRolesRequest {
  roles: Array<ResourceRole>;
}

/**
 * Log Safety: UNSAFE
 */
export interface Resource {
  rid: ResourceRid;
  displayName: ResourceDisplayName;
  description?: string;
  documentation?: string;
  path: ResourcePath;
  type: ResourceType;
  createdBy: _Core.CreatedBy;
  updatedBy: _Core.UpdatedBy;
  createdTime: _Core.CreatedTime;
  updatedTime: _Core.UpdatedTime;
  trashStatus: TrashStatus;
  parentFolderRid: FolderRid;
  projectRid: ProjectRid;
  spaceRid: SpaceRid;
}

/**
 * The display name of the Resource
 *
 * Log Safety: UNSAFE
 */
export type ResourceDisplayName = LooselyBrandedString<"ResourceDisplayName">;

/**
 * The full path to the resource, including the resource name itself
 *
 * Log Safety: UNSAFE
 */
export type ResourcePath = LooselyBrandedString<"ResourcePath">;

/**
 * The unique resource identifier (RID) of a Resource.
 *
 * Log Safety: UNSAFE
 */
export type ResourceRid = LooselyBrandedString<"ResourceRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ResourceRole {
  resourceRolePrincipal: ResourceRolePrincipal;
  roleId: _Core.RoleId;
}

/**
 * Log Safety: UNSAFE
 */
export type ResourceRolePrincipal =
  | ({ type: "principalWithId" } & PrincipalWithId)
  | ({ type: "everyone" } & Everyone);

/**
 * The type of the Resource derived from the Resource Identifier (RID).
 *
 * Log Safety: SAFE
 */
export type ResourceType =
  | "ARTIFACTS_REPOSITORY"
  | "BELLASO_CIPHER_CHANNEL"
  | "BLOBSTER_DOCUMENT"
  | "BLOBSTER_IMAGE"
  | "CARBON_WORKSPACE"
  | "COMPASS_FOLDER"
  | "COMPASS_WEB_LINK"
  | "CONTOUR_ANALYSIS"
  | "DATA_HEALTH_MONITORING_VIEW"
  | "EDDIE_LOGIC"
  | "EDDIE_PIPELINE"
  | "FFORMS_FORM"
  | "FOUNDRY_DATASET"
  | "FOUNDRY_ACADEMY_TUTORIAL"
  | "FOUNDRY_CONTAINER_SERVICE_CONTAINER"
  | "FOUNDRY_ML_OBJECTIVE"
  | "FOUNDRY_TEMPLATES_TEMPLATE"
  | "FUSION_DOCUMENT"
  | "HUBBLE_EXPLORATION_LAYOUT"
  | "MACHINERY_DOCUMENT"
  | "MAGRITTE_AGENT"
  | "MAGRITTE_SOURCE"
  | "MARKETPLACE_BLOCK_SET_INSTALLATION"
  | "MARKETPLACE_LOCAL"
  | "MARKETPLACE_REMOTE_STORE"
  | "MIO_MEDIA_SET"
  | "MODELS_MODEL"
  | "MODELS_MODEL_VERSION"
  | "MONOCLE_GRAPH"
  | "NOTEPAD_NOTEPAD"
  | "NOTEPAD_NOTEPAD_TEMPLATE"
  | "OBJECT_SENTINEL_MONITOR"
  | "OBJECT_SET_VERSIONED_OBJECT_SET"
  | "OPUS_GRAPH"
  | "OPUS_MAP"
  | "OPUS_MAP_LAYER"
  | "QUIVER_ANALYSIS"
  | "REPORT_REPORT"
  | "SLATE_DOCUMENT"
  | "SOLUTION_DESIGN_DIAGRAM"
  | "STEMMA_REPOSITORY"
  | "TABLES_TABLE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATIONS_APPLICATION"
  | "VECTOR_WORKBOOK"
  | "WORKSHOP_MODULE";

/**
 * Log Safety: SAFE
 */
export interface Space {
  rid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a Space.
 *
 * Log Safety: SAFE
 */
export type SpaceRid = LooselyBrandedString<"SpaceRid">;

/**
 * Log Safety: SAFE
 */
export type TrashStatus =
  | "DIRECTLY_TRASHED"
  | "ANCESTOR_TRASHED"
  | "NOT_TRASHED";
