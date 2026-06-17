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
 * Thrown when conda solve fails for the provided input packages.
 *
 * Log Safety: UNSAFE
 */
export interface CondaSolveFailureForProvidedPackages {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CondaSolveFailureForProvidedPackages";
  errorDescription:
    "Thrown when conda solve fails for the provided input packages.";
  errorInstanceId: string;
  parameters: {
    errorType: unknown;
    errorMessage: unknown;
  };
}

/**
 * The provided configuration is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface CreateConfigValidationError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateConfigValidationError";
  errorDescription: "The provided configuration is invalid.";
  errorInstanceId: string;
  parameters: {
    studioRid: unknown;
    validationFailures: unknown;
  };
}

/**
 * Could not create the LiveDeployment.
 *
 * Log Safety: SAFE
 */
export interface CreateLiveDeploymentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateLiveDeploymentPermissionDenied";
  errorDescription: "Could not create the LiveDeployment.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the ModelFunction.
 *
 * Log Safety: SAFE
 */
export interface CreateModelFunctionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateModelFunctionPermissionDenied";
  errorDescription: "Could not create the ModelFunction.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * Could not create the Model.
 *
 * Log Safety: SAFE
 */
export interface CreateModelPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateModelPermissionDenied";
  errorDescription: "Could not create the Model.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the ModelStudioConfigVersion.
 *
 * Log Safety: SAFE
 */
export interface CreateModelStudioConfigVersionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateModelStudioConfigVersionPermissionDenied";
  errorDescription: "Could not create the ModelStudioConfigVersion.";
  errorInstanceId: string;
  parameters: {
    modelStudioRid: unknown;
  };
}

/**
 * Permission denied to create a Model Studio.
 *
 * Log Safety: SAFE
 */
export interface CreateModelStudioPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateModelStudioPermissionDenied";
  errorDescription: "Permission denied to create a Model Studio.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the ModelVersion.
 *
 * Log Safety: SAFE
 */
export interface CreateModelVersionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateModelVersionPermissionDenied";
  errorDescription: "Could not create the ModelVersion.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
  };
}

/**
 * The requested artifact was not found in the experiment.
 *
 * Log Safety: UNSAFE
 */
export interface ExperimentArtifactNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ExperimentArtifactNotFound";
  errorDescription: "The requested artifact was not found in the experiment.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
    experimentRid: unknown;
    artifactName: unknown;
  };
}

/**
 * The given Experiment could not be found.
 *
 * Log Safety: SAFE
 */
export interface ExperimentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ExperimentNotFound";
  errorDescription: "The given Experiment could not be found.";
  errorInstanceId: string;
  parameters: {
    experimentRid: unknown;
    modelRid: unknown;
  };
}

/**
 * The requested series was not found in the experiment.
 *
 * Log Safety: UNSAFE
 */
export interface ExperimentSeriesNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ExperimentSeriesNotFound";
  errorDescription: "The requested series was not found in the experiment.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
    experimentRid: unknown;
    seriesName: unknown;
  };
}

/**
 * A function already exists for this live deployment.
 *
 * Log Safety: SAFE
 */
export interface FunctionAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "FunctionAlreadyExists";
  errorDescription: "A function already exists for this live deployment.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
   * The requested GPU type is not available. Use a GPU type that is available in
the deployment's resource queue.
   *
   * Log Safety: SAFE
   */
export interface GpuTypeNotAvailable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GpuTypeNotAvailable";
  errorDescription:
    "The requested GPU type is not available. Use a GPU type that is available in the deployment's resource queue.";
  errorInstanceId: string;
  parameters: {
    requestedGpuType: unknown;
    availableGpuTypes: unknown;
  };
}

/**
   * The inference request failed due to a model execution error or unexpected internal issue.
This typically indicates a problem with the model itself rather than the input data.
   *
   * Log Safety: UNSAFE
   */
export interface InferenceFailure {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InferenceFailure";
  errorDescription:
    "The inference request failed due to a model execution error or unexpected internal issue. This typically indicates a problem with the model itself rather than the input data.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
    errorMessage: unknown;
  };
}

/**
   * The inference request contains invalid input data that does not match the model's API specification.
Check the error type for specific validation failure details.
   *
   * Log Safety: UNSAFE
   */
export interface InferenceInvalidInput {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InferenceInvalidInput";
  errorDescription:
    "The inference request contains invalid input data that does not match the model's API specification. Check the error type for specific validation failure details.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
    errorType: unknown;
  };
}

/**
   * The live deployment took longer than 5 minutes to respond to the inference request.
This typically indicates the model execution is taking too long or the deployment is under heavy load.
   *
   * Log Safety: SAFE
   */
