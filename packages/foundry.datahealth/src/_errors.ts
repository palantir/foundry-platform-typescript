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
   * A check of the given type for the given subject(s) already exists. The conflicting check will be returned
if the provided token has permission to view it.
   *
   * Log Safety: UNSAFE
   */
export interface CheckAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "CheckAlreadyExists";
  errorInstanceId: string;
  parameters: {
    conflictingCheck: unknown;
  };
}

/**
 * The given Check could not be found.
 *
 * Log Safety: SAFE
 */
export interface CheckNotFound {
  errorCode: "NOT_FOUND";
  errorName: "CheckNotFound";
  errorInstanceId: string;
  parameters: {
    checkRid: unknown;
  };
}

/**
 * Could not create the Check.
 *
 * Log Safety: SAFE
 */
export interface CreateCheckPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateCheckPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Check.
 *
 * Log Safety: SAFE
 */
export interface DeleteCheckPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteCheckPermissionDenied";
  errorInstanceId: string;
  parameters: {
    checkRid: unknown;
  };
}

/**
 * The TimeCheckConfig is invalid. It must contain at least one of timeBounds or medianDeviation.
 *
 * Log Safety: SAFE
 */
export interface InvalidTimeCheckConfig {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidTimeCheckConfig";
  errorInstanceId: string;
  parameters: {};
}
