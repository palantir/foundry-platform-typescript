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
   * A rectangular geographic extent, encoded as a GeoJSON bounding box array
[west, south, east, north] in WGS84 decimal degrees.
   *
   * Log Safety: UNSAFE
   */
export type BBox = Array<Coordinate>;

/**
 * A single ordinate value within a position, such as a longitude, latitude, or elevation.
 *
 * Log Safety: UNSAFE
 */
export type Coordinate = number;

/**
 * Log Safety: SAFE
 */
export type CreatedTime = string;

/**
 * Log Safety: SAFE
 */
export type DeletedTime = string;

/**
 * The unique resource identifier (RID) of a folder.
 *
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
 * Log Safety: SAFE
 */
export type PageSize = number;

/**
 * Log Safety: UNSAFE
 */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
   * A GeoJSON position array of either two elements ([longitude, latitude]) or three elements
([longitude, latitude, elevation]). Longitude and latitude are represented in WGS84 decimal
degrees and elevation in meters.
   *
   * Log Safety: UNSAFE
   */
export type Position = Array<Coordinate>;

/**
 * Enables the use of preview functionality.
 *
 * Log Safety: SAFE
 */
export type PreviewMode = boolean;

/**
 * The ID of a user or group.
 *
 * Log Safety: SAFE
 */
export type PrincipalId = string;

/**
 * Log Safety: SAFE
 */
export type PrincipalType = "USER" | "GROUP";

/**
 * Log Safety: SAFE
 */
export type RoleAssignee =
  | ({ type: "default" } & RoleAssigneeDefault)
  | ({ type: "principal" } & RoleAssigneePrincipal);

/**
 * The role is assigned to all principals who satisfy the mandatory controls.
 *
 * Log Safety: SAFE
 */
export interface RoleAssigneeDefault {}

/**
 * The role is assigned to a specific principal.
 *
 * Log Safety: SAFE
 */
export interface RoleAssigneePrincipal {
  principalId: PrincipalId;
  principalType: PrincipalType;
}

/**
 * Log Safety: SAFE
 */
export type UpdatedTime = string;
