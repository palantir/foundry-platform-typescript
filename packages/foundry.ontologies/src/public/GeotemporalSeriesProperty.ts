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
import type {
  SharedClient as $OldClient,
  SharedClientContext as $OldClientContext,
} from "@osdk/shared.client";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client2";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Ontologies from "../_components.js";

//

const _loadGeotemporalSeriesEntries: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.LoadGeotemporalSeriesRequest,
    $queryParams?: {
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.LoadGeotemporalSeriesResponse>
> = [
  1,
  "/v2/ontologies/{0}/objects/{1}/{2}/geotemporalSeries/{3}/loadEntries",
  3,
];

/**
 * Load the geotemporal series entries for a given object's geotemporal series reference property within the
 * specified time range.
 *
 * Each entry in the response is a map of property names to values, following the same structure as
 * `OntologyObjectV2`. Use the `additionalProperties` field in the request to control which properties are included
 * in each entry depending on the underlying geotemporal integration.
 *
 * Results are paginated. Use the `nextPageToken` from the response to retrieve subsequent pages.
 *
 * :::callout{theme=warning title=Warning}
 * Geotemporal series integrations with only "dataset archive" enabled are not supported.
 * :::
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/geotemporalSeries/{property}/loadEntries
 */
export function loadGeotemporalSeriesEntries(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.LoadGeotemporalSeriesRequest,
    $queryParams?: {
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.LoadGeotemporalSeriesResponse> {
  return $foundryPlatformFetch($ctx, _loadGeotemporalSeriesEntries, ...args);
}
