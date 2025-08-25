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
 * Could not addArtifactsTo the Map.
 *
 * Log Safety: SAFE
 */
export interface AddArtifactsToMapPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddArtifactsToMapPermissionDenied";
  errorInstanceId: string;
  parameters: {
    mapRid: unknown;
  };
}

/**
 * Failed to convert MapAppData from artifact appData to gaia MapAppData
 *
 * Log Safety: SAFE
 */
export interface ErrorConvertingAppData {
  errorCode: "INTERNAL";
  errorName: "ErrorConvertingAppData";
  errorInstanceId: string;
  parameters: {
    mapId: unknown;
  };
}

/**
 * Failed to export map.
 *
 * Log Safety: SAFE
 */
export interface ErrorExporting {
  errorCode: "INTERNAL";
  errorName: "ErrorExporting";
  errorInstanceId: string;
  parameters: {
    mapId: unknown;
  };
}

/**
 * Expected a map Gid.
 *
 * Log Safety: SAFE
 */
export interface ExpectedMapGid {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ExpectedMapGid";
  errorInstanceId: string;
  parameters: {
    mapId: unknown;
  };
}

/**
 * Url Symbol not supported, must be either IconSymbol or MilsymSymbol.
 *
 * Log Safety: SAFE
 */
export interface InvalidUrlSymbol {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidUrlSymbol";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not loadLayers the Map.
 *
 * Log Safety: SAFE
 */
export interface LoadLayersMapPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadLayersMapPermissionDenied";
  errorInstanceId: string;
  parameters: {
    mapRid: unknown;
  };
}

/**
 * Could not load the Map.
 *
 * Log Safety: SAFE
 */
export interface LoadMapPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadMapPermissionDenied";
  errorInstanceId: string;
  parameters: {
    mapRid: unknown;
  };
}

/**
 * Could not loadWithExtension the Map.
 *
 * Log Safety: SAFE
 */
export interface LoadWithExtensionMapPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadWithExtensionMapPermissionDenied";
  errorInstanceId: string;
  parameters: {
    mapRid: unknown;
  };
}

/**
 * Map not found
 *
 * Log Safety: SAFE
 */
export interface MapNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MapNotFound";
  errorInstanceId: string;
  parameters: {
    mapId: unknown;
  };
}

/**
 * Could not search the Map.
 *
 * Log Safety: SAFE
 */
export interface SearchMapsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchMapsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Unknown symbol type not supported, must be either IconSymbol or MilsymSymbol.
 *
 * Log Safety: UNSAFE
 */
export interface UnknownSymbolType {
  errorCode: "INVALID_ARGUMENT";
  errorName: "UnknownSymbolType";
  errorInstanceId: string;
  parameters: {
    unknownType: unknown;
  };
}
