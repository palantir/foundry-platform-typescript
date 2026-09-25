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
 * The requested Agent was not found.
 *
 * Log Safety: UNSAFE
 */
export interface AgentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentNotFound";
  errorDescription: "The requested Agent was not found.";
  errorInstanceId: string;
  parameters: {
    ontology: unknown;
    agentApiName: unknown;
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
    sessionId: unknown;
  };
}

/**
 * The requested version does not exist for the Agent.
 *
 * Log Safety: UNSAFE
 */
export interface AgentVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentVersionNotFound";
  errorDescription: "The requested version does not exist for the Agent.";
  errorInstanceId: string;
  parameters: {
    ontology: unknown;
    agentApiName: unknown;
    agentVersion: unknown;
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
