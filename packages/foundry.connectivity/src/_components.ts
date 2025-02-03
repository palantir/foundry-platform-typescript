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
   * The agent proxy runtime is used to connect
to data sources not accessible over the Internet. The agent acts as an inverting network proxy, forwarding
network traffic originating in Foundry into the network where the agent is deployed, and relaying traffic
back to Foundry. This allows capabilities in Foundry to work almost exactly the same as when using a
direct connection but without requiring you to allow inbound network traffic to your systems originating
from Foundry's IP addresses.
   *
   * Log Safety: UNSAFE
   */
export interface AgentProxyRuntime {
  agentRids: Array<AgentRid>;
}

/**
 * The Resource Identifier (RID) of an Agent.
 *
 * Log Safety: UNSAFE
 */
export type AgentRid = LooselyBrandedString<"AgentRid">;

/**
   * The agent worker runtime is used to
connect to data sources not accessible over the Internet. An agent worker should only be used when the desired
connector does not support the agent proxy runtime. Agent worker runtimes are associated with a single or
multiple agents that store the source configuration and credentials locally in an encrypted format,
and run source capabilities on the agent itself.
   *
   * Log Safety: UNSAFE
   */
export interface AgentWorkerRuntime {
  agentRids: Array<AgentRid>;
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
 * Log Safety: UNSAFE
 */
export interface BasicCredentials {
  username: string;
  password: EncryptedProperty;
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
  runtimePlatform: RuntimePlatform;
  configuration: ConnectionConfiguration;
}

/**
 * Log Safety: UNSAFE
 */
export type ConnectionConfiguration = {
  type: "s3";
} & S3ConnectionConfiguration;

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
  runtimePlatform: CreateConnectionRequestRuntimePlatform;
  configuration: CreateConnectionRequestConnectionConfiguration;
  displayName: ConnectionDisplayName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestAgentProxyRuntime {
  agentRids: Array<AgentRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateConnectionRequestAgentWorkerRuntime {
  agentRids: Array<AgentRid>;
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
export type CreateConnectionRequestConnectionConfiguration = {
  type: "s3";
} & CreateConnectionRequestS3ConnectionConfiguration;

/**
 * Log Safety: SAFE
 */
export interface CreateConnectionRequestDirectConnectionRuntime {
  networkEgressPolicyRids: Array<NetworkEgressPolicyRid>;
}

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
export interface CreateConnectionRequestOidc {
  audience: string;
}

/**
   * The runtime of a Connection, which defines the
networking configuration and where capabilities are executed.
   *
   * Log Safety: UNSAFE
   */
export type CreateConnectionRequestRuntimePlatform =
  | ({
    type: "directConnectionRuntime";
  } & CreateConnectionRequestDirectConnectionRuntime)
  | ({ type: "agentProxyRuntime" } & CreateConnectionRequestAgentProxyRuntime)
  | ({
    type: "agentWorkerRuntime";
  } & CreateConnectionRequestAgentWorkerRuntime);

/**
 * Log Safety: UNSAFE
 */
export type CreateConnectionRequestS3AuthenticationMode =
  | ({ type: "awsAccessKey" } & CreateConnectionRequestAwsAccessKey)
  | ({ type: "cloudIdentity" } & CreateConnectionRequestCloudIdentity)
  | ({ type: "oidc" } & CreateConnectionRequestOidc);

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
export interface CreateTableImportRequestJdbcImportConfig {
  query: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestMicrosoftAccessImportConfig {
  query: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestMicrosoftSqlServerImportConfig {
  query: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestOracleImportConfig {
  query: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTableImportRequestPostgreSqlImportConfig {
  query: string;
}

/**
 * The import configuration for a specific connector type.
 *
 * Log Safety: UNSAFE
 */
export type CreateTableImportRequestTableImportConfig =
  | ({ type: "jdbcImportConfig" } & CreateTableImportRequestJdbcImportConfig)
  | ({
    type: "microsoftSqlServerImportConfig";
  } & CreateTableImportRequestMicrosoftSqlServerImportConfig)
  | ({
    type: "postgreSqlImportConfig";
  } & CreateTableImportRequestPostgreSqlImportConfig)
  | ({
    type: "microsoftAccessImportConfig";
  } & CreateTableImportRequestMicrosoftAccessImportConfig)
  | ({
    type: "oracleImportConfig";
  } & CreateTableImportRequestOracleImportConfig);

/**
   * Direct connections enable users to connect
to data sources accessible over the Internet without needing to set up an agent. If your Foundry stack is
hosted on-premises, you can also connect to data sources within your on-premises network.
This is the preferred source connection method if the data source is accessible over the Internet.
   *
   * Log Safety: SAFE
   */
export interface DirectConnectionRuntime {
  networkEgressPolicyRids: Array<NetworkEgressPolicyRid>;
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
 * The import configuration for a custom JDBC connection.
 *
 * Log Safety: UNSAFE
 */
export interface JdbcImportConfig {
  query: string;
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
 * The import configuration for a Microsoft Access connection.
 *
 * Log Safety: UNSAFE
 */
export interface MicrosoftAccessImportConfig {
  query: string;
}

/**
 * The import configuration for a Microsoft SQL Server connection.
 *
 * Log Safety: UNSAFE
 */
export interface MicrosoftSqlServerImportConfig {
  query: string;
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
   * OpenID Connect (OIDC) is an open authentication protocol that allows
you to authenticate to external system resources without the use of static credentials.
   *
   * Log Safety: UNSAFE
   */
export interface Oidc {
  audience: string;
  issuerUrl: string;
  subject: ConnectionRid;
}

/**
 * The import configuration for an Oracle Database 21 connection.
 *
 * Log Safety: UNSAFE
 */
export interface OracleImportConfig {
  query: string;
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
export interface PostgreSqlImportConfig {
  query: string;
}

/**
 * Protocol to establish a connection with another system.
 *
 * Log Safety: SAFE
 */
export type Protocol = "HTTP" | "HTTPS";

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
   * The runtime of a Connection, which defines the
networking configuration and where capabilities are executed.
   *
   * Log Safety: UNSAFE
   */
export type RuntimePlatform =
  | ({ type: "directConnectionRuntime" } & DirectConnectionRuntime)
  | ({ type: "agentProxyRuntime" } & AgentProxyRuntime)
  | ({ type: "agentWorkerRuntime" } & AgentWorkerRuntime);

/**
 * Log Safety: UNSAFE
 */
export type S3AuthenticationMode =
  | ({ type: "awsAccessKey" } & AwsAccessKey)
  | ({ type: "cloudIdentity" } & CloudIdentity)
  | ({ type: "oidc" } & Oidc);

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
  | ({ type: "jdbcImportConfig" } & JdbcImportConfig)
  | ({
    type: "microsoftSqlServerImportConfig";
  } & MicrosoftSqlServerImportConfig)
  | ({ type: "postgreSqlImportConfig" } & PostgreSqlImportConfig)
  | ({ type: "microsoftAccessImportConfig" } & MicrosoftAccessImportConfig)
  | ({ type: "oracleImportConfig" } & OracleImportConfig);

/**
 * Log Safety: UNSAFE
 */
export type TableImportDisplayName = LooselyBrandedString<
  "TableImportDisplayName"
>;

/**
   * Import mode governs how data is read from an external system, and written into a Foundry dataset.
SNAPSHOT: Defines a new dataset state consisting only of data from a particular import execution.
APPEND: Purely additive and yields data from previous import executions in addition to newly added data.
   *
   * Log Safety: SAFE
   */
export type TableImportMode = "SNAPSHOT" | "APPEND";

/**
 * The Resource Identifier (RID) of a TableImport (also known as a batch sync).
 *
 * Log Safety: SAFE
 */
export type TableImportRid = LooselyBrandedString<"TableImportRid">;

/**
 * Log Safety: DO_NOT_LOG
 */
export interface UpdateSecretsForConnectionRequest {
  secrets: Record<SecretName, PlaintextValue>;
}
