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
import type * as _Filesystem from "@osdk/foundry.filesystem";
import type * as _Ontologies from "@osdk/foundry.ontologies";
import type * as _Orchestration from "@osdk/foundry.orchestration";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * A boolean parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface BooleanParameter {
  value: boolean;
}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * The provided changelog exceeds the maximum allowed length.
 *
 * Log Safety: SAFE
 */
export interface ChangelogTooLongError {
  maxLength: number;
  actualLength: number;
}

/**
 * The name of a column in a dataset.
 *
 * Log Safety: UNSAFE
 */
export type ColumnName = LooselyBrandedString<"ColumnName">;

/**
 * An identifier for a column type specification.
 *
 * Log Safety: UNSAFE
 */
export type ColumnTypeSpecId = LooselyBrandedString<"ColumnTypeSpecId">;

/**
 * A specific reason why configuration validation failed.
 *
 * Log Safety: UNSAFE
 */
export type CreateConfigValidationFailureReason =
  | ({ type: "jsonSchemaValidationFailure" } & JsonSchemaValidationError)
  | ({
    type: "outputResourceInDifferentProject";
  } & OutputResourceInDifferentProjectError)
  | ({ type: "other" } & OtherValidationError)
  | ({ type: "missingWorkerConfigOutput" } & MissingWorkerConfigOutputError)
  | ({
    type: "missingRequiredDatasetColumn";
  } & MissingRequiredDatasetColumnError)
  | ({
    type: "multiplePropertiesNotAllowedForTrainer";
  } & MultiplePropertiesNotAllowedForTrainerError)
  | ({ type: "fieldValidationFailure" } & FieldValidationError)
  | ({ type: "changelogTooLong" } & ChangelogTooLongError)
  | ({
    type: "unknownColumnSpecIdInConfigColumnMapping";
  } & UnknownColumnSpecIdInConfigColumnMappingError)
  | ({
    type: "multipleColumnsNotAllowedForTrainer";
  } & MultipleColumnsNotAllowedForTrainerError)
  | ({
    type: "missingWorkerConfigInputDatasetColumnMapping";
  } & MissingWorkerConfigInputDatasetColumnMappingError)
  | ({ type: "datasetSchemaNotFound" } & DatasetSchemaNotFoundError)
  | ({ type: "missingWorkerConfigInput" } & MissingWorkerConfigInputError)
  | ({
    type: "missingWorkerConfigInputObjectSetPropertyMapping";
  } & MissingWorkerConfigInputObjectSetPropertyMappingError)
  | ({ type: "outputResourceNotFound" } & OutputResourceNotFoundError)
  | ({
    type: "invalidResourceConfiguration";
  } & InvalidResourceConfigurationError);

/**
 * Log Safety: UNSAFE
 */
export interface CreateLiveDeploymentRequest {
  deploymentType: CreateLiveDeploymentTarget;
  runtimeConfiguration: LiveDeploymentRuntimeConfiguration;
}

/**
 * The target model source for the live deployment. Determines which model and version selection strategy to use when creating the deployment.
 *
 * Log Safety: UNSAFE
 */
