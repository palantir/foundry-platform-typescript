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
 * Log Safety: SAFE
 */
export type CondaPackageExtension = "TAR_BZ2" | "CONDA";

/**
 * Log Safety: UNSAFE
 */
export type ConfigurationKey = LooselyBrandedString<"ConfigurationKey">;

/**
 * A JSON configuration value.
 *
 * Log Safety: UNSAFE
 */
export type ConfigurationValue = any;

/**
 * Log Safety: DO_NOT_LOG
 */
export interface CreateMarketplaceInstallationJobRequest {
  installations: Array<InstallationJobTarget>;
  recommendations: Array<RecommendationStrategy>;
  submissionMode?: InstallationJobSubmissionMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateMarketplaceInstallationRequest {
  installationSuffix?: string;
  marketplaceRid: MarketplaceRid;
  ontologyRid?: _Core.OntologyRid;
  parentFolderRid: _Core.FolderRid;
  productId: ProductId;
  targetVersionHint?: ProductVersionSelector;
}

/**
   * Supply the plaintext variant when configuring an installation job.
Inspection returns the redacted variant, which contains only secret names
and cannot be submitted as credentials for another installation job.
   *
   * Log Safety: DO_NOT_LOG
   */
export type CredentialSecrets =
  | ({ type: "plaintext" } & PlaintextCredentialSecrets)
  | ({ type: "redacted" } & RedactedCredentialSecrets);

/**
 * A fulfilled input of the installation, including how its current value was supplied.
 *
 * Log Safety: DO_NOT_LOG
 */
export interface CurrentInstallationInput {
  source: InputSource;
  value: InputValue;
}

/**
 * Input requirements keyed by qualified input API name for one proposed installation target.
 *
 * Log Safety: UNSAFE
 */
export interface DiscoveredInstallationInputs {
  inputs: Record<InputApiName, InputMetadata>;
}

/**
 * Log Safety: UNSAFE
 */
export interface DiscoverInstallationJobInputsRequest {
  installations: Array<InstallationTarget>;
  recommendations: Array<RecommendationStrategy>;
  sourceFilter?: SourceFilter;
}

/**
 * Log Safety: UNSAFE
 */
export interface DiscoverInstallationJobInputsResponse {
  errors: Array<InstallationError>;
  inputs: Record<MarketplaceInstallationRid, DiscoveredInstallationInputs>;
}

/**
 * The source error's broad category. This is response data and does not determine the HTTP status or error severity.
 *
 * Log Safety: SAFE
 */
export type ErrorCode =
  | "UNAUTHORIZED"
  | "INTERNAL"
  | "PERMISSION_DENIED"
  | "INVALID_ARGUMENT"
  | "NOT_FOUND"
  | "REQUEST_ENTITY_TOO_LARGE"
  | "FAILED_PRECONDITION"
  | "CUSTOM_CLIENT"
  | "CUSTOM_SERVER"
  | "CONFLICT"
  | "TIMEOUT";

/**
 * Log Safety: UNSAFE
 */
export interface ErrorDetails {
  errorCode: ErrorCode;
  errorName: ErrorName;
  parameters: Record<ErrorParameterName, ErrorParameterValue>;
}

/**
 * The source error's namespace-qualified name, for example Marketplace:IncompatibleDefaultBuildOptions.
 *
 * Log Safety: SAFE
 */
export type ErrorName = LooselyBrandedString<"ErrorName">;

/**
 * The name of a parameter describing an installation error.
 *
 * Log Safety: SAFE
 */
export type ErrorParameterName = LooselyBrandedString<"ErrorParameterName">;

/**
 * The value of a parameter describing an installation error.
 *
 * Log Safety: UNSAFE
 */
export type ErrorParameterValue = any;

/**
 * Whether the error blocks proceeding with the proposed installation.
 *
 * Log Safety: SAFE
 */
export type ErrorSeverity = "BLOCKING" | "NON_BLOCKING";

/**
 * The proposed job, installation, or input and output references affected by the error.
 *
 * Log Safety: UNSAFE
 */
export type ErrorTarget =
  | ({ type: "inputsAndOutputs" } & ErrorTargetInputsAndOutputs)
  | ({ type: "installation" } & ErrorTargetInstallation)
  | ({ type: "job" } & ErrorTargetJob);

/**
 * The inputs and outputs this error applies to. Either or both can be present.
 *
 * Log Safety: UNSAFE
 */
export interface ErrorTargetInputsAndOutputs {
  inputs: Array<InputReference>;
  installationRid: MarketplaceInstallationRid;
  outputs: Array<OutputReference>;
}

/**
 * Log Safety: SAFE
 */
export interface ErrorTargetInstallation {
  installationRid: MarketplaceInstallationRid;
}

/**
 * Affects the proposed job as a whole.
 *
 * Log Safety: SAFE
 */
export interface ErrorTargetJob {}

/**
 * The value describing an encountered error.
 *
 * Log Safety: UNSAFE
 */
export type ErrorValue = { type: "other" } & ErrorDetails;

/**
 * How installation selects function versions and API names.
 *
 * Log Safety: SAFE
 */
export type FunctionApiStability =
  | ({ type: "deduplicate" } & FunctionApiStabilityDeduplicate)
  | ({ type: "stable" } & FunctionApiStabilityStable);

/**
 * Increment the minor version of an existing function and deduplicate conflicting API names with a numeric suffix. Initial installations use version 0.1.0.
 *
 * Log Safety: SAFE
 */
export interface FunctionApiStabilityDeduplicate {}

/**
 * Preserve the packaged function version and API name. A version conflict allocates a new function RID; an API name conflict fails installation.
 *
 * Log Safety: SAFE
 */
export interface FunctionApiStabilityStable {}

/**
 * A remote Geotime destination. Its system identifier must differ from the local system identifier.
 *
 * Log Safety: SAFE
 */
export interface GeotimeDestination {
  destinationId: string;
  namespaceRid?: _Core.NamespaceRid;
}

/**
 * Where the installed pipeline writes Geotime data.
 *
 * Log Safety: SAFE
 */
export type GeotimeDestinations =
  | ({ type: "local" } & LocalGeotimeDestination)
  | ({ type: "peered" } & PeeredGeotimeDestinations)
  | ({ type: "remote" } & GeotimeDestination);

/**
 * The dot-separated API name of an input, including its ancestors, for example myDataset.address.
 *
 * Log Safety: UNSAFE
 */
export type InputApiName = LooselyBrandedString<"InputApiName">;

/**
 * The UUID of an input in the product definition.
 *
 * Log Safety: SAFE
 */
export type InputId = string;

/**
 * An input of the target product as it applies to a proposed installation or upgrade.
 *
 * Log Safety: SAFE
 */
export interface InputMetadata {
  inputId: InputId;
  inputType: InputType;
  optional: boolean;
  sources: Array<InputSource>;
  supportedTypes: Array<SupportedInputType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputReference {
  apiName: InputApiName;
  inputId: InputId;
}

/**
   * An available mechanism for fulfilling an installation input.
Values:

AUTO_MAPPED: A value can be supplied by an automatic mapping.
AUTO_MAPPED_FROM_PARENT: Supports deriving its value from the parent input.
DEFAULT: A successfully resolved product default.
EXTERNAL_RECOMMENDATION: A value can be supplied by an output from a recommended installation.
MANUAL: A value can be supplied manually. Available only when supportedTypes is nonempty.
   *
   * Log Safety: SAFE
   */
export type InputSource =
  | "MANUAL"
  | "AUTO_MAPPED"
  | "AUTO_MAPPED_FROM_PARENT"
  | "DEFAULT"
  | "EXTERNAL_RECOMMENDATION";

/**
   * The kind of resource or configuration requested by a product input. Use supportedTypes to determine accepted value representations. OTHER covers input kinds that do not have a named value here.
Values:

OTHER: A legacy or newly introduced input kind without a named value in this API.
   *
   * Log Safety: SAFE
   */
export type InputType =
  | "ACTION"
  | "ACTION_PARAMETER"
  | "AGENT_BUILDER_AGENT"
  | "AGENT_DEFINITION"
  | "ONTOLOGY_SCHEMA_MIGRATION_POLICY"
  | "AIP_AGENT"
  | "ARTIFACTS_REPOSITORY"
  | "LIBRARY"
  | "CODE_REPOSITORY"
  | "AUTOMATION"
  | "AUTOPILOT_WORKBENCH"
  | "BLOBSTER_RESOURCE"
  | "CARBON_WORKSPACE"
  | "CIPHER_CHANNEL"
  | "CIPHER_LICENSE"
  | "CODE_WORKSPACE"
  | "CODE_WORKSPACE_LICENSE"
  | "COMPASS_RESOURCE"
  | "CONTOUR_ANALYSIS"
  | "CONTOUR_REF"
  | "DATA_HEALTH_CHECK"
  | "DATA_HEALTH_CHECK_GROUP"
  | "DATA_SOURCE_COLUMN"
  | "DEPLOYED_APP"
  | "PIPELINE_BUILDER_PARAMETER"
  | "PIPELINE_BUILDER_PIPELINE"
  | "PIPELINE_BUILDER_REPLAY_OPTION"
  | "PIPELINE_BUILDER_GEOTIME_CONFIGURATION"
  | "EDGE_PIPELINE_PARAMETER"
  | "EDGE_PIPELINE_SOURCE_CONFIGURATION"
  | "EVALUATION_SUITE"
  | "FILES_DATA_SOURCE"
  | "FLINK_PROFILE"
  | "FUNCTION"
  | "FUNCTION_CONTRACT"
  | "FUNCTION_API_STABILITY"
  | "FUSION_DOCUMENT"
  | "GEOTIME_SERIES_INTEGRATION"
  | "INTERFACE_TYPE"
  | "INTERFACE_LINK_TYPE"
  | "INTERFACE_PROPERTY_TYPE"
  | "INTERFACE_ACTION_TYPE_CONSTRAINT"
  | "INTERFACE_PARAMETER_CONSTRAINT"
  | "INSTALLATION_PREFIX"
  | "LANGUAGE_MODEL"
  | "LANGUAGE_MODEL_V2"
  | "LINK_TYPE"
  | "LIVE_DEPLOYMENT"
  | "LOGIC"
  | "LOGIC_FUNCTION"
  | "MACHINERY"
  | "DATA_CONNECTION"
  | "DATA_CONNECTION_EXPORT"
  | "DATA_CONNECTION_SOURCE"
  | "CONNECTION_CONFIGURATION_OVERRIDES"
  | "STREAMING_SYNC_CONFIGURATION_OVERRIDES"
  | "MAP_RENDERING_SYMBOL_TYPE"
  | "MARKINGS"
  | "MODEL_STUDIO"
  | "MODEL"
  | "DATA_LINEAGE_GRAPH"
  | "USER_ATTRIBUTE"
  | "GROUP"
  | "NAMED_CREDENTIAL"
  | "NETWORK_EGRESS_POLICY"
  | "NOTEPAD_DOCUMENT"
  | "NOTEPAD_TEMPLATE"
  | "NOTEPAD_TEMPLATE_PARAMETER"
  | "OBJECT_INSTANCE"
  | "OBJECT_SET"
  | "OBJECT_TYPE"
  | "OBJECT_VIEW"
  | "OBJECT_VIEW_TAB"
  | "ONTOLOGY_DATA_SOURCE"
  | "ONTOLOGY_DATA_SOURCE_RETENTION"
  | "ONTOLOGY_SCHEMA_MIGRATION_VALUES"
  | "ONTOLOGY_SDK"
  | "OVERRIDE_ONTOLOGY_ENTITY_API_NAMES"
  | "PARAMETER"
  | "PEER_PRODUCER_PROFILE"
  | "PEER_PROFILE"
  | "PEER_PROFILE_REMOTE_STRATEGY"
  | "PROPERTY"
  | "QUIVER_DASHBOARD"
  | "SAVED_SEARCH_AROUND"
  | "SCHEDULE"
  | "SHARED_PROPERTY_TYPE"
  | "SLATE_APPLICATION"
  | "STORED_PROCEDURE"
  | "SOLUTION_DESIGN"
  | "SPARK_PROFILE"
  | "TABULAR_DATA_SOURCE"
  | "TAURUS_WORKFLOW"
  | "THIRD_PARTY_APPLICATION"
  | "TIME_SERIES_SYNC"
  | "VALUE_TYPE"
  | "CODE_WORKBOOK"
  | "VERSIONED_OBJECT_SET"
  | "VERTEX_TEMPLATE"
  | "VORTEX_TEMPLATE"
  | "WALKTHROUGH"
  | "WEBHOOK"
  | "WIDGET"
  | "WIDGET_SET"
  | "WORKBENCH_TEMPLATE"
  | "WORKFLOW_BUILDER_GRAPH"
  | "WORKFLOW_GRAPH"
  | "SQL_WORKSHEET"
  | "WORKSHOP_APPLICATION"
  | "WORKSHOP_APPLICATION_SAVE_LOCATION"
  | "OTHER";

/**
 * A value fulfilling a product input. Use a representation advertised by the input's supportedTypes, preferring the first applicable representation. Structured values use the resolved variant.
 *
 * Log Safety: DO_NOT_LOG
 */
export type InputValue =
  | ({ type: "apiName" } & InputValueApiName)
  | ({ type: "boolean" } & InputValueBoolean)
  | ({ type: "credential" } & InputValueCredential)
  | ({ type: "cron" } & InputValueCron)
  | ({ type: "integer" } & InputValueInteger)
  | ({ type: "resolved" } & InputValueResolved)
  | ({ type: "rid" } & InputValueRid)
  | ({ type: "ridWithVersion" } & InputValueRidWithVersion)
  | ({ type: "string" } & InputValueString)
  | ({ type: "strings" } & InputValueStrings);

/**
 * Log Safety: UNSAFE
 */
export interface InputValueApiName {
  apiName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueBoolean {
  value: boolean;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface InputValueCredential {
  secrets: CredentialSecrets;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueCron {
  cronExpression: string;
  timeZone: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueInteger {
  value: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueResolved {
  value: ResolvedInput;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueRid {
  rid: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueRidWithVersion {
  rid: string;
  version: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueString {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface InputValueStrings {
  values: Array<string>;
}

/**
 * A resolution or validation error. Resource references are included only when visible to the request token.
 *
 * Log Safety: UNSAFE
 */
export interface InstallationError {
  errorValue: ErrorValue;
  severity: ErrorSeverity;
  target: ErrorTarget;
}

/**
   * Which fulfilled installation inputs to return based on their source.
Values:

ALL: Include inputs from every stored source.
MANUAL_ONLY: Include manually fulfilled inputs only.
   *
   * Log Safety: SAFE
   */
export type InstallationInputSelection = "MANUAL_ONLY" | "ALL";

/**
 * Prepare and validate the job draft without submitting a job. The draft remains available for later action.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobDraftMode {}

/**
 * An error prevented draft preparation from reaching a consistent state.
 *
 * Log Safety: UNSAFE
 */
export interface InstallationJobDraftPreparationFailure {
  error: ErrorValue;
}

/**
   * What to do with a draft if preparation fails or submission is prevented.
Values:

ABORT: Abort and clean up the draft.
IDLE: Retain the draft for inspection or continuation in Marketplace.
   *
   * Log Safety: SAFE
   */
export type InstallationJobErrorHandling = "IDLE" | "ABORT";

/**
 * Errors from a submitted installation job.
 *
 * Log Safety: UNSAFE
 */
export interface InstallationJobExecutionFailure {
  errors: Array<ErrorValue>;
  stage: InstallationJobFailureStage;
}

/**
 * Failure diagnostics grouped by the phase in which the failure occurred.
 *
 * Log Safety: UNSAFE
 */
export type InstallationJobFailure =
  | ({ type: "draftPreparation" } & InstallationJobDraftPreparationFailure)
  | ({ type: "execution" } & InstallationJobExecutionFailure);

/**
 * The stage and cause of a submitted installation job's failure.
 *
 * Log Safety: SAFE
 */
export type InstallationJobFailureStage =
  | "IN_PROGRESS_ERROR"
  | "BUILD_ERRORED"
  | "BUILD_TIMED_OUT";

/**
 * Input values and explicitly unset inputs for a target installation. Inputs absent from both fields may be fulfilled by defaults, automatic mapping, or recommendations. Use discoverInputs to inspect available sources.
 *
 * Log Safety: DO_NOT_LOG
 */
export interface InstallationJobInputs {
  explicitlyUnset: Array<InputApiName>;
  values: Record<InputApiName, InputValue>;
}

/**
 * If omitted, submit with NON_BLOCKING_ERRORS tolerance and ABORT handling.
 *
 * Log Safety: SAFE
 */
export type InstallationJobSubmissionMode =
  | ({ type: "draft" } & InstallationJobDraftMode)
  | ({ type: "submit" } & InstallationJobSubmitMode);

/**
 * Submit the job after draft preparation and validation if errors fall within the selected tolerance.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobSubmitMode {
  errorHandling?: InstallationJobErrorHandling;
  errorTolerance?: InstallationJobValidationErrorTolerance;
}

/**
 * An existing installation to upgrade, its target version, and its input selections.
 *
 * Log Safety: DO_NOT_LOG
 */
export interface InstallationJobTarget {
  inputs: InstallationJobInputs;
  installationRid: MarketplaceInstallationRid;
  overrides?: InstallationOverrides;
  targetVersion: TargetVersion;
}

/**
 * Validation results available to the viewer.
 *
 * Log Safety: UNSAFE
 */
export type InstallationJobValidation =
  | ({ type: "errors" } & InstallationJobValidationErrors)
  | ({ type: "summary" } & InstallationJobValidationSummary);

/**
 * Validation errors visible to the job owner.
 *
 * Log Safety: UNSAFE
 */
export interface InstallationJobValidationErrors {
  errors: Array<InstallationError>;
}

/**
   * Which validation errors may be tolerated when deciding whether to submit the job.
Values:

NONE: Any validation error prevents submission.
NON_BLOCKING_ERRORS: Only blocking validation errors prevent submission.
   *
   * Log Safety: SAFE
   */
export type InstallationJobValidationErrorTolerance =
  | "NONE"
  | "NON_BLOCKING_ERRORS";

/**
 * A validation error count visible to authorized viewers other than the job owner.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobValidationSummary {
  totalBlockingErrors: number;
}

/**
 * Changes to the installation's location for the proposed job. The destination folder is unchanged.
 *
 * Log Safety: SAFE
 */
export interface InstallationOverrides {
  ontology?: OntologyOverride;
}

/**
   * Values:

DISPLAY_NAME_AND_API_NAME: Prefix Ontology entity display names and API names.
DISPLAY_NAME_ONLY: Prefix Ontology entity display names only.
   *
   * Log Safety: SAFE
   */
export type InstallationPrefixConfiguration =
  | "DISPLAY_NAME_ONLY"
  | "DISPLAY_NAME_AND_API_NAME";

/**
 * An existing installation and its target product version.
 *
 * Log Safety: SAFE
 */
export interface InstallationTarget {
  installationRid: MarketplaceInstallationRid;
  overrides?: InstallationOverrides;
  targetVersion: TargetVersion;
}

/**
   * Why a supplied input value cannot be used.
Values:

INVALID_PARENT_INPUT: A supplied parent input did not resolve to the type required by the child input.
INVALID_VERSION: The supplied version could not be parsed in the format required by this input.
MISSING_VERSION: This input requires a resource version. Supply it using the ridWithVersion value variant.
RESOURCE_UNAVAILABLE: The referenced resource or a required version could not be found or resolved.
UNSUPPORTED_TYPE: The supplied value variant is not supported for this input. Use one of the input's supportedTypes.
   *
   * Log Safety: SAFE
   */
export type InvalidInstallationInputReason =
  | "MISSING_VERSION"
  | "INVALID_VERSION"
  | "UNSUPPORTED_TYPE"
  | "RESOURCE_UNAVAILABLE"
  | "INVALID_PARENT_INPUT";

/**
 * The library's location within an artifacts repository.
 *
 * Log Safety: UNSAFE
 */
export type LibraryLocator =
  | ({ type: "conda" } & LibraryLocatorConda)
  | ({ type: "path" } & LibraryLocatorPath);

/**
 * Log Safety: UNSAFE
 */
export interface LibraryLocatorConda {
  buildString: string;
  extension: CondaPackageExtension;
  name: string;
  platform: string;
  version: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface LibraryLocatorPath {
  path: string;
}

/**
 * Write to the local Geotime. Omit namespaceRid to use the default local destination.
 *
 * Log Safety: SAFE
 */
export interface LocalGeotimeDestination {
  namespaceRid?: _Core.NamespaceRid;
}

/**
 * A registered product installation and Compass resource. Its latest target version is absent until an installation job runs.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceInstallation {
  description?: string;
  displayName: string;
  latestTargetVersion?: ProductVersion;
  marketplaceRid: MarketplaceRid;
  namespaceRid: _Core.NamespaceRid;
  ontologyRid?: _Core.OntologyRid;
  parentFolderRid: _Core.FolderRid;
  productId: ProductId;
  rid: MarketplaceInstallationRid;
}

/**
 * The current fulfilled inputs and inputs explicitly left unfulfilled by the last job of a registered Marketplace installation.
 *
 * Log Safety: DO_NOT_LOG
 */
export interface MarketplaceInstallationInputs {
  explicitlyUnset: Array<InputApiName>;
  inputs: Record<InputApiName, CurrentInstallationInput>;
}

/**
 * An attempt to upgrade one or more existing product installations. The same RID identifies the draft and its submitted job.
 *
 * Log Safety: SAFE
 */
export interface MarketplaceInstallationJob {
  rid: MarketplaceInstallationJobRid;
  status: MarketplaceInstallationJobStatus;
}

/**
 * Available validation and failure diagnostics for an installation job or draft.
 *
 * Log Safety: UNSAFE
 */
export interface MarketplaceInstallationJobDetails {
  failure?: InstallationJobFailure;
  validation?: InstallationJobValidation;
}

/**
 * The RID of a Marketplace installation job or its draft.
 *
 * Log Safety: SAFE
 */
export type MarketplaceInstallationJobRid = LooselyBrandedString<
  "MarketplaceInstallationJobRid"
>;

/**
   * Values:

ABORTED: The draft or running job was aborted. This can happen either via an explicit abort call or from a job submission failure. An aborted draft remains queryable until automatic cleanup, after which it is no longer found. Terminal status.
ABORTING: Cancellation has been requested for the submitted installation job, but it has not yet reached a terminal state. Continue polling.
BUILDING: Resources have been installed and dataset builds are being submitted or awaited. Continue polling.
FAILED: The installation job failed. Terminal.
IDLE_DRAFT: The draft is retained without running an installation job, either by request or because submission was prevented. Further action is required to submit it; polling alone will not advance it.
IN_PROGRESS: The installation job is executing. Continue polling.
PREPARING: The draft is resolving inputs, validating, or being submitted. Continue polling.
SUCCEEDED: The installation job completed successfully. Terminal.
   *
   * Log Safety: SAFE
   */
export type MarketplaceInstallationJobStatus =
  | "PREPARING"
  | "IDLE_DRAFT"
  | "ABORTING"
  | "IN_PROGRESS"
  | "BUILDING"
  | "ABORTED"
  | "SUCCEEDED"
  | "FAILED";

/**
 * Log Safety: SAFE
 */
export type MarketplaceInstallationRid = LooselyBrandedString<
  "MarketplaceInstallationRid"
>;

/**
 * Log Safety: SAFE
 */
export type MarketplaceRid = LooselyBrandedString<"MarketplaceRid">;

/**
 * A stable identifier for a potential Ontology schema migration in the product definition.
 *
 * Log Safety: SAFE
 */
export type MigrationCandidateId = LooselyBrandedString<"MigrationCandidateId">;

/**
 * A typed Ontology property literal.
 *
 * Log Safety: UNSAFE
 */
export type OntologyLiteral =
  | ({ type: "array" } & OntologyLiteralArray)
  | ({ type: "boolean" } & OntologyLiteralBoolean)
  | ({ type: "byte" } & OntologyLiteralByte)
  | ({ type: "date" } & OntologyLiteralDate)
  | ({ type: "decimal" } & OntologyLiteralDecimal)
  | ({ type: "double" } & OntologyLiteralDouble)
  | ({ type: "float" } & OntologyLiteralFloat)
  | ({ type: "geohash" } & OntologyLiteralGeohash)
  | ({ type: "integer" } & OntologyLiteralInteger)
  | ({ type: "long" } & OntologyLiteralLong)
  | ({ type: "short" } & OntologyLiteralShort)
  | ({ type: "string" } & OntologyLiteralString)
  | ({ type: "timestamp" } & OntologyLiteralTimestamp);

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralArray {
  values: Array<OntologyLiteralJson>;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralBoolean {
  value: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralByte {
  value: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralDate {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralDecimal {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralDouble {
  value: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralFloat {
  value: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralGeohash {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralInteger {
  value: number;
}

/**
   * A tagged JSON object with the same structure and constraints as OntologyLiteral, used for an array element.
Scalar variants contain type and value; the array variant contains values with further tagged literals.
For example, {"type":"array","values":[{"type":"long","value":"1234"}]}.
Every nested literal must use a supported tag and its corresponding value format. Untagged objects, JSON null,
unknown tags, and values outside the selected type's range are invalid.
   *
   * Log Safety: UNSAFE
   */
export type OntologyLiteralJson = any;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralLong {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralShort {
  value: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralString {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyLiteralTimestamp {
  value: string;
}

/**
 * Change the ontology location for the proposed job.
 *
 * Log Safety: SAFE
 */
export type OntologyOverride =
  | ({ type: "remove" } & OntologyOverrideRemove)
  | ({ type: "set" } & OntologyOverrideSet);

/**
 * Remove the installation's ontology location for the proposed job.
 *
 * Log Safety: SAFE
 */
export interface OntologyOverrideRemove {}

/**
 * Use the specified ontology for the proposed job.
 *
 * Log Safety: SAFE
 */
export interface OntologyOverrideSet {
  ontologyRid: _Core.OntologyRid;
}

/**
 * Log Safety: UNSAFE
 */
export type OntologyPropertyValue = {
  type: "literal";
} & OntologyPropertyValueLiteral;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyPropertyValueLiteral {
  value: OntologyLiteral;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologySchemaMigrationSetPropertyValueIfUnset {
  value: OntologyPropertyValue;
}

/**
 * Log Safety: UNSAFE
 */
export type OntologySchemaMigrationValue = {
  type: "setPropertyValueIfUnset";
} & OntologySchemaMigrationSetPropertyValueIfUnset;

/**
 * The UUID of an output in the product definition.
 *
 * Log Safety: SAFE
 */
export type OutputId = string;

/**
 * Log Safety: UNSAFE
 */
export interface OutputReference {
  displayName: string;
  outputId: OutputId;
}

/**
 * Log Safety: SAFE
 */
export interface PeeredGeotimeDestination {
  destinationId: string;
  namespaceRid: _Core.NamespaceRid;
}

/**
 * Write to the local Geotime and peer to the specified destinations.
 *
 * Log Safety: SAFE
 */
export interface PeeredGeotimeDestinations {
  destinations: Array<PeeredGeotimeDestination>;
}

/**
 * Which remote systems and namespaces a peer profile governs.
 *
 * Log Safety: UNSAFE
 */
export type PeerRemoteStrategy =
  | ({ type: "meshId" } & PeerRemoteStrategyMeshId)
  | ({ type: "meshNodeLabel" } & PeerRemoteStrategyMeshNodeLabel)
  | ({ type: "specificRemote" } & PeerRemoteStrategySpecificRemote);

/**
 * Select all members of the specified mesh.
 *
 * Log Safety: SAFE
 */
export interface PeerRemoteStrategyMeshId {
  meshId: string;
}

/**
 * Select members of the specified mesh with the given labels.
 *
 * Log Safety: UNSAFE
 */
export interface PeerRemoteStrategyMeshNodeLabel {
  meshId: string;
  meshNodeLabels: Array<string>;
}

/**
 * Log Safety: SAFE
 */
export interface PeerRemoteStrategySpecificRemote {
  remoteNamespace: _Core.NamespaceRid;
  remoteSystem: string;
}

/**
 * A typed pipeline parameter literal. Arrays and maps contain tagged literal JSON with the same variants and value formats, recursively. A null literal uses the empty variant rather than a JSON null value.
 *
 * Log Safety: UNSAFE
 */
export type PipelineBuilderLiteral =
  | ({ type: "array" } & PipelineBuilderLiteralArray)
  | ({ type: "binary" } & PipelineBuilderLiteralBinary)
  | ({ type: "boolean" } & PipelineBuilderLiteralBoolean)
  | ({ type: "date" } & PipelineBuilderLiteralDate)
  | ({ type: "datetime" } & PipelineBuilderLiteralDatetime)
  | ({ type: "decimal" } & PipelineBuilderLiteralDecimal)
  | ({ type: "double" } & PipelineBuilderLiteralDouble)
  | ({ type: "empty" } & PipelineBuilderLiteralEmpty)
  | ({ type: "integer" } & PipelineBuilderLiteralInteger)
  | ({ type: "long" } & PipelineBuilderLiteralLong)
  | ({ type: "map" } & PipelineBuilderLiteralMap)
  | ({ type: "string" } & PipelineBuilderLiteralString);

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralArray {
  values: Array<PipelineBuilderLiteralJson>;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralBinary {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralBoolean {
  value: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralDate {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralDatetime {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralDecimal {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralDouble {
  value: number;
}

/**
 * A null literal.
 *
 * Log Safety: SAFE
 */
export interface PipelineBuilderLiteralEmpty {}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralInteger {
  value: number;
}

/**
   * A tagged JSON object with the same structure and constraints as PipelineBuilderLiteral, used for nested literals.
Scalar variants contain type and value; array contains values; map contains entries with key and value
literals; empty contains only type. Arrays and maps can contain further literals recursively. For example,
{"type":"array","values":[{"type":"long","value":"42"},{"type":"empty"}]}.
Every nested literal must use a supported tag and its corresponding value format. Untagged objects, JSON null,
unknown tags, and values outside the selected type's range are invalid.
   *
   * Log Safety: UNSAFE
   */
export type PipelineBuilderLiteralJson = any;

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralLong {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralMap {
  entries: Array<PipelineBuilderLiteralMapEntry>;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralMapEntry {
  key: PipelineBuilderLiteralJson;
  value: PipelineBuilderLiteralJson;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderLiteralString {
  value: string;
}

/**
 * A literal, regular expression, or enum value matching the parameter requested by the product.
 *
 * Log Safety: UNSAFE
 */
export type PipelineBuilderParameter =
  | ({ type: "enum" } & PipelineBuilderParameterEnum)
  | ({ type: "literal" } & PipelineBuilderParameterLiteral)
  | ({ type: "regex" } & PipelineBuilderParameterRegex);

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderParameterEnum {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderParameterLiteral {
  value: PipelineBuilderLiteral;
}

/**
 * Log Safety: UNSAFE
 */
export interface PipelineBuilderParameterRegex {
  pattern: string;
}

/**
 * How a pipeline handles a state break during upgrade.
 *
 * Log Safety: SAFE
 */
export type PipelineReplayOption =
  | ({
    type: "acknowledgeStateBreaks";
  } & PipelineReplayOptionAcknowledgeStateBreaks)
  | ({ type: "reset" } & PipelineReplayOptionReset)
  | ({
    type: "resetAndReplayFromOffset";
  } & PipelineReplayOptionResetAndReplayFromOffset);

/**
 * Ignore state breaks and continue reading data where possible.
 *
 * Log Safety: SAFE
 */
export interface PipelineReplayOptionAcknowledgeStateBreaks {
  acknowledgement?: ReplayAcknowledgement;
}

/**
 * Reset the pipeline with all data.
 *
 * Log Safety: SAFE
 */
export interface PipelineReplayOptionReset {
  acknowledgement?: ReplayAcknowledgement;
}

/**
 * Reset the pipeline with data received before the specified offset time.
 *
 * Log Safety: SAFE
 */
export interface PipelineReplayOptionResetAndReplayFromOffset {
  acknowledgement?: ReplayAcknowledgement;
  offsetMillis: string;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface PlaintextCredentialSecrets {
  values: Record<SecretName, SecretValue>;
}

/**
 * Log Safety: SAFE
 */
export type ProductId = string;

/**
 * The semantic version of a product, for example 1.2.3.
 *
 * Log Safety: SAFE
 */
export type ProductSemanticVersion = LooselyBrandedString<
  "ProductSemanticVersion"
>;

/**
 * Log Safety: SAFE
 */
export interface ProductVersion {
  semanticVersion: ProductSemanticVersion;
  versionId: ProductVersionId;
}

/**
 * Log Safety: SAFE
 */
export interface ProductVersionById {
  versionId: ProductVersionId;
}

/**
 * Log Safety: SAFE
 */
export interface ProductVersionBySemanticVersion {
  version: ProductSemanticVersion;
}

/**
 * Log Safety: SAFE
 */
export type ProductVersionId = string;

/**
 * Select a product version by its UUID or an exact semantic version within the specified product and marketplace.
 *
 * Log Safety: SAFE
 */
export type ProductVersionSelector =
  | ({ type: "semanticVersion" } & ProductVersionBySemanticVersion)
  | ({ type: "versionId" } & ProductVersionById);

/**
 * Select other installations whose outputs may fulfill the target inputs. Recommendations are automatically applied when preparing an installation job.
 *
 * Log Safety: UNSAFE
 */
export type RecommendationStrategy =
  | ({ type: "explicit" } & RecommendationStrategyExplicit)
  | ({ type: "sameNamespace" } & RecommendationStrategySameNamespace);

/**
 * Consider the specified installations as input recommendations. The request token must be able to view each installation, and none may have a product targeted by the job.
 *
 * Log Safety: SAFE
 */
export interface RecommendationStrategyExplicit {
  installationRids: Array<MarketplaceInstallationRid>;
}

/**
 * Consider visible installations outside the trash in the targets' namespace. Multiple matches for one linked product are ambiguous, even if only one has a compatible version.
 *
 * Log Safety: UNSAFE
 */
export interface RecommendationStrategySameNamespace {
  suffixFilter?: string;
}

/**
 * Inspection data only. These names cannot be submitted as credentials for installation.
 *
 * Log Safety: UNSAFE
 */
export interface RedactedCredentialSecrets {
  secretNames: Array<SecretName>;
}

/**
 * Log Safety: SAFE
 */
export interface ReplayAcknowledgement {
  marketplaceUpgradeVersion: number;
}

/**
 * A structured input value. Use the variant advertised by the input's supportedTypes. Prefer a direct scalar or resource reference when the input supports one.
 *
 * Log Safety: UNSAFE
 */
export type ResolvedInput =
  | ({
    type: "connectionConfigurationOverrides";
  } & ResolvedInputConnectionConfigurationOverrides)
  | ({ type: "functionApiStability" } & ResolvedInputFunctionApiStability)
  | ({ type: "group" } & ResolvedInputGroup)
  | ({ type: "installationPrefix" } & ResolvedInputInstallationPrefix)
  | ({ type: "library" } & ResolvedInputLibrary)
  | ({ type: "ontologyDataSource" } & ResolvedInputOntologyDataSource)
  | ({
    type: "ontologyDataSourceRetention";
  } & ResolvedInputOntologyDataSourceRetention)
  | ({
    type: "ontologySchemaMigrationPolicy";
  } & ResolvedInputOntologySchemaMigrationPolicy)
  | ({
    type: "ontologySchemaMigrationValues";
  } & ResolvedInputOntologySchemaMigrationValues)
  | ({ type: "peerProducerProfile" } & ResolvedInputPeerProducerProfile)
  | ({
    type: "peerProfileRemoteStrategy";
  } & ResolvedInputPeerProfileRemoteStrategy)
  | ({
    type: "pipelineBuilderGeotimeConfiguration";
  } & ResolvedInputPipelineBuilderGeotimeConfiguration)
  | ({
    type: "pipelineBuilderParameter";
  } & ResolvedInputPipelineBuilderParameter)
  | ({
    type: "pipelineBuilderReplayOption";
  } & ResolvedInputPipelineBuilderReplayOption)
  | ({
    type: "streamingSyncConfigurationOverrides";
  } & ResolvedInputStreamingSyncConfigurationOverrides)
  | ({
    type: "workshopSavedStateConfiguration";
  } & ResolvedInputWorkshopSavedStateConfiguration);

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputConnectionConfigurationOverrides {
  configOverrides: Record<ConfigurationKey, ConfigurationValue>;
}

/**
 * Log Safety: SAFE
 */
export interface ResolvedInputFunctionApiStability {
  configuration: FunctionApiStability;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputGroup {
  name: string;
  realm: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputInstallationPrefix {
  prefix: string;
  prefixConfiguration?: InstallationPrefixConfiguration;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputLibrary {
  locator: LibraryLocator;
  repositoryRid: ResourceRid;
}

/**
 * Log Safety: SAFE
 */
export interface ResolvedInputOntologyDataSource {
  dataSourceRid: ResourceRid;
  ontologyEntityRid: ResourceRid;
}

/**
 * Retention thresholds for a direct Ontology data source in an edge environment.
 *
 * Log Safety: SAFE
 */
export interface ResolvedInputOntologyDataSourceRetention {
  targetSizeBytes: string;
  triggerSizeBytes: string;
}

/**
 * Acknowledgements permitting automatic migrations of Ontology edits during installation or upgrade.
 *
 * Log Safety: SAFE
 */
export interface ResolvedInputOntologySchemaMigrationPolicy {
  allowCastMigrations: boolean;
  allowDropMigrations: boolean;
  allowPermanentlyDeleteMigrations?: boolean;
  allowRenameDataSourceMigrations?: boolean;
  allowRenamePropertyMigrations?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputOntologySchemaMigrationValues {
  migrations: Record<MigrationCandidateId, OntologySchemaMigrationValue>;
}

/**
 * Log Safety: SAFE
 */
export interface ResolvedInputPeerProducerProfile {
  peerProducerProfileRid: ResourceRid;
  peerProducerUri: string;
  peerProfileRid: ResourceRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputPeerProfileRemoteStrategy {
  strategy: PeerRemoteStrategy;
}

/**
 * Geotime destinations for an installed pipeline.
 *
 * Log Safety: UNSAFE
 */
export interface ResolvedInputPipelineBuilderGeotimeConfiguration {
  destinations: GeotimeDestinations;
  observationSpecId?: string;
  sourceSystemSpecId?: string;
}

/**
 * A parameter value for a Pipeline Builder or edge pipeline input.
 *
 * Log Safety: UNSAFE
 */
export interface ResolvedInputPipelineBuilderParameter {
  parameter: PipelineBuilderParameter;
}

/**
 * Log Safety: SAFE
 */
export interface ResolvedInputPipelineBuilderReplayOption {
  replayOption: PipelineReplayOption;
}

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputStreamingSyncConfigurationOverrides {
  configOverrides: Record<ConfigurationKey, ConfigurationValue>;
}

/**
 * A structured representation supported by an input when a scalar or resource reference is insufficient.
 *
 * Log Safety: SAFE
 */
export type ResolvedInputType =
  | "ONTOLOGY_SCHEMA_MIGRATION_POLICY"
  | "LIBRARY"
  | "PIPELINE_BUILDER_GEOTIME_CONFIGURATION"
  | "PIPELINE_BUILDER_PARAMETER"
  | "PIPELINE_BUILDER_REPLAY_OPTION"
  | "FUNCTION_API_STABILITY"
  | "INSTALLATION_PREFIX"
  | "CONNECTION_CONFIGURATION_OVERRIDES"
  | "STREAMING_SYNC_CONFIGURATION_OVERRIDES"
  | "GROUP"
  | "ONTOLOGY_DATA_SOURCE"
  | "ONTOLOGY_DATA_SOURCE_RETENTION"
  | "ONTOLOGY_SCHEMA_MIGRATION_VALUES"
  | "PEER_PRODUCER_PROFILE"
  | "PEER_PROFILE_REMOTE_STRATEGY"
  | "WORKSHOP_SAVED_STATE_CONFIGURATION";

/**
 * Log Safety: UNSAFE
 */
export interface ResolvedInputWorkshopSavedStateConfiguration {
  enableFolderSelector: boolean;
  enableHomeFolderSaves: boolean;
  hideInaccessibleLocations: boolean;
  saveLocations: Array<WorkshopSaveLocation>;
  stableIdentifier: StableIdentifier;
}

/**
 * A resource RID used in a structured input field with a known purpose.
 *
 * Log Safety: SAFE
 */
export type ResourceRid = LooselyBrandedString<"ResourceRid">;

/**
 * The name of a secret required by a credential input.
 *
 * Log Safety: UNSAFE
 */
export type SecretName = LooselyBrandedString<"SecretName">;

/**
 * A credential secret supplied when configuring an installation job.
 *
 * Log Safety: DO_NOT_LOG
 */
export type SecretValue = LooselyBrandedString<"SecretValue">;

/**
   * A standard value representation supported by an input.
Values:

CREDENTIAL: A mapping of secret names to secret values.
CRON: A cron expression with a time zone.
   *
   * Log Safety: SAFE
   */
export type SimpleInputType =
  | "RID"
  | "RID_WITH_VERSION"
  | "API_NAME"
  | "STRING"
  | "STRINGS"
  | "BOOLEAN"
  | "INTEGER"
  | "CRON"
  | "CREDENTIAL";

/**
 * Filters inputs by the sources that can fulfill them.
 *
 * Log Safety: SAFE
 */
export interface SourceFilter {
  excludedSources: Array<InputSource>;
}

/**
 * The stable identifier assigned to an input in the product definition.
 *
 * Log Safety: UNSAFE
 */
export type StableIdentifier = LooselyBrandedString<"StableIdentifier">;

/**
 * An accepted representation for a supplied input value. Simple representations are preferred to structured resolved representations.
 *
 * Log Safety: SAFE
 */
export type SupportedInputType =
  | ({ type: "resolved" } & SupportedInputTypeResolved)
  | ({ type: "simple" } & SupportedInputTypeSimple);

/**
 * Log Safety: SAFE
 */
export interface SupportedInputTypeResolved {
  valueType: ResolvedInputType;
}

/**
 * Log Safety: SAFE
 */
export interface SupportedInputTypeSimple {
  valueType: SimpleInputType;
}

/**
 * Select the latest released version, an exact semantic version, or a version UUID within the installation's product and marketplace.
 *
 * Log Safety: SAFE
 */
export type TargetVersion =
  | ({ type: "latest" } & TargetVersionLatest)
  | ({ type: "semanticVersion" } & ProductVersionBySemanticVersion)
  | ({ type: "versionId" } & ProductVersionById);

/**
 * Use the latest released version of the product when the request is evaluated. A later request may select a different version.
 *
 * Log Safety: SAFE
 */
export interface TargetVersionLatest {}

/**
 * Log Safety: UNSAFE
 */
export type WorkshopSaveLocation = {
  type: "folder";
} & WorkshopSaveLocationFolder;

/**
 * Log Safety: UNSAFE
 */
export interface WorkshopSaveLocationFolder {
  displayNameOverride: string;
  folderRid: _Core.FolderRid;
}