export interface InferenceTimeout {
  errorCode: "TIMEOUT";
  errorName: "InferenceTimeout";
  errorDescription:
    "The live deployment took longer than 5 minutes to respond to the inference request. This typically indicates the model execution is taking too long or the deployment is under heavy load.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
   * The search filter is invalid. This can occur when using an unsupported operator and value type
combination in a parameter filter, filtering by an unsupported status, or providing a malformed filter.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidExperimentSearchFilter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidExperimentSearchFilter";
  errorDescription:
    "The search filter is invalid. This can occur when using an unsupported operator and value type combination in a parameter filter, filtering by an unsupported status, or providing a malformed filter.";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
  };
}

/**
 * The provided API name for the function is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidFunctionApiName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFunctionApiName";
  errorDescription: "The provided API name for the function is invalid.";
  errorInstanceId: string;
  parameters: {
    apiName: unknown;
  };
}

/**
   * The GPU count is invalid. The GPU count must be between 1 and the maximum allowed
for the requested GPU type.
   *
   * Log Safety: SAFE
   */
export interface InvalidGpuCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidGpuCount";
  errorDescription:
    "The GPU count is invalid. The GPU count must be between 1 and the maximum allowed for the requested GPU type.";
  errorInstanceId: string;
  parameters: {
    providedGpuCount: unknown;
    maxGpuCount: unknown;
  };
}

/**
 * The model api failed validations
 *
 * Log Safety: UNSAFE
 */
export interface InvalidModelApi {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidModelApi";
  errorDescription: "The model api failed validations";
  errorInstanceId: string;
  parameters: {
    errorType: unknown;
    message: unknown;
  };
}

/**
 * The request to create a Model Studio contains invalid arguments.
 *
 * Log Safety: SAFE
 */
export interface InvalidModelStudioCreateRequest {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidModelStudioCreateRequest";
  errorDescription:
    "The request to create a Model Studio contains invalid arguments.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not json the ExperimentArtifactTable.
 *
 * Log Safety: UNSAFE
 */
export interface JsonExperimentArtifactTablePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "JsonExperimentArtifactTablePermissionDenied";
  errorDescription: "Could not json the ExperimentArtifactTable.";
  errorInstanceId: string;
  parameters: {
    experimentRid: unknown;
    experimentArtifactTableName: unknown;
    modelRid: unknown;
  };
}

/**
 * Could not json the ExperimentSeries.
 *
 * Log Safety: UNSAFE
 */
export interface JsonExperimentSeriesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "JsonExperimentSeriesPermissionDenied";
  errorDescription: "Could not json the ExperimentSeries.";
  errorInstanceId: string;
  parameters: {
    experimentSeriesName: unknown;
    experimentRid: unknown;
    modelRid: unknown;
  };
}

/**
 * Could not latest the ModelStudioConfigVersion.
 *
 * Log Safety: SAFE
 */
export interface LatestModelStudioConfigVersionsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LatestModelStudioConfigVersionsPermissionDenied";
  errorDescription: "Could not latest the ModelStudioConfigVersion.";
  errorInstanceId: string;
  parameters: {
    modelStudioRid: unknown;
  };
}

/**
 * Permission denied to launch a Model Studio run.
 *
 * Log Safety: SAFE
 */
export interface LaunchModelStudioPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LaunchModelStudioPermissionDenied";
  errorDescription: "Permission denied to launch a Model Studio run.";
  errorInstanceId: string;
  parameters: {
    studioRid: unknown;
  };
}

/**
 * The specified live deployment was not found.
 *
 * Log Safety: SAFE
 */
export interface LiveDeploymentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "LiveDeploymentNotFound";
  errorDescription: "The specified live deployment was not found.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * The model API contains a data type that is not supported for Ontology function creation.
 *
 * Log Safety: UNSAFE
 */
export interface ModelApiTypeUnsupportedForFunction {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ModelApiTypeUnsupportedForFunction";
  errorDescription:
    "The model API contains a data type that is not supported for Ontology function creation.";
  errorInstanceId: string;
  parameters: {
    fieldName: unknown;
    unsupportedType: unknown;
  };
}

/**
 * The requested experiment was not found or the user lacks permission to access it.
 *
 * Log Safety: SAFE
 */
export interface ModelExperimentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelExperimentNotFound";
  errorDescription:
    "The requested experiment was not found or the user lacks permission to access it.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
    experimentRid: unknown;
  };
}

/**
 * The given ModelFunction could not be found.
 *
 * Log Safety: SAFE
 */
export interface ModelFunctionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelFunctionNotFound";
  errorDescription: "The given ModelFunction could not be found.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * The given Model could not be found.
 *
 * Log Safety: SAFE
 */
export interface ModelNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelNotFound";
  errorDescription: "The given Model could not be found.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
  };
}

/**
 * The requested Model Studio configuration version was not found.
 *
 * Log Safety: SAFE
 */
export interface ModelStudioConfigVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelStudioConfigVersionNotFound";
  errorDescription:
    "The requested Model Studio configuration version was not found.";
  errorInstanceId: string;
  parameters: {
    studioRid: unknown;
    configVersion: unknown;
  };
}

/**
 * The requested Model Studio was not found.
 *
 * Log Safety: SAFE
 */
