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
   * Changing of branch name is not supported for imports.

   *
   * Log Safety: UNSAFE
   */
export interface ChangingBranchNameNotSupportedForImports {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ChangingBranchNameNotSupportedForImports";
  errorInstanceId: string;
  parameters: {
    existingBranchName: unknown;
    newBranchName: unknown;
  };
}

/**
   * Changing of output dataset is not supported for imports.

   *
   * Log Safety: SAFE
   */
export interface ChangingOutputDatasetNotSupportedForImports {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ChangingOutputDatasetNotSupportedForImports";
  errorInstanceId: string;
  parameters: {
    existingOutputDatasetRid: unknown;
    newOutputDatasetRid: unknown;
  };
}

/**
   * Details of the connection (such as which types of import it supports) could not be determined.

   *
   * Log Safety: UNSAFE
   */
export interface ConnectionDetailsNotDetermined {
  errorCode: "INTERNAL";
  errorName: "ConnectionDetailsNotDetermined";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
    connectionType: unknown;
  };
}

/**
 * The given Connection could not be found.
 *
 * Log Safety: SAFE
 */
export interface ConnectionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ConnectionNotFound";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
   * The specified connection is not yet supported in the Platform API.

   *
   * Log Safety: UNSAFE
   */
export interface ConnectionTypeNotSupported {
  errorCode: "INTERNAL";
  errorName: "ConnectionTypeNotSupported";
  errorInstanceId: string;
  parameters: {
    connectionType: unknown;
  };
}

/**
 * Could not create the FileImport.
 *
 * Log Safety: SAFE
 */
export interface CreateFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
 * Could not create the TableImport.
 *
 * Log Safety: SAFE
 */
export interface CreateTableImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateTableImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
 * Could not delete the FileImport.
 *
 * Log Safety: SAFE
 */
export interface DeleteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
 * Could not delete the TableImport.
 *
 * Log Safety: SAFE
 */
export interface DeleteTableImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteTableImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    tableImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
 * Could not execute the FileImport.
 *
 * Log Safety: SAFE
 */
export interface ExecuteFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
 * Could not execute the TableImport.
 *
 * Log Safety: SAFE
 */
export interface ExecuteTableImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ExecuteTableImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    tableImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * The provided `minFilesCount` field in the FileAtLeastCountFilter must be strictly greater than 0.

   *
   * Log Safety: SAFE
   */
export interface FileAtLeastCountFilterInvalidMinCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileAtLeastCountFilterInvalidMinCount";
  errorInstanceId: string;
  parameters: {
    minFilesCount: unknown;
  };
}

/**
   * Custom file import filters can be fetched but cannot currently be used
when creating or updating file imports.

   *
   * Log Safety: UNSAFE
   */
export interface FileImportCustomFilterCannotBeUsedToCreateOrUpdateFileImports {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileImportCustomFilterCannotBeUsedToCreateOrUpdateFileImports";
  errorInstanceId: string;
  parameters: {
    config: unknown;
  };
}

/**
 * The given FileImport could not be found.
 *
 * Log Safety: SAFE
 */
export interface FileImportNotFound {
  errorCode: "NOT_FOUND";
  errorName: "FileImportNotFound";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * The specified connection does not support file imports.

   *
   * Log Safety: SAFE
   */
export interface FileImportNotSupportedForConnection {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileImportNotSupportedForConnection";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
   * The `gt` field in the FileSizeFilter cannot be a negative number.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterGreaterThanCannotBeNegative {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterGreaterThanCannotBeNegative";
  errorInstanceId: string;
  parameters: {
    gt: unknown;
  };
}

/**
   * The provided `gt` and `lt` fields in the FileSizeFilter are invalid. No files will ever
satisfy the provided range. The value specified for `gt` must be strictly less than `lt - 1`.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterInvalidGreaterThanAndLessThanRange {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterInvalidGreaterThanAndLessThanRange";
  errorInstanceId: string;
  parameters: {
    gt: unknown;
    lt: unknown;
  };
}

/**
   * The `lt` field in the FileSizeFilter must be at least 1 byte.

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterLessThanMustBeOneByteOrLarger {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterLessThanMustBeOneByteOrLarger";
  errorInstanceId: string;
  parameters: {
    lt: unknown;
  };
}

/**
   * Both the `gt` and `lt` fields are missing from the FileSizeFilter. At least one of these
fields must be present

   *
   * Log Safety: SAFE
   */
export interface FileSizeFilterMissingGreaterThanAndLessThan {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeFilterMissingGreaterThanAndLessThan";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The `filesCount` field in the FilesCountLimitFilter must be strictly greater than 0.

   *
   * Log Safety: SAFE
   */
export interface FilesCountLimitFilterInvalidLimit {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FilesCountLimitFilterInvalidLimit";
  errorInstanceId: string;
  parameters: {
    filesCount: unknown;
  };
}

/**
   * The parent folder for the specified connection could not be found.

   *
   * Log Safety: SAFE
   */
export interface ParentFolderNotFoundForConnection {
  errorCode: "NOT_FOUND";
  errorName: "ParentFolderNotFoundForConnection";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}

/**
 * Could not replace the FileImport.
 *
 * Log Safety: SAFE
 */
export interface ReplaceFileImportPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceFileImportPermissionDenied";
  errorInstanceId: string;
  parameters: {
    fileImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * The secret names provided do not exist on the connection.

   *
   * Log Safety: UNSAFE
   */
export interface SecretNamesDoNotExist {
  errorCode: "INVALID_ARGUMENT";
  errorName: "SecretNamesDoNotExist";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
    secretNames: unknown;
  };
}

/**
 * The given TableImport could not be found.
 *
 * Log Safety: SAFE
 */
export interface TableImportNotFound {
  errorCode: "NOT_FOUND";
  errorName: "TableImportNotFound";
  errorInstanceId: string;
  parameters: {
    tableImportRid: unknown;
    connectionRid: unknown;
  };
}

/**
   * The specified connection does not support creating a table import with the specified config.

   *
   * Log Safety: UNSAFE
   */
export interface TableImportNotSupportedForConnection {
  errorCode: "INVALID_ARGUMENT";
  errorName: "TableImportNotSupportedForConnection";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
    tableImportType: unknown;
  };
}

/**
   * The specified table import type is not yet supported in the Platform API.

   *
   * Log Safety: UNSAFE
   */
export interface TableImportTypeNotSupported {
  errorCode: "INTERNAL";
  errorName: "TableImportTypeNotSupported";
  errorInstanceId: string;
  parameters: {
    tableImportType: unknown;
  };
}

/**
 * Could not updateSecrets the Connection.
 *
 * Log Safety: SAFE
 */
export interface UpdateSecretsForConnectionPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "UpdateSecretsForConnectionPermissionDenied";
  errorInstanceId: string;
  parameters: {
    connectionRid: unknown;
  };
}
