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

const _execute: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    queryApiName: _Ontologies.QueryApiName,
    $body: _Ontologies.ExecuteQueryRequest,
    $queryParams?: {
      version?: _Ontologies.FunctionVersion | undefined;
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
    },
  ) => Promise<_Ontologies.ExecuteQueryResponse>
> = [1, "/v2/ontologies/{0}/queries/{1}/execute", 3];

/**
 * Executes a Query using the given parameters.
 *
 * Optional parameters do not need to be supplied.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/queries/{queryApiName}/execute
 */
export function execute(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    queryApiName: _Ontologies.QueryApiName,
    $body: _Ontologies.ExecuteQueryRequest,
    $queryParams?: {
      version?: _Ontologies.FunctionVersion | undefined;
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
    },
  ]
): Promise<_Ontologies.ExecuteQueryResponse> {
  return $foundryPlatformFetch($ctx, _execute, ...args);
}
