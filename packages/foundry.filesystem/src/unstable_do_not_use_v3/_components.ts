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

import type * as _Core from "@osdk/foundry.core/unstable_do_not_use_v3";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * An optional field that can be requested for a resource.
 *
 * Log Safety: SAFE
 */
export type AdditionalField =
  | "CONTACT_INFORMATION"
  | "DEFAULT_BRANCH"
  | "DESCRIPTION"
  | "DOCUMENTATION"
  | "NAMED_ANCESTORS"
  | "PATH"
  | "SPACE_RID"
  | "TRASH_STATUS";

/**
   * Optional properties of a resource. An additional field is returned if and only if it was explicitly
requested by the caller.
   *
   * Log Safety: UNSAFE
   */
export interface AdditionalFields {
  contactInformation?: ContactInformationField;
  defaultBranch?: DefaultBranchField;
  description?: DescriptionField;
  documentation?: DocumentationField;
  namedAncestors?: NamedAncestorsField;
  path?: PathField;
  spaceRid?: SpaceRidField;
  trashStatus?: TrashStatusField;
}

/**
 * An independently addressable version of a resource.
 *
 * Log Safety: UNSAFE
 */
export interface Branch {
  name: BranchName;
  rid: BranchRid;
}

/**
 * The name of a branch.
 *
 * Log Safety: UNSAFE
 */
export type BranchName = LooselyBrandedString<"BranchName">;

/**
 * The unique resource identifier (RID) of a branch.
 *
 * Log Safety: UNSAFE
 */
export type BranchRid = LooselyBrandedString<"BranchRid">;

/**
 * Log Safety: SAFE
 */
export interface Contact {
  principalId: _Core.PrincipalId;
}

/**
 * The principals to contact with questions about a resource.
 *
 * Log Safety: SAFE
 */
export interface ContactInformation {
  primaryContact: Contact;
}

/**
 * Holds the contacts of a resource, if any are configured.
 *
 * Log Safety: SAFE
 */
