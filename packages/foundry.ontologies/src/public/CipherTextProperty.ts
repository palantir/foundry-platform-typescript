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

const _decrypt: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ) => Promise<_Ontologies.DecryptionResult>
> = [0, "/v2/ontologies/{0}/objects/{1}/{2}/ciphertexts/{3}/decrypt", 2];

/**
 * Decrypt the value of a ciphertext property.
 *
 * @public
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/ciphertexts/{property}/decrypt
 */
export function decrypt(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,

    $queryParams?: { branch?: _Core.FoundryBranch | undefined },
  ]
): Promise<_Ontologies.DecryptionResult> {
  return $foundryPlatformFetch($ctx, _decrypt, ...args);
}

const _encryptWithDefaultChannel: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.EncryptionRequest,
    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.EncryptionResult>
> = [1, "/v2/ontologies/{0}/objectTypes/{1}/ciphertexts/{2}/encrypt", 3];

/**
 * Encrypt a plaintext value into a CipherText value for the given object type property.
 *
 * The Cipher Channel used is the default channel configured for the property in ontology metadata. This
 * endpoint requires the CipherText property to have a configured `defaultCipherChannelRid`; if none is
 * configured an error will be thrown. To encrypt against the channel of an existing object's value, use the
 * **Encrypt** endpoint that accepts a `primaryKey` instead.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objectTypes/{objectType}/ciphertexts/{property}/encrypt
 */
export function encryptWithDefaultChannel(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.EncryptionRequest,
    $queryParams?: {
      branch?: _Core.FoundryBranch | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.EncryptionResult> {
  return $foundryPlatformFetch($ctx, _encryptWithDefaultChannel, ...args);
}

const _encrypt: $FoundryPlatformMethod<
  (
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.EncryptionRequest,
    $queryParams?: {
      cipherChannelStrategy?: _Ontologies.CipherChannelStrategy | undefined;
      branch?: _Core.FoundryBranch | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Ontologies.EncryptionResult>
> = [1, "/v2/ontologies/{0}/objects/{1}/{2}/ciphertexts/{3}/encrypt", 3];

/**
 * Encrypt a plaintext value into a CipherText value for the given object's CipherText property.
 *
 * The Cipher Channel used is resolved based on the supplied `cipherChannelStrategy`, using the channel of the
 * object's existing ciphertext value and/or the default channel configured for the property in ontology metadata.
 *
 * @alpha
 *
 * Required Scopes: [api:ontologies-read]
 * URL: /v2/ontologies/{ontology}/objects/{objectType}/{primaryKey}/ciphertexts/{property}/encrypt
 */
export function encrypt(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    ontology: _Ontologies.OntologyIdentifier,
    objectType: _Ontologies.ObjectTypeApiName,
    primaryKey: _Ontologies.PropertyValueEscapedString,
    property: _Ontologies.PropertyApiName,
    $body: _Ontologies.EncryptionRequest,
    $queryParams?: {
      cipherChannelStrategy?: _Ontologies.CipherChannelStrategy | undefined;
      branch?: _Core.FoundryBranch | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Ontologies.EncryptionResult> {
  return $foundryPlatformFetch($ctx, _encrypt, ...args);
}
