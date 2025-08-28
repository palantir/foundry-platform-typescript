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
  errorInstanceId: string;
  parameters: {
    errorType: unknown;
    errorMessage: unknown;
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
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
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
  errorInstanceId: string;
  parameters: {
    errorType: unknown;
    message: unknown;
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
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
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
  errorInstanceId: string;
  parameters: {
    modelRid: unknown;
    modelVersionRid: unknown;
  };
}