export interface ContactInformationField {
  value?: ContactInformation;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateFolderRequest {
  displayName: DisplayName;
  parentFolderRid: _Core.FolderRid;
}

/**
 * Holds the default branch of a resource, if it can be branched.
 *
 * Log Safety: UNSAFE
 */
export interface DefaultBranchField {
  value?: Branch;
}

/**
 * Log Safety: SAFE
 */
export interface DeleteFoldersBatchRequestElement {
  rid: _Core.FolderRid;
}

/**
 * Log Safety: SAFE
 */
export interface DeleteProjectsBatchRequestElement {
  rid: ProjectRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface DeleteResourcesBatchRequestElement {
  rid: ResourceRid;
}

/**
 * Log Safety: SAFE
 */
export interface DeleteSpacesBatchRequestElement {
  rid: SpaceRid;
}

/**
 * Holds the short description of a resource, if it has one.
 *
 * Log Safety: UNSAFE
 */
export interface DescriptionField {
  value?: string;
}

/**
 * The display name of a resource.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
 * Holds the long-form documentation of a resource, if it has any.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentationField {
  value?: string;
}

/**
 * The ID of a filesystem.
 *
 * Log Safety: UNSAFE
 */
export type FileSystemId = LooselyBrandedString<"FileSystemId">;

/**
 * A Foundry folder within a project.
 *
 * Log Safety: UNSAFE
 */
export interface Folder {
  additionalFields: AdditionalFields;
  createdTime?: _Core.CreatedTime;
  createdUserId?: UserId;
  displayName: DisplayName;
  rid: _Core.FolderRid;
  updatedTime?: _Core.UpdatedTime;
  updatedUserId?: UserId;
}

/**
 * Log Safety: UNSAFE
 */
export type FolderBatchResult =
  | ({ type: "notFound" } & FolderNotFoundError)
  | ({ type: "value" } & Folder);

/**
 * Log Safety: SAFE
 */
export interface FolderNotFoundError {
  rid: _Core.FolderRid;
}

/**
 * Log Safety: SAFE
 */
export interface GetFoldersBatchRequestElement {
  include: Array<AdditionalField>;
  rid: _Core.FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetFoldersBatchResponse {
  data: Array<FolderBatchResult>;
}

/**
 * Log Safety: SAFE
 */
export interface GetProjectsBatchRequestElement {
  rid: ProjectRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetProjectsBatchResponse {
  data: Array<ProjectBatchResult>;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetResourcesBatchRequestElement {
  include: Array<AdditionalField>;
  rid: ResourceRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetResourcesBatchResponse {
  data: Array<ResourceBatchResult>;
}

/**
 * Log Safety: SAFE
 */
export interface GetSpacesBatchRequestElement {
  rid: SpaceRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetSpacesBatchResponse {
  data: Array<SpaceBatchResult>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListSpacesResponse {
  data: Array<Space>;
  nextPageToken?: _Core.PageToken;
}

/**
 * The prefix of the Maven coordinate that uniquely identifies resources published from a space.
 *
 * Log Safety: UNSAFE
 */
export type MavenIdentifier = LooselyBrandedString<"MavenIdentifier">;

/**
 * Holds the chain of ancestors of a resource, from the root resource down to the resource itself.
 *
 * Log Safety: UNSAFE
 */
export interface NamedAncestorsField {
  value: Array<NamedResourceIdentifier>;
}

/**
 * A representation of a resource containing a resource identifier and a name.
 *
 * Log Safety: UNSAFE
 */
export interface NamedResourceIdentifier {
  name: string;
  rid: ResourceRid;
}

/**
 * The unique resource identifier (RID) of an organization.
 *
 * Log Safety: SAFE
 */
export type OrganizationRid = LooselyBrandedString<"OrganizationRid">;

/**
 * Holds the location of a resource in the filesystem hierarchy.
 *
 * Log Safety: UNSAFE
 */
export interface PathField {
  value: ResourcePath;
}

/**
 * A Foundry project.
 *
 * Log Safety: UNSAFE
 */
export interface Project {
  createdTime?: _Core.CreatedTime;
  createdUserId?: UserId;
  description?: string;
  displayName: DisplayName;
  documentation?: string;
  path: ResourcePath;
  resourceLevelRoleGrantsAllowed: boolean;
  rid: ProjectRid;
  spaceRid: SpaceRid;
  trashStatus: TrashStatus;
  updatedTime?: _Core.UpdatedTime;
  updatedUserId?: UserId;
}

/**
 * Log Safety: UNSAFE
 */
export type ProjectBatchResult =
  | ({ type: "notFound" } & ProjectNotFoundError)
  | ({ type: "value" } & Project);

/**
 * Log Safety: SAFE
 */
export interface ProjectNotFoundError {
  rid: ProjectRid;
}

/**
 * The unique resource identifier (RID) of a project.
 *
 * Log Safety: SAFE
 */
export type ProjectRid = LooselyBrandedString<"ProjectRid">;

/**
 * A Foundry resource.
 *
 * Log Safety: UNSAFE
 */
export interface Resource {
  additionalFields: AdditionalFields;
  createdTime?: _Core.CreatedTime;
  createdUserId?: UserId;
  displayName: DisplayName;
  resourceType: ResourceType;
  rid: ResourceRid;
  updatedTime?: _Core.UpdatedTime;
  updatedUserId?: UserId;
}

/**
 * Log Safety: UNSAFE
 */
export type ResourceBatchResult =
  | ({ type: "notFound" } & ResourceNotFoundError)
  | ({ type: "value" } & Resource);

/**
 * Log Safety: UNSAFE
 */
export interface ResourceNotFoundError {
  rid: ResourceRid;
}

/**
 * The full path to a resource, including the resource name itself.
 *
 * Log Safety: UNSAFE
 */
export type ResourcePath = LooselyBrandedString<"ResourcePath">;

/**
 * The unique resource identifier (RID) of a resource.
 *
 * Log Safety: UNSAFE
 */
export type ResourceRid = LooselyBrandedString<"ResourceRid">;

/**
 * The type of the resource.
 *
 * Log Safety: SAFE
 */
export type ResourceType =
  | "FOLDER"
  | "SPACE"
  | "PROJECT"
  | "ACTIONS_ACTION_TYPE"
  | "AGENT_BUILDER_AGENT"
  | "AGENT_ENGINE_AGENT_DEFINITION"
  | "AIP_AGENTS_AGENT"
  | "AIP_AGENTS_SESSION"
  | "AIP_AGENTS_SKILL"
  | "AIP_ANALYST_ANALYSIS"
  | "AIP_ASSIST_FLOW_CAPTURE"
  | "AIP_ASSIST_WALKTHROUGH"
  | "AIP_PROFILE"
  | "ARROW_TEMPLATE"
  | "ARTIFACTS_REPOSITORY"
  | "AUDITEXPORT_ARTIFACTS"
  | "AUDIT_EXPORT_ORGANIZATION"
  | "AUTOTRAIN_DATASET"
  | "AUTOTRAIN_TRAINING_SESSION"
  | "BELLASO_CIPHER_CHANNEL"
  | "BELLASO_CIPHER_LICENSE"
  | "BLACKSMITH_DOCUMENT"
  | "BLOBSTER_ARCHIVE"
  | "BLOBSTER_AUDIO"
  | "BLOBSTER_BLOB"
  | "BLOBSTER_CERTIFICATE"
  | "BLOBSTER_CERTIFICATE_STORE"
  | "BLOBSTER_CODE"
  | "BLOBSTER_CONFIGURATION"
  | "BLOBSTER_DOCUMENT"
  | "BLOBSTER_EXECUTABLE"
  | "BLOBSTER_IMAGE"
  | "BLOBSTER_JUPYTERNOTEBOOK"
  | "BLOBSTER_LOG"
  | "BLOBSTER_PDF"
  | "BLOBSTER_PRESENTATION"
  | "BLOBSTER_SPREADSHEET"
  | "BLOBSTER_VIDEO"
  | "BLOBSTER_XML"
  | "CARBON_WORKSPACE"
  | "CHRONOGRAPH_TIMELINE"
  | "CODE_ENVIRONMENT_REGISTRY_ENVIRONMENT"
  | "COMPASS_WEB_LINK"
  | "CONTOUR_ANALYSIS"
  | "CREDENTIAL_CREDENTIAL"
  | "DATA_HEALTH_MONITORING_VIEW"
  | "DECISIONS_EXPLORATION"
  | "DREDDIE_PIPELINE"
  | "EDDIE_LIBRARY"
  | "EDDIE_LOGIC"
  | "EDDIE_PIPELINE"
  | "EDGE_PIPELINES_MANAGER_EDGE_PIPELINE"
  | "EVALS_EVALUATION_SUITE"
  | "FFORMS_FORM"
  | "FLOW_WORKFLOW"
  | "FLOW_WORKFLOW_EDIT"
  | "FOUNDRY_ACADEMY_TUTORIAL"
  | "FOUNDRY_CONTAINER_SERVICE_CONTAINER"
  | "FOUNDRY_DATASET"
  | "FOUNDRY_DEPLOYED_APP"
  | "FOUNDRY_ML_OBJECTIVE"
  | "FOUNDRY_SQL_SERVER_WORKSHEET"
  | "FOUNDRY_STREAMING_VIEW"
  | "FOUNDRY_TEMPLATES_TEMPLATE"
  | "FUNCTION_REGISTRY_FUNCTION"
  | "FUNCTION_REGISTRY_REGISTRY"
  | "FUSION_DOCUMENT"
  | "GEOTIME_CATALOG_INTEGRATION"
  | "GOTHAM_ARTIFACT_STENCIL_FORM"
  | "GPS_VIEW"
  | "HUBBLE_EXPLORATION_LAYOUT"
  | "HUBBLE_INSIGHT_WORKBOOK"
  | "HYPERAUTO_INTEGRATION"
  | "INBOUND_MESSAGE_LISTENER_TARGET"
  | "LOGIC_FLOWS_CONNECTED_FLOW"
  | "MACHINERY_AUTOPILOT"
  | "MACHINERY_DOCUMENT"
  | "MAGRITTE_AGENT"
  | "MAGRITTE_DRIVER"
  | "MAGRITTE_EXPORT"
  | "MAGRITTE_EXTERNAL_STACK"
  | "MAGRITTE_PLUGIN"
  | "MAGRITTE_SOURCE"
  | "MAP_RENDERING_SERVICE_SYMBOL_TYPE"
  | "MARBLE_SERVER_LAYER"
  | "MARKETPLACE_BLOCK_SET_INSTALLATION"
  | "MARKETPLACE_BLOCK_SET_REPO"
  | "MARKETPLACE_LOCAL"
  | "MARKETPLACE_REMOTE_STORE"
  | "MATRIX_CASE_STUDY"
  | "MIO_MEDIA_SET"
  | "MODELS_EXPERIMENT"
  | "MODELS_MODEL"
  | "MODELS_MODEL_VERSION"
  | "MONOCLE_GRAPH"
  | "NETWORK_POLICY_POLICY"
  | "NOTEPAD_NOTEPAD"
  | "NOTEPAD_NOTEPAD_TEMPLATE"
  | "OBJECT_SENTINEL_MONITOR"
  | "OBJECT_SET_VERSIONED_OBJECT_SET"
  | "ONTOLOGY_BRANCH"
  | "ONTOLOGY_DIRECT_SOURCE"
  | "ONTOLOGY_INTERFACE"
  | "ONTOLOGY_OBJECT_TYPE"
  | "ONTOLOGY_ONTOLOGY"
  | "ONTOLOGY_RELATION"
  | "ONTOLOGY_SHARED_PROPERTY"
  | "OPUS_GRAPH"
  | "OPUS_GRAPH_POINTER"
  | "OPUS_GRAPH_TEMPLATE"
  | "OPUS_MAP"
  | "OPUS_MAP_LAYER"
  | "OPUS_MAP_TEMPLATE"
  | "OPUS_SEARCH_AROUND"
  | "QUBIT_PROJECT"
  | "QUIVER_ANALYSIS"
  | "QUIVER_ARTIFACT"
  | "QUIVER_DASHBOARD"
  | "QUIVER_DERIVED_SERIES"
  | "QUIVER_FUNCTION"
  | "QUIVER_OBJECT_SET_PATH"
  | "QUIVER_SINGLE_DERIVED_SERIES"
  | "QUIVER_TIME_SERIES_ANALYSIS"
  | "RELEASE_MANAGEMENT_APPLICATION_INSTANCE"
  | "REPORT_REPORT"
  | "SITES_SERVICE_ENDPOINT_SET"
  | "SLATE_DOCUMENT"
  | "SLATE_VIEW"
  | "SOLUTION_DESIGN_DIAGRAM"
  | "STEMMA_REPOSITORY"
  | "TABLES_TABLE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATIONS_APPLICATION"
  | "TIME_SERIES_CATALOG_SYNC"
  | "VECTOR_SHARED_CHANNEL"
  | "VECTOR_TEMPLATE"
  | "VECTOR_WORKBOOK"
  | "WIDGETREGISTRY_WIDGET_SET"
  | "WORKFLOW_BUILDER_EDIT"
  | "WORKSHOP_MODULE"
  | "WORKSHOP_STATE";

/**
 * The ID of a role set.
 *
 * Log Safety: UNSAFE
 */
export type RoleSetId = LooselyBrandedString<"RoleSetId">;

/**
 * A Foundry space.
 *
 * Log Safety: UNSAFE
 */
export interface Space {
  defaultRoleSetId: RoleSetId;
  deletionPolicyOrganizationRids: Array<OrganizationRid>;
  description?: string;
  displayName: DisplayName;
  fileSystemId?: FileSystemId;
  mavenIdentifier?: MavenIdentifier;
  organizationRids: Array<OrganizationRid>;
  path: ResourcePath;
  rid: SpaceRid;
  usageAccountRid?: UsageAccountRid;
}

/**
 * Log Safety: UNSAFE
 */
export type SpaceBatchResult =
  | ({ type: "notFound" } & SpaceNotFoundError)
  | ({ type: "value" } & Space);

/**
 * Log Safety: SAFE
 */
export interface SpaceNotFoundError {
  rid: SpaceRid;
}

/**
 * The unique resource identifier (RID) of a space.
 *
 * Log Safety: SAFE
 */
export type SpaceRid = LooselyBrandedString<"SpaceRid">;

/**
 * Holds the space that a resource belongs to.
 *
 * Log Safety: SAFE
 */
export interface SpaceRidField {
  value: SpaceRid;
}

/**
   * Whether a resource is in the trash, and if so, whether it was trashed directly or through one of its ancestors.
Values:


ANCESTOR_TRASHED: The resource is in the trash because one of its ancestors was trashed. Such a resource cannot be restored
on its own; restoring the trashed ancestor also restores this resource.


DIRECTLY_TRASHED: The resource itself was trashed and can be restored.


NOT_TRASHED: Neither the resource nor any of its ancestors is trashed.
   *
   * Log Safety: SAFE
   */
export type TrashStatus =
  | "NOT_TRASHED"
  | "DIRECTLY_TRASHED"
  | "ANCESTOR_TRASHED";

/**
 * Holds whether a resource is in the trash.
 *
 * Log Safety: SAFE
 */
export interface TrashStatusField {
  value: TrashStatus;
}

/**
 * The unique resource identifier (RID) of a usage account.
 *
 * Log Safety: UNSAFE
 */
export type UsageAccountRid = LooselyBrandedString<"UsageAccountRid">;

/**
 * The ID of a user.
 *
 * Log Safety: SAFE
 */
export type UserId = LooselyBrandedString<"UserId">;
