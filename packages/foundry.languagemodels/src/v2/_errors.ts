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
  errorDescription: "Could not messages the AnthropicModel.";
  errorInstanceId: string;
  parameters: {
    anthropicModelModelId: unknown;
  };
}

/**
   * The request was unable to be deserialized as a valid request to this endpoint. This may be either due to
missing a required field or including a field which is not supported.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidRequest {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidRequest";
  errorDescription:
    "The request was unable to be deserialized as a valid request to this endpoint. This may be either due to missing a required field or including a field which is not supported.";
  errorInstanceId: string;
  parameters: {
    message: unknown;
    params: unknown;
  };
}

/**
 * An error was thrown by the underlying model provider during inference.
 *
 * Log Safety: UNSAFE
 */
export interface LanguageModelInferenceError {
  errorCode: "INVALID_ARGUMENT";
  errorName: "LanguageModelInferenceError";
  errorDescription:
    "An error was thrown by the underlying model provider during inference.";
  errorInstanceId: string;
  parameters: {
    code: unknown;
    message: unknown;
  };
}

/**
 * The language model requested is not available in this environment.
 *
 * Log Safety: SAFE
 */
export interface LanguageModelNotAvailable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "LanguageModelNotAvailable";
  errorDescription:
    "The language model requested is not available in this environment.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * No known language model exists with the specified ID.
 *
 * Log Safety: UNSAFE
 */
export interface LanguageModelNotFound {
  errorCode: "NOT_FOUND";
  errorName: "LanguageModelNotFound";
  errorDescription: "No known language model exists with the specified ID.";
  errorInstanceId: string;
  parameters: {
    modelId: unknown;
  };
}

/**
 * The token provided does not have permission to use this language model.
 *
 * Log Safety: SAFE
 */
export interface LanguageModelPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LanguageModelPermissionDenied";
  errorDescription:
    "The token provided does not have permission to use this language model.";
  errorInstanceId: string;
  parameters: {
    languageModelRid: unknown;
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
  errorDescription:
    "Multiple system prompts are not currently supported, but will be in the future.";
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
  errorDescription:
    "Multiple tool result contents are not currently supported, but will be in the future.";
  errorInstanceId: string;
  parameters: {
    toolResultContentsSize: unknown;
  };
}

/**
 * Could not embeddings the OpenAiModel.
 *
 * Log Safety: SAFE
 */
export interface OpenAiEmbeddingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "OpenAiEmbeddingsPermissionDenied";
  errorDescription: "Could not embeddings the OpenAiModel.";
  errorInstanceId: string;
  parameters: {
    openAiModelModelId: unknown;
  };
}
