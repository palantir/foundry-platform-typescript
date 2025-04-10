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
import type * as _Datasets from "@osdk/foundry.datasets";
import type * as _Filesystem from "@osdk/foundry.filesystem";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The Resource Identifier (RID) of an Agent.
 *
 * Log Safety: UNSAFE
 */
export type AgentRid = LooselyBrandedString<"AgentRid">;

/**
   * The API key used to authenticate to the external system.
This can be configured as a header or query parameter.
   *
   * Log Safety: UNSAFE
   */
export interface ApiKeyAuthentication {
  location: RestRequestApiKeyLocation;
  apiKey: EncryptedProperty;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface AsPlaintextValue {
  value: PlaintextValue;
}

/**
 * Log Safety: UNSAFE
 */
export interface AsSecretName {
  value: SecretName;
}

/**
   * Access keys are long-term
credentials for an IAM user or the AWS account root user.
Access keys consist of two parts: an access key ID (for example, AKIAIOSFODNN7EXAMPLE) and a secret access
key (for example, wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY). You must use both the access key ID and
secret access key together to authenticate your requests.
   *
   * Log Safety: UNSAFE
   */
export interface AwsAccessKey {
  accessKeyId: string;
  secretAccessKey: EncryptedProperty;
}

/**
   * OpenID Connect (OIDC) is an open authentication protocol that allows
you to authenticate to external system resources without the use of static credentials.
   *
   * Log Safety: UNSAFE
   */
export interface AwsOidcAuthentication {
  audience: string;
  issuerUrl: string;
  subject: ConnectionRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface BasicCredentials {
  username: string;
  password: EncryptedProperty;
}

/**
 * The bearer token used to authenticate to the external system.
 *
 * Log Safety: UNSAFE
 */
export interface BearerToken {
  bearerToken: EncryptedProperty;
}

/**
   * Cloud identities allow you to authenticate to
cloud provider resources without the use of static credentials.
   *
   * Log Safety: SAFE
   */
export interface CloudIdentity {
  cloudIdentityRid: CloudIdentityRid;
}

/**
 * The Resource Identifier (RID) of a Cloud Identity.
 *
 * Log Safety: SAFE
 */
export type CloudIdentityRid = LooselyBrandedString<"CloudIdentityRid">;

/**
 * Log Safety: UNSAFE
 */
export interface Connection {
  rid: ConnectionRid;
  parentFolderRid: _Filesystem.FolderRid;
  displayName: ConnectionDisplayName;
  configuration: ConnectionConfiguration;
}

/**
 * Log Safety: UNSAFE
 */
export type ConnectionConfiguration =
  | ({ type: "s3" } & S3ConnectionConfiguration)
  | ({ type: "rest" } & RestConnectionConfiguration)
  | ({ type: "snowflake" } & SnowflakeConnectionConfiguration)
  | ({ type: "jdbc" } & JdbcConnectionConfiguration);

/**
 * The display name of the Connection. The display name must not be blank.
 *
 * Log Safety: UNSAFE
 */
export type ConnectionDisplayName = LooselyBrandedString<
  "ConnectionDisplayName"
>;

/**
 * The Resource Identifier (RID) of a Connection (also known as a source).
 *
 * Log Safety: SAFE
 */
export type ConnectionRid = LooselyBrandedString<"ConnectionRid">;

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequest {
  parentFolderRid: _Filesystem.FolderRid;
  configuration: CreateConnectionRequestConnectionConfiguration;
  displayName: ConnectionDisplayName;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface CreateConnectionRequestAsPlaintextValue {
  value: PlaintextValue;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestAsSecretName {
  value: SecretName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestAwsAccessKey {
  accessKeyId: string;
  secretAccessKey: CreateConnectionRequestEncryptedProperty;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestAwsOidcAuthentication {
  audience: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestBasicCredentials {
  password: CreateConnectionRequestEncryptedProperty;
  username: string;
}

/**
 * Log Safety: SAFE
 */
export interface CreateConnectionRequestCloudIdentity {
  cloudIdentityRid: CloudIdentityRid;
}

/**
 * Log Safety: UNSAFE
 */
export type CreateConnectionRequestConnectionConfiguration =
  | ({ type: "s3" } & CreateConnectionRequestS3ConnectionConfiguration)
  | ({ type: "rest" } & CreateConnectionRequestRestConnectionConfiguration)
  | ({
    type: "snowflake";
  } & CreateConnectionRequestSnowflakeConnectionConfiguration)
  | ({ type: "jdbc" } & CreateConnectionRequestJdbcConnectionConfiguration);

/**
 * Log Safety: SAFE
 */
export interface CreateConnectionRequestDuration {
  unit: _Core.TimeUnit;
  value: number;
}

/**
   * When reading an encrypted property, the secret name representing the encrypted value will be returned.
When writing to an encrypted property:

If a plaintext value is passed as an input, the plaintext value will be encrypted and saved to the property.
If a secret name is passed as an input, the secret name must match the existing secret name of the property
and the property will retain its previously encrypted value.
   *
   * Log Safety: UNSAFE
   */
export type CreateConnectionRequestEncryptedProperty =
  | ({ type: "asSecretName" } & CreateConnectionRequestAsSecretName)
  | ({ type: "asPlaintextValue" } & CreateConnectionRequestAsPlaintextValue);

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestJdbcConnectionConfiguration {
  credentials?: BasicCredentials;
  driverClass: string;
  jdbcProperties: Record<string, string>;
  url: string;
}

/**
   * When creating or updating additional secrets, use SecretsWithPlaintextValues.
When fetching the RestConnectionConfiguration, SecretsNames will be provided.
   *
   * Log Safety: UNSAFE
   */
export type CreateConnectionRequestRestConnectionAdditionalSecrets =
  | ({
    type: "asSecretsWithPlaintextValues";
  } & CreateConnectionRequestSecretsWithPlaintextValues)
  | ({ type: "asSecretsNames" } & CreateConnectionRequestSecretsNames);

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestRestConnectionConfiguration {
  additionalSecrets?: RestConnectionAdditionalSecrets;
  oauth2ClientRid?: string;
  domains: Array<Domain>;
}

/**
 * Log Safety: UNSAFE
 */
export type CreateConnectionRequestS3AuthenticationMode =
  | ({ type: "awsAccessKey" } & CreateConnectionRequestAwsAccessKey)
  | ({ type: "cloudIdentity" } & CreateConnectionRequestCloudIdentity)
  | ({ type: "oidc" } & CreateConnectionRequestAwsOidcAuthentication);

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestS3ConnectionConfiguration {
  connectionTimeoutMillis?: string;
  maxErrorRetry?: number;
  bucketUrl: string;
  clientKmsConfiguration?: S3KmsConfiguration;
  matchSubfolderExactly?: boolean;
  stsRoleConfiguration?: StsRoleConfiguration;
  s3Endpoint?: string;
  socketTimeoutMillis?: string;
  enableRequesterPays?: boolean;
  s3EndpointSigningRegion?: Region;
  region?: Region;
  authenticationMode?: S3AuthenticationMode;
  proxyConfiguration?: S3ProxyConfiguration;
  maxConnections?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestS3KmsConfiguration {
  kmsRegion?: Region;
  kmsKey: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestS3ProxyConfiguration {
  nonProxyHosts?: Array<string>;
  protocol?: Protocol;
  port: number;
  credentials?: BasicCredentials;
  host: string;
}

/**
 * Log Safety: SAFE
 */
export interface CreateConnectionRequestSecretsNames {}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface CreateConnectionRequestSecretsWithPlaintextValues {
  secrets: Record<SecretName, PlaintextValue>;
}

/**
 * Log Safety: UNSAFE
 */
export type CreateConnectionRequestSnowflakeAuthenticationMode =
  | ({ type: "externalOauth" } & CreateConnectionRequestSnowflakeExternalOauth)
  | ({
    type: "keyPair";
  } & CreateConnectionRequestSnowflakeKeyPairAuthentication)
  | ({ type: "basic" } & CreateConnectionRequestBasicCredentials);

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestSnowflakeConnectionConfiguration {
  schema?: string;
  database?: string;
  role?: string;
  accountIdentifier: string;
  jdbcProperties: Record<string, string>;
  warehouse?: string;
  authenticationMode: CreateConnectionRequestSnowflakeAuthenticationMode;
}

/**
 * Log Safety: SAFE
 */
export interface CreateConnectionRequestSnowflakeExternalOauth {}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestSnowflakeKeyPairAuthentication {
  privateKey: CreateConnectionRequestEncryptedProperty;
  user: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestStsRoleConfiguration {
  stsEndpoint?: string;
  roleArn: string;
  roleSessionName: string;
  externalId?: string;
  roleSessionDuration?: _Core.Duration;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateFileImportRequest {
  datasetRid: _Datasets.DatasetRid;
  importMode: FileImportMode;
  displayName: FileImportDisplayName;
  branchName?: _Datasets.BranchName;
  subfolder?: string;
  fileImportFilters: Array<FileImportFilter>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequest {
  datasetRid: _Datasets.DatasetRid;
  importMode: TableImportMode;
  displayName: TableImportDisplayName;
  allowSchemaChanges?: TableImportAllowSchemaChanges;
  branchName?: _Datasets.BranchName;
  config: CreateTableImportRequestTableImportConfig;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestDateColumnInitialIncrementalState {
  currentValue: string;
  columnName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestDecimalColumnInitialIncrementalState {
  currentValue: string;
  columnName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestIntegerColumnInitialIncrementalState {
  currentValue: number;
  columnName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestJdbcTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestLongColumnInitialIncrementalState {
  currentValue: string;
  columnName: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestMicrosoftAccessTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestMicrosoftSqlServerTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestOracleTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestPostgreSqlTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestSnowflakeTableImportConfig {
  initialIncrementalState?: TableImportInitialIncrementalState;
  query: TableImportQuery;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestStringColumnInitialIncrementalState {
  currentValue: string;
  columnName: string;
}

/**
 * The import configuration for a specific connector type.
 *
 * Log Safety: UNSAFE
 */
export type CreateTableImportRequestTableImportConfig =
  | ({
    type: "jdbcImportConfig";
  } & CreateTableImportRequestJdbcTableImportConfig)
  | ({
    type: "microsoftSqlServerImportConfig";
  } & CreateTableImportRequestMicrosoftSqlServerTableImportConfig)
  | ({
    type: "postgreSqlImportConfig";
  } & CreateTableImportRequestPostgreSqlTableImportConfig)
  | ({
    type: "microsoftAccessImportConfig";
  } & CreateTableImportRequestMicrosoftAccessTableImportConfig)
  | ({
    type: "snowflakeImportConfig";
  } & CreateTableImportRequestSnowflakeTableImportConfig)
  | ({
    type: "oracleImportConfig";
  } & CreateTableImportRequestOracleTableImportConfig);

/**
   * The incremental configuration for a table import enables append-style transactions from the same table without duplication of data.
You must provide a monotonically increasing column such as a timestamp or id and an initial value for this column.
An incremental table import will import rows where the value is greater than the largest already imported.
You can use the '?' character to reference the incremental state value when constructing your query.
Normally this would be used in a WHERE clause or similar filter applied in order to only sync data with an incremental column value
larger than the previously observed maximum value stored in the incremental state.
   *
   * Log Safety: UNSAFE
   */
export type CreateTableImportRequestTableImportInitialIncrementalState =
  | ({
    type: "stringColumnInitialIncrementalState";
  } & CreateTableImportRequestStringColumnInitialIncrementalState)
  | ({
    type: "dateColumnInitialIncrementalState";
  } & CreateTableImportRequestDateColumnInitialIncrementalState)
  | ({
    type: "integerColumnInitialIncrementalState";
  } & CreateTableImportRequestIntegerColumnInitialIncrementalState)
  | ({
    type: "timestampColumnInitialIncrementalState";
  } & CreateTableImportRequestTimestampColumnInitialIncrementalState)
  | ({
    type: "longColumnInitialIncrementalState";
  } & CreateTableImportRequestLongColumnInitialIncrementalState)
  | ({
    type: "decimalColumnInitialIncrementalState";
  } & CreateTableImportRequestDecimalColumnInitialIncrementalState);

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestTimestampColumnInitialIncrementalState {
  currentValue: string;
  columnName: string;
}

/**
 * The state for an incremental table import using a column with a date type.
 *
 * Log Safety: UNSAFE
 */
export interface DateColumnInitialIncrementalState {
  columnName: string;
  currentValue: string;
}

/**
 * The state for an incremental table import using a column with a decimal data type.
 *
 * Log Safety: UNSAFE
 */
export interface DecimalColumnInitialIncrementalState {
  columnName: string;
  currentValue: string;
}

/**
 * The domain that the connection is allowed to access.
 *
 * Log Safety: UNSAFE
 */
export interface Domain {
  scheme?: UriScheme;
  host: string;
  port?: number;
  auth?: RestAuthenticationMode;
}

/**
   * When reading an encrypted property, the secret name representing the encrypted value will be returned.
When writing to an encrypted property:

If a plaintext value is passed as an input, the plaintext value will be encrypted and saved to the property.
If a secret name is passed as an input, the secret name must match the existing secret name of the property
and the property will retain its previously encrypted value.
   *
   * Log Safety: UNSAFE
   */
export type EncryptedProperty =
  | ({ type: "asSecretName" } & AsSecretName)
  | ({ type: "asPlaintextValue" } & AsPlaintextValue);

/**
 * If any file has a relative path matching the regular expression, sync all files in the subfolder that are not otherwise filtered.
 *
 * Log Safety: UNSAFE
 */
export interface FileAnyPathMatchesFilter {
  regex: string;
}

/**
 * Import all filtered files only if there are at least the specified number of files remaining.
 *
 * Log Safety: SAFE
 */
export interface FileAtLeastCountFilter {
  minFilesCount: number;
}

/**
   * Only import files that have changed or been added since the last import run. Whether or not a file is considered to be changed is determined by the specified file properties.
This will exclude files uploaded in any previous imports, regardless of the file import mode used. A SNAPSHOT file import mode does not reset the filter.
   *
   * Log Safety: SAFE
   */
export interface FileChangedSinceLastUploadFilter {
  fileProperties: Array<FileProperty>;
}

/**
 * Log Safety: UNSAFE
 */
export interface FileImport {
  rid: FileImportRid;
  connectionRid: ConnectionRid;
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
  displayName: FileImportDisplayName;
  fileImportFilters: Array<FileImportFilter>;
  importMode: FileImportMode;
  subfolder?: string;
}

/**
   * A custom file import filter. Custom file import filters can be fetched but cannot currently be used
when creating or updating file imports.
   *
   * Log Safety: UNSAFE
   */
export interface FileImportCustomFilter {
  config: any;
}

/**
 * Log Safety: UNSAFE
 */
export type FileImportDisplayName = LooselyBrandedString<
  "FileImportDisplayName"
>;

/**
   * Filters allow you to filter source files
before they are imported into Foundry.
   *
   * Log Safety: UNSAFE
   */
export type FileImportFilter =
  | ({ type: "pathNotMatchesFilter" } & FilePathNotMatchesFilter)
  | ({ type: "anyPathMatchesFilter" } & FileAnyPathMatchesFilter)
  | ({ type: "filesCountLimitFilter" } & FilesCountLimitFilter)
  | ({
    type: "changedSinceLastUploadFilter";
  } & FileChangedSinceLastUploadFilter)
  | ({ type: "customFilter" } & FileImportCustomFilter)
  | ({ type: "lastModifiedAfterFilter" } & FileLastModifiedAfterFilter)
  | ({ type: "pathMatchesFilter" } & FilePathMatchesFilter)
  | ({ type: "atLeastCountFilter" } & FileAtLeastCountFilter)
  | ({ type: "fileSizeFilter" } & FileSizeFilter);

/**
   * Import mode governs how raw files are read from an external system, and written into a Foundry dataset.
SNAPSHOT: Defines a new dataset state consisting only of files from a particular import execution.
APPEND: Purely additive and yields data from previous import executions in addition to newly added files.
UPDATE: Replaces existing files from previous import executions based on file names.
   *
   * Log Safety: SAFE
   */
export type FileImportMode = "SNAPSHOT" | "APPEND" | "UPDATE";

/**
 * The Resource Identifier (RID) of a FileImport (also known as a batch sync).
 *
 * Log Safety: SAFE
 */
export type FileImportRid = LooselyBrandedString<"FileImportRid">;

/**
 * Only import files that have been modified after a specified timestamp
 *
 * Log Safety: UNSAFE
 */
export interface FileLastModifiedAfterFilter {
  afterTimestamp?: string;
}

/**
   * Only import files whose path (relative to the root of the source) matches the regular expression.
Example
Suppose we are importing files from relative/subfolder.
relative/subfolder contains:

relative/subfolder/include-file.txt
relative/subfolder/exclude-file.txt
relative/subfolder/other-file.txt

With the relative/subfolder/include-.*.txt regex, only relative/subfolder/include-file.txt will be imported.
   *
   * Log Safety: UNSAFE
   */
export interface FilePathMatchesFilter {
  regex: string;
}

/**
   * Only import files whose path (relative to the root of the source) does not match the regular expression.
Example
Suppose we are importing files from relative/subfolder.
relative/subfolder contains:

relative/subfolder/include-file.txt
relative/subfolder/exclude-file.txt
relative/subfolder/other-file.txt

With the relative/subfolder/exclude-.*.txt regex, both relative/subfolder/include-file.txt and relative/subfolder/other-file.txt will be imported,
and relative/subfolder/exclude-file.txt will be excluded from the import.
   *
   * Log Safety: UNSAFE
   */
export interface FilePathNotMatchesFilter {
  regex: string;
}

/**
 * Log Safety: SAFE
 */
export type FileProperty = "LAST_MODIFIED" | "SIZE";

/**
   * Only retain filesCount number of files in each transaction.
The choice of files to retain is made without any guarantee of order.
This option can increase the reliability of incremental syncs.
   *
   * Log Safety: SAFE
   */
export interface FilesCountLimitFilter {
  filesCount: number;
}

/**
   * Only import files whose size is between the specified minimum and maximum values.
At least one of gt or lt should be present.
If both are present, the value specified for gt must be strictly less than lt - 1.
   *
   * Log Safety: SAFE
   */
export interface FileSizeFilter {
  gt?: _Core.SizeBytes;
  lt?: _Core.SizeBytes;
}

/**
 * Log Safety: SAFE
 */
export interface HeaderApiKey {
  headerName: string;
}

/**
 * The state for an incremental table import using a numeric integer datatype.
 *
 * Log Safety: UNSAFE
 */
export interface IntegerColumnInitialIncrementalState {
  columnName: string;
  currentValue: number;
}

/**
 * The configuration needed to connect to an external system using the JDBC protocol.
 *
 * Log Safety: UNSAFE
 */
export interface JdbcConnectionConfiguration {
  url: string;
  driverClass: string;
  jdbcProperties: Record<string, string>;
  credentials?: BasicCredentials;
}

/**
 * The import configuration for a custom JDBC connection.
 *
 * Log Safety: UNSAFE
 */
export interface JdbcTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListFileImportsResponse {
  data: Array<FileImport>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListTableImportsResponse {
  data: Array<TableImport>;
  nextPageToken?: _Core.PageToken;
}

/**
 * The state for an incremental table import using a column with a numeric long datatype.
 *
 * Log Safety: UNSAFE
 */
export interface LongColumnInitialIncrementalState {
  columnName: string;
  currentValue: string;
}

/**
 * The import configuration for a Microsoft Access connection.
 *
 * Log Safety: UNSAFE
 */
export interface MicrosoftAccessTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * The import configuration for a Microsoft SQL Server connection.
 *
 * Log Safety: UNSAFE
 */
export interface MicrosoftSqlServerTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * The Resource Identifier (RID) of a Network Egress Policy.
 *
 * Log Safety: SAFE
 */
export type NetworkEgressPolicyRid = LooselyBrandedString<
  "NetworkEgressPolicyRid"
>;

/**
 * The import configuration for an Oracle Database 21 connection.
 *
 * Log Safety: UNSAFE
 */
export interface OracleTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export type PlaintextValue = LooselyBrandedString<"PlaintextValue">;

/**
 * The import configuration for a PostgreSQL connection.
 *
 * Log Safety: UNSAFE
 */
export interface PostgreSqlTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * Protocol to establish a connection with another system.
 *
 * Log Safety: SAFE
 */
export type Protocol = "HTTP" | "HTTPS";

/**
 * Log Safety: SAFE
 */
export interface QueryParameterApiKey {
  queryParameterName: string;
}

/**
 * The region of the external system.
 *
 * Log Safety: UNSAFE
 */
export type Region = LooselyBrandedString<"Region">;

/**
 * Log Safety: UNSAFE
 */
export interface ReplaceFileImportRequest {
  datasetRid: _Datasets.DatasetRid;
  importMode: FileImportMode;
  displayName: FileImportDisplayName;
  branchName?: _Datasets.BranchName;
  subfolder?: string;
  fileImportFilters: Array<FileImportFilter>;
}

/**
 * The method of authentication for connecting to an external REST system.
 *
 * Log Safety: UNSAFE
 */
export type RestAuthenticationMode =
  | ({ type: "bearerToken" } & BearerToken)
  | ({ type: "apiKey" } & ApiKeyAuthentication)
  | ({ type: "basic" } & BasicCredentials)
  | ({ type: "oauth2" } & RestConnectionOAuth2);

/**
   * When creating or updating additional secrets, use SecretsWithPlaintextValues.
When fetching the RestConnectionConfiguration, SecretsNames will be provided.
   *
   * Log Safety: UNSAFE
   */
export type RestConnectionAdditionalSecrets =
  | ({ type: "asSecretsWithPlaintextValues" } & SecretsWithPlaintextValues)
  | ({ type: "asSecretsNames" } & SecretsNames);

/**
 * The configuration needed to connect to a REST external system.
 *
 * Log Safety: UNSAFE
 */
export interface RestConnectionConfiguration {
  domains: Array<Domain>;
  additionalSecrets?: RestConnectionAdditionalSecrets;
  oauth2ClientRid?: string;
}

/**
   * In order to use OAuth2 you must have an Outbound application configured in the Foundry Control Panel Organization settings.
The RID of the Outbound application must be configured in the RestConnectionConfiguration in the oauth2ClientRid field.
   *
   * Log Safety: SAFE
   */
export interface RestConnectionOAuth2 {}

/**
 * The location of the API key in the request.
 *
 * Log Safety: UNSAFE
 */
export type RestRequestApiKeyLocation =
  | ({ type: "header" } & HeaderApiKey)
  | ({ type: "queryParameter" } & QueryParameterApiKey);

/**
 * Log Safety: UNSAFE
 */
export type S3AuthenticationMode =
  | ({ type: "awsAccessKey" } & AwsAccessKey)
  | ({ type: "cloudIdentity" } & CloudIdentity)
  | ({ type: "oidc" } & AwsOidcAuthentication);

/**
   * The configuration needed to connect to an AWS S3 external system (or any other S3-like external systems that
implement the s3a protocol).
   *
   * Log Safety: UNSAFE
   */
export interface S3ConnectionConfiguration {
  bucketUrl: string;
  s3Endpoint?: string;
  region?: Region;
  authenticationMode?: S3AuthenticationMode;
  s3EndpointSigningRegion?: Region;
  clientKmsConfiguration?: S3KmsConfiguration;
  stsRoleConfiguration?: StsRoleConfiguration;
  proxyConfiguration?: S3ProxyConfiguration;
  maxConnections?: number;
  connectionTimeoutMillis?: string;
  socketTimeoutMillis?: string;
  maxErrorRetry?: number;
  matchSubfolderExactly?: boolean;
  enableRequesterPays?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface S3KmsConfiguration {
  kmsKey: string;
  kmsRegion?: Region;
}

/**
 * Log Safety: UNSAFE
 */
export interface S3ProxyConfiguration {
  host: string;
  port: number;
  nonProxyHosts?: Array<string>;
  protocol?: Protocol;
  credentials?: BasicCredentials;
}

/**
 * Log Safety: UNSAFE
 */
export type SecretName = LooselyBrandedString<"SecretName">;

/**
   * A list of secret names that can be referenced in code and webhook configurations.
This will be provided to the client when fetching the RestConnectionConfiguration.
   *
   * Log Safety: UNSAFE
   */
export interface SecretsNames {
  secretNames: Array<SecretName>;
}

/**
   * A map representing secret name to plaintext secret value pairs.
This should be used when creating or updating additional secrets for a REST connection.
   *
   * Log Safety: DO_NOT_LOG
   */
export interface SecretsWithPlaintextValues {
  secrets: Record<SecretName, PlaintextValue>;
}

/**
 * Log Safety: UNSAFE
 */
export type SnowflakeAuthenticationMode =
  | ({ type: "externalOauth" } & SnowflakeExternalOauth)
  | ({ type: "keyPair" } & SnowflakeKeyPairAuthentication)
  | ({ type: "basic" } & BasicCredentials);

/**
 * The configuration needed to connect to a Snowflake database.
 *
 * Log Safety: UNSAFE
 */
export interface SnowflakeConnectionConfiguration {
  accountIdentifier: string;
  database?: string;
  role?: string;
  schema?: string;
  warehouse?: string;
  authenticationMode: SnowflakeAuthenticationMode;
  jdbcProperties: Record<string, string>;
}

/**
   * Use an External OAuth security integration to connect and authenticate to Snowflake.
See https://docs.snowflake.com/en/user-guide/oauth-ext-custom
   *
   * Log Safety: UNSAFE
   */
export interface SnowflakeExternalOauth {
  audience: string;
  issuerUrl: string;
  subject: ConnectionRid;
}

/**
   * Use a key-pair to connect and authenticate to Snowflake.
See https://docs.snowflake.com/en/user-guide/key-pair-auth
   *
   * Log Safety: UNSAFE
   */
export interface SnowflakeKeyPairAuthentication {
  user: string;
  privateKey: EncryptedProperty;
}

/**
 * The table import configuration for a Snowflake connection.
 *
 * Log Safety: UNSAFE
 */
export interface SnowflakeTableImportConfig {
  query: TableImportQuery;
  initialIncrementalState?: TableImportInitialIncrementalState;
}

/**
 * The state for an incremental table import using a column with a string data type.
 *
 * Log Safety: UNSAFE
 */
export interface StringColumnInitialIncrementalState {
  columnName: string;
  currentValue: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface StsRoleConfiguration {
  roleArn: string;
  roleSessionName: string;
  roleSessionDuration?: _Core.Duration;
  externalId?: string;
  stsEndpoint?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface TableImport {
  rid: TableImportRid;
  connectionRid: ConnectionRid;
  datasetRid: _Datasets.DatasetRid;
  branchName?: _Datasets.BranchName;
  displayName: TableImportDisplayName;
  importMode: TableImportMode;
  allowSchemaChanges: TableImportAllowSchemaChanges;
  config: TableImportConfig;
}

/**
 * Allow the TableImport to succeed if the schema of imported rows does not match the existing dataset's schema. Defaults to false for new table imports.
 *
 * Log Safety: SAFE
 */
export type TableImportAllowSchemaChanges = boolean;

/**
 * The import configuration for a specific connector type.
 *
 * Log Safety: UNSAFE
 */
export type TableImportConfig =
  | ({ type: "jdbcImportConfig" } & JdbcTableImportConfig)
  | ({
    type: "microsoftSqlServerImportConfig";
  } & MicrosoftSqlServerTableImportConfig)
  | ({ type: "postgreSqlImportConfig" } & PostgreSqlTableImportConfig)
  | ({ type: "microsoftAccessImportConfig" } & MicrosoftAccessTableImportConfig)
  | ({ type: "snowflakeImportConfig" } & SnowflakeTableImportConfig)
  | ({ type: "oracleImportConfig" } & OracleTableImportConfig);

/**
 * Log Safety: UNSAFE
 */
export type TableImportDisplayName = LooselyBrandedString<
  "TableImportDisplayName"
>;

/**
   * The incremental configuration for a table import enables append-style transactions from the same table without duplication of data.
You must provide a monotonically increasing column such as a timestamp or id and an initial value for this column.
An incremental table import will import rows where the value is greater than the largest already imported.
You can use the '?' character to reference the incremental state value when constructing your query.
Normally this would be used in a WHERE clause or similar filter applied in order to only sync data with an incremental column value
larger than the previously observed maximum value stored in the incremental state.
   *
   * Log Safety: UNSAFE
   */
export type TableImportInitialIncrementalState =
  | ({
    type: "stringColumnInitialIncrementalState";
  } & StringColumnInitialIncrementalState)
  | ({
    type: "dateColumnInitialIncrementalState";
  } & DateColumnInitialIncrementalState)
  | ({
    type: "integerColumnInitialIncrementalState";
  } & IntegerColumnInitialIncrementalState)
  | ({
    type: "timestampColumnInitialIncrementalState";
  } & TimestampColumnInitialIncrementalState)
  | ({
    type: "longColumnInitialIncrementalState";
  } & LongColumnInitialIncrementalState)
  | ({
    type: "decimalColumnInitialIncrementalState";
  } & DecimalColumnInitialIncrementalState);

/**
   * Import mode governs how data is read from an external system, and written into a Foundry dataset.
SNAPSHOT: Defines a new dataset state consisting only of data from a particular import execution.
APPEND: Purely additive and yields data from previous import executions in addition to newly added data.
   *
   * Log Safety: SAFE
   */
export type TableImportMode = "SNAPSHOT" | "APPEND";

/**
   * A single SQL query can be executed per sync, which should output a data table
and avoid operations like invoking stored procedures.
The query results are saved to the output dataset in Foundry.
   *
   * Log Safety: UNSAFE
   */
export type TableImportQuery = LooselyBrandedString<"TableImportQuery">;

/**
 * The Resource Identifier (RID) of a TableImport (also known as a batch sync).
 *
 * Log Safety: SAFE
 */
export type TableImportRid = LooselyBrandedString<"TableImportRid">;

/**
 * Log Safety: UNSAFE
 */
export interface TimestampColumnInitialIncrementalState {
  columnName: string;
  currentValue: string;
}

/**
 * Log Safety: DO_NOT_LOG
 */
export interface UpdateSecretsForConnectionRequest {
  secrets: Record<SecretName, PlaintextValue>;
}

/**
 * Defines supported URI schemes to be used for external connections.
 *
 * Log Safety: SAFE
 */
export type UriScheme = "HTTP" | "HTTPS";
