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
 * Could not messages the AnthropicModel.
 *
 * Log Safety: SAFE
 */
export interface AnthropicMessagesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AnthropicMessagesPermissionDenied";
  errorInstanceId: string;
  parameters: {
    anthropicModelModelId: unknown;
  };
}

/**
 * Multiple system prompts are not currently supported, but will be in the future.
 *
 * Log Safety: SAFE
 */
export interface MultipleSystemPromptsNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MultipleSystemPromptsNotSupported";
  errorInstanceId: string;
  parameters: {
    systemPromptSize: unknown;
  };
}

/**
 * Multiple tool result contents are not currently supported, but will be in the future.
 *
 * Log Safety: SAFE
 */
export interface MultipleToolResultContentsNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MultipleToolResultContentsNotSupported";
  errorInstanceId: string;
  parameters: {
    toolResultContentsSize: unknown;
  };
}
