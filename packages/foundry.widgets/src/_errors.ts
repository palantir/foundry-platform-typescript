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
 * Could not delete the Release.
 *
 * Log Safety: UNSAFE
 */
export interface DeleteReleasePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DeleteReleasePermissionDenied";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
    releaseVersion: unknown;
  };
}

/**
 * The given DevModeSettings could not be found.
 *
 * Log Safety: SAFE
 */
export interface DevModeSettingsNotFound {
  errorCode: "NOT_FOUND";
  errorName: "DevModeSettingsNotFound";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not disable the DevModeSettings.
 *
 * Log Safety: SAFE
 */
export interface DisableDevModeSettingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DisableDevModeSettingsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not enable the DevModeSettings.
 *
 * Log Safety: SAFE
 */
export interface EnableDevModeSettingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "EnableDevModeSettingsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The .zip archive contains too many files.
 *
 * Log Safety: SAFE
 */
export interface FileCountLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileCountLimitExceeded";
  errorInstanceId: string;
  parameters: {
    fileCountLimit: unknown;
  };
}

/**
   * A file inside the .zip archive is too big. You must ensure that all files inside
the .zip archive are within the limit.
   *
   * Log Safety: UNSAFE
   */
export interface FileSizeLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "FileSizeLimitExceeded";
  errorInstanceId: string;
  parameters: {
    fileSizeBytesLimit: unknown;
    currentFileSizeBytes: unknown;
    currentFilePath: unknown;
  };
}

/**
 * The provided token does not have permission to access dev mode settings.
 *
 * Log Safety: SAFE
 */
export interface GetDevModeSettingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetDevModeSettingsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
   * The base href in the dev mode settings is invalid. It must be a valid localhost URL
with an optional port.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDevModeBaseHref {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDevModeBaseHref";
  errorInstanceId: string;
  parameters: {
    baseHref: unknown;
  };
}

/**
   * The dev mode settings contains too many CSS entrypoints. You must limit the number
of CSS entrypoints to the maximum allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidDevModeEntrypointCssCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDevModeEntrypointCssCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    entrypointCssCount: unknown;
  };
}

/**
   * The dev mode settings contains too many JavaScript entrypoints. You must limit the number
of JavaScript entrypoints to the maximum allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidDevModeEntrypointJsCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDevModeEntrypointJsCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    entrypointJsCount: unknown;
  };
}

/**
   * The dev mode settings contains an invalid entrypoint file path. The file path must be a
valid localhost URL with an optional port and a file path.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidDevModeFilePath {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDevModeFilePath";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    filePath: unknown;
  };
}

/**
   * The dev mode settings contains too many widget settings. You must limit the number of
widget settings to the maximum allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidDevModeWidgetSettingsCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidDevModeWidgetSettingsCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    widgetSettingsCount: unknown;
  };
}

/**
   * The widget declares too many CSS entrypoints. You must limit the number
of CSS entrypoints to the maximum allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidEntrypointCssCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEntrypointCssCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    entrypointCssCount: unknown;
  };
}

/**
   * The widget declares too many JavaScript entrypoints. You must limit the number
of JavaScript entrypoints to the maximum allowed.
   *
   * Log Safety: SAFE
   */
export interface InvalidEntrypointJsCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEntrypointJsCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    entrypointJsCount: unknown;
  };
}

/**
 * The widget config contains too many events.
 *
 * Log Safety: SAFE
 */
export interface InvalidEventCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEventCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    eventCount: unknown;
  };
}

/**
 * The event display name is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidEventDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEventDisplayName";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    eventDisplayName: unknown;
  };
}

/**
 * The event id is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidEventId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEventId";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    eventId: unknown;
  };
}

/**
 * The event references an invalid parameter id.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidEventParameterUpdateId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidEventParameterUpdateId";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    parameterUpdateId: unknown;
  };
}

/**
 * The widget declares an invalid production entrypoint file path.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidFilePath {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidFilePath";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    filePath: unknown;
  };
}

/**
   * The manifest file in the .zip archive at the path .palantir/widgets.config.json
could not be found or is not well formed.
   *
   * Log Safety: SAFE
   */
export interface InvalidManifest {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidManifest";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
  };
}

