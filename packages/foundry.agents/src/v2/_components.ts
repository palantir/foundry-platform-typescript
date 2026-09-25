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

import type * as _Ontologies from "@osdk/foundry.ontologies/v2";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The name of the Agent in the API.
 *
 * Log Safety: UNSAFE
 */
export type AgentApiName = LooselyBrandedString<"AgentApiName">;

/**
 * Identifies an Agent by its API name within an ontology.
 *
 * Log Safety: UNSAFE
 */
export interface AgentApiNameIdentifier {
  ontology: _Ontologies.OntologyIdentifier;
  agentApiName: AgentApiName;
}

/**
 * Identifies an Agent.
 *
 * Log Safety: UNSAFE
 */
export type AgentIdentifier = { type: "agentApiName" } & AgentApiNameIdentifier;

/**
 * Log Safety: SAFE
 */
export interface AgentSession {
  id: SessionId;
}

/**
   * Identifies a version of an Agent. Written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type AgentVersion = LooselyBrandedString<"AgentVersion">;

/**
   * An opaque value identifying observed Agent session state. Pass a key returned for a session to a later state
request for the same session to require state at least that recent.
   *
   * Log Safety: SAFE
   */
export type ConsistencyKey = LooselyBrandedString<"ConsistencyKey">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateAgentSessionRequest {
  agent: AgentIdentifier;
  agentVersion: AgentVersion;
  arguments: Record<SessionArgumentName, SessionJsonValue>;
}

/**
 * The result of reading Agent session state.
 *
 * Log Safety: UNSAFE
 */
export type GetStateResponse =
  | ({ type: "behind" } & SessionStateBehind)
  | ({ type: "available" } & SessionStateAvailable)
  | ({ type: "notReady" } & SessionNotReady);

/**
 * Log Safety: UNSAFE
 */
export interface SendEventRequest {
  event: SessionEvent;
}

/**
 * The result of sending an event.
 *
 * Log Safety: SAFE
 */
export interface SendEventResponse {
  status: SendEventStatus;
}

/**
   * Indicates whether the event was accepted for asynchronous handling or the Agent session is not yet ready to
accept events. A SESSION_NOT_READY status means the Agent session has not started and cannot accept events
yet. Retry after a short delay.
   *
   * Log Safety: SAFE
   */
export type SendEventStatus = "ACCEPTED" | "SESSION_NOT_READY";

/**
 * Additional state persisted in the session. Specific to the Agent implementation.
 *
 * Log Safety: UNSAFE
 */
export interface SessionAgentState {
  data: SessionJsonValue;
}

/**
 * The name of an input accepted when creating an Agent session.
 *
 * Log Safety: UNSAFE
 */
export type SessionArgumentName = LooselyBrandedString<"SessionArgumentName">;

/**
 * A unit of context data in the session, such as a user message or tool call.
 *
 * Log Safety: UNSAFE
 */
export interface SessionContextItem {
  contextItemType: SessionContextItemType;
  data: SessionJsonValue;
}

/**
 * Identifies a context item within an Agent session.
 *
 * Log Safety: SAFE
 */
export type SessionContextItemId = string;

/**
 * Discriminator value which identifies the context item kind.
 *
 * Log Safety: UNSAFE
 */
export type SessionContextItemType = LooselyBrandedString<
  "SessionContextItemType"
>;

/**
 * An event sent to an Agent session.
 *
 * Log Safety: UNSAFE
 */
export interface SessionEvent {
  id: SessionEventId;
  eventType: SessionEventType;
  payload: SessionJsonValue;
}

/**
   * A caller-generated key for the event. Within a session, only the first event submitted with a given identifier
is handled. Reuse an identifier only when retrying the same event.
   *
   * Log Safety: SAFE
   */
export type SessionEventId = string;

/**
 * Discriminator value which identifies the event kind.
 *
 * Log Safety: UNSAFE
 */
export type SessionEventType = LooselyBrandedString<"SessionEventType">;

/**
 * Identifies an Agent session.
 *
 * Log Safety: SAFE
 */
export type SessionId = LooselyBrandedString<"SessionId">;

/**
   * A JSON value whose expected shape is defined by the Agent implementation. Values are provided as direct JSON,
for example {"name": "Alice"}, rather than as a JSON-encoded string such as "{\"name\": \"Alice\"}".
   *
   * Log Safety: UNSAFE
   */
export type SessionJsonValue = any;

/**
 * The session has not started and cannot be read or accept events yet. Retry after a short delay.
 *
 * Log Safety: SAFE
 */
export interface SessionNotReady {}

/**
 * The requested state and its session status are available.
 *
 * Log Safety: UNSAFE
 */
export interface SessionStateAvailable {
  arguments: Record<SessionArgumentName, SessionJsonValue>;
  consistencyKey: ConsistencyKey;
  agentState: SessionAgentState;
  contextItems: Record<SessionContextItemId, SessionContextItem>;
  contextItemOrder: Array<SessionContextItemId>;
  status: SessionStatus;
}

/**
   * The server has not yet observed the requested consistency key. The session may or may not have started. Retry
the request after a short delay.
   *
   * Log Safety: SAFE
   */
export interface SessionStateBehind {}

/**
 * The current lifecycle status of an Agent session.
 *
 * Log Safety: SAFE
 */
export type SessionStatus =
  | ({ type: "canceled" } & SessionStatusCanceled)
  | ({ type: "failed" } & SessionStatusFailed)
  | ({ type: "live" } & SessionStatusLive);

/**
 * The session has been canceled. It is not doing any work and cannot accept new events.
 *
 * Log Safety: SAFE
 */
export interface SessionStatusCanceled {}

/**
 * The session has failed. It is not doing any work and cannot accept new events.
 *
 * Log Safety: SAFE
 */
export interface SessionStatusFailed {}

/**
   * The session is live and can do more work. This does not mean the Agent is currently working; the Agent may be
suspended and waiting to be triggered by an event.
   *
   * Log Safety: SAFE
   */
export interface SessionStatusLive {}
