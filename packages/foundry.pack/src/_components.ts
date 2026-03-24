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

import type * as _Core from "@osdk/foundry.core";
import type * as _Filesystem from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Activity event broadcast to all clients after being applied on server.
 *
 * Log Safety: UNSAFE
 */
export type ActivityCollaborativeUpdate =
  | ({ type: "activityDeleted" } & ActivityDeleted)
  | ({ type: "activityCreated" } & ActivityCreated);

/**
   * The event that gets published to PACK channels to update a users activity feed as new events
are added to a particular resource.
   *
   * Log Safety: UNSAFE
   */
export interface ActivityCreated {
  activityEvent: ActivityEvent;
}

/**
   * The event that gets published to PACK channels to update a users activity feed whenever an event
is removed from a particular resource.
   *
   * Log Safety: UNSAFE
   */
export interface ActivityDeleted {
  eventId: EventId;
  aggregationKey?: string;
}

/**
   * A single activity event associated with a particular document. The eventData union
discriminant determines the type of event: platform-defined events (e.g. document create,
rename, security changes) and custom application-defined events.
   *
   * Log Safety: UNSAFE
   */
export interface ActivityEvent {
  eventId: EventId;
  eventData: EventDataUnion;
  isRead: boolean;
  aggregationKey: string;
  createdBy: _Core.CreatedBy;
  createdTime: _Core.CreatedTime;
}

/**
   * An empty type representing all users in the system. Useful for expressing
operations that should be allowed by what is typically the 'Everyone' group,
or for expressing that anyone who satisfies Mandatory security is granted
discretionary access.
   *
   * Log Safety: SAFE
   */
export interface AllPrincipal {}

/**
 * Log Safety: SAFE
 */
export type ClientId = string;

/**
 * Log Safety: UNSAFE
 */
