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
 * Could not add the GroupMember.
 *
 * Log Safety: SAFE
 */
export interface AddGroupMembersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddGroupMembersPermissionDenied";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * Could not add the MarkingMember.
 *
 * Log Safety: SAFE
 */
export interface AddMarkingMembersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddMarkingMembersPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * Could not add the MarkingRoleAssignment.
 *
 * Log Safety: SAFE
 */
export interface AddMarkingRoleAssignmentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AddMarkingRoleAssignmentsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * Provider information for Principals in this Realm cannot be replaced.
 *
 * Log Safety: UNSAFE
 */
export interface CannotReplaceProviderInfoForPrincipalInProtectedRealm {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CannotReplaceProviderInfoForPrincipalInProtectedRealm";
  errorInstanceId: string;
  parameters: {
    principalId: unknown;
    realm: unknown;
  };
}

/**
 * Could not create the Group.
 *
 * Log Safety: SAFE
 */
export interface CreateGroupPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateGroupPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * At least one ADMIN role assignment must be provided when creating a marking.
 *
 * Log Safety: SAFE
 */
export interface CreateMarkingMissingInitialAdminRole {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateMarkingMissingInitialAdminRole";
  errorInstanceId: string;
  parameters: {};
}

/**
 * A marking with the same name already exists in the category.
 *
 * Log Safety: UNSAFE
 */
export interface CreateMarkingNameInCategoryAlreadyExists {
  errorCode: "INVALID_ARGUMENT";
  errorName: "CreateMarkingNameInCategoryAlreadyExists";
  errorInstanceId: string;
  parameters: {
    displayName: unknown;
    categoryId: unknown;
  };
}

/**
 * Could not create the Marking.
 *
 * Log Safety: SAFE
 */
export interface CreateMarkingPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateMarkingPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not delete the Group.
 *
 * Log Safety: SAFE
 */
export interface DeleteGroupPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteGroupPermissionDenied";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * Could not delete the User.
 *
 * Log Safety: SAFE
 */
export interface DeleteUserPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteUserPermissionDenied";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * The given Enrollment could not be found.
 *
 * Log Safety: SAFE
 */
export interface EnrollmentNotFound {
  errorCode: "NOT_FOUND";
  errorName: "EnrollmentNotFound";
  errorInstanceId: string;
  parameters: {
    enrollmentRid: unknown;
  };
}

/**
 * Could not getCurrent the Enrollment.
 *
 * Log Safety: SAFE
 */
export interface GetCurrentEnrollmentPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetCurrentEnrollmentPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not getCurrent the User.
 *
 * Log Safety: SAFE
 */
export interface GetCurrentUserPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetCurrentUserPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The provided token does not have permission to view the provider information for the given group.
 *
 * Log Safety: SAFE
 */
export interface GetGroupProviderInfoPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetGroupProviderInfoPermissionDenied";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * You do not have permission to view the marking category.
 *
 * Log Safety: SAFE
 */
export interface GetMarkingCategoryPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMarkingCategoryPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingCategoryId: unknown;
  };
}

/**
 * You do not have permission to view the marking.
 *
 * Log Safety: SAFE
 */
export interface GetMarkingPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMarkingPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * Could not getMarkings the User.
 *
 * Log Safety: SAFE
 */
export interface GetMarkingsUserPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMarkingsUserPermissionDenied";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * Could not profilePicture the User.
 *
 * Log Safety: SAFE
 */
export interface GetProfilePictureOfUserPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetProfilePictureOfUserPermissionDenied";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * The provided token does not have permission to view the provider information for the given user.
 *
 * Log Safety: SAFE
 */
export interface GetUserProviderInfoPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetUserProviderInfoPermissionDenied";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * A group with this name already exists
 *
 * Log Safety: UNSAFE
 */
export interface GroupNameAlreadyExists {
  errorCode: "INVALID_ARGUMENT";
  errorName: "GroupNameAlreadyExists";
  errorInstanceId: string;
  parameters: {
    groupName: unknown;
  };
}

/**
 * The given Group could not be found.
 *
 * Log Safety: SAFE
 */
