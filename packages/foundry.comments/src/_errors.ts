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
 * The user does not have permission to access the requested resource.
 *
 * Log Safety: SAFE
 */
export interface ResourcePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ResourcePermissionDenied";
  errorDescription:
    "The user does not have permission to access the requested resource.";
  errorInstanceId: string;
  parameters: {
    resourceRid: unknown;
  };
}

/**
 * Could not search the Comment.
 *
 * Log Safety: SAFE
 */
export interface SearchCommentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchCommentsPermissionDenied";
  errorDescription: "Could not search the Comment.";
  errorInstanceId: string;
  parameters: {};
}
