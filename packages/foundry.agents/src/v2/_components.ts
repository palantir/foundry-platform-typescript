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

import type * as _Core from "@osdk/foundry.core/v2";
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
 * Log Safety: UNSAFE
 */
export interface AgentDefinition {
  apiName: AgentApiName;
  rid: AgentRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface AgentDefinitionVersion {
  version: AgentVersion;
  createdTime: _Core.CreatedTime;
  createdBy: _Core.CreatedBy;
  argumentDefinitions: Array<ArgumentDefinition>;
  eventDefinitions: Array<EventDefinition>;
  agentStateType: DataType;
  contextItemDefinitions: Array<ContextItemDefinition>;
}

/**
 * Identifies an Agent.
 *
 * Log Safety: UNSAFE
 */
export type AgentIdentifier = { type: "agentApiName" } & AgentApiNameIdentifier;

/**
 * The unique resource identifier of an Agent. Can be used to interact with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type AgentRid = LooselyBrandedString<"AgentRid">;

/**
 * Log Safety: UNSAFE
 */
export interface AgentSession {
  id: SessionId;
  agentRid: AgentRid;
  agentApiNameIdentifier?: AgentApiNameIdentifier;
  agentVersion: AgentVersion;
}

/**
 * Additional state persisted in the session. Specific to the Agent implementation.
 *
 * Log Safety: UNSAFE
 */
export interface AgentState {
  data: JsonValue;
}

/**
   * Identifies a version of an Agent. Written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type AgentVersion = LooselyBrandedString<"AgentVersion">;

/**
 * The definition of a single argument.
 *
 * Log Safety: UNSAFE
 */
export interface ArgumentDefinition {
  name: ArgumentName;
  dataType: DataType;
}

/**
 * The name of an input accepted when creating an Agent session.
 *
 * Log Safety: UNSAFE
 */
export type ArgumentName = LooselyBrandedString<"ArgumentName">;

/**
   * An opaque value identifying observed Agent session state. Pass a key returned for a session to a later state
request for the same session to require state at least that recent.
   *
   * Log Safety: SAFE
   */
export type ConsistencyKey = LooselyBrandedString<"ConsistencyKey">;

/**
 * A unit of context data in the session, such as a user message or tool call.
 *
 * Log Safety: UNSAFE
 */
export interface ContextItem {
  contextItemType: ContextItemType;
  data: JsonValue;
}

/**
   * The definition of a single type of context item that the Agent supports. Context items are a strongly typed unit of context
data in a session, and can be used to build rich UIs for sessions. Context items definitions are declared when the Agent is published.
   *
   * Log Safety: UNSAFE
   */
export interface ContextItemDefinition {
  contextItemType: ContextItemType;
  dataType: DataType;
}

/**
 * Identifies a context item within an Agent session.
 *
 * Log Safety: SAFE
 */
export type ContextItemId = string;

/**
 * Discriminator value which identifies the context item kind.
 *
 * Log Safety: UNSAFE
 */
export type ContextItemType = LooselyBrandedString<"ContextItemType">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateAgentSessionRequest {
  agent: AgentIdentifier;
  arguments: Record<ArgumentName, JsonValue>;
  agentVersion: AgentVersion;
}

/**
   * Describes the supported schema for a piece of data, for example an event payload or the data for a context
item.
   *
   * Log Safety: UNSAFE
   */
export type DataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & StructType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "nullable" } & NullableType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "list" } & ListType)
  | ({ type: "discriminatedUnion" } & DiscriminatedUnionType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "objectSet" } & ObjectSetType)
  | ({ type: "record" } & RecordType)
  | ({ type: "short" } & _Core.ShortType)
  | ({ type: "timestamp" } & _Core.TimestampType)
  | ({ type: "object" } & ObjectReferenceType);

/**
 * The definition of a single member of a discriminated union.
 *
 * Log Safety: UNSAFE
 */
export interface DiscriminatedUnionMember {
  discriminatorValue: string;
  fields: Array<StructField>;
}

/**
   * An object where the value is one of multiple known types. A value of this type is represented by a JSON object
where one property is named after the discriminatorKey field and the remaining properties satisfy the
constraints of the fields of the corresponding member. For example {"type": "customer", "customerId": 123}
or {"type": "employee", "employeeId": "1ff8ceda-7354-4aea-8412-a7434164aca9"}.
   *
   * Log Safety: UNSAFE
   */
export interface DiscriminatedUnionType {
  discriminatorKey: string;
  members: Array<DiscriminatedUnionMember>;
}

/**
 * An event sent to an Agent session.
 *
 * Log Safety: UNSAFE
 */
export interface Event {
  id: EventId;
  eventType: EventType;
  payload: JsonValue;
}

