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
   * The request contained more points than a single elevation computation allows. Reduce the number of
points, or split the points across multiple requests.
   *
   * Log Safety: SAFE
   */
export interface MaxElevationPointCountExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MaxElevationPointCountExceeded";
  errorDescription:
    "The request contained more points than a single elevation computation allows. Reduce the number of points, or split the points across multiple requests.";
  errorInstanceId: string;
  parameters: {
    maxElevationPointCount: unknown;
  };
}

/**
   * The tile source cannot compute elevation because it does not provide elevation data. Use the
list operation with capability=ELEVATION to find sources that can.
   *
   * Log Safety: UNSAFE
   */
export interface TileSourceCapabilityNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TileSourceCapabilityNotSupported";
  errorDescription:
    "The tile source cannot compute elevation because it does not provide elevation data. Use the list operation with capability=ELEVATION to find sources that can.";
  errorInstanceId: string;
  parameters: {
    tileSourceId: unknown;
    capability: unknown;
  };
}

/**
 * Log Safety: UNSAFE
 */
export interface TileSourceNotFound {
  errorCode: "NOT_FOUND";
  errorName: "TileSourceNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    tileSourceId: unknown;
  };
}
