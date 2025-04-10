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
      "variables": {},
    },
    "v2.Admin.User.listUsers": {
      "variables": {},
    },
    "v2.Admin.User.getUser": {
      "variables": {},
    },
    "v2.Admin.User.getUsersBatch": {
      "variables": {},
    },
    "v2.Admin.User.getCurrentUser": {
      "variables": {},
    },
    "v2.Admin.User.getMarkingsUser": {
      "variables": {},
    },
    "v2.Admin.User.getProfilePictureOfUser": {
      "variables": {},
    },
    "v2.Admin.User.searchUsers": {
      "variables": {},
    },
    "v2.Admin.UserProviderInfo.getUserProviderInfo": {
      "variables": {},
    },
    "v2.Admin.UserProviderInfo.replaceUserProviderInfo": {
      "variables": {},
    },
    "v2.Admin.GroupMembership.listGroupMemberships": {
      "variables": {},
    },
    "v2.Admin.Group.createGroup": {
      "variables": {},
    },
    "v2.Admin.Group.deleteGroup": {
      "variables": {},
    },
    "v2.Admin.Group.listGroups": {
      "variables": {},
    },
    "v2.Admin.Group.getGroup": {
      "variables": {},
    },
    "v2.Admin.Group.getGroupsBatch": {
      "variables": {},
    },
    "v2.Admin.Group.searchGroups": {
      "variables": {},
    },
    "v2.Admin.GroupProviderInfo.getGroupProviderInfo": {
      "variables": {},
    },
    "v2.Admin.GroupProviderInfo.replaceGroupProviderInfo": {
      "variables": {},
    },
    "v2.Admin.GroupMember.listGroupMembers": {
      "variables": {},
    },
    "v2.Admin.GroupMember.addGroupMembers": {
      "variables": {},
    },
    "v2.Admin.GroupMember.removeGroupMembers": {
      "variables": {},
    },
    "v2.Admin.MarkingCategory.listMarkingCategories": {
      "variables": {},
    },
    "v2.Admin.MarkingCategory.getMarkingCategory": {
      "variables": {},
    },
    "v2.Admin.Marking.createMarking": {
      "variables": {},
    },
    "v2.Admin.Marking.listMarkings": {
      "variables": {},
    },
    "v2.Admin.Marking.getMarking": {
      "variables": {},
    },
    "v2.Admin.Marking.getMarkingsBatch": {
      "variables": {},
    },
    "v2.Admin.MarkingMember.listMarkingMembers": {
      "variables": {},
    },
    "v2.Admin.MarkingMember.addMarkingMembers": {
      "variables": {},
    },
    "v2.Admin.MarkingMember.removeMarkingMembers": {
      "variables": {},
    },
    "v2.Admin.MarkingRoleAssignment.listMarkingRoleAssignments": {
      "variables": {},
    },
    "v2.Admin.MarkingRoleAssignment.addMarkingRoleAssignments": {
      "variables": {},
    },
    "v2.Admin.MarkingRoleAssignment.removeMarkingRoleAssignments": {
      "variables": {},
    },
    "v2.Admin.Enrollment.getEnrollment": {
      "variables": {},
    },
    "v2.Admin.Enrollment.getCurrentEnrollment": {
      "variables": {},
    },
    "v2.Admin.Host.listHosts": {
      "variables": {},
    },
    "v2.Admin.Organization.getOrganization": {
      "variables": {},
    },
    "v2.Admin.Organization.replaceOrganization": {
      "variables": {},
    },
    "v2.Admin.AuthenticationProvider.listAuthenticationProviders": {
      "variables": {},
    },
    "v2.Admin.AuthenticationProvider.getAuthenticationProvider": {
      "variables": {},
    },
    "v2.Admin.AuthenticationProvider.preregisterUser": {
      "variables": {},
    },
    "v2.Admin.AuthenticationProvider.preregisterGroup": {
      "variables": {},
    },
    "v2.Datasets.Dataset.createDataset": {
      "variables": {},
    },
    "v2.Datasets.Dataset.getDataset": {
      "variables": {},
    },
    "v2.Datasets.Dataset.readTableDataset": {
      "variables": {},
    },
    "v2.Datasets.Branch.createBranch": {
      "variables": {},
    },
    "v2.Datasets.Branch.deleteBranch": {
      "variables": {},
    },
    "v2.Datasets.Branch.listBranches": {
      "variables": {},
    },
    "v2.Datasets.Branch.getBranch": {
      "variables": {},
    },
    "v2.Datasets.Transaction.createTransaction": {
      "variables": {},
    },
    "v2.Datasets.Transaction.getTransaction": {
      "variables": {},
    },
    "v2.Datasets.Transaction.commitTransaction": {
      "variables": {},
    },
    "v2.Datasets.Transaction.abortTransaction": {
      "variables": {},
    },
    "v2.Datasets.Transaction.buildTransaction": {
      "variables": {},
    },
    "v2.Datasets.Transaction.jobTransaction": {
      "variables": {},
    },
    "v2.Datasets.File.deleteFile": {
      "variables": {},
    },
    "v2.Datasets.File.listFiles": {
      "variables": {},
    },
    "v2.Datasets.File.getFile": {
      "variables": {},
    },
    "v2.Datasets.File.uploadFile": {
      "variables": {},
    },
    "v2.Datasets.File.getFileContent": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.ThirdPartyApplication.getThirdPartyApplication":
      {
        "variables": {},
      },
    "v2.ThirdPartyApplications.Website.getWebsite": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Website.deployWebsite": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Website.undeployWebsite": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Version.deleteVersion": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Version.listVersions": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Version.getVersion": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Version.uploadVersion": {
      "variables": {},
    },
    "v2.ThirdPartyApplications.Version.uploadSnapshotVersion": {
      "variables": {},
    },
    "v2.Filesystem.Resource.deleteResource": {
      "variables": {},
    },
    "v2.Filesystem.Resource.getResource": {
      "variables": {},
    },
    "v2.Filesystem.Resource.getByPath": {
      "variables": {},
    },
    "v2.Filesystem.Resource.restoreResource": {
      "variables": {},
    },
    "v2.Filesystem.Resource.permanentlyDeleteResource": {
      "variables": {},
    },
    "v2.Filesystem.Resource.addMarkings": {
      "variables": {},
    },
    "v2.Filesystem.Resource.removeMarkings": {
      "variables": {},
    },
    "v2.Filesystem.Resource.getAccessRequirements": {
      "variables": {},
    },
    "v2.Filesystem.Resource.listMarkingsOfResource": {
      "variables": {},
    },
    "v2.Filesystem.ResourceRole.listResourceRoles": {
      "variables": {},
    },
    "v2.Filesystem.ResourceRole.addResourceRoles": {
      "variables": {},
    },
    "v2.Filesystem.ResourceRole.removeResourceRoles": {
      "variables": {},
    },
    "v2.Filesystem.Folder.createFolder": {
      "variables": {},
    },
    "v2.Filesystem.Folder.getFolder": {
      "variables": {},
    },
    "v2.Filesystem.Folder.listChildrenOfFolder": {
      "variables": {},
    },
    "v2.Filesystem.Project.getProject": {
      "variables": {},
    },
    "v2.Filesystem.Project.createProject": {
      "variables": {},
    },
    "v2.Filesystem.Project.createProjectFromTemplate": {
      "variables": {},
    },
    "v2.Filesystem.Project.addOrganizations": {
      "variables": {},
    },
    "v2.Filesystem.Project.removeOrganizations": {
      "variables": {},
    },
    "v2.Filesystem.Project.listOrganizationsOfProject": {
      "variables": {},
    },
    "v2.Filesystem.Space.listSpaces": {
      "variables": {},
    },
    "v2.Connectivity.Connection.createConnection": {
      "variables": {},
    },
    "v2.Connectivity.Connection.getConnection": {
      "variables": {},
    },
    "v2.Connectivity.Connection.updateSecretsForConnection": {
      "variables": {},
    },
    "v2.Connectivity.Connection.getConfiguration": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.createFileImport": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.deleteFileImport": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.listFileImports": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.getFileImport": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.replaceFileImport": {
      "variables": {},
    },
    "v2.Connectivity.FileImport.executeFileImport": {
      "variables": {},
    },
    "v2.Connectivity.TableImport.createTableImport": {
      "variables": {},
    },
    "v2.Connectivity.TableImport.deleteTableImport": {
      "variables": {},
    },
    "v2.Connectivity.TableImport.listTableImports": {
      "variables": {},
    },
    "v2.Connectivity.TableImport.getTableImport": {
      "variables": {},
    },
    "v2.Connectivity.TableImport.executeTableImport": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.createSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.deleteSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.getSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.replaceSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.runSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.pauseSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.unpauseSchedule": {
      "variables": {},
    },
    "v2.Orchestration.Schedule.listRunsOfSchedule": {
      "variables": {},
    },
    "v2.Orchestration.ScheduleVersion.getScheduleVersion": {
      "variables": {},
    },
    "v2.Orchestration.ScheduleVersion.getScheduleOfScheduleVersion": {
      "variables": {},
    },
    "v2.Orchestration.Build.getBuild": {
      "variables": {},
    },
    "v2.Orchestration.Build.getBuildsBatch": {
      "variables": {},
    },
    "v2.Orchestration.Build.createBuild": {
      "variables": {},
    },
    "v2.Orchestration.Build.cancelBuild": {
      "variables": {},
    },
    "v2.Orchestration.Build.searchBuilds": {
      "variables": {},
    },
    "v2.Orchestration.Build.listJobsOfBuild": {
      "variables": {},
    },
    "v2.Orchestration.Job.getJob": {
      "variables": {},
    },
    "v2.Orchestration.Job.getJobsBatch": {
      "variables": {},
    },
    "v2.DataHealth.Check.getCheck": {
      "variables": {},
    },
    "v2.Streams.Dataset.createStreamingDataset": {
      "variables": {},
    },
    "v2.Streams.Stream.createStream": {
      "variables": {},
    },
    "v2.Streams.Stream.getStream": {
      "variables": {},
    },
    "v2.Streams.Stream.publishRecordToStream": {
      "variables": {},
    },
    "v2.Streams.Stream.publishRecordsToStream": {
      "variables": {},
    },
    "v2.Streams.Stream.publishBinaryRecordToStream": {
      "variables": {},
    },
    "v2.Streams.Stream.resetStream": {
      "variables": {},
    },
    "v2.PublicApis.ApiDefinition.getApiDefinition": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.readMediaItem": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.readOriginalMediaItem": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.getMediaItemInfo": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.getMediaItemReference": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.putMediaItem": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.createMediaTransaction": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.commitMediaTransaction": {
      "variables": {},
    },
    "v2.MediaSets.MediaSet.abortMediaTransaction": {
      "variables": {},
    },
    "v2.Functions.Query.getQuery": {
      "variables": {},
    },
    "v2.Functions.Query.getByRidQueries": {
      "variables": {},
    },
    "v2.Functions.Query.executeQuery": {
      "variables": {},
    },
    "v2.Functions.ValueType.getValueType": {
      "variables": {},
    },
    "v2.Functions.VersionId.getVersionId": {
      "variables": {},
    },
    "v2.SqlQueries.SqlQuery.executeSqlQuery": {
      "variables": {},
    },
    "v2.SqlQueries.SqlQuery.getStatusSqlQuery": {
      "variables": {},
    },
    "v2.SqlQueries.SqlQuery.cancelSqlQuery": {
      "variables": {},
    },
    "v2.SqlQueries.SqlQuery.getResultsSqlQuery": {
      "variables": {},
    },
    "v2.Operations.AsyncOperation.getOperation": {
      "variables": {},
    },
    "v2.Ontologies.OntologyV2.listOntologiesV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyV2.getOntologyV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyV2.getOntologyFullMetadata": {
      "variables": {},
    },
    "v2.Ontologies.ActionTypeV2.listActionTypesV2": {
      "variables": {},
    },
    "v2.Ontologies.ActionTypeV2.getActionTypeV2": {
      "variables": {},
    },
    "v2.Ontologies.ActionTypeV2.getActionTypeByRid": {
      "variables": {},
    },
    "v2.Ontologies.ObjectTypeV2.listObjectTypesV2": {
      "variables": {},
    },
    "v2.Ontologies.ObjectTypeV2.getObjectTypeV2": {
      "variables": {},
    },
    "v2.Ontologies.ObjectTypeV2.getObjectTypeFullMetadata": {
      "variables": {},
    },
    "v2.Ontologies.ObjectTypeV2.listOutgoingLinkTypesV2": {
      "variables": {},
    },
    "v2.Ontologies.ObjectTypeV2.getOutgoingLinkTypeV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectV2.listObjectsV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectV2.getObjectV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectV2.countObjects": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectV2.searchObjectsV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectV2.aggregateObjectsV2": {
      "variables": {},
    },
    "v2.Ontologies.LinkedObjectV2.listLinkedObjectsV2": {
      "variables": {},
    },
    "v2.Ontologies.LinkedObjectV2.getLinkedObjectV2": {
      "variables": {},
    },
    "v2.Ontologies.AttachmentPropertyV2.listPropertyAttachments": {
      "variables": {},
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyByRidV2": {
      "variables": {},
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyContentV2": {
      "variables": {},
    },
    "v2.Ontologies.AttachmentPropertyV2.getAttachmentPropertyContentByRidV2": {
      "variables": {},
    },
    "v2.Ontologies.MediaReferenceProperty.readMediaContent": {
      "variables": {},
    },
    "v2.Ontologies.MediaReferenceProperty.getMediaMetadata": {
      "variables": {},
    },
    "v2.Ontologies.MediaReferenceProperty.uploadMediaContent": {
      "variables": {},
    },
    "v2.Ontologies.TimeSeriesPropertyV2.getFirstPoint": {
      "variables": {},
    },
    "v2.Ontologies.TimeSeriesPropertyV2.getLastPoint": {
      "variables": {},
    },
    "v2.Ontologies.TimeSeriesPropertyV2.streamPoints": {
      "variables": {},
    },
    "v2.Ontologies.TimeSeriesValueBankProperty.getLatestValue": {
      "variables": {},
    },
    "v2.Ontologies.TimeSeriesValueBankProperty.streamValues": {
      "variables": {},
    },
    "v2.Ontologies.CipherTextProperty.decrypt": {
      "variables": {},
    },
    "v2.Ontologies.OntologyInterface.listInterfaceTypes": {
      "variables": {},
    },
    "v2.Ontologies.OntologyInterface.getInterfaceType": {
      "variables": {},
    },
    "v2.Ontologies.OntologyInterface.searchObjectsForInterface": {
      "variables": {},
    },
    "v2.Ontologies.OntologyInterface.aggregateObjectsForInterface": {
      "variables": {},
    },
    "v2.Ontologies.Action.applyActionV2": {
      "variables": {},
    },
    "v2.Ontologies.Action.applyActionAsyncV2": {
      "variables": {},
    },
    "v2.Ontologies.Action.applyActionBatchV2": {
      "variables": {},
    },
    "v2.Ontologies.QueryType.listQueryTypesV2": {
      "variables": {},
    },
    "v2.Ontologies.QueryType.getQueryTypeV2": {
      "variables": {},
    },
    "v2.Ontologies.Query.executeQueryV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.createTemporaryObjectSetV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.getObjectSetV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2MultipleObjectTypes": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.loadObjectSetV2ObjectsOrInterfaces": {
      "variables": {},
    },
    "v2.Ontologies.OntologyObjectSet.aggregateObjectSetV2": {
      "variables": {},
    },
    "v2.Ontologies.Attachment.uploadAttachmentV2": {
      "variables": {},
    },
    "v2.Ontologies.Attachment.getAttachmentContentV2": {
      "variables": {},
    },
    "v2.Ontologies.Attachment.getAttachmentV2": {
      "variables": {},
    },
    "v2.Widgets.WidgetSet.getWidgetSet": {
      "variables": {},
    },
    "v2.Widgets.Release.deleteRelease": {
      "variables": {},
    },
    "v2.Widgets.Release.listReleases": {
      "variables": {},
    },
    "v2.Widgets.Release.getRelease": {
      "variables": {},
    },
    "v2.Widgets.Repository.getRepository": {
      "variables": {},
    },
    "v2.Widgets.Repository.publishRelease": {
      "variables": {},
    },
    "v2.AipAgents.Agent.getAgent": {
      "variables": {},
    },
    "v2.AipAgents.Agent.listSessionsForAgents": {
      "variables": {},
    },
    "v2.AipAgents.AgentVersion.listAgentVersions": {
      "variables": {},
    },
    "v2.AipAgents.AgentVersion.getAgentVersion": {
      "variables": {},
    },
    "v2.AipAgents.Session.createSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.listSessions": {
      "variables": {},
    },
    "v2.AipAgents.Session.getSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.blockingContinueSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.streamingContinueSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.cancelSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.getRagContextForSession": {
      "variables": {},
    },
    "v2.AipAgents.Session.updateSessionTitle": {
      "variables": {},
    },
    "v2.AipAgents.Content.getContent": {
      "variables": {},
    },
  },
} as const satisfies DocsSnippetsSpec;
