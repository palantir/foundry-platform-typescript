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
   * The user does not have permission to create documents of the given type in
the given ontology, or the document type does not exist in the ontology.
   *
   * Log Safety: UNSAFE
   */
export interface CreateDocumentNotSupported {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateDocumentNotSupported";
  errorDescription:
    "The user does not have permission to create documents of the given type in the given ontology, or the document type does not exist in the ontology.";
  errorInstanceId: string;
  parameters: {
    ontologyRid: unknown;
    documentTypeName: unknown;
  };
}

/**
 * Could not create the Document.
 *
 * Log Safety: SAFE
 */
export interface CreateDocumentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateDocumentPermissionDenied";
  errorDescription: "Could not create the Document.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not create the DocumentType.
 *
 * Log Safety: SAFE
 */
export interface CreateDocumentTypePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateDocumentTypePermissionDenied";
  errorDescription: "Could not create the DocumentType.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given Document could not be found.
 *
 * Log Safety: SAFE
 */
export interface DocumentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "DocumentNotFound";
  errorDescription: "The given Document could not be found.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
}

/**
 * This document type name already exists for the given ontology.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentTypeAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "DocumentTypeAlreadyExists";
  errorDescription:
    "This document type name already exists for the given ontology.";
  errorInstanceId: string;
  parameters: {
    documentTypeName: unknown;
  };
}
