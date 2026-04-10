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
 * Autosaved documents cannot be deleted.
 *
 * Log Safety: SAFE
 */
export interface CannotDeleteAutosavedDocument {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotDeleteAutosavedDocument";
  errorDescription: "Autosaved documents cannot be deleted.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
}

/**
 * Hidden documents cannot be deleted.
 *
 * Log Safety: SAFE
 */
export interface CannotDeleteHiddenDocument {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotDeleteHiddenDocument";
  errorDescription: "Hidden documents cannot be deleted.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
}

/**
   * The user does not have permission to create documents of the given type in
the given ontology, or the Document Type does not exist in the ontology.
   *
   * Log Safety: UNSAFE
   */
export interface CreateDocumentNotSupported {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateDocumentNotSupported";
  errorDescription:
    "The user does not have permission to create documents of the given type in the given ontology, or the Document Type does not exist in the ontology.";
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
 * Could not createFirstParty the DocumentType.
 *
 * Log Safety: SAFE
 */
export interface CreateFirstPartyDocumentTypePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFirstPartyDocumentTypePermissionDenied";
  errorDescription: "Could not createFirstParty the DocumentType.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Document.
 *
 * Log Safety: SAFE
 */
export interface DeleteDocumentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteDocumentPermissionDenied";
  errorDescription: "Could not delete the Document.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
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
 * This Document Type Name already exists for the given ontology.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentTypeAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "DocumentTypeAlreadyExists";
  errorDescription:
    "This Document Type Name already exists for the given ontology.";
  errorInstanceId: string;
  parameters: {
    documentTypeName: unknown;
  };
}

/**
 * The Document Type Name does not exist, or the user does not have permission to view the Document Type.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentTypeNameNotFound {
  errorCode: "PERMISSION_DENIED";
  errorName: "DocumentTypeNameNotFound";
  errorDescription:
    "The Document Type Name does not exist, or the user does not have permission to view the Document Type.";
  errorInstanceId: string;
  parameters: {
    documentTypeName: unknown;
  };
}

/**
 * The given DocumentType could not be found.
 *
 * Log Safety: SAFE
 */
export interface DocumentTypeNotFound {
  errorCode: "NOT_FOUND";
  errorName: "DocumentTypeNotFound";
  errorDescription: "The given DocumentType could not be found.";
  errorInstanceId: string;
  parameters: {
    documentTypeRid: unknown;
  };
}

/**
   * The provided Document Type Name is invalid. First-party document type names must follow the format
com.palantir.pack.<assetName>.<documentTypeName>.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDocumentTypeName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDocumentTypeName";
  errorDescription:
    "The provided Document Type Name is invalid. First-party document type names must follow the format com.palantir.pack.<assetName>.<documentTypeName>.";
  errorInstanceId: string;
  parameters: {
    documentTypeName: unknown;
  };
}

/**
   * The provided Document Type Version is invalid. The version must follow semantic versioning format
<major>.<minor>.<patch> where each part is a non-negative integer, and must be strictly increasing
from the current version.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDocumentTypeVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDocumentTypeVersion";
  errorDescription:
    "The provided Document Type Version is invalid. The version must follow semantic versioning format <major>.<minor>.<patch> where each part is a non-negative integer, and must be strictly increasing from the current version.";
  errorInstanceId: string;
  parameters: {
    documentTypeName: unknown;
    version: unknown;
  };
}

/**
 * Could not loadByName the DocumentType.
 *
 * Log Safety: SAFE
 */
export interface LoadByNameDocumentTypesPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "LoadByNameDocumentTypesPermissionDenied";
  errorDescription: "Could not loadByName the DocumentType.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not search the Document.
 *
 * Log Safety: SAFE
 */
export interface SearchDocumentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchDocumentsPermissionDenied";
  errorDescription: "Could not search the Document.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The user does not have permission to update this document, or the document does not exist.
 *
 * Log Safety: SAFE
 */
export interface UpdateDocumentNotSupported {
  errorCode: "PERMISSION_DENIED";
  errorName: "UpdateDocumentNotSupported";
  errorDescription:
    "The user does not have permission to update this document, or the document does not exist.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
}

/**
 * Could not update the Document.
 *
 * Log Safety: SAFE
 */
export interface UpdateDocumentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UpdateDocumentPermissionDenied";
  errorDescription: "Could not update the Document.";
  errorInstanceId: string;
  parameters: {
    documentId: unknown;
  };
}
