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
 * The given Agent could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface AgentDefinitionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentDefinitionNotFound";
  errorDescription: "The given Agent could not be found.";
  errorInstanceId: string;
  parameters: {
    agentDefinitionApiName: unknown;
  };
}

/**
 * The given AgentDefinitionVersion could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface AgentDefinitionVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentDefinitionVersionNotFound";
  errorDescription: "The given AgentDefinitionVersion could not be found.";
  errorInstanceId: string;
  parameters: {
    agentDefinitionVersionVersion: unknown;
    agentDefinitionApiName: unknown;
  };
}

/**
 * The requested Agent session was not found.
 *
 * Log Safety: SAFE
 */
export interface AgentSessionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentSessionNotFound";
  errorDescription: "The requested Agent session was not found.";
  errorInstanceId: string;
  parameters: {
    agentSessionId: unknown;
  };
}

/**
 * The Agent session could not be started.
 *
 * Log Safety: UNSAFE
 */
export interface CreateAgentSessionFailed {
  errorCode: "INTERNAL";
  errorName: "CreateAgentSessionFailed";
  errorDescription: "The Agent session could not be started.";
  errorInstanceId: string;
  parameters: {
    ontology: unknown;
    agentApiName: unknown;
    agentVersion: unknown;
  };
}

/**
 * Could not create the AgentSession.
 *
 * Log Safety: SAFE
 */
export interface CreateAgentSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateAgentSessionPermissionDenied";
  errorDescription: "Could not create the AgentSession.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not getSessionState the AgentSession.
 *
 * Log Safety: SAFE
 */
export interface GetSessionStatePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetSessionStatePermissionDenied";
  errorDescription: "Could not getSessionState the AgentSession.";
  errorInstanceId: string;
  parameters: {
    agentSessionId: unknown;
  };
}

/**
 * The provided consistency key does not match the expected format.
 *
 * Log Safety: SAFE
 */
export interface InvalidConsistencyKey {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidConsistencyKey";
  errorDescription:
    "The provided consistency key does not match the expected format.";
  errorInstanceId: string;
  parameters: {
    consistencyKey: unknown;
  };
}

/**
 * Could not sendEvent the AgentSession.
 *
 * Log Safety: SAFE
 */
export interface SendEventPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SendEventPermissionDenied";
  errorDescription: "Could not sendEvent the AgentSession.";
  errorInstanceId: string;
  parameters: {
    agentSessionId: unknown;
  };
}

/**
 * The Agent definition version contains a data type that is not supported by this API.
 *
 * Log Safety: SAFE
 */
export interface UnsupportedDataType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnsupportedDataType";
  errorDescription:
    "The Agent definition version contains a data type that is not supported by this API.";
  errorInstanceId: string;
  parameters: {
    dataType: unknown;
  };
}