export interface GroupNotFound {
  errorCode: "NOT_FOUND";
  errorName: "GroupNotFound";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * The given GroupProviderInfo could not be found.
 *
 * Log Safety: SAFE
 */
export interface GroupProviderInfoNotFound {
  errorCode: "NOT_FOUND";
  errorName: "GroupProviderInfoNotFound";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * The member expiration you provided does not conform to the Group's requirements for member expirations.
 *
 * Log Safety: SAFE
 */
export interface InvalidGroupMembershipExpiration {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidGroupMembershipExpiration";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
    expirationProvided: unknown;
    maximumDuration: unknown;
    latestExpiration: unknown;
  };
}

/**
 * You must provide at least one Organization RID for a group
 *
 * Log Safety: SAFE
 */
export interface InvalidGroupOrganizations {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidGroupOrganizations";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The provided hostname must be a valid domain name. The only allowed characters are letters, numbers, periods, and hyphens.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidHostName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidHostName";
  errorInstanceId: string;
  parameters: {
    invalidHostName: unknown;
  };
}

/**
 * The user's profile picture is not a valid image
 *
 * Log Safety: SAFE
 */
export interface InvalidProfilePicture {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidProfilePicture";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * You do not have permission to list hosts for this enrollment
 *
 * Log Safety: SAFE
 */
export interface ListHostsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListHostsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    enrollmentRid: unknown;
  };
}

/**
 * You do not have permission to list the members of this marking.
 *
 * Log Safety: SAFE
 */
export interface ListMarkingMembersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListMarkingMembersPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * You do not have permission to list assigned roles for this marking.
 *
 * Log Safety: SAFE
 */
export interface ListMarkingRoleAssignmentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ListMarkingRoleAssignmentsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * The given MarkingCategory could not be found.
 *
 * Log Safety: SAFE
 */
export interface MarkingCategoryNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarkingCategoryNotFound";
  errorInstanceId: string;
  parameters: {
    markingCategoryId: unknown;
  };
}

/**
 * The given Marking could not be found.
 *
 * Log Safety: SAFE
 */
export interface MarkingNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarkingNotFound";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * The given Organization could not be found.
 *
 * Log Safety: SAFE
 */
export interface OrganizationNotFound {
  errorCode: "NOT_FOUND";
  errorName: "OrganizationNotFound";
  errorInstanceId: string;
  parameters: {
    organizationRid: unknown;
  };
}

/**
 * A principal (User or Group) with the given PrincipalId could not be found
 *
 * Log Safety: SAFE
 */
export interface PrincipalNotFound {
  errorCode: "NOT_FOUND";
  errorName: "PrincipalNotFound";
  errorInstanceId: string;
  parameters: {
    principalId: unknown;
  };
}

/**
 * The user has not set a profile picture
 *
 * Log Safety: SAFE
 */
export interface ProfilePictureNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ProfilePictureNotFound";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * Could not remove the GroupMember.
 *
 * Log Safety: SAFE
 */
export interface RemoveGroupMembersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveGroupMembersPermissionDenied";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * Could not remove the MarkingMember.
 *
 * Log Safety: SAFE
 */
export interface RemoveMarkingMembersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveMarkingMembersPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * Could not remove the MarkingRoleAssignment.
 *
 * Log Safety: SAFE
 */
export interface RemoveMarkingRoleAssignmentsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "RemoveMarkingRoleAssignmentsPermissionDenied";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
  };
}

/**
 * You cannot remove all administrators from a marking.
 *
 * Log Safety: SAFE
 */
export interface RemoveMarkingRoleAssignmentsRemoveAllAdministratorsNotAllowed {
  errorCode: "INVALID_ARGUMENT";
  errorName: "RemoveMarkingRoleAssignmentsRemoveAllAdministratorsNotAllowed";
  errorInstanceId: string;
  parameters: {
    markingId: unknown;
    currentAdministrators: unknown;
  };
}

/**
 * Could not replace the GroupProviderInfo.
 *
 * Log Safety: SAFE
 */
export interface ReplaceGroupProviderInfoPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceGroupProviderInfoPermissionDenied";
  errorInstanceId: string;
  parameters: {
    groupId: unknown;
  };
}

/**
 * Could not replace the Organization.
 *
 * Log Safety: SAFE
 */
export interface ReplaceOrganizationPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceOrganizationPermissionDenied";
  errorInstanceId: string;
  parameters: {
    organizationRid: unknown;
  };
}

/**
 * Could not replace the UserProviderInfo.
 *
 * Log Safety: SAFE
 */
export interface ReplaceUserProviderInfoPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "ReplaceUserProviderInfoPermissionDenied";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * Could not search the Group.
 *
 * Log Safety: SAFE
 */
export interface SearchGroupsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchGroupsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not search the User.
 *
 * Log Safety: SAFE
 */
export interface SearchUsersPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SearchUsersPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given User could not be found.
 *
 * Log Safety: SAFE
 */
export interface UserNotFound {
  errorCode: "NOT_FOUND";
  errorName: "UserNotFound";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}

/**
 * The given UserProviderInfo could not be found.
 *
 * Log Safety: SAFE
 */
export interface UserProviderInfoNotFound {
  errorCode: "NOT_FOUND";
  errorName: "UserProviderInfoNotFound";
  errorInstanceId: string;
  parameters: {
    userId: unknown;
  };
}