export interface CreateDocumentRequest {
  parentFolderRid?: _Filesystem.FolderRid;
  security: DocumentSecurity;
  ontologyRid: DocumentOntologyRid;
  name: DocumentName;
  description?: string;
  documentTypeName: DocumentTypeName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateDocumentTypeRequest {
  parentFolderRid: _Filesystem.FolderRid;
  name: DocumentTypeName;
  fileSystemType?: FileSystemType;
}

/**
 * Log Safety: UNSAFE
 */
export interface CustomPresenceEvent {
  userId: _Core.UserId;
  clientId: ClientId;
  eventData: any;
  eventType: string;
  isEphemeral?: boolean;
}

/**
   * Deletion method type describing whether the resource was trashed (Compass), archived (Artifacts), or
hard-deleted.
   *
   * Log Safety: SAFE
   */
export type DeletionMethod = "TRASHED" | "ARCHIVED" | "HARD_DELETED";

/**
   * Union of all security principals usable within disjunctive security conditions.
These principals are used to grant additional role access beyond mandatory security.
This includes the special 'all' principal, which grants access to any users who meet mandatory
for a given discretionary role.
   *
   * Log Safety: SAFE
   */
export type DiscretionaryPrincipal =
  | ({ type: "all" } & AllPrincipal)
  | ({ type: "groupId" } & DiscretionaryPrincipalGroupId)
  | ({ type: "userId" } & DiscretionaryPrincipalUserId);

/**
 * Log Safety: SAFE
 */
export interface DiscretionaryPrincipalGroupId {
  groupId: _Core.GroupId;
}

/**
 * Log Safety: SAFE
 */
export interface DiscretionaryPrincipalUserId {
  userId: _Core.UserId;
}

/**
   * Indicates whether a discretionary security update event corresponds to all-principal
permissions or user/group-specific permissions.
   *
   * Log Safety: SAFE
   */
export type DiscretionarySecurityPrincipalType = "ALL_PRINCIPAL" | "USER";

/**
 * Log Safety: UNSAFE
 */
export interface Document {
  id: DocumentRid;
  documentTypeName: DocumentTypeName;
  ontologyRid: DocumentOntologyRid;
  name: DocumentName;
  description?: string;
  parentFolderRid?: _Filesystem.FolderRid;
  security: DocumentSecurity;
  createdBy: _Core.CreatedBy;
  createdTime: _Core.CreatedTime;
  updatedBy: _Core.UpdatedBy;
  updatedTime: _Core.UpdatedTime;
  operations: Array<DocumentOperation>;
}

/**
 * Activity event data emitted when a document is created.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentCreateEventData {
  initialMandatorySecurity: DocumentMandatorySecurity;
  name: string;
}

/**
 * Versioned event data for custom application-defined activity events.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentCustomEventData {
  eventType: string;
  data: any;
  version: number;
}

/**
   * Update broadcast to all clients upon document deletion. Attempting to resubscribe to this document after
deletion will fail with permission denied.
   *
   * Log Safety: SAFE
   */
export interface DocumentDeletionUpdate {
  deletionMethod: DeletionMethod;
}

/**
 * Activity event data emitted when a document's description is updated.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentDescriptionUpdateEventData {
  newDescription: string;
  isInitial: boolean;
}

/**
 * Log Safety: SAFE
 */
export interface DocumentDiscretionarySecurity {
  owners: Array<DiscretionaryPrincipal>;
  editors: Array<DiscretionaryPrincipal>;
  viewers: Array<DiscretionaryPrincipal>;
}

/**
   * Activity event data emitted when a document's discretionary security is updated.
A single user action that updates both all-principal and user/group-specific permissions
will trigger two separate events, one for each principal type.
   *
   * Log Safety: SAFE
   */
export interface DocumentDiscretionarySecurityUpdateEventData {
  principalType: DiscretionarySecurityPrincipalType;
  previousDiscretionarySecurity?: DocumentDiscretionarySecurity;
  newDiscretionarySecurity: DocumentDiscretionarySecurity;
}

/**
 * Log Safety: UNSAFE
 */
export interface DocumentEditDescription {
  eventData: DocumentCustomEventData;
  eventType: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface DocumentMandatorySecurity {
  classification: Array<MarkingPrincipal>;
  markings: Array<MarkingId>;
}

/**
   * Activity event data emitted when a document's mandatory security (classification and markings)
is updated.
   *
   * Log Safety: UNSAFE
   */
export interface DocumentMandatorySecurityUpdateEventData {
  newClassification: Array<MarkingPrincipal>;
  newMarkings: Array<MarkingId>;
}

/**
   * A websocket type sent over the document metadata channel when a metadata field has changed. The client
should reload the Document to retrieve the updated metadata values.
   *
   * Log Safety: SAFE
   */
export interface DocumentMetadataUpdate {
  mandatorySecurityChanged: boolean;
  discretionarySecurityChanged: boolean;
  deleted: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export type DocumentName = LooselyBrandedString<"DocumentName">;

/**
 * Log Safety: SAFE
 */
export type DocumentOntologyRid = LooselyBrandedString<"DocumentOntologyRid">;

/**
   * An operation that the requesting user is permitted to perform on a document, based on the
document's security settings and the user's principals.
   *
   * Log Safety: SAFE
   */
export type DocumentOperation = "VIEW" | "EDIT" | "OWN" | "DELETE";

/**
   * Sent when a user's presence changes on a document. That is, sent when a user opens or closes the document.
Note that just because a user is not present on a particular document does not mean that they are overall
"offline" -- they may have other documents or non-document applications open in the platform.
   *
   * Log Safety: SAFE
   */
export interface DocumentPresenceChangeEvent {
  userId: _Core.UserId;
  status: UserPresence;
}

/**
 * Update sent by client to apply to internal Y.Doc on server.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentPublishMessage {
  yjsUpdate: YjsUpdate;
  editId: EditId;
  clientId: ClientId;
  description?: DocumentEditDescription;
}

/**
 * Activity event data emitted when a document is renamed.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentRenameEventData {
  previousName: string;
  newName: string;
}

/**
 * Identifier for an PACK Document.
 *
 * Log Safety: SAFE
 */
export type DocumentRid = LooselyBrandedString<"DocumentRid">;

/**
 * Filter criteria for document search.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentSearchQuery {
  documentName?: string;
}

/**
 * Request body for searching documents.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentSearchRequest {
  query?: DocumentSearchQuery;
  orderBy?: DocumentSort;
  pageSize?: _Core.PageSize;
  pageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface DocumentSearchResponse {
  data: Array<Document>;
  nextPageToken?: PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface DocumentSecurity {
  mandatory: DocumentMandatorySecurity;
  discretionary: DocumentDiscretionarySecurity;
}

/**
 * Sorting specification for document search.
 *
 * Log Safety: SAFE
 */
export interface DocumentSort {
  field: DocumentSortField;
  direction: _Core.OrderByDirection;
}

/**
 * The field to sort documents by.
 *
 * Log Safety: SAFE
 */
export type DocumentSortField =
  | "NAME"
  | "CREATED_TIME"
  | "LAST_MODIFIED_TIME"
  | "LAST_VIEW_TIME";

/**
 * Log Safety: UNSAFE
 */
export interface DocumentType {
  rid: DocumentTypeRid;
  name: DocumentTypeName;
  parentFolderRid: _Filesystem.FolderRid;
  fileSystemType?: FileSystemType;
}

/**
   * The configured name for a DocumentType. This is unique within an ontology but not
globally unique.
   *
   * Log Safety: UNSAFE
   */
export type DocumentTypeName = LooselyBrandedString<"DocumentTypeName">;

/**
 * Identifier for an PACK Document Type.
 *
 * Log Safety: SAFE
 */
export type DocumentTypeRid = LooselyBrandedString<"DocumentTypeRid">;

/**
 * The schema definition for a real-time document type.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentTypeSchema {
  name: string;
  description: string;
  version: DocumentTypeVersion;
  primaryModelKeys: Array<ModelTypeKey>;
  models: Record<ModelTypeKey, ModelDef>;
}

/**
   * A semantic version following the semver specification (major.minor.patch).
Used to version document type schemas.
   *
   * Log Safety: SAFE
   */
export interface DocumentTypeVersion {
  major: number;
  minor: number;
  patch: number;
}

/**
 * Update broadcast to all clients after being applied on server.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentUpdate {
  update?: YjsUpdate;
  clientId: ClientId;
  revisionId: RevisionId;
  baseRevisionId: RevisionId;
  editIds: Array<EditId>;
}

/**
 * Union type to allow broadcasting different collaborative message types.
 *
 * Log Safety: UNSAFE
 */
export type DocumentUpdateMessage =
  | ({ type: "deletion" } & DocumentDeletionUpdate)
  | ({ type: "update" } & DocumentUpdate)
  | ({ type: "error" } & ErrorMessage);

/**
   * A request from client to subscribe to a document's collaborative updates,
required on a subscription request to /documents/{documentId}/updates
   *
   * Log Safety: SAFE
   */
export interface DocumentUpdateSubscriptionRequest {
  clientId: ClientId;
  lastRevisionId?: RevisionId;
}

/**
 * A unique identifier for an edit to an AppKit Document.
 *
 * Log Safety: SAFE
 */
export type EditId = LooselyBrandedString<"EditId">;

/**
 * Log Safety: SAFE
 */
export type ErrorCode = "INTERNAL_ERROR" | "REVISION_TOO_OLD";

/**
   * Message sent to clients when an error occurs. The subscription may not remain in a valid state after this
message and should be reopened.
   *
   * Log Safety: SAFE
   */
export interface ErrorMessage {
  code: ErrorCode;
  errorInstanceId: string;
  args: Record<string, string>;
}

/**
   * Union of all activity event data types. Platform-defined events have typed
data, while custom application-defined events use a versioned generic payload.
   *
   * Log Safety: UNSAFE
   */
export type EventDataUnion =
  | ({ type: "documentCustomEvent" } & DocumentCustomEventData)
  | ({ type: "documentCreate" } & DocumentCreateEventData)
  | ({
    type: "documentMandatorySecurityUpdate";
  } & DocumentMandatorySecurityUpdateEventData)
  | ({ type: "documentRename" } & DocumentRenameEventData)
  | ({
    type: "documentDiscretionarySecurityUpdate";
  } & DocumentDiscretionarySecurityUpdateEventData)
  | ({
    type: "documentDescriptionUpdate";
  } & DocumentDescriptionUpdateEventData);

/**
 * A unique identifier for this activity event.
 *
 * Log Safety: UNSAFE
 */
export type EventId = LooselyBrandedString<"EventId">;

/**
 * A field definition within a record.
 *
 * Log Safety: UNSAFE
 */
export interface FieldDef {
  key: FieldKey;
  name: string;
  description?: string;
  metadata: SchemaMetadata;
  fieldType: FieldTypeUnion;
}

/**
 * A key identifying a field within a model.
 *
 * Log Safety: UNSAFE
 */
export type FieldKey = LooselyBrandedString<"FieldKey">;

/**
 * An array type with null value handling.
 *
 * Log Safety: UNSAFE
 */
export interface FieldTypeArray {
  allowNullValue: boolean;
  value: FieldValueType;
}

/**
 * A map type with key and value definitions.
 *
 * Log Safety: UNSAFE
 */
export interface FieldTypeMap {
  allowNullValue: boolean;
  key: FieldValueType;
  value: FieldValueType;
}

/**
 * A set type with null value handling.
 *
 * Log Safety: UNSAFE
 */
export interface FieldTypeSet {
  allowNullValue: boolean;
  value: FieldValueType;
}

/**
 * The type of a field, which can be a collection, map, or value.
 *
 * Log Safety: UNSAFE
 */
export type FieldTypeUnion =
  | ({ type: "set" } & FieldTypeSet)
  | ({ type: "array" } & FieldTypeArray)
  | ({ type: "map" } & FieldTypeMap)
  | ({ type: "value" } & FieldValueType);

/**
 * A boolean field value with optional default.
 *
 * Log Safety: SAFE
 */
export interface FieldValueBoolean {
  defaultValue?: boolean;
}

/**
 * A datetime field value.
 *
 * Log Safety: SAFE
 */
export interface FieldValueDatetime {}

/**
 * A reference to another document.
 *
 * Log Safety: SAFE
 */
export interface FieldValueDocumentRef {
  documentTypeRids: Array<DocumentTypeRid>;
}

/**
 * A double field value with optional constraints and default.
 *
 * Log Safety: SAFE
 */
export interface FieldValueDouble {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
}

/**
 * An integer field value with optional constraints and default.
 *
 * Log Safety: SAFE
 */
export interface FieldValueInteger {
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
}

/**
 * A reference to media content.
 *
 * Log Safety: SAFE
 */
export interface FieldValueMediaRef {}

/**
 * A reference to another model within the schema.
 *
 * Log Safety: UNSAFE
 */
export interface FieldValueModelRef {
  modelTypes: Array<ModelTypeKey>;
}

/**
 * A reference to an ontology object or interface.
 *
 * Log Safety: SAFE
 */
export interface FieldValueObjectRef {
  interfaceTypeRids: Array<InterfaceTypeRid>;
  objectTypeRids: Array<ObjectTypeRid>;
}

/**
 * A string field value with optional constraints and default.
 *
 * Log Safety: UNSAFE
 */
export interface FieldValueString {
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
}

/**
   * A text field value with optional constraints and default.
Text should be used over string values for word-editor style complex text.
   *
   * Log Safety: UNSAFE
   */
export interface FieldValueText {
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
}

/**
 * The field value type for a field definition.
 *
 * Log Safety: UNSAFE
 */
export interface FieldValueType {
  valueType: FieldValueUnion;
}

/**
 * The possible value types for a field.
 *
 * Log Safety: UNSAFE
 */
export type FieldValueUnion =
  | ({ type: "mediaRef" } & FieldValueMediaRef)
  | ({ type: "modelRef" } & FieldValueModelRef)
  | ({ type: "datetime" } & FieldValueDatetime)
  | ({ type: "userRef" } & FieldValueUserRef)
  | ({ type: "boolean" } & FieldValueBoolean)
  | ({ type: "docRef" } & FieldValueDocumentRef)
  | ({ type: "string" } & FieldValueString)
  | ({ type: "double" } & FieldValueDouble)
  | ({ type: "unmanagedJson" } & FieldValueUnmanagedJson)
  | ({ type: "integer" } & FieldValueInteger)
  | ({ type: "text" } & FieldValueText)
  | ({ type: "object" } & FieldValueObjectRef);

/**
 * An unmanaged JSON field value.
 *
 * Log Safety: SAFE
 */
export interface FieldValueUnmanagedJson {}

/**
 * A reference to a user.
 *
 * Log Safety: SAFE
 */
export interface FieldValueUserRef {}

/**
   * The file system backing storage for documents of this type. Documents can currently be stored in
Gotham Artifacts or in Compass.
   *
   * Log Safety: SAFE
   */
export type FileSystemType = "ARTIFACTS" | "COMPASS";

/**
 * The unique resource identifier (RID) of a Folder.
 *
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
 * A Foundry Group ID.
 *
 * Log Safety: SAFE
 */
export type GroupId = string;

/**
 * Identifier for an ontology interface type.
 *
 * Log Safety: SAFE
 */
export type InterfaceTypeRid = LooselyBrandedString<"InterfaceTypeRid">;

/**
 * A UUID representing a Mandatory Marking.
 *
 * Log Safety: SAFE
 */
export type MarkingId = string;

/**
 * A portion marking used by CBAC (Classification based access control).
 *
 * Log Safety: UNSAFE
 */
export type MarkingPrincipal = LooselyBrandedString<"MarkingPrincipal">;

/**
 * A model definition, either a record or a union.
 *
 * Log Safety: UNSAFE
 */
export type ModelDef =
  | ({ type: "record" } & RecordDef)
  | ({ type: "union" } & UnionDef);

/**
 * A key identifying a model type within the schema.
 *
 * Log Safety: UNSAFE
 */
export type ModelTypeKey = LooselyBrandedString<"ModelTypeKey">;

/**
 * Identifier for an ontology object type.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeRid = LooselyBrandedString<"ObjectTypeRid">;

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and use it to populate the pageToken field of the next request.
api-gateway's Core.PageToken is an immutable @Unsafe String, which is incompatible with PACK Document search.
This is a PACK API specific PageToken that is @Safe.
   *
   * Log Safety: SAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * Log Safety: UNSAFE
 */
export type PresenceCollaborativeUpdate =
  | ({ type: "presenceChangeEvent" } & DocumentPresenceChangeEvent)
  | ({ type: "customPresenceEvent" } & CustomPresenceEvent);

/**
 * Log Safety: UNSAFE
 */
export type PresencePublishMessage = { type: "custom" } & CustomPresenceEvent;

/**
 * A record model definition with named fields.
 *
 * Log Safety: UNSAFE
 */
export interface RecordDef {
  key: ModelTypeKey;
  name: string;
  description?: string;
  fields: Array<FieldDef>;
  metadata: SchemaMetadata;
}

/**
 * A unique incrementing identifier that represents the order of edits applied by the server.
 *
 * Log Safety: SAFE
 */
export type RevisionId = string;

/**
 * Metadata about when a schema element was added or deprecated.
 *
 * Log Safety: UNSAFE
 */
export interface SchemaMetadata {
  addedInVersion: DocumentTypeVersion;
  deprecatedFromVersion?: DocumentTypeVersion;
  deprecatedMessage?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchDocumentsRequest {
  documentTypeName: DocumentTypeName;
  requestBody: DocumentSearchRequest;
}

/**
 * A union model definition with variants.
 *
 * Log Safety: UNSAFE
 */
export interface UnionDef {
  key: ModelTypeKey;
  discriminant: FieldKey;
  name: string;
  description?: string;
  variants: Record<UnionVariantKey, ModelTypeKey>;
  metadata: SchemaMetadata;
}

/**
 * A key identifying a variant within a union.
 *
 * Log Safety: UNSAFE
 */
export type UnionVariantKey = LooselyBrandedString<"UnionVariantKey">;

/**
 * Request to update document metadata (name, description, and/or security).
 *
 * Log Safety: UNSAFE
 */
export interface UpdateDocumentMetadataRequest {
  name?: string;
  description?: string;
  security?: DocumentSecurity;
}

/**
 * Log Safety: UNSAFE
 */
export interface UpdateDocumentRequest {
  requestBody: UpdateDocumentMetadataRequest;
}

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * A user's presence on a document
 *
 * Log Safety: SAFE
 */
export type UserPresence = "PRESENT" | "NOT_PRESENT";

/**
 * Log Safety: UNSAFE
 */
export interface YjsUpdate {
  data: any;
}
