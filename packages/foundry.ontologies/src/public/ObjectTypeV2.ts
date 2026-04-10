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

const _list: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Ontologies.ListObjectTypesV2Response>
> = [0, "/v2/ontologies/{0}/objectTypes", 2];

/**
 * Lists the object types for the given Ontology.
 *
 * Each page may be smaller or larger than the requested page size. However, it is guaranteed that if there are
 * more results available, at least one result will be present in the
 * response.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes
 */
export function list(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,

    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Ontologies.ListObjectTypesV2Response> {
  return $foundryPlatformFetch($ctx, _list, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.ObjectTypeV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}", 2];

/**
 * Gets a specific object type with the given API name.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}
 */
export function get(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.ObjectTypeV2> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _getByRidBatch: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.GetObjectTypeByRidBatchRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.GetObjectTypeByRidBatchResponse>
> = [1, "/v2/ontologies/{0}/objectTypes/getByRidBatch", 3];

/**
 * Gets a list of object types by RID in bulk.
 *
 * Object types are filtered from the response if they don't exist or the requesting token lacks the required
 * permissions.
 *
 * The maximum batch size for this endpoint is 100.
 *
 * @beta
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/getByRidBatch
 */
export function getByRidBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.GetObjectTypeByRidBatchRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.GetObjectTypeByRidBatchResponse> {
  return $foundryPlatformFetch($ctx, _getByRidBatch, ...args);
}

const _getFullMetadata: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: {
      preview?: _Core.PreviewMode | undefined;
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
      branch?: _Core.FoundryBranch | undefined;
    },
  ) => Promise<_Ontologies.ObjectTypeFullMetadata>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/fullMetadata", 2];

/**
 * Gets the full metadata for a specific object type with the given API name.
 *
 * @beta
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/fullMetadata
 */
export function getFullMetadata(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: {
      preview?: _Core.PreviewMode | undefined;
      sdkPackageRid?: _Ontologies.SdkPackageRid | undefined;
      sdkVersion?: _Ontologies.SdkVersion | undefined;
      branch?: _Core.FoundryBranch | undefined;
    },
  ]
): Promise<_Ontologies.ObjectTypeFullMetadata> {
  return $foundryPlatformFetch($ctx, _getFullMetadata, ...args);
}

const _getEditsHistory: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    $body: _Ontologies.ObjectTypeEditsHistoryRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.ObjectTypeEditsHistoryResponse>
> = [1, "/v2/ontologies/{0}/objectTypes/{1}/editsHistory", 3];

/**
 * Returns the history of edits (additions, modifications, deletions) for objects of a
 * specific object type. This endpoint provides visibility into all actions that have
 * modified objects of this type.
 *
 * The edits are returned in reverse chronological order (most recent first) by default.
 *
 * Note that filters are ignored for OSv1 object types.
 *
 * @beta
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/editsHistory
 */
export function getEditsHistory(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    $body: _Ontologies.ObjectTypeEditsHistoryRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.ObjectTypeEditsHistoryResponse> {
  return $foundryPlatformFetch($ctx, _getEditsHistory, ...args);
}

const _listOutgoingLinkTypes: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ) => Promise<_Ontologies.ListOutgoingLinkTypesResponseV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes", 2];

/**
 * List the outgoing links for an object type.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes
 */
export function listOutgoingLinkTypes(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
    },
  ]
): Promise<_Ontologies.ListOutgoingLinkTypesResponseV2> {
  return $foundryPlatformFetch($ctx, _listOutgoingLinkTypes, ...args);
}

const _getOutgoingLinkType: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    linkType: _Ontologies.LinkTypeApiName,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.LinkTypeSideV2>
> = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}", 2];

/**
 * Get an outgoing link for an object type.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/outgoingLinkTypes/{linkType}
 */
export function getOutgoingLinkType(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    linkType: _Ontologies.LinkTypeApiName,

    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.LinkTypeSideV2> {
  return $foundryPlatformFetch($ctx, _getOutgoingLinkType, ...args);
}

const _getOutgoingLinkTypesByObjectTypeRidBatch: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.GetOutgoingLinkTypesByObjectTypeRidBatchRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.GetOutgoingLinkTypesByObjectTypeRidBatchResponse>
> = [1, "/v2/ontologies/{0}/outgoingLinkTypes/getByRidBatch", 3];

/**
 * Gets outgoing link types for a batch of object types, identified by their RIDs.
 *
 * For each requested object type, returns the list of outgoing link types visible to the
 * requesting token. Optionally, results can be filtered to only include specific link type RIDs.
 *
 * Object types that don't exist or that the requesting token lacks permissions for are
 * silently omitted from the response.
 *
 * The maximum batch size for this endpoint is 100.
 *
 * @beta
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/outgoingLinkTypes/getByRidBatch
 */
export function getOutgoingLinkTypesByObjectTypeRidBatch(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.GetOutgoingLinkTypesByObjectTypeRidBatchRequest,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.GetOutgoingLinkTypesByObjectTypeRidBatchResponse> {
  return $foundryPlatformFetch(
    $ctx,
    _getOutgoingLinkTypesByObjectTypeRidBatch,
    ...args,
  );
}
