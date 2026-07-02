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

const _createScenario: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.CreateOntologyScenarioRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Ontologies.CreateOntologyScenarioResponse>
> = [1, "/v2/ontologies/{0}/scenarios/create", 3];

/**
 * Creates an ontology scenario.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read, api:ontologies-write]
 * URL: /v2/ontologies/{ontology}/scenarios/create
 */
export function createScenario(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    $body: _Ontologies.CreateOntologyScenarioRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Ontologies.CreateOntologyScenarioResponse> {
  return $foundryPlatformFetch($ctx, _createScenario, ...args);
}

const _listScenarioEditedObjectTypes: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Ontologies.ListScenarioEditedObjectTypesResponse>
> = [0, "/v2/ontologies/{0}/scenarios/{1}/objectTypes/edited", 2];

/**
 * Returns the list of object type API names that have been modified within a given scenario.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/objectTypes/edited
 */
export function listScenarioEditedObjectTypes(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Ontologies.ListScenarioEditedObjectTypesResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioEditedObjectTypes, ...args);
}

const _listScenarioEditedLinkTypes: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Ontologies.ListScenarioEditedLinkTypesResponse>
> = [
  0,
  "/v2/ontologies/{0}/scenarios/{1}/objectTypes/{2}/outgoingLinkTypes/edited",
  2,
];

/**
 * Returns the list of outgoing links that have been modified within a given scenario for an object type.
 *
 * Note that only many-to-many link type are returned by this endpoint. One-to-many link type edits are
 * surfaced as object edits on the object type that owns the foreign key property.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/objectTypes/{objectType}/outgoingLinkTypes/edited
 */
export function listScenarioEditedLinkTypes(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Ontologies.ListScenarioEditedLinkTypesResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioEditedLinkTypes, ...args);
}

const _listScenarioEditedEntityTypes: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Ontologies.ListScenarioEditedEntityTypesResponse>
> = [0, "/v2/ontologies/{0}/scenarios/{1}/editedEntityTypes", 2];

/**
 * Returns the object types and link types that have been modified within a given scenario.
 *
 * The response contains the list of object type API names that have been modified, and the list of
 * many-to-many link types that have been modified, grouped by their source object type. One-to-many
 * link type edits are surfaced as object edits on the object type that owns the foreign key property.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/editedEntityTypes
 */
export function listScenarioEditedEntityTypes(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Ontologies.ListScenarioEditedEntityTypesResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioEditedEntityTypes, ...args);
}

const _listScenarioEditedObjects: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.ListScenarioEditedObjectsResponse>
> = [0, "/v2/ontologies/{0}/scenarios/{1}/objects/{2}/edited", 2];

/**
 * Returns the list of objects that have been edited within a given scenario for a specific object type.
 * Only objects that the user has permission to view are returned.
 *
 * Each page may be smaller than the requested page size.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/objects/{objectType}/edited
 */
export function listScenarioEditedObjects(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.ListScenarioEditedObjectsResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioEditedObjects, ...args);
}

const _listScenarioEditedLinks: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,
    linkType: _Ontologies.LinkTypeApiName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.ListScenarioEditedLinksResponse>
> = [0, "/v2/ontologies/{0}/scenarios/{1}/objects/{2}/links/{3}/edited", 2];

/**
 * Returns the list of edited links within a given scenario for a specific object type and link type, grouped
 * by source object. Only works for many-to-many link types. Only links where the user has permission to view
 * both objects are returned.
 *
 * Each page may be smaller than the requested page size.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/objects/{objectType}/links/{linkType}/edited
 */
export function listScenarioEditedLinks(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,
    linkType: _Ontologies.LinkTypeApiName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.ListScenarioEditedLinksResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioEditedLinks, ...args);
}

const _listScenarioConflictingObjects: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,
    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.ListScenarioConflictingObjectsResponse>
> = [0, "/v2/ontologies/{0}/scenarios/{1}/objects/{2}/conflicting", 2];

/**
 * Returns the list of objects with edits that conflict with edits to the scenario's base for a specific object
 * type. A conflict occurs when an object has been edited both within the scenario and on the scenario's base
 * after the scenario was created. Only objects that the user has permission to view are returned.
 *
 * Conflict detection takes into account changes that are not reflected in the user-visible object data.
 * As a result, this endpoint may report false positives. An object may be returned as conflicting even if
 * its data has not actually changed on the scenario's base.
 *
 * Each page may be smaller than the requested page size.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/scenarios/{scenarioRid}/objects/{objectType}/conflicting
 */
export function listScenarioConflictingObjects(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    scenarioRid: _Ontologies.OntologyScenarioRid,
    objectType: _Ontologies.ObjectTypeApiName,

    $queryParams?: {
      pageSize?: _Core.PageSize | undefined;
      pageToken?: _Core.PageToken | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.ListScenarioConflictingObjectsResponse> {
  return $foundryPlatformFetch($ctx, _listScenarioConflictingObjects, ...args);
}