export interface ModelStudioNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelStudioNotFound";
  errorDescription: "The requested Model Studio was not found.";
  errorInstanceId: string;
  parameters: {
    studioRid: unknown;
  };
}

/**
 * The given ModelStudioTrainer could not be found.
 *
 * Log Safety: SAFE
 */
export interface ModelStudioTrainerNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelStudioTrainerNotFound";
  errorDescription: "The given ModelStudioTrainer could not be found.";
  errorInstanceId: string;
  parameters: {
    modelStudioTrainerTrainerId: unknown;
  };
}

/**
 * The given ModelVersion could not be found.
 *
 * Log Safety: SAFE
 */
export interface ModelVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ModelVersionNotFound";
  errorDescription: "The given ModelVersion could not be found.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
    modelVersionRid: unknown;
  };
}

/**
 * An ontologyBinding is required when creating or replacing a model function.
 *
 * Log Safety: SAFE
 */
export interface OntologyBindingRequired {
  errorCode: "INVALID_ARGUMENT";
  errorName: "OntologyBindingRequired";
  errorDescription:
    "An ontologyBinding is required when creating or replacing a model function.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The specified ontology was not found.
 *
 * Log Safety: SAFE
 */
export interface OntologyNotFound {
  errorCode: "NOT_FOUND";
  errorName: "OntologyNotFound";
  errorDescription: "The specified ontology was not found.";
  errorInstanceId: string;
  parameters: {
    ontologyRid: unknown;
  };
}

/**
 * Could not parquet the ExperimentArtifactTable.
 *
 * Log Safety: UNSAFE
 */
export interface ParquetExperimentArtifactTablePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ParquetExperimentArtifactTablePermissionDenied";
  errorDescription: "Could not parquet the ExperimentArtifactTable.";
  errorInstanceId: string;
  parameters: {
    experimentRid: unknown;
    experimentArtifactTableName: unknown;
    modelRid: unknown;
  };
}

/**
 * Could not parquet the ExperimentSeries.
 *
 * Log Safety: UNSAFE
 */
export interface ParquetExperimentSeriesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ParquetExperimentSeriesPermissionDenied";
  errorDescription: "Could not parquet the ExperimentSeries.";
  errorInstanceId: string;
  parameters: {
    experimentSeriesName: unknown;
    experimentRid: unknown;
    modelRid: unknown;
  };
}

/**
 * Could not promoteVersion the Model.
 *
 * Log Safety: SAFE
 */
export interface PromoteVersionModelPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PromoteVersionModelPermissionDenied";
  errorDescription: "Could not promoteVersion the Model.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
  };
}

/**
 * Could not replace the LiveDeployment.
 *
 * Log Safety: SAFE
 */
export interface ReplaceLiveDeploymentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceLiveDeploymentPermissionDenied";
  errorDescription: "Could not replace the LiveDeployment.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * Could not replace the ModelFunction.
 *
 * Log Safety: SAFE
 */
export interface ReplaceModelFunctionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceModelFunctionPermissionDenied";
  errorDescription: "Could not replace the ModelFunction.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * Could not search the Experiment.
 *
 * Log Safety: SAFE
 */
export interface SearchExperimentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchExperimentsPermissionDenied";
  errorDescription: "Could not search the Experiment.";
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
  };
}

/**
 * The specified thread count exceeds the maximum allowed value.
 *
 * Log Safety: SAFE
 */
export interface ThreadCountTooHigh {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ThreadCountTooHigh";
  errorDescription:
    "The specified thread count exceeds the maximum allowed value.";
  errorInstanceId: string;
  parameters: {
    maxThreadCount: unknown;
    providedThreadCount: unknown;
  };
}

/**
 * The specified trainer does not exist.
 *
 * Log Safety: SAFE
 */
export interface TrainerNotFound {
  errorCode: "NOT_FOUND";
  errorName: "TrainerNotFound";
  errorDescription: "The specified trainer does not exist.";
  errorInstanceId: string;
  parameters: {
    trainerId: unknown;
  };
}

/**
 * Could not transformJson the LiveDeployment.
 *
 * Log Safety: SAFE
 */
export interface TransformJsonLiveDeploymentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "TransformJsonLiveDeploymentPermissionDenied";
  errorDescription: "Could not transformJson the LiveDeployment.";
  errorInstanceId: string;
  parameters: {
    liveDeploymentRid: unknown;
  };
}

/**
 * The Live Deployment type is not supported by the API.
 *
 * Log Safety: SAFE
 */
export interface UnsupportedLiveDeployment {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnsupportedLiveDeployment";
  errorDescription: "The Live Deployment type is not supported by the API.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The Model Version has a source type that is not supported by the API. This can occur when the model was created through a legacy or internal workflow that is not exposed through the public API.
 *
 * Log Safety: SAFE
 */
export interface UnsupportedModelSource {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnsupportedModelSource";
  errorDescription:
    "The Model Version has a source type that is not supported by the API. This can occur when the model was created through a legacy or internal workflow that is not exposed through the public API.";
  errorInstanceId: string;
  parameters: {};
}
