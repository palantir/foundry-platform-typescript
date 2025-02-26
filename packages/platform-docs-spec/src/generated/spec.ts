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

import type { DocsSnippetsSpec } from "@osdk/docs-spec-core";

export const PLATFORM_API_DOCS_SPEC = {
  "version": 1,
  "snippets": {
    "v2.Admin.User.deleteUser": {
      "variables": {
        "userId": "required",
      },
    },
    "v2.Admin.User.listUsers": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Admin.User.getUser": {
      "variables": {
        "userId": "required",
      },
    },
    "v2.Admin.User.getUsersBatch": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Admin.User.getCurrentUser": {
      "variables": {},
    },
    "v2.Admin.User.getMarkingsUser": {
      "variables": {
        "userId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.User.getProfilePictureOfUser": {
      "variables": {
        "userId": "required",
      },
    },
    "v2.Admin.User.searchUsers": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Admin.UserProviderInfo.getUserProviderInfo": {
      "variables": {
        "userId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.UserProviderInfo.replaceUserProviderInfo": {
      "variables": {
        "requestBody": "required",
        "userId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.GroupMembership.listGroupMemberships": {
      "variables": {
        "userId": "required",
        "transitive": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Admin.Group.createGroup": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Admin.Group.deleteGroup": {
      "variables": {
        "groupId": "required",
      },
    },
    "v2.Admin.Group.listGroups": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Admin.Group.getGroup": {
      "variables": {
        "groupId": "required",
      },
    },
    "v2.Admin.Group.getGroupsBatch": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Admin.Group.searchGroups": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Admin.GroupProviderInfo.getGroupProviderInfo": {
      "variables": {
        "groupId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.GroupProviderInfo.replaceGroupProviderInfo": {
      "variables": {
        "requestBody": "required",
        "groupId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.GroupMember.listGroupMembers": {
      "variables": {
        "groupId": "required",
        "transitive": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Admin.GroupMember.addGroupMembers": {
      "variables": {
        "requestBody": "required",
        "groupId": "required",
      },
    },
    "v2.Admin.GroupMember.removeGroupMembers": {
      "variables": {
        "requestBody": "required",
        "groupId": "required",
      },
    },
    "v2.Admin.MarkingCategory.listMarkingCategories": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingCategory.getMarkingCategory": {
      "variables": {
        "markingCategoryId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Marking.createMarking": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Marking.listMarkings": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Marking.getMarking": {
      "variables": {
        "markingId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Marking.getMarkingsBatch": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingMember.listMarkingMembers": {
      "variables": {
        "markingId": "required",
        "transitive": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingMember.addMarkingMembers": {
      "variables": {
        "requestBody": "required",
        "markingId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingMember.removeMarkingMembers": {
      "variables": {
        "requestBody": "required",
        "markingId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingRoleAssignment.listMarkingRoleAssignments": {
      "variables": {
        "markingId": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingRoleAssignment.addMarkingRoleAssignments": {
      "variables": {
        "requestBody": "required",
        "markingId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.MarkingRoleAssignment.removeMarkingRoleAssignments": {
      "variables": {
        "requestBody": "required",
        "markingId": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Enrollment.getEnrollment": {
      "variables": {
        "enrollmentRid": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Enrollment.getCurrentEnrollment": {
      "variables": {
        "preview": "required",
      },
    },
    "v2.Admin.Host.listHosts": {
      "variables": {
        "enrollmentRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Organization.getOrganization": {
      "variables": {
        "organizationRid": "required",
        "preview": "required",
      },
    },
    "v2.Admin.Organization.replaceOrganization": {
      "variables": {
        "requestBody": "required",
        "organizationRid": "required",
        "preview": "required",
      },
    },
    "v2.Datasets.Dataset.createDataset": {
      "variables": {
        "requestBody": "required",
      },
    },
    "v2.Datasets.Dataset.getDataset": {
      "variables": {
        "datasetRid": "required",
      },
    },
    "v2.Datasets.Dataset.readTableDataset": {
      "variables": {
        "datasetRid": "required",
        "branchName": "required",
        "startTransactionRid": "required",
        "endTransactionRid": "required",
        "format": "required",
        "columns": "required",
        "rowLimit": "required",
      },
    },
    "v2.Datasets.Branch.createBranch": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
      },
    },
    "v2.Datasets.Branch.deleteBranch": {
      "variables": {
        "datasetRid": "required",
        "branchName": "required",
      },
    },
    "v2.Datasets.Branch.listBranches": {
      "variables": {
        "datasetRid": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Datasets.Branch.getBranch": {
      "variables": {
        "datasetRid": "required",
        "branchName": "required",
      },
    },
    "v2.Datasets.Transaction.createTransaction": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "branchName": "required",
      },
    },
    "v2.Datasets.Transaction.getTransaction": {
      "variables": {
        "datasetRid": "required",
        "transactionRid": "required",
      },
    },
    "v2.Datasets.Transaction.commitTransaction": {
      "variables": {
        "datasetRid": "required",
        "transactionRid": "required",
      },
    },
    "v2.Datasets.Transaction.abortTransaction": {
      "variables": {
        "datasetRid": "required",
        "transactionRid": "required",
      },
    },
    "v2.Datasets.Transaction.buildTransaction": {
      "variables": {
        "datasetRid": "required",
        "transactionRid": "required",
        "preview": "required",
      },
    },
    "v2.Datasets.Transaction.jobTransaction": {
      "variables": {
        "datasetRid": "required",
        "transactionRid": "required",
        "preview": "required",
      },
    },
    "v2.Datasets.File.deleteFile": {
      "variables": {
        "datasetRid": "required",
        "filePath": "required",
        "branchName": "required",
        "transactionRid": "required",
      },
    },
    "v2.Datasets.File.listFiles": {
      "variables": {
        "datasetRid": "required",
        "branchName": "required",
        "startTransactionRid": "required",
        "endTransactionRid": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Datasets.File.getFile": {
      "variables": {
        "datasetRid": "required",
        "filePath": "required",
        "branchName": "required",
        "startTransactionRid": "required",
        "endTransactionRid": "required",
      },
    },
    "v2.Datasets.File.uploadFile": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "filePath": "required",
        "branchName": "required",
        "transactionType": "required",
        "transactionRid": "required",
      },
    },
    "v2.Datasets.File.getFileContent": {
      "variables": {
        "datasetRid": "required",
        "filePath": "required",
        "branchName": "required",
        "startTransactionRid": "required",
        "endTransactionRid": "required",
      },
    },
    "v2.ThirdPartyApplications.ThirdPartyApplication.getThirdPartyApplication":
      {
        "variables": {
          "thirdPartyApplicationRid": "required",
          "preview": "required",
        },
      },
    "v2.ThirdPartyApplications.Website.getWebsite": {
      "variables": {
        "thirdPartyApplicationRid": "required",
      },
    },
    "v2.ThirdPartyApplications.Website.deployWebsite": {
      "variables": {
        "requestBody": "required",
        "thirdPartyApplicationRid": "required",
      },
    },
    "v2.ThirdPartyApplications.Website.undeployWebsite": {
      "variables": {
        "thirdPartyApplicationRid": "required",
      },
    },
    "v2.ThirdPartyApplications.Version.deleteVersion": {
      "variables": {
        "thirdPartyApplicationRid": "required",
        "versionVersion": "required",
      },
    },
    "v2.ThirdPartyApplications.Version.listVersions": {
      "variables": {
        "thirdPartyApplicationRid": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.ThirdPartyApplications.Version.getVersion": {
      "variables": {
        "thirdPartyApplicationRid": "required",
        "versionVersion": "required",
      },
    },
    "v2.ThirdPartyApplications.Version.uploadVersion": {
      "variables": {
        "requestBody": "required",
        "thirdPartyApplicationRid": "required",
        "version": "required",
      },
    },
    "v2.ThirdPartyApplications.Version.uploadSnapshotVersion": {
      "variables": {
        "requestBody": "required",
        "thirdPartyApplicationRid": "required",
        "version": "required",
        "snapshotIdentifier": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.deleteResource": {
      "variables": {
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.getResource": {
      "variables": {
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.getByPath": {
      "variables": {
        "path": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.restoreResource": {
      "variables": {
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.permanentlyDeleteResource": {
      "variables": {
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.addMarkings": {
      "variables": {
        "requestBody": "required",
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.removeMarkings": {
      "variables": {
        "requestBody": "required",
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.getAccessRequirements": {
      "variables": {
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Resource.listMarkingsOfResource": {
      "variables": {
        "resourceRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.ResourceRole.listResourceRoles": {
      "variables": {
        "resourceRid": "required",
        "includeInherited": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.ResourceRole.addResourceRoles": {
      "variables": {
        "requestBody": "required",
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.ResourceRole.removeResourceRoles": {
      "variables": {
        "requestBody": "required",
        "resourceRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Folder.createFolder": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Folder.getFolder": {
      "variables": {
        "folderRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Folder.listChildrenOfFolder": {
      "variables": {
        "folderRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.getProject": {
      "variables": {
        "projectRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.createProject": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.createProjectFromTemplate": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.addOrganizations": {
      "variables": {
        "requestBody": "required",
        "projectRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.removeOrganizations": {
      "variables": {
        "requestBody": "required",
        "projectRid": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Project.listOrganizationsOfProject": {
      "variables": {
        "projectRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Filesystem.Space.listSpaces": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.Connection.createConnection": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.Connection.getConnection": {
      "variables": {
        "connectionRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.Connection.updateSecretsForConnection": {
      "variables": {
        "requestBody": "required",
        "connectionRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.createFileImport": {
      "variables": {
        "requestBody": "required",
        "connectionRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.deleteFileImport": {
      "variables": {
        "connectionRid": "required",
        "fileImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.listFileImports": {
      "variables": {
        "connectionRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.getFileImport": {
      "variables": {
        "connectionRid": "required",
        "fileImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.replaceFileImport": {
      "variables": {
        "requestBody": "required",
        "connectionRid": "required",
        "fileImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.FileImport.executeFileImport": {
      "variables": {
        "connectionRid": "required",
        "fileImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.TableImport.createTableImport": {
      "variables": {
        "requestBody": "required",
        "connectionRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.TableImport.deleteTableImport": {
      "variables": {
        "connectionRid": "required",
        "tableImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.TableImport.listTableImports": {
      "variables": {
        "connectionRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.TableImport.getTableImport": {
      "variables": {
        "connectionRid": "required",
        "tableImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Connectivity.TableImport.executeTableImport": {
      "variables": {
        "connectionRid": "required",
        "tableImportRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.createSchedule": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.deleteSchedule": {
      "variables": {
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.getSchedule": {
      "variables": {
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.replaceSchedule": {
      "variables": {
        "requestBody": "required",
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.runSchedule": {
      "variables": {
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.pauseSchedule": {
      "variables": {
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.unpauseSchedule": {
      "variables": {
        "scheduleRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Schedule.listRunsOfSchedule": {
      "variables": {
        "scheduleRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.ScheduleVersion.getScheduleVersion": {
      "variables": {
        "scheduleVersionRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.ScheduleVersion.getScheduleOfScheduleVersion": {
      "variables": {
        "scheduleVersionRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Build.getBuild": {
      "variables": {
        "buildRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Build.getBuildsBatch": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Build.createBuilds": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Build.cancelBuild": {
      "variables": {
        "buildRid": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Build.searchBuilds": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Orchestration.Job.getJob": {
      "variables": {
        "jobRid": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Dataset.createStreamingDataset": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.createStream": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.getStream": {
      "variables": {
        "datasetRid": "required",
        "streamBranchName": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.publishRecordToStream": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "streamBranchName": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.publishRecordsToStream": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "streamBranchName": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.publishBinaryRecordToStream": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "streamBranchName": "required",
        "viewRid": "required",
        "preview": "required",
      },
    },
    "v2.Streams.Stream.resetStream": {
      "variables": {
        "requestBody": "required",
        "datasetRid": "required",
        "streamBranchName": "required",
        "preview": "required",
      },
    },
    "v2.PublicApis.ApiDefinition.getApiDefinition": {
      "variables": {
        "apiDefinitionVersion": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.readMediaItem": {
      "variables": {
        "ReadToken": "required",
        "mediaSetRid": "required",
        "mediaItemRid": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.getMediaItemInfo": {
      "variables": {
        "ReadToken": "required",
        "mediaSetRid": "required",
        "mediaItemRid": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.getMediaItemReference": {
      "variables": {
        "ReadToken": "required",
        "mediaSetRid": "required",
        "mediaItemRid": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.putMediaItem": {
      "variables": {
        "requestBody": "required",
        "mediaSetRid": "required",
        "mediaItemPath": "required",
        "branchName": "required",
        "branchRid": "required",
        "viewRid": "required",
        "transactionId": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.createMediaTransaction": {
      "variables": {
        "mediaSetRid": "required",
        "branchName": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.commitMediaTransaction": {
      "variables": {
        "mediaSetRid": "required",
        "transactionId": "required",
        "preview": "required",
      },
    },
    "v2.MediaSets.MediaSet.abortMediaTransaction": {
      "variables": {
        "mediaSetRid": "required",
        "transactionId": "required",
        "preview": "required",
      },
    },
    "v2.Functions.Query.getQuery": {
      "variables": {
        "queryApiName": "required",
        "preview": "required",
      },
    },
    "v2.Functions.Query.getByRidQueries": {
      "variables": {
        "requestBody": "required",
        "preview": "required",
      },
    },
    "v2.Functions.Query.executeQuery": {
      "variables": {
        "requestBody": "required",
        "queryApiName": "required",
        "preview": "required",
      },
    },
    "v2.Functions.ValueType.getValueType": {
      "variables": {
        "valueTypeRid": "required",
        "preview": "required",
      },
    },
    "v2.Functions.VersionId.getVersionId": {
      "variables": {
        "valueTypeRid": "required",
        "versionIdVersionId": "required",
        "preview": "required",
      },
    },
    "v2.Operations.AsyncOperation.getOperation": {
      "variables": {
        "operationId": "required",
      },
    },
    "v2.Ontologies.OntologyV2.listOntologiesV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyV2.getOntologyV2": {
      "variables": {
        "ontology": "required",
      },
    },
    "v2.Ontologies.OntologyV2.getOntologyFullMetadata": {
      "variables": {
        "ontology": "required",
      },
    },
    "v2.Ontologies.ActionTypeV2.listActionTypesV2": {
      "variables": {
        "ontology": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Ontologies.ActionTypeV2.getActionTypeV2": {
      "variables": {
        "ontology": "required",
        "actionType": "required",
      },
    },
    "v2.Ontologies.ObjectTypeV2.listObjectTypesV2": {
      "variables": {
        "ontology": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Ontologies.ObjectTypeV2.getObjectTypeV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
      },
    },
    "v2.Ontologies.ObjectTypeV2.getObjectTypeFullMetadata": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.ObjectTypeV2.listOutgoingLinkTypesV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Ontologies.ObjectTypeV2.getOutgoingLinkTypeV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "linkType": "required",
      },
    },
    "v2.Ontologies.OntologyObjectV2.listObjectsV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "pageSize": "required",
        "pageToken": "required",
        "select": "required",
        "orderBy": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "excludeRid": "required",
      },
    },
    "v2.Ontologies.OntologyObjectV2.getObjectV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "select": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "excludeRid": "required",
      },
    },
    "v2.Ontologies.OntologyObjectV2.countObjects": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.OntologyObjectV2.searchObjectsV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "objectType": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.OntologyObjectV2.aggregateObjectsV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "objectType": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.LinkedObjectV2.listLinkedObjectsV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "linkType": "required",
        "pageSize": "required",
        "pageToken": "required",
        "select": "required",
        "orderBy": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "excludeRid": "required",
      },
    },
    "v2.Ontologies.LinkedObjectV2.getLinkedObjectV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "linkType": "required",
        "linkedObjectPrimaryKey": "required",
        "select": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "excludeRid": "required",
      },
    },
    "v2.Ontologies.AttachmentPropertyV2.listPropertyAttachments": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyByRidV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "attachmentRid": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyContentV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyContentByRidV2": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "attachmentRid": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.MediaReferenceProperty.readMediaContent": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.MediaReferenceProperty.getMediaMetadata": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.MediaReferenceProperty.uploadMediaContent": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "objectType": "required",
        "property": "required",
        "mediaItemPath": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.TimeSeriesPropertyV2.getFirstPoint": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.TimeSeriesPropertyV2.getLastPoint": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.TimeSeriesPropertyV2.streamPoints": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "format": "required",
      },
    },
    "v2.Ontologies.TimeSeriesValueBankProperty.getLatestValue": {
      "variables": {
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "propertyName": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.TimeSeriesValueBankProperty.streamValues": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "objectType": "required",
        "primaryKey": "required",
        "property": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.OntologyInterface.listInterfaceTypes": {
      "variables": {
        "ontology": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.OntologyInterface.getInterfaceType": {
      "variables": {
        "ontology": "required",
        "interfaceType": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.OntologyInterface.searchObjectsForInterface": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "interfaceType": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.OntologyInterface.aggregateObjectsForInterface": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "interfaceType": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.Action.applyActionV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "action": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.Action.applyActionAsyncV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "action": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.Action.applyActionBatchV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "action": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.QueryType.listQueryTypesV2": {
      "variables": {
        "ontology": "required",
        "pageSize": "required",
        "pageToken": "required",
      },
    },
    "v2.Ontologies.QueryType.getQueryTypeV2": {
      "variables": {
        "ontology": "required",
        "queryApiName": "required",
      },
    },
    "v2.Ontologies.Query.executeQueryV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "queryApiName": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.createTemporaryObjectSetV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.getObjectSetV2": {
      "variables": {
        "ontology": "required",
        "objectSetRid": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2MultipleObjectTypes": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2ObjectsOrInterfaces": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "artifactRepository": "required",
        "packageName": "required",
        "preview": "required",
      },
    },
    "v2.Ontologies.OntologyObjectSet.aggregateObjectSetV2": {
      "variables": {
        "requestBody": "required",
        "ontology": "required",
        "artifactRepository": "required",
        "packageName": "required",
      },
    },
    "v2.Ontologies.Attachment.uploadAttachmentV2": {
      "variables": {
        "requestBody": "required",
        "Content-Length": "required",
        "Content-Type": "required",
        "filename": "required",
      },
    },
    "v2.Ontologies.Attachment.getAttachmentContentV2": {
      "variables": {
        "attachmentRid": "required",
      },
    },
    "v2.Ontologies.Attachment.getAttachmentV2": {
      "variables": {
        "attachmentRid": "required",
      },
    },
    "v2.AipAgents.Agent.getAgent": {
      "variables": {
        "agentRid": "required",
        "version": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Agent.listSessionsForAgents": {
      "variables": {
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.AgentVersion.listAgentVersions": {
      "variables": {
        "agentRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.AgentVersion.getAgentVersion": {
      "variables": {
        "agentRid": "required",
        "agentVersionString": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.createSession": {
      "variables": {
        "requestBody": "required",
        "agentRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.listSessions": {
      "variables": {
        "agentRid": "required",
        "pageSize": "required",
        "pageToken": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.getSession": {
      "variables": {
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.blockingContinueSession": {
      "variables": {
        "requestBody": "required",
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.streamingContinueSession": {
      "variables": {
        "requestBody": "required",
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.cancelSession": {
      "variables": {
        "requestBody": "required",
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Session.getRagContextForSession": {
      "variables": {
        "requestBody": "required",
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
    "v2.AipAgents.Content.getContent": {
      "variables": {
        "agentRid": "required",
        "sessionRid": "required",
        "preview": "required",
      },
    },
  },
} as const satisfies DocsSnippetsSpec;
