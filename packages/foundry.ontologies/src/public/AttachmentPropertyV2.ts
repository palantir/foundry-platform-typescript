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

const _getAttachment: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ) => Promise<_Ontologies.AttachmentMetadataResponse>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}", 2];

/**
 * Get the metadata of attachments parented to the given object.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}
 */
export function getAttachment(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,

    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ]
): Promise<_Ontologies.AttachmentMetadataResponse> {
  return $foundryPlatformFetch($ctx, _getAttachment, ...args);
}

const _getAttachmentByRid: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    attachmentRid: _Ontologies.AttachmentRid,
    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ) => Promise<_Ontologies.AttachmentV2>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}", 2];

/**
 * Get the metadata of a particular attachment in an attachment list.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}
 */
export function getAttachmentByRid(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    attachmentRid: _Ontologies.AttachmentRid,

    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ]
): Promise<_Ontologies.AttachmentV2> {
  return $foundryPlatformFetch($ctx, _getAttachmentByRid, ...args);
}

const _readAttachment: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ) => Promise<Response>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/content
 */
export function readAttachment(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,

    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _readAttachment, ...args);
}

const _readAttachmentByRid: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    attachmentRid: _Ontologies.AttachmentRid,
    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ) => Promise<Response>
> = [
  0,
  "/v2/ontologies/{0}/objects/{1}/{2}/attachments/{3}/{4}/content",
  2,
  ,
  "*/*",
];

/**
 * Get the content of an attachment by its RID.
 *
 * The RID must exist in the attachment array of the property.
 *
 * Third-party applications using this endpoint via OAuth2 must request the
 * following operation scopes: `api:ontologies-read`.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/attachments/{property}/{attachmentRid}/content
 */
export function readAttachmentByRid(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    attachmentRid: _Ontologies.AttachmentRid,

    $queryParams?: {
      artifactRepository?: _Ontologies.ArtifactRepositoryRid | undefined;
      packageName?: _Ontologies.SdkPackageName | undefined;
    },
  ]
): Promise<Response> {
  return $foundryPlatformFetch($ctx, _readAttachmentByRid, ...args);
}
