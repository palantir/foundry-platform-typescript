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

import type * as _Core from "@osdk/internal.foundry.core";
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

const _list: $FoundryPlatformMethod<
  (
    ontologyRid: _Ontologies.OntologyRid,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Ontologies.ListQueryTypesResponse>
> = [0, "/v1/ontologies/{0}/queryTypes", 2];

/**
 * Lists the query types for the given Ontology.
 *
 * Each page may be smaller than the requested page size. However, it is guaranteed that if there are more
 * results available, at least one result will be present in the response.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/queryTypes
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontologyRid: _Ontologies.OntologyRid,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Ontologies.ListQueryTypesResponse> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    ontologyRid: _Ontologies.OntologyRid,
    queryApiName: _Ontologies.QueryApiName,
  ) => Promise<_Ontologies.QueryType>
> = [0, "/v1/ontologies/{0}/queryTypes/{1}"];

/**
 * Gets a specific query type with the given API name.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v1/ontologies/{ontologyRid}/queryTypes/{queryApiName}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontologyRid: _Ontologies.OntologyRid,
    queryApiName: _Ontologies.QueryApiName,
  ]
): Promise<_Ontologies.QueryType> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}
