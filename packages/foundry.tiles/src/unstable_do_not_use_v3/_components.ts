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

import type * as _Core from "@osdk/foundry.core/unstable_do_not_use_v3";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
   * Indicates which operations and tile sets a tile source makes available.
Values:

ELEVATION: The source can answer computeElevation queries.
IMAGERY_TILES: The source serves imagery map tiles.
TERRAIN_TILES: The source serves 3D terrain or elevation tiles.
VECTOR_TILES: The source serves vector map tiles.
   *
   * Log Safety: SAFE
   */
export type Capability =
  | "ELEVATION"
  | "IMAGERY_TILES"
  | "VECTOR_TILES"
  | "TERRAIN_TILES";

/**
 * A request to compute elevation at a list of points.
 *
 * Log Safety: UNSAFE
 */
export interface ComputeElevationRequest {
  points: Array<_Core.Position>;
}

/**
 * The elevation results for a batch of requested points.
 *
 * Log Safety: UNSAFE
 */
export interface ComputeElevationResponse {
  elevations: Array<ElevationPointResult>;
  verticalReference: VerticalReference;
}

/**
 * The elevation result for a single requested point.
 *
 * Log Safety: UNSAFE
 */
export interface ElevationPointResult {
  elevation?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListTileSourcesResponse {
  data: Array<TileSource>;
  nextPageToken?: _Core.PageToken;
}

/**
   * The encoding of the tile data served by a tile set.
Values:

CESIUM_QUANTIZED_MESH: Terrain mesh encoded as Cesium quantized mesh.
IMAGERY: Raster imagery in a standard web image format such as PNG, JPEG, or WebP, ready for display.
MAPBOX_ELEVATION: Elevation data encoded as RGB values in a PNG raster, using the Mapbox encoding.
MAPBOX_VECTOR_TILE: Vector data encoded as Mapbox Vector Tiles.
TERRARIUM_ELEVATION: Elevation data encoded as RGB values in a PNG raster, using the Terrarium encoding.
   *
   * Log Safety: SAFE
   */
export type TileFormat =
  | "IMAGERY"
  | "MAPBOX_VECTOR_TILE"
  | "CESIUM_QUANTIZED_MESH"
  | "TERRARIUM_ELEVATION"
  | "MAPBOX_ELEVATION";

/**
 * A servable set of tiles for a source, grouping tiles that share a format and layout.
 *
 * Log Safety: UNSAFE
 */
export interface TileSet {
  format: TileFormat;
  maxZoom: number;
  minZoom: number;
  tilingScheme: TilingScheme;
}

/**
   * A source of map data that the platform can serve, such as satellite imagery, vector map layers,
or elevation models. A source's capabilities indicate which operations it supports.
   *
   * Log Safety: UNSAFE
   */
export interface TileSource {
  attribution?: string;
  bounds?: _Core.BBox;
  capabilities: Array<Capability>;
  description?: string;
  displayName: string;
  id: TileSourceId;
  tileSets: Array<TileSet>;
  verticalReference?: VerticalReference;
}

/**
 * The identifier of a tile source. Human-entered when the source is configured.
 *
 * Log Safety: UNSAFE
 */
export type TileSourceId = LooselyBrandedString<"TileSourceId">;

/**
   * The layout used to arrange and address the tiles in a tile set.
Values:


CUSTOM: A non-standard tiling scheme specific to the source. Clients that do not recognize the
source's scheme should not assume a standard tile layout.


GLOBAL_GEODETIC: Equirectangular longitude/latitude (EPSG:4326).


WEB_MERCATOR: Web Mercator (EPSG:3857): the standard web-map tiling scheme.
   *
   * Log Safety: SAFE
   */
export type TilingScheme = "WEB_MERCATOR" | "GLOBAL_GEODETIC" | "CUSTOM";

/**
   * The reference surface an elevation value is measured against.
Values:


MEAN_SEA_LEVEL: Height above mean sea level (EGM2008 geoid).


UNKNOWN: The source's vertical reference is not known. Elevation values are returned as-is from the
source and should be interpreted with caution.


WGS84_ELLIPSOID: Height above the WGS84 ellipsoid.
   *
   * Log Safety: SAFE
   */
export type VerticalReference =
  | "WGS84_ELLIPSOID"
  | "MEAN_SEA_LEVEL"
  | "UNKNOWN";
