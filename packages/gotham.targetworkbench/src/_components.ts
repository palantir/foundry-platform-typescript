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
 * Security settings for board content
 *
 * Log Safety: UNSAFE
 */
export interface ArtifactSecurity {
  portionMarkings?: Array<PortionMarking>;
  spaceRid?: SpaceRid;
}

/**
   * The current version of the Target Board to be modified.
The archive operation will be transformed against any concurrent operations
made since this version. If there are any conflicting edits that result in changes to
these operations when they're applied, that will be noted in the response.
   *
   * Log Safety: UNSAFE
   */
export type BaseRevisionId = LooselyBrandedString<"BaseRevisionId">;

/**
 * Color options for target board columns
 *
 * Log Safety: SAFE
 */
export type ColumnColor =
  | "RED"
  | "BLUE"
  | "GREEN"
  | "YELLOW"
  | "ORANGE"
  | "PURPLE";

/**
 * Log Safety: UNSAFE
 */
export interface CreateHighPriorityTargetListRequest {
  targetBoard?: TargetBoardRid;
  targetAois?: Array<HptlTargetAoi>;
  security: ArtifactSecurity;
  areaGeo?: GeoPolygon;
  areaObjectRid?: ObjectPrimaryKey;
  name: HighPriorityTargetListName;
  description?: string;
  targets?: Array<HighPriorityTargetListTarget>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTargetBoardRequest {
  security: ArtifactSecurity;
  highPriorityTargetList?: string;
  configuration?: TargetBoardConfiguration;
  name: TargetBoardName;
  description?: string;
}

/**
 * An empty response object indicating the request was successful.
 *
 * Log Safety: SAFE
 */
export type EmptySuccessResponse = any;

/**
 * Geographic coordinates
 *
 * Log Safety: SAFE
 */
export interface GeoLocation {
  longitude: number;
  latitude: number;
}

/**
 * A point representing a latitude-longitude pair, with an option of adding elevation.
 *
 * Log Safety: UNSAFE
 */
export interface GeoPoint {
  longitude: number;
  latitude: number;
  elevation?: number;
}

/**
 * A Polygon representing the area where this High Priority Target List is applicable. If areaObjectRid exists, that field will be preferred.
 *
 * Log Safety: UNSAFE
 */
export interface GeoPolygon {
  points?: Array<GeoPoint>;
}

/**
 * Log Safety: UNSAFE
 */
export interface HighPriorityTargetList {
  rid: HighPriorityTargetListRid;
  name: HighPriorityTargetListName;
  description?: string;
  targetBoard?: TargetBoardRid;
  targets?: Array<HighPriorityTargetListTarget>;
  areaObjectRid?: ObjectPrimaryKey;
  areaGeo?: GeoPolygon;
  targetAois?: Array<HptlTargetAoi>;
  security: ArtifactSecurity;
}

/**
 * The Attack Guidance Matrix on a Target on an High Priority Target List.
 *
 * Log Safety: UNSAFE
 */
export interface HighPriorityTargetListAgm {
  agmId: HighPriorityTargetListAgmId;
  effectorType?: HighPriorityTargetListEffectType;
  effector?: string;
  effectorPriority?: number;
  timelinessInMinutes?: number;
  accuracyInMeters?: number;
}

/**
 * Identifier of the agm associated with the htpl
 *
 * Log Safety: UNSAFE
 */
export type HighPriorityTargetListAgmId = LooselyBrandedString<
  "HighPriorityTargetListAgmId"
>;

/**
 * The action that should be taken on a Target in a High Priority Target List.
 *
 * Log Safety: SAFE
 */
export type HighPriorityTargetListEffectType =
  | "DESTROY"
  | "JAMMING"
  | "NEUTRALIZE"
  | "SUPPRESS"
  | "K_KILL"
  | "COG_KILL"
  | "F_KILL"
  | "G_KILL"
  | "MSN_KILL"
  | "M_KILL"
  | "M_SLASH_F_KILL"
  | "M_SLASH_MSN_KILL"
  | "M_SLASH_P_KILL"
  | "P_KILL"
  | "PM_KILL"
  | "PTO_KILL"
  | "TOA_KILL";

/**
 * Log Safety: UNSAFE
 */
export type HighPriorityTargetListName = LooselyBrandedString<
  "HighPriorityTargetListName"
>;

/**
 * The unique identifier for a High Priority Target List
 *
 * Log Safety: SAFE
 */
export type HighPriorityTargetListRid = LooselyBrandedString<
  "HighPriorityTargetListRid"
>;

/**
 * The target on an High Priority Target List.
 *
 * Log Safety: UNSAFE
 */
export interface HighPriorityTargetListTarget {
  highPriorityTargetListTargetId: HighPriorityTargetListTargetId;
  aoiId?: HptlTargetAoiId;
  targetType: string;
  targetSubtypes?: Array<HptlTargetSubtype>;
  priority: number;
  subPriority?: number;
  category?: string;
  elnots?: Array<HptlTargetElnot>;
  when: HighPriorityTargetListWhen;
  agm?: Record<HighPriorityTargetListAgmId, HighPriorityTargetListAgm>;
}

/**
 * Log Safety: UNSAFE
 */
export type HighPriorityTargetListTargetId = LooselyBrandedString<
  "HighPriorityTargetListTargetId"
>;

/**
 * A category representing when to action the Target on a High Priority Target List.
 *
 * Log Safety: SAFE
 */
export type HighPriorityTargetListWhen =
  | "ACQUIRED"
  | "IMMEDIATE"
  | "PLANNED"
  | "NONE";

/**
 * An AOI referenced by the defined HptlTarget
 *
 * Log Safety: UNSAFE
 */
export interface HptlTargetAoi {
  id: HptlTargetAoiId;
  name?: string;
  data: HptlTargetAoiUnion;
}

/**
 * Identifier of the HptlTarget AOI
 *
 * Log Safety: SAFE
 */
export type HptlTargetAoiId = string;

/**
 * Log Safety: UNSAFE
 */
export type HptlTargetAoiUnion =
  | ({ type: "geo" } & HptlTargetGeoAoi)
  | ({ type: "entity" } & HptlTargetEntityAoi);

/**
 * ELINT Notations (ELNOTs) associated with the HPTL target
 *
 * Log Safety: UNSAFE
 */
export type HptlTargetElnot = LooselyBrandedString<"HptlTargetElnot">;

/**
 * Log Safety: UNSAFE
 */
export interface HptlTargetEntityAoi {
  entity: ObjectPrimaryKey;
}

/**
 * Log Safety: UNSAFE
 */
export interface HptlTargetGeoAoi {
  geo: GeoPolygon;
}

/**
   * This subtype will be matched against the subType stored on HptlTarget in order to determine a target's
subPriority, in addition to priority and AGM.
   *
   * Log Safety: UNSAFE
   */
export type HptlTargetSubtype = LooselyBrandedString<"HptlTargetSubtype">;

/**
 * Log Safety: UNSAFE
 */
export interface LoadedTargetBoard {
  rid: TargetBoardRid;
  name?: string;
  description?: string;
  highPriorityTargetList?: string;
  configuration?: TargetBoardConfiguration;
  targets?: Array<TargetBranchId>;
  targetColumnIds?: Record<TargetBranchId, TargetDetails>;
}

/**
 * Types of information to load for target pucks
 *
 * Log Safety: SAFE
 */
export type LoadLevel = "LOCATION" | "BOARD_STATUS";

/**
 * Success response with the requested Target Board.
 *
 * Log Safety: UNSAFE
 */
export interface LoadTargetBoardResponse {
  targetBoard: LoadedTargetBoard;
  baseRevisionId: BaseRevisionId;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyTargetBoardRequest {
  name: string;
  description?: string;
  highPriorityTargetList?: string;
  configuration?: TargetBoardConfiguration;
  baseRevisionId: BaseRevisionId;
}

/**
 * The primary key/unique identifier of an object, useful for interacting with Gotham APIs to load and mutate objects.
 *
 * Log Safety: UNSAFE
 */
export type ObjectPrimaryKey = LooselyBrandedString<"ObjectPrimaryKey">;

/**
   * Security markings represent the level of access control that applies to a specific piece of information (e.g., object property, object title).
Security markings are required upon creating a new object, and upon adding a new property to an existing object.
To access information with one or more markings, the user must have access to the markings associated with that information as defined by
your organization's defined security rules. Only users with the correct permissions can get, update, or delete a property
with security markings.
In particular, if a user creates an object and adds a property of type with highly restricted markings, it is possible
that subsequent calls to the get object properties endpoint may fail to display the highly restricted property.
Contact your Palantir administrator for more information on the markings that your organization uses.
   *
   * Log Safety: UNSAFE
   */
export type PortionMarking = LooselyBrandedString<"PortionMarking">;

/**
 * The unique identifier for a Foundry space
 *
 * Log Safety: SAFE
 */
export type SpaceRid = LooselyBrandedString<"SpaceRid">;

/**
 * Log Safety: UNSAFE
 */
export interface TargetBoard {
  rid: TargetBoardRid;
  name: TargetBoardName;
  description?: string;
  highPriorityTargetList?: string;
  configuration?: TargetBoardConfiguration;
  security: ArtifactSecurity;
}

/**
 * A column in a target board
 *
 * Log Safety: UNSAFE
 */
export interface TargetBoardColumnConfiguration {
  id: TargetBoardColumnConfigurationId;
  name: string;
  color: ColumnColor;
}

/**
 * The unique identifier of a column
 *
 * Log Safety: SAFE
 */
export type TargetBoardColumnConfigurationId = LooselyBrandedString<
  "TargetBoardColumnConfigurationId"
>;

/**
 * Configuration for a target board
 *
 * Log Safety: UNSAFE
 */
export interface TargetBoardConfiguration {
  columns: Array<TargetBoardColumnConfiguration>;
  targetIdentifiers: Array<TargetIdentifierEnum>;
}

/**
 * Log Safety: UNSAFE
 */
export type TargetBoardName = LooselyBrandedString<"TargetBoardName">;

/**
 * The unique identifier for a Target Board
 *
 * Log Safety: SAFE
 */
export type TargetBoardRid = LooselyBrandedString<"TargetBoardRid">;

/**
 * Identifier of a target and branch. Requires a '*' between the branch ID and target ID.
 *
 * Log Safety: UNSAFE
 */
export type TargetBranchId = LooselyBrandedString<"TargetBranchId">;

/**
 * Status information for a target in a column
 *
 * Log Safety: UNSAFE
 */
export interface TargetColumnStatus {
  boardRid: TargetBoardRid;
  column: string;
  columnName: string;
}

/**
 * Assignment of a target to a column
 *
 * Log Safety: UNSAFE
 */
export interface TargetDetails {
  columnId?: string;
}

/**
 * Types of target identifiers
 *
 * Log Safety: SAFE
 */
export type TargetIdentifierEnum = "CUSTOM";

/**
 * Location information for a target
 *
 * Log Safety: UNSAFE
 */
export interface TargetLocation {
  type: string;
  timestamp: string;
  latestLocation: GeoLocation;
}

/**
 * The unique identifier for a Target
 *
 * Log Safety: SAFE
 */
export type TargetRid = LooselyBrandedString<"TargetRid">;
