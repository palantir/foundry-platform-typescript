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
 * A single activity event associated with a particular artifact.
 *
 * Log Safety: UNSAFE
 */
export interface ActivityEvent {
  eventId: EventId;
  eventType: string;
  eventData: VersionedEventData;
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
 * Update sent by client to apply to internal Y.Doc on server.
 *
 * Log Safety: UNSAFE
 */
export interface ApplyYjsUpdate {
  yjsUpdate: YjsUpdate;
  clientId: ClientId;
  description?: DocumentEditDescription;
}

/**
 * Log Safety: SAFE
 */
export type ClientId = string;

/**
 * Update broadcast to all clients after being applied on server.
 *
 * Log Safety: UNSAFE
 */
export interface CollaborativeUpdate {
  update: CollaborativeUpdateContents;
  clientId: ClientId;
}

/**
 * Union type to allow broadcasting different collaborative message types.
 *
 * Log Safety: UNSAFE
 */
export type CollaborativeUpdateContents = { type: "yjsUpdate" } & YjsUpdate;

/**
 * Log Safety: UNSAFE
 */
export interface CreateDocumentRequest {
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
}

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
 * Log Safety: UNSAFE
 */
export interface Document {
  id: DocumentRid;
  documentTypeName: DocumentTypeName;
  ontologyRid: DocumentOntologyRid;
  name: DocumentName;
  description?: string;
  security: DocumentSecurity;
  createdBy: _Core.CreatedBy;
  createdTime: _Core.CreatedTime;
  updatedBy: _Core.UpdatedBy;
  updatedTime: _Core.UpdatedTime;
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
 * Log Safety: UNSAFE
 */
export interface DocumentEditDescription {
  eventData: VersionedEventData;
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
 * Log Safety: UNSAFE
 */
export type DocumentName = LooselyBrandedString<"DocumentName">;

/**
 * Log Safety: SAFE
 */
export type DocumentOntologyRid = LooselyBrandedString<"DocumentOntologyRid">;

/**
 * Identifier for an PACK Document.
 *
 * Log Safety: SAFE
 */
export type DocumentRid = LooselyBrandedString<"DocumentRid">;

/**
 * Log Safety: UNSAFE
 */
export interface DocumentSecurity {
  mandatory: DocumentMandatorySecurity;
  discretionary: DocumentDiscretionarySecurity;
}

/**
 * Log Safety: UNSAFE
 */
export interface DocumentType {
  rid: DocumentTypeRid;
  name: DocumentTypeName;
  parentFolderRid: _Filesystem.FolderRid;
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
 * A unique identifier for this activity event.
 *
 * Log Safety: UNSAFE
 */
export type EventId = LooselyBrandedString<"EventId">;

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
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * Log Safety: UNSAFE
 */
export interface VersionedEventData {
  data: any;
  version: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface YjsUpdate {
  data: any;
}
