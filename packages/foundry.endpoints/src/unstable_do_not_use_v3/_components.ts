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
   * A Compass resource that groups related custom endpoint definitions and manages permissions for viewing,
editing, publishing, and deploying them. Publishing creates a snapshot of the set's current endpoint definitions.
   *
   * Log Safety: UNSAFE
   */
export interface EndpointSet {
  name: string;
  rid: EndpointSetRid;
}

/**
   * A custom API endpoint in an endpoint set's current editable configuration. Its definition maps an HTTP method,
URL path, and request parameters to a function or action in the Ontology.
   *
   * Log Safety: UNSAFE
   */
export interface EndpointSetEndpoint {
  name: string;
  rid: EndpointSetEndpointRid;
}

/**
 * A rid for an endpoint definition within an endpoint set.
 *
 * Log Safety: SAFE
 */
export type EndpointSetEndpointRid = LooselyBrandedString<
  "EndpointSetEndpointRid"
>;

/**
 * A rid for an endpoint set.
 *
 * Log Safety: SAFE
 */
export type EndpointSetRid = LooselyBrandedString<"EndpointSetRid">;

/**
   * A published snapshot of an endpoint set's definitions, identified by a semantic version. Published versions can
be retrieved and listed whether or not they are deployed. Deploying a version makes its endpoints available
on the endpoint set's subdomain.
   *
   * Log Safety: UNSAFE
   */
export interface EndpointSetVersion {
  id: EndpointSetVersionId;
}

/**
 * The semantic version identifying a published snapshot of an endpoint set, for example 1.2.3.
 *
 * Log Safety: UNSAFE
 */
export type EndpointSetVersionId = LooselyBrandedString<"EndpointSetVersionId">;

/**
 * Log Safety: UNSAFE
 */
export interface ListEndpointSetEndpointsResponse {
  data: Array<EndpointSetEndpoint>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListEndpointSetVersionsResponse {
  data: Array<EndpointSetVersion>;
  nextPageToken?: _Core.PageToken;
}
