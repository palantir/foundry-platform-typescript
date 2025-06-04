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
   * The Agent was unable to produce an answer in the set number of maximum iterations.
This can happen if the Agent gets confused or stuck in a loop, or if the query is too complex.
Try a different query or review the Agent configuration in AIP Agent Studio.
   *
   * Log Safety: UNSAFE
   */
export interface AgentIterationsExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "AgentIterationsExceededLimit";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    details: unknown;
  };
}

/**
 * The given Agent could not be found.
 *
 * Log Safety: SAFE
 */
export interface AgentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
  };
}

/**
 * The given AgentVersion could not be found.
 *
 * Log Safety: SAFE
 */
export interface AgentVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "AgentVersionNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    agentVersionString: unknown;
  };
}

/**
 * Could not blockingContinue the Session.
 *
 * Log Safety: SAFE
 */
export interface BlockingContinueSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "BlockingContinueSessionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
   * Unable to cancel the requested session exchange as no in-progress exchange was found
for the provided message identifier.
This is expected if no exchange was initiated with the provided message identifier
through a streamingContinue request, or if the exchange for this identifier has already completed
and cannot be canceled, or if the exchange has already been canceled.
This error can also occur if the cancellation was requested immediately after requesting the exchange
through a streamingContinue request, and the exchange has not started yet.
Clients should handle these errors gracefully, and can reload the session content to get the latest
conversation state.
   *
   * Log Safety: SAFE
   */
export interface CancelSessionFailedMessageNotInProgress {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CancelSessionFailedMessageNotInProgress";
  errorInstanceId: string;
  parameters: {
    messageId: unknown;
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * Could not cancel the Session.
 *
 * Log Safety: SAFE
 */
export interface CancelSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CancelSessionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * The given Content could not be found.
 *
 * Log Safety: SAFE
 */
export interface ContentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ContentNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
   * Failed to generate a response for a session because the context size of the LLM has been exceeded.
Clients should either retry with a shorter message or create a new session and try re-sending the message.
   *
   * Log Safety: UNSAFE
   */
export interface ContextSizeExceededLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ContextSizeExceededLimit";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    details: unknown;
  };
}

/**
 * Could not create the Session.
 *
 * Log Safety: SAFE
 */
export interface CreateSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateSessionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
  };
}

/**
   * The specified function locator is configured for use by the Agent but could not be found.
The function type or version may not exist or the client token does not have access.
   *
   * Log Safety: UNSAFE
   */
export interface FunctionLocatorNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FunctionLocatorNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    functionRid: unknown;
    functionVersion: unknown;
  };
}

/**
   * The calling user does not have permission to list all sessions across all Agents.
Listing all sessions across all agents requires the api:aip-agents-write scope.
   *
   * Log Safety: SAFE
   */
export interface GetAllSessionsAgentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetAllSessionsAgentsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not ragContext the Session.
 *
 * Log Safety: SAFE
 */
export interface GetRagContextForSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetRagContextForSessionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * The provided version string is not a valid format for an Agent version.
 *
 * Log Safety: SAFE
 */
export interface InvalidAgentVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidAgentVersion";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    version: unknown;
  };
}

/**
   * The provided application variable is not valid for the Agent for this session.
Check the available application variables for the Agent under the parameters property, and version through the API with getAgent, or in AIP Agent Studio.
The Agent version used for the session can be checked through the API with getSession.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidParameter {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameter";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    parameter: unknown;
  };
}

/**
   * The provided value does not match the expected type for the application variable configured on the Agent for this session.
Check the available application variables for the Agent under the parameters property, and version through the API with getAgent, or in AIP Agent Studio.
The Agent version used for the session can be checked through the API with getSession.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidParameterType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterType";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    parameter: unknown;
    expectedType: unknown;
    receivedType: unknown;
  };
}

/**
 * Could not allSessions the Agent.
 *
 * Log Safety: SAFE
 */
export interface ListSessionsForAgentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListSessionsForAgentsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
   * Failed to retrieve the latest published version of the Agent because the Agent has no published versions.
Try publishing the Agent in AIP Agent Studio to use the latest published version, or specify the version of the Agent to use.
   *
   * Log Safety: SAFE
   */
export interface NoPublishedAgentVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "NoPublishedAgentVersion";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
  };
}

/**
   * Some object types are configured for use by the Agent but could not be found.
The object types either do not exist or the client token does not have access.
Object types can be checked by listing available object types through the API, or searching in Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectTypeIdsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ObjectTypeIdsNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    objectTypeIds: unknown;
  };
}

/**
   * Some object types are configured for use by the Agent but could not be found.
The object types either do not exist or the client token does not have access.
Object types can be checked by listing available object types through the API, or searching in Ontology Manager.
   *
   * Log Safety: SAFE
   */
export interface ObjectTypeRidsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ObjectTypeRidsNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    objectTypeRids: unknown;
  };
}

/**
 * Failed to generate a response as the model rate limits were exceeded. Clients should wait and retry.
 *
 * Log Safety: UNSAFE
 */
export interface RateLimitExceeded {
  errorCode: "CUSTOM_CLIENT";
  errorName: "RateLimitExceeded";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    details: unknown;
  };
}

/**
 * Failed to generate a response for a session due to an unexpected error.
 *
 * Log Safety: UNSAFE
 */
export interface SessionExecutionFailed {
  errorCode: "INTERNAL";
  errorName: "SessionExecutionFailed";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    message: unknown;
    details: unknown;
  };
}

/**
 * The given Session could not be found.
 *
 * Log Safety: SAFE
 */
export interface SessionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SessionNotFound";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * The provided trace ID already exists for the session and cannot be reused.
 *
 * Log Safety: SAFE
 */
export interface SessionTraceIdAlreadyExists {
  errorCode: "INVALID_ARGUMENT";
  errorName: "SessionTraceIdAlreadyExists";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
    sessionTraceId: unknown;
  };
}

/**
 * The given SessionTrace could not be found.
 *
 * Log Safety: SAFE
 */
export interface SessionTraceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "SessionTraceNotFound";
  errorInstanceId: string;
  parameters: {
    sessionTraceId: unknown;
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * Could not streamingContinue the Session.
 *
 * Log Safety: SAFE
 */
export interface StreamingContinueSessionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "StreamingContinueSessionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}

/**
 * Could not updateTitle the Session.
 *
 * Log Safety: SAFE
 */
export interface UpdateSessionTitlePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UpdateSessionTitlePermissionDenied";
  errorInstanceId: string;
  parameters: {
    agentRid: unknown;
    sessionRid: unknown;
  };
}
