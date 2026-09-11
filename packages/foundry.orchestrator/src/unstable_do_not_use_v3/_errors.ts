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
   * The token does not have permission to complete this signal. Signals can only be completed by the token
that originally invoked the process execution.
   *
   * Log Safety: UNSAFE
   */
export interface CompleteProcessExecutionSignalPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CompleteProcessExecutionSignalPermissionDenied";
  errorDescription:
    "The token does not have permission to complete this signal. Signals can only be completed by the token that originally invoked the process execution.";
  errorInstanceId: string;
  parameters: {
    processExecutionId: unknown;
    signalId: unknown;
  };
}

/**
   * The process execution can no longer accept signal completions because its data is outside the retention
window.
   *
   * Log Safety: SAFE
   */
export interface ProcessExecutionExpired {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ProcessExecutionExpired";
  errorDescription:
    "The process execution can no longer accept signal completions because its data is outside the retention window.";
  errorInstanceId: string;
  parameters: {
    processExecutionId: unknown;
    expiredTime: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface ProcessExecutionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProcessExecutionNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    processExecutionId: unknown;
  };
}

/**
 * Log Safety: UNSAFE
 */
export interface ProcessExecutionSignalNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProcessExecutionSignalNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    signalId: unknown;
    processExecutionId: unknown;
  };
}