/**
 * The widget config contains too many parameters.
 *
 * Log Safety: SAFE
 */
export interface InvalidParameterCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    parameterCount: unknown;
  };
}

/**
 * The parameter display name is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidParameterDisplayName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterDisplayName";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    parameterDisplayName: unknown;
  };
}

/**
 * The parameter id is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidParameterId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidParameterId";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    parameterId: unknown;
  };
}

/**
 * The manifest file targets a widget set that has not linked the repository to publish.
 *
 * Log Safety: SAFE
 */
export interface InvalidPublishRepository {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPublishRepository";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The release description is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidReleaseDescription {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidReleaseDescription";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    releaseDescription: unknown;
  };
}

/**
 * The release contains zero widgets or too many widgets.
 *
 * Log Safety: SAFE
 */
export interface InvalidReleaseWidgetsCount {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidReleaseWidgetsCount";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    widgetsCount: unknown;
  };
}

/**
   * The given version is invalid. Versions must follow semantic versioning with major, minor,
and patch versions separate by periods, e.g. 0.1.0 or 1.2.3.
   *
   * Log Safety: UNSAFE
   */
export interface InvalidVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidVersion";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * The widget description is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidWidgetDescription {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidWidgetDescription";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    widgetDescription: unknown;
  };
}

/**
 * The widget id is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidWidgetId {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidWidgetId";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    widgetId: unknown;
  };
}

/**
 * The widget name is invalid.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidWidgetName {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidWidgetName";
  errorInstanceId: string;
  parameters: {
    reason: unknown;
    widgetName: unknown;
  };
}

/**
 * A referenced Ontology SDK package could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface OntologySdkNotFound {
  errorCode: "NOT_FOUND";
  errorName: "OntologySdkNotFound";
  errorInstanceId: string;
  parameters: {
    sdkPackageRid: unknown;
    sdkVersion: unknown;
  };
}

/**
 * Could not pause the DevModeSettings.
 *
 * Log Safety: SAFE
 */
export interface PauseDevModeSettingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PauseDevModeSettingsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not publish the Repository.
 *
 * Log Safety: SAFE
 */
export interface PublishReleasePermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "PublishReleasePermissionDenied";
  errorInstanceId: string;
  parameters: {
    repositoryRid: unknown;
  };
}

/**
 * The given Release could not be found.
 *
 * Log Safety: UNSAFE
 */
export interface ReleaseNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ReleaseNotFound";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
    releaseVersion: unknown;
  };
}

/**
 * The given Repository could not be found.
 *
 * Log Safety: SAFE
 */
export interface RepositoryNotFound {
  errorCode: "NOT_FOUND";
  errorName: "RepositoryNotFound";
  errorInstanceId: string;
  parameters: {
    repositoryRid: unknown;
  };
}

/**
 * Could not setWidgetSetById the DevModeSettings.
 *
 * Log Safety: SAFE
 */
export interface SetWidgetSetDevModeSettingsByIdPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SetWidgetSetDevModeSettingsByIdPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * Could not setWidgetSet the DevModeSettings.
 *
 * Log Safety: SAFE
 */
export interface SetWidgetSetDevModeSettingsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "SetWidgetSetDevModeSettingsPermissionDenied";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The given version already exists.
 *
 * Log Safety: UNSAFE
 */
export interface VersionAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "VersionAlreadyExists";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
   * The widget set contains too many versions. You must delete an old version before
uploading a new one.
   *
   * Log Safety: SAFE
   */
export interface VersionLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "VersionLimitExceeded";
  errorInstanceId: string;
  parameters: {
    versionLimit: unknown;
  };
}

/**
   * The widget set contains too many widgets. You must delete another widget before
creating a new one.
   *
   * Log Safety: SAFE
   */
export interface WidgetLimitExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "WidgetLimitExceeded";
  errorInstanceId: string;
  parameters: {
    widgetLimit: unknown;
  };
}

/**
 * The given WidgetSet could not be found.
 *
 * Log Safety: SAFE
 */
export interface WidgetSetNotFound {
  errorCode: "NOT_FOUND";
  errorName: "WidgetSetNotFound";
  errorInstanceId: string;
  parameters: {
    widgetSetRid: unknown;
  };
}