export type CreateLiveDeploymentTarget = {
  type: "direct";
} & DirectCreateLiveDeploymentTarget;

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelFunctionRequest {
  apiName: ModelFunctionApiName;
  ontologyBinding?: _Ontologies.OntologyRid;
  isRowWise: ModelFunctionIsRowWise;
  displayName: ModelFunctionDisplayName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelRequest {
  name: ModelName;
  parentFolderRid: _Filesystem.FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelStudioConfigVersionRequest {
  name: ModelStudioConfigVersionName;
  resources: ResourceConfiguration;
  changelog?: string;
  workerConfig: ModelStudioWorkerConfig;
  trainerId: TrainerId;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelStudioRequest {
  name: string;
  parentFolderRid: _Filesystem.FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateModelVersionRequest {
  modelFiles: ModelFiles;
  backingRepositories: Array<string>;
  condaRequirements: Array<string>;
  modelApi: ModelApi;
}

/**
 * Dataset input configuration.
 *
 * Log Safety: UNSAFE
 */
export interface DatasetInput {
  rid: string;
  columnMapping: Record<ColumnTypeSpecId, Array<_Core.ColumnName>>;
  ignoreColumns: Array<_Core.ColumnName>;
  selectColumns: Array<_Core.ColumnName>;
}

/**
 * A schema could not be found for the specified dataset.
 *
 * Log Safety: SAFE
 */
export interface DatasetSchemaNotFoundError {
  datasetRid: string;
}

/**
 * A datetime parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface DatetimeParameter {
  value: string;
}

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: UNSAFE
 */
export interface DillModelFiles {
  serializedModelFunction: string;
}

/**
 * Creates a live deployment that tracks the latest model version on a branch.
 *
 * Log Safety: UNSAFE
 */
export interface DirectCreateLiveDeploymentTarget {
  modelRid: ModelRid;
  branch: string;
}

/**
 * A double parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface DoubleParameter {
  value: number;
}

/**
 * Aggregated statistics for numeric series.
 *
 * Log Safety: UNSAFE
 */
export interface DoubleSeriesAggregations {
  min?: number;
  max?: number;
  last?: number;
}

/**
 * A series of double values.
 *
 * Log Safety: UNSAFE
 */
export interface DoubleSeriesV1 {
  series: Array<DoubleSeriesValueV1>;
}

/**
 * A single double value in a series.
 *
 * Log Safety: UNSAFE
 */
export interface DoubleSeriesValueV1 {
  value: number;
  timestamp: EpochMillis;
  step: string;
}

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: SAFE
 */
export interface Duration {
  unit: _Core.TimeUnit;
  value: number;
}

/**
   * Milliseconds since unix time zero. This representation is used to maintain consistency with the Parquet
format.
   *
   * Log Safety: SAFE
   */
export type EpochMillis = string;

/**
 * Log Safety: UNSAFE
 */
export interface Experiment {
  rid: ExperimentRid;
  modelRid: ModelRid;
  createdTime: _Core.CreatedTime;
  createdBy: _Core.CreatedBy;
  source: ExperimentSource;
  status: ExperimentStatus;
  statusMessage?: string;
  branch: ExperimentBranch;
  parameters: Array<Parameter>;
  series: Array<SeriesAggregations>;
  summaryMetrics: Array<SummaryMetric>;
  artifacts: Record<ExperimentArtifactName, ExperimentArtifactMetadata>;
  tags: Array<ExperimentTagText>;
  linkedModelVersion?: ModelVersionRid;
  jobRid?: _Core.JobRid;
}

/**
 * Details about an experiment artifact.
 *
 * Log Safety: SAFE
 */
export type ExperimentArtifactDetails = {
  type: "table";
} & TableArtifactDetails;

/**
 * Metadata about an experiment artifact.
 *
 * Log Safety: UNSAFE
 */
export interface ExperimentArtifactMetadata {
  name: ExperimentArtifactName;
  description?: string;
  sizeBytes: _Core.SizeBytes;
  details: ExperimentArtifactDetails;
}

/**
 * The name of an experiment artifact.
 *
 * Log Safety: UNSAFE
 */
export type ExperimentArtifactName = LooselyBrandedString<
  "ExperimentArtifactName"
>;

/**
 * Log Safety: UNSAFE
 */
export interface ExperimentArtifactTable {
  name: ExperimentArtifactName;
}

/**
 * Experiment created from an authoring repository.
 *
 * Log Safety: SAFE
 */
export interface ExperimentAuthoringSource {
  stemmaRid: string;
}

/**
 * Log Safety: UNSAFE
 */
export type ExperimentBranch = LooselyBrandedString<"ExperimentBranch">;

/**
 * Experiment created from a code workspace.
 *
 * Log Safety: SAFE
 */
export interface ExperimentCodeWorkspaceSource {
  containerRid: string;
  deploymentRid?: string;
}

/**
 * The Resource Identifier (RID) of an Experiment.
 *
 * Log Safety: SAFE
 */
export type ExperimentRid = LooselyBrandedString<"ExperimentRid">;

/**
 * Experiment created from the SDK.
 *
 * Log Safety: SAFE
 */
export interface ExperimentSdkSource {}

/**
 * Log Safety: UNSAFE
 */
export interface ExperimentSeries {
  name: SeriesName;
}

/**
 * The source from which the experiment was created.
 *
 * Log Safety: SAFE
 */
export type ExperimentSource =
  | ({ type: "codeWorkspace" } & ExperimentCodeWorkspaceSource)
  | ({ type: "authoring" } & ExperimentAuthoringSource)
  | ({ type: "sdk" } & ExperimentSdkSource);

/**
 * The current status of an experiment.
 *
 * Log Safety: SAFE
 */
export type ExperimentStatus = "RUNNING" | "SUCCEEDED" | "FAILED";

/**
 * A tag associated with an experiment.
 *
 * Log Safety: UNSAFE
 */
export type ExperimentTagText = LooselyBrandedString<"ExperimentTagText">;

/**
 * A dataset column type is not compatible with the trainer's supported column types.
 *
 * Log Safety: UNSAFE
 */
export interface FieldValidationError {
  datasetRid: string;
  fieldName?: string;
  fieldType: string;
}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
 * The specific type of GPU hardware to use.
 *
 * Log Safety: SAFE
 */
export type GpuType =
  | "A100"
  | "A10G"
  | "A16"
  | "H100"
  | "H200"
  | "L4"
  | "L40S"
  | "T4"
  | "V100";

/**
 * Array elements have inconsistent dimensions.
 *
 * Log Safety: UNSAFE
 */
export interface InconsistentArrayDimensionsError {
  firstElementShape: Array<number>;
  conflictingElementShape: Array<number>;
}

/**
   * The specific type and details of an input validation error for inference requests.
Each variant carries parameters relevant to that specific error category.
   *
   * Log Safety: UNSAFE
   */
export type InferenceInputErrorType =
  | ({ type: "invalidArrayShape" } & InvalidArrayShapeError)
  | ({ type: "typeMismatch" } & TypeMismatchError)
  | ({ type: "unsupportedType" } & UnsupportedTypeError)
  | ({ type: "unknownInputName" } & UnknownInputNameError)
  | ({ type: "invalidTabularFormat" } & InvalidTabularFormatError)
  | ({ type: "inconsistentArrayDimensions" } & InconsistentArrayDimensionsError)
  | ({ type: "requiredValueMissing" } & RequiredValueMissingError)
  | ({ type: "invalidMapFormat" } & InvalidMapFormatError);

/**
 * A string alias used to identify inputs in a Model Studio configuration.
 *
 * Log Safety: UNSAFE
 */
export type InputAlias = LooselyBrandedString<"InputAlias">;

/**
 * An integer parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface IntegerParameter {
  value: string;
}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Array dimensions do not match expected ndarray shape.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidArrayShapeError {
  expectedShape: Array<number>;
  actualShape?: Array<number>;
}

/**
 * Map input has incorrect structure or null keys.
 *
 * Log Safety: SAFE
 */
export interface InvalidMapFormatError {}

/**
 * A resource configuration field has an invalid format.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidResourceConfigurationError {
  field: string;
  message: string;
}

/**
 * Tabular input has incorrect JSON structure.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidTabularFormatError {
  inputFieldName: string;
}

/**
 * The custom configuration failed JSON schema validation.
 *
 * Log Safety: UNSAFE
 */
export interface JsonSchemaValidationError {
  field: string;
  message: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListModelStudioConfigVersionsResponse {
  data: Array<ModelStudioConfigVersion>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListModelStudioRunsResponse {
  data: Array<ModelStudioRun>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListModelStudioTrainersResponse {
  data: Array<ModelStudioTrainer>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListModelVersionsResponse {
  data: Array<ModelVersion>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: SAFE
 */
export interface LiveDeployment {
  rid: LiveDeploymentRid;
  modelVersion: LiveDeploymentModelVersion;
  runtimeConfiguration: LiveDeploymentRuntimeConfiguration;
  status: LiveDeploymentStatus;
}

/**
 * GPU resource configuration for a live deployment.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentGpu {
  count: number;
  type?: GpuType;
}

/**
 * Identifies the model and model version associated with a live deployment.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentModelVersion {
  modelRid: ModelRid;
  modelVersionRid: ModelVersionRid;
}

/**
 * The Resource Identifier (RID) of a Live Deployment.
 *
 * Log Safety: SAFE
 */
export type LiveDeploymentRid = LooselyBrandedString<"LiveDeploymentRid">;

/**
 * The compute resource configuration for a live deployment, controlling replica scaling, CPU, memory, and GPU resources.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentRuntimeConfiguration {
  minReplicas: number;
  maxReplicas: number;
  cpu?: number;
  memory?: string;
  gpu?: LiveDeploymentGpu;
  threadCount?: number;
  scalingConfiguration?: LiveDeploymentScalingConfiguration;
}

/**
 * Autoscaling configuration that controls how the deployment scales replicas based on load thresholds and cooldown delays.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentScalingConfiguration {
  scaleUpLoadThreshold: number;
  scaleUpDelay: _Core.Duration;
  scaleDownDelay: _Core.Duration;
}

/**
   * The operational state of a live deployment.
| Value | Description |
| --- | --- |
| ACTIVE | The deployment is active. It may have zero replicas due to autoscaling and still not be ready. |
| STARTING | The deployment is starting up. |
| DEGRADED | At least one replica is ready, but not all replicas are healthy. |
| DISABLED | The deployment is disabled. |
| FAILED | The deployment has failed. No healthy replicas are available. |
   *
   * Log Safety: SAFE
   */
export type LiveDeploymentState =
  | "ACTIVE"
  | "STARTING"
  | "DEGRADED"
  | "DISABLED"
  | "FAILED";

/**
 * The current operational status of a live deployment.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentStatus {
  state: LiveDeploymentState;
  isReady: boolean;
}

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * The user-provided dataset is missing a column required by the trainer.
 *
 * Log Safety: UNSAFE
 */
export interface MissingRequiredDatasetColumnError {
  datasetRid: string;
  columnTypeSpecId: ColumnTypeSpecId;
  columnNames: Array<_Core.ColumnName>;
}

/**
 * The provided worker config input dataset is missing a column mapping required by the trainer.
 *
 * Log Safety: UNSAFE
 */
export interface MissingWorkerConfigInputDatasetColumnMappingError {
  datasetRid: string;
  columnTypeSpecId: ColumnTypeSpecId;
}

/**
 * The worker configuration is missing an input required by the trainer.
 *
 * Log Safety: UNSAFE
 */
export interface MissingWorkerConfigInputError {
  inputAlias: InputAlias;
}

/**
 * The provided worker config input object set is missing a property mapping required by the trainer.
 *
 * Log Safety: UNSAFE
 */
export interface MissingWorkerConfigInputObjectSetPropertyMappingError {
  objectSetRid: string;
  propertyTypeSpecId: string;
}

/**
 * The worker configuration is missing an output required by the trainer.
 *
 * Log Safety: UNSAFE
 */
export interface MissingWorkerConfigOutputError {
  outputAlias: OutputAlias;
}

/**
 * Log Safety: SAFE
 */
export interface Model {
  rid: ModelRid;
}

/**
 * The Model API is a specification that describes the inputs and outputs of a machine learning model. It is used to define the interface for the model, including the types of data that can be passed to it and the types of data that it will return.
 *
 * Log Safety: UNSAFE
 */
export interface ModelApi {
  inputs: Array<ModelApiInput>;
  outputs: Array<ModelApiOutput>;
}

/**
 * Log Safety: SAFE
 */
export interface ModelApiAnyType {}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiArrayType {
  itemType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiColumn {
  name: string;
  required?: boolean;
  dataType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type ModelApiDataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "array" } & ModelApiArrayType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "any" } & ModelApiAnyType)
  | ({ type: "map" } & ModelApiMapType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: UNSAFE
 */
export type ModelApiInput =
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "parameter" } & ModelApiParameterType)
  | ({ type: "tabular" } & ModelApiTabularType);

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiMapType {
  keyType: ModelApiDataType;
  valueType: ModelApiDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type ModelApiOutput =
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "parameter" } & ModelApiParameterType)
  | ({ type: "tabular" } & ModelApiTabularType);

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiParameterType {
  name: string;
  required?: boolean;
  dataType: ModelApiDataType;
}

/**
 * Log Safety: SAFE
 */
export type ModelApiTabularFormat = "PANDAS" | "SPARK";

/**
 * Log Safety: UNSAFE
 */
export interface ModelApiTabularType {
  name: string;
  required?: boolean;
  columns: Array<ModelApiColumn>;
  format?: ModelApiTabularFormat;
}

/**
   * The serialized data of a machine learning model. This can include the model's parameters, architecture, and any other relevant information needed to reconstruct the model.
Must be a base64-encoded string of a dill-serialized model function.
   *
   * Log Safety: UNSAFE
   */
export type ModelFiles = { type: "dill" } & DillModelFiles;

/**
 * Log Safety: UNSAFE
 */
export interface ModelFunction {
  functionRid: ModelFunctionFunctionRid;
  functionVersion: ModelFunctionFunctionVersion;
  displayName: ModelFunctionDisplayName;
  apiName: ModelFunctionApiName;
  isRowWise: ModelFunctionIsRowWise;
  ontologyBinding?: _Ontologies.OntologyRid;
}

/**
 * Log Safety: UNSAFE
 */
export type ModelFunctionApiName = LooselyBrandedString<"ModelFunctionApiName">;

/**
 * Log Safety: UNSAFE
 */
export type ModelFunctionDisplayName = LooselyBrandedString<
  "ModelFunctionDisplayName"
>;

/**
 * Log Safety: SAFE
 */
export type ModelFunctionFunctionRid = LooselyBrandedString<
  "ModelFunctionFunctionRid"
>;

/**
 * Log Safety: UNSAFE
 */
export type ModelFunctionFunctionVersion = LooselyBrandedString<
  "ModelFunctionFunctionVersion"
>;

/**
 * Log Safety: SAFE
 */
export type ModelFunctionIsRowWise = boolean;

/**
 * Log Safety: UNSAFE
 */
export type ModelName = LooselyBrandedString<"ModelName">;

/**
 * Model output configuration.
 *
 * Log Safety: SAFE
 */
export interface ModelOutput {
  modelRid: string;
}

/**
 * The Resource Identifier (RID) of a Model.
 *
 * Log Safety: SAFE
 */
export type ModelRid = LooselyBrandedString<"ModelRid">;

/**
 * Log Safety: SAFE
 */
export interface ModelStudio {
  rid: ModelStudioRid;
  folderRid: _Filesystem.FolderRid;
  createdTime: _Core.CreatedTime;
}

/**
 * The Resource Identifier (RID) of a Model Studio Configuration.
 *
 * Log Safety: SAFE
 */
export type ModelStudioConfigRid = LooselyBrandedString<"ModelStudioConfigRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ModelStudioConfigVersion {
  name: ModelStudioConfigVersionName;
  version: ModelStudioConfigVersionNumber;
  trainerId: TrainerId;
  trainer: TrainerVersionLocator;
  workerConfig: ModelStudioWorkerConfig;
  resources: ResourceConfiguration;
  changelog?: string;
  createdBy: _Core.CreatedBy;
  createdTime: _Core.CreatedTime;
}

/**
 * Human readable name of the configuration version and experiment.
 *
 * Log Safety: UNSAFE
 */
export type ModelStudioConfigVersionName = LooselyBrandedString<
  "ModelStudioConfigVersionName"
>;

/**
 * The version number of a Model Studio Configuration.
 *
 * Log Safety: SAFE
 */
export type ModelStudioConfigVersionNumber = number;

/**
 * Input specification for a Model Studio configuration.
 *
 * Log Safety: UNSAFE
 */
export type ModelStudioInput = { type: "dataset" } & DatasetInput;

/**
 * Output specification for a Model Studio configuration.
 *
 * Log Safety: SAFE
 */
export type ModelStudioOutput = { type: "model" } & ModelOutput;

/**
 * The Resource Identifier (RID) of a Model Studio.
 *
 * Log Safety: SAFE
 */
export type ModelStudioRid = LooselyBrandedString<"ModelStudioRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ModelStudioRun {
  runId: RunId;
  buildRid: ModelStudioRunBuildRid;
  jobRid: ModelStudioRunJobRid;
  configVersion: ModelStudioConfigVersionNumber;
  startedBy: _Core.CreatedBy;
  startedTime: _Core.CreatedTime;
  buildStatus?: _Orchestration.BuildStatus;
  resolvedOutputs: Record<OutputAlias, ModelStudioRunOutput>;
}

/**
 * The RID of the build associated with this run.
 *
 * Log Safety: SAFE
 */
export type ModelStudioRunBuildRid = LooselyBrandedString<
  "ModelStudioRunBuildRid"
>;

/**
 * The RID of the job associated with this run.
 *
 * Log Safety: SAFE
 */
export type ModelStudioRunJobRid = LooselyBrandedString<"ModelStudioRunJobRid">;

/**
 * Resolved model output details for a Model Studio run.
 *
 * Log Safety: SAFE
 */
export interface ModelStudioRunModelOutput {
  modelRid: string;
  modelVersionRid: string;
  experimentRid?: string;
}

/**
 * Resolved output details for a Model Studio run.
 *
 * Log Safety: SAFE
 */
export type ModelStudioRunOutput = {
  type: "model";
} & ModelStudioRunModelOutput;

/**
 * Log Safety: UNSAFE
 */
export interface ModelStudioTrainer {
  trainerId: TrainerId;
  version: TrainerVersion;
  name: TrainerName;
  type: TrainerType;
  description: TrainerDescription;
  customConfigSchema: TrainerSchemaDefinition;
  inputs: TrainerInputsSpecification;
  outputs: TrainerOutputsSpecification;
  experimental: ModelStudioTrainerExperimental;
}

/**
 * Whether this trainer is experimental and may have breaking changes.
 *
 * Log Safety: SAFE
 */
export type ModelStudioTrainerExperimental = boolean;

/**
 * Configuration for the Model Studio worker.
 *
 * Log Safety: UNSAFE
 */
export interface ModelStudioWorkerConfig {
  customConfig?: Record<string, any>;
  inputs: Record<InputAlias, ModelStudioInput>;
  outputs: Record<OutputAlias, ModelStudioOutput>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModelVersion {
  rid: ModelVersionRid;
  modelApi: ModelApi;
  condaRequirements: Array<string>;
  backingRepositories: Array<string>;
  createdTime: _Core.CreatedTime;
  source?: ModelVersionSource;
  linkedExperiment?: ExperimentRid;
}

/**
 * Model version created from a code repository.
 *
 * Log Safety: UNSAFE
 */
export interface ModelVersionCodeRepositorySource {
  repositoryRid: string;
  branch: string;
}

/**
 * Model version created from a code workspace.
 *
 * Log Safety: UNSAFE
 */
export interface ModelVersionCodeWorkspaceSource {
  codeWorkspaceRid: string;
  branch: string;
}

/**
 * Model version imported from a containerized model.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionContainerizedSource {}

/**
 * Model version backed by an external model.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionExternalSource {}

/**
 * Model version created from Model Studio.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionModelStudioSource {
  modelStudioRid: string;
}

/**
 * Model version promoted from another model version.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionPromotedSource {
  previousModelRid: ModelRid;
  previousModelVersionRid: ModelVersionRid;
}

/**
 * The Resource Identifier (RID) of a Model Version.
 *
 * Log Safety: SAFE
 */
export type ModelVersionRid = LooselyBrandedString<"ModelVersionRid">;

/**
 * Model version created via the SDK.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionSdkSource {}

/**
 * The source from which this model version was created.
 *
 * Log Safety: UNSAFE
 */
export type ModelVersionSource =
  | ({ type: "importedContainerizedModel" } & ModelVersionContainerizedSource)
  | ({ type: "external" } & ModelVersionExternalSource)
  | ({ type: "codeWorkspace" } & ModelVersionCodeWorkspaceSource)
  | ({ type: "modelStudio" } & ModelVersionModelStudioSource)
  | ({ type: "codeRepository" } & ModelVersionCodeRepositorySource)
  | ({ type: "sdk" } & ModelVersionSdkSource)
  | ({ type: "promoted" } & ModelVersionPromotedSource);

/**
 * Multiple columns were mapped but the trainer only allows a single column for this spec.
 *
 * Log Safety: UNSAFE
 */
export interface MultipleColumnsNotAllowedForTrainerError {
  datasetRid: string;
  columnTypeSpecId: ColumnTypeSpecId;
}

/**
 * Multiple properties were mapped but the trainer only allows a single property for this spec.
 *
 * Log Safety: UNSAFE
 */
export interface MultiplePropertiesNotAllowedForTrainerError {
  objectSetRid: string;
  propertyTypeSpecId: string;
}

/**
 * The Resource Identifier (RID) of an Ontology.
 *
 * Log Safety: SAFE
 */
export type OntologyRid = LooselyBrandedString<"OntologyRid">;

/**
 * A validation error that does not match any specific known type.
 *
 * Log Safety: UNSAFE
 */
export interface OtherValidationError {
  message: string;
}

/**
 * A string alias used to identify outputs in a Model Studio configuration.
 *
 * Log Safety: UNSAFE
 */
export type OutputAlias = LooselyBrandedString<"OutputAlias">;

/**
 * The output resource is in a different project than the Model Studio.
 *
 * Log Safety: UNSAFE
 */
export interface OutputResourceInDifferentProjectError {
  resourceRid: string;
  outputAlias: OutputAlias;
}

/**
 * The output resource does not exist or is in the trash.
 *
 * Log Safety: UNSAFE
 */
export interface OutputResourceNotFoundError {
  resourceRid: string;
  outputAlias: OutputAlias;
}

/**
 * A parameter with its name and value.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  name: ParameterName;
  value: ParameterValue;
}

/**
 * The name of an experiment parameter.
 *
 * Log Safety: UNSAFE
 */
export type ParameterName = LooselyBrandedString<"ParameterName">;

/**
 * A parameter value logged for an experiment.
 *
 * Log Safety: UNSAFE
 */
export type ParameterValue =
  | ({ type: "datetime" } & DatetimeParameter)
  | ({ type: "boolean" } & BooleanParameter)
  | ({ type: "string" } & StringParameter)
  | ({ type: "double" } & DoubleParameter)
  | ({ type: "integer" } & IntegerParameter);

/**
 * Log Safety: UNSAFE
 */
export interface PromoteVersionModelRequest {
  sourceModelVersionRid: ModelVersionRid;
  branch?: _Core.BranchName;
}

/**
 * Log Safety: SAFE
 */
export interface ReplaceLiveDeploymentRequest {
  runtimeConfiguration: LiveDeploymentRuntimeConfiguration;
}

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceModelFunctionRequest {
  apiName: ModelFunctionApiName;
  ontologyBinding?: _Ontologies.OntologyRid;
  isRowWise: ModelFunctionIsRowWise;
}

/**
 * Required input field is null or missing.
 *
 * Log Safety: UNSAFE
 */
export interface RequiredValueMissingError {
  fieldName: string;
}

/**
 * Compute resource configuration for training runs.
 *
 * Log Safety: SAFE
 */
export interface ResourceConfiguration {
  memory: string;
  cpu: string;
  gpu?: GpuType;
}

/**
 * A unique identifier for a Model Studio run, derived from the studio, config, and build.
 *
 * Log Safety: SAFE
 */
export type RunId = LooselyBrandedString<"RunId">;

/**
 * Returns experiments where every filter is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsAndFilter {
  filters: Array<SearchExperimentsFilter>;
}

/**
 * Filter for substring containment matches.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsContainsFilter {
  field: SearchExperimentsContainsFilterField;
  value: any;
}

/**
 * Fields that support substring containment filtering.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsContainsFilterField =
  | "EXPERIMENT_NAME"
  | "PARAMETER_NAME"
  | "SERIES_NAME";

/**
 * Filter for exact field value matches.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsEqualsFilter {
  field: SearchExperimentsEqualsFilterField;
  value: any;
}

/**
 * Fields that support equality filtering.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsEqualsFilterField =
  | "STATUS"
  | "BRANCH"
  | "EXPERIMENT_NAME"
  | "EXPERIMENT_RID"
  | "JOB_RID"
  | "TAG"
  | "PARAMETER_NAME"
  | "SERIES_NAME";

/**
   * Filter for searching experiments using operator-based composition.
Supports equality, text matching, boolean combination operators, and compound filters
that atomically bind a name to a value comparison.
Example filters:

Simple status: {"eq": {"field": "STATUS", "value": "RUNNING"}}
Branch match: {"eq": {"field": "BRANCH", "value": "master"}}
Parameter filter: {"parameterFilter": {"parameterName": "learning_rate", "operator": "GT", "value": 0.01}}
Combined: {"and": {"filters": [
{"eq": {"field": "STATUS", "value": "SUCCEEDED"}},
{"parameterFilter": {"parameterName": "learning_rate", "operator": "GT", "value": 0.5}}
]}}
   *
   * Log Safety: UNSAFE
   */
export type SearchExperimentsFilter =
  | ({ type: "seriesFilter" } & SearchExperimentsSeriesFilter)
  | ({ type: "contains" } & SearchExperimentsContainsFilter)
  | ({ type: "not" } & SearchExperimentsNotFilter)
  | ({ type: "or" } & SearchExperimentsOrFilter)
  | ({ type: "and" } & SearchExperimentsAndFilter)
  | ({ type: "parameterFilter" } & SearchExperimentsParameterFilter)
  | ({ type: "summaryMetricFilter" } & SearchExperimentsSummaryMetricFilter)
  | ({ type: "eq" } & SearchExperimentsEqualsFilter)
  | ({ type: "startsWith" } & SearchExperimentsStartsWithFilter);

/**
 * Returns experiments where the filter is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsNotFilter {
  value: SearchExperimentsFilter;
}

/**
 * Comparison operator for numeric filter predicates (series and summary metrics).
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsNumericFilterOperator = "EQ" | "GT" | "LT";

/**
 * Ordering configuration for experiment search results.
 *
 * Log Safety: SAFE
 */
export interface SearchExperimentsOrderBy {
  field: SearchExperimentsOrderByField;
  direction: _Core.OrderByDirection;
}

/**
 * Fields to order experiment search results by.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsOrderByField = "EXPERIMENT_NAME" | "CREATED_TIME";

/**
 * Returns experiments where at least one filter is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsOrFilter {
  filters: Array<SearchExperimentsFilter>;
}

/**
   * Filter that atomically binds a parameter name to a value comparison,
ensuring both conditions are evaluated on the same parameter.
Supported combinations:

EQ: boolean, double, integer, or datetime value
GT/LT: double, integer, or datetime value
CONTAINS: string value (substring match on the parameter's string value)
   *
   * Log Safety: UNSAFE
   */
export interface SearchExperimentsParameterFilter {
  parameterName: ParameterName;
  operator: SearchExperimentsParameterFilterOperator;
  value: any;
}

/**
 * Comparison operator for parameter filter predicates.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsParameterFilterOperator =
  | "EQ"
  | "GT"
  | "LT"
  | "CONTAINS";

/**
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsRequest {
  where?: SearchExperimentsFilter;
  orderBy?: SearchExperimentsOrderBy;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * Response from searching experiments.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsResponse {
  data: Array<Experiment>;
  nextPageToken?: _Core.PageToken;
}

/**
   * Filter that atomically binds a series name to a metric comparison,
ensuring all conditions are evaluated on the same series.
   *
   * Log Safety: UNSAFE
   */
export interface SearchExperimentsSeriesFilter {
  seriesName: SeriesName;
  field: SearchExperimentsSeriesFilterField;
  operator: SearchExperimentsNumericFilterOperator;
  value: any;
}

/**
 * The series metric to filter on.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsSeriesFilterField =
  | "LENGTH"
  | "AGGREGATION_MIN"
  | "AGGREGATION_MAX"
  | "AGGREGATION_LAST";

/**
 * Filter for prefix matches.
 *
 * Log Safety: UNSAFE
 */
export interface SearchExperimentsStartsWithFilter {
  field: SearchExperimentsStartsWithFilterField;
  value: any;
}

/**
 * Fields that support prefix filtering.
 *
 * Log Safety: SAFE
 */
export type SearchExperimentsStartsWithFilterField =
  | "EXPERIMENT_NAME"
  | "PARAMETER_NAME"
  | "SERIES_NAME";

/**
   * Filter that atomically binds a series name and aggregation type to a value comparison,
ensuring all conditions are evaluated on the same summary metric.
   *
   * Log Safety: UNSAFE
   */
export interface SearchExperimentsSummaryMetricFilter {
  seriesName: SeriesName;
  aggregation: SummaryMetricAggregation;
  operator: SearchExperimentsNumericFilterOperator;
  value: any;
}

/**
 * A series of values logged over time.
 *
 * Log Safety: UNSAFE
 */
export type Series = { type: "doubleV1" } & DoubleSeriesV1;

/**
 * Series with precomputed aggregation values.
 *
 * Log Safety: UNSAFE
 */
export interface SeriesAggregations {
  name: SeriesName;
  length?: string;
  value: SeriesAggregationsValue;
}

/**
 * Union of aggregation values by series type.
 *
 * Log Safety: UNSAFE
 */
export type SeriesAggregationsValue = {
  type: "double";
} & DoubleSeriesAggregations;

/**
 * The name of a series (metrics tracked over time).
 *
 * Log Safety: UNSAFE
 */
export type SeriesName = LooselyBrandedString<"SeriesName">;

/**
 * A string parameter value.
 *
 * Log Safety: UNSAFE
 */
export interface StringParameter {
  value: string;
}

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * A summary metric with series name, aggregation type, and computed value.
 *
 * Log Safety: UNSAFE
 */
export interface SummaryMetric {
  seriesName: SeriesName;
  aggregation: SummaryMetricAggregation;
  value: number;
}

/**
 * The type of aggregation computed for a summary metric.
 *
 * Log Safety: SAFE
 */
export type SummaryMetricAggregation = "MIN" | "MAX" | "LAST";

/**
 * Details about a table artifact.
 *
 * Log Safety: SAFE
 */
export interface TableArtifactDetails {
  rowCount: string;
}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Description of what a trainer does and its capabilities.
 *
 * Log Safety: UNSAFE
 */
export type TrainerDescription = LooselyBrandedString<"TrainerDescription">;

/**
 * The identifier for a trainer.
 *
 * Log Safety: SAFE
 */
export type TrainerId = LooselyBrandedString<"TrainerId">;

/**
 * Specification of the inputs required by a trainer. When creating a ModelStudioConfigVersion, the workerConfig.inputs must conform to this specification, providing entries for each required input defined here.
 *
 * Log Safety: UNSAFE
 */
export type TrainerInputsSpecification = any;

/**
 * Human-readable name of a trainer.
 *
 * Log Safety: UNSAFE
 */
export type TrainerName = LooselyBrandedString<"TrainerName">;

/**
 * Specification of the outputs produced by a trainer. When creating a ModelStudioConfigVersion, the workerConfig.outputs must conform to this specification, providing entries for each required output defined here.
 *
 * Log Safety: UNSAFE
 */
export type TrainerOutputsSpecification = any;

/**
 * JSON schema defining the custom configuration parameters for a trainer.
 *
 * Log Safety: UNSAFE
 */
export type TrainerSchemaDefinition = any;

/**
 * The type/category of a trainer.
 *
 * Log Safety: UNSAFE
 */
export type TrainerType = LooselyBrandedString<"TrainerType">;

/**
 * A specific version identifier for a trainer.
 *
 * Log Safety: SAFE
 */
export type TrainerVersion = LooselyBrandedString<"TrainerVersion">;

/**
 * Identifies a specific version of a trainer.
 *
 * Log Safety: SAFE
 */
export interface TrainerVersionLocator {
  trainerId: TrainerId;
  version: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface TransformJsonLiveDeploymentRequest {
  input: Record<string, any>;
}

/**
 * The response from transforming input data using a live deployment.
 *
 * Log Safety: UNSAFE
 */
export interface TransformLiveDeploymentResponse {
  output: Record<string, any>;
}

/**
 * Input type does not match expected type in model API.
 *
 * Log Safety: SAFE
 */
export interface TypeMismatchError {
  expectedType: string;
  actualType: string;
}

/**
 * The worker config column mapping contains an unknown column spec ID not found in the trainer's column specification.
 *
 * Log Safety: UNSAFE
 */
export interface UnknownColumnSpecIdInConfigColumnMappingError {
  datasetRid: string;
  columnTypeSpecId: ColumnTypeSpecId;
}

/**
 * Provided input name not found in model API specification.
 *
 * Log Safety: UNSAFE
 */
export interface UnknownInputNameError {
  inputName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
  params: Record<
    _Core.UnsupportedTypeParamKey,
    _Core.UnsupportedTypeParamValue
  >;
}

/**
 * Input contains an unsupported data type.
 *
 * Log Safety: SAFE
 */
export interface UnsupportedTypeError {
  unsupportedType: string;
}

/**
 * Log Safety: UNSAFE
 */
export type UnsupportedTypeParamValue = LooselyBrandedString<
  "UnsupportedTypeParamValue"
>;
