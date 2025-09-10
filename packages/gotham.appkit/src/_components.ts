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

import type * as _Core from "@osdk/gotham.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

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
export interface DocumentMandatorySecurity {
  classification: Array<MarkingPrincipal>;
  markings: Array<MarkingId>;
}

/**
 * Log Safety: UNSAFE
 */
export type DocumentName = LooselyBrandedString<"DocumentName">;

/**
 * Identifier for an AppKit Document.
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
   * The configured name for a DocumentType. This is unique within an ontology but not
globally unique.
   *
   * Log Safety: UNSAFE
   */
export type DocumentTypeName = LooselyBrandedString<"DocumentTypeName">;

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