/**
   * The definition of a single type of event that can be sent to an Agent. Events are used to interact with agent sessions after
they have been created. Event definitions are declared when the Agent is published.
   *
   * Log Safety: UNSAFE
   */
export interface EventDefinition {
  eventType: EventType;
  payloadType: DataType;
}

/**
   * A caller-generated key for the event. Within a session, only the first event submitted with a given identifier
is handled. Reuse an identifier only when retrying the same event.
   *
   * Log Safety: SAFE
   */
export type EventId = string;

/**
 * Discriminator value which identifies the event kind.
 *
 * Log Safety: UNSAFE
 */
export type EventType = LooselyBrandedString<"EventType">;

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
   * A JSON value whose expected shape is defined by the Agent implementation. Values are provided as direct JSON,
for example {"name": "Alice"}, rather than as a JSON-encoded string such as "{\"name\": \"Alice\"}".
   *
   * Log Safety: UNSAFE
   */
export type JsonValue = any;

/**
   * A list of elements where each element has the same type. A value of this type is represented by a JSON array,
for example [1, 2, 3].
   *
   * Log Safety: UNSAFE
   */
export interface ListType {
  elementType: DataType;
}

/**
 * An optional value. If specified, the value needs to be of the given type.
 *
 * Log Safety: UNSAFE
 */
export interface NullableType {
  wrappedType: DataType;
}

/**
   * A reference to an object of a specific object type in the Ontology. A value of this type is represented by a
JSON object of the format {"ontologyRid": "ri.ontology.main.ontology.def0ca71-bafa-4a0b-9575-5174961ac9d2", "objectTypeApiName": "Customer", "primaryKey": {"customerId": 123}},
where primaryKey is an object where the keys are propertyApiName and the values are values of the given
property type.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectReferenceType {
  ontologyApiName: _Ontologies.OntologyApiName;
  objectTypeApiName: _Ontologies.ObjectTypeApiName;
}

/**
   * A reference to an object set containing objects of a specific object type. A value of this type is represented
by a JSON string containing an object set RID, for example "ri.object-set.main.object-set.082ecf59-4302-4a75-9283-810166df1900".
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetType {
  ontologyApiName: _Ontologies.OntologyApiName;
  objectTypeApiName: _Ontologies.ObjectTypeApiName;
}

/**
   * An object that supports arbitrary string keys. The values all need to have the same type. A value of this type
is represented by a JSON object, for example {"first": 1, "second": 2}.
   *
   * Log Safety: UNSAFE
   */
export interface RecordType {
  valueType: DataType;
}

/**
 * The event was accepted for asynchronous handling.
 *
 * Log Safety: SAFE
 */
export interface SendEventAccepted {
  consistencyKey: ConsistencyKey;
}

/**
 * Log Safety: UNSAFE
 */
export interface SendEventRequest {
  event: Event;
}

/**
 * The response to sending an event.
 *
 * Log Safety: SAFE
 */
export interface SendEventResponse {
  result: SendEventResult;
}

/**
   * The result of sending an event. Indicates whether the event was accepted for asynchronous handling. A
sessionNotReady status means the session has not started and cannot accept events yet. Retry after a short
delay.
   *
   * Log Safety: SAFE
   */
export type SendEventResult =
  | ({ type: "accepted" } & SendEventAccepted)
  | ({ type: "sessionNotReady" } & SessionNotReady);

/**
 * Identifies an Agent session.
 *
 * Log Safety: SAFE
 */
export type SessionId = LooselyBrandedString<"SessionId">;

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
  arguments: Record<ArgumentName, JsonValue>;
  consistencyKey: ConsistencyKey;
  agentState: AgentState;
  contextItems: Record<ContextItemId, ContextItem>;
  contextItemOrder: Array<ContextItemId>;
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
  | ({ type: "completed" } & SessionStatusCompleted)
  | ({ type: "failed" } & SessionStatusFailed)
  | ({ type: "live" } & SessionStatusLive);

/**
 * The session has been canceled. It is not doing any work and cannot accept new events.
 *
 * Log Safety: SAFE
 */
export interface SessionStatusCanceled {}

/**
 * The session has completed. It is not doing any work and cannot accept new events.
 *
 * Log Safety: SAFE
 */
export interface SessionStatusCompleted {}

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

/**
 * A single field for a StructType.
 *
 * Log Safety: UNSAFE
 */
export interface StructField {
  name: string;
  dataType: DataType;
}

/**
   * An object with fixed keys, where values can be of mixed types. A value of this type is represented by a JSON
object, for example {"entityType": "customer", "id": 123}.
   *
   * Log Safety: UNSAFE
   */
export interface StructType {
  fields: Array<StructField>;
}
