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
 * The installation job is visible to the request token, but the request token does not have permission to abort it.
 *
 * Log Safety: SAFE
 */
export interface AbortInstallationJobPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "AbortInstallationJobPermissionDenied";
  errorDescription:
    "The installation job is visible to the request token, but the request token does not have permission to abort it.";
  errorInstanceId: string;
  parameters: {
    installationJobRid: unknown;
  };
}

/**
 * A namespace recommendation strategy matches multiple installations of the same linked product. Narrow its suffix filter or use explicit recommendations. Overlapping recommendation inputs or sources are reported separately as InstallationError entries in the discovery response.
 *
 * Log Safety: SAFE
 */
export interface AmbiguousInstallationRecommendation {
  errorCode: "INVALID_ARGUMENT";
  errorName: "AmbiguousInstallationRecommendation";
  errorDescription:
    "A namespace recommendation strategy matches multiple installations of the same linked product. Narrow its suffix filter or use explicit recommendations. Overlapping recommendation inputs or sources are reported separately as InstallationError entries in the discovery response.";
  errorInstanceId: string;
  parameters: {
    productId: unknown;
    installationRids: unknown;
  };
}

/**
 * An input name occurs more than once in explicitlyUnset or occurs in both values and explicitlyUnset for the same installation.
 *
 * Log Safety: UNSAFE
 */
export interface ConflictingInstallationInputIntent {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ConflictingInstallationInputIntent";
  errorDescription:
    "An input name occurs more than once in explicitlyUnset or occurs in both values and explicitlyUnset for the same installation.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    apiName: unknown;
  };
}

/**
 * An installation targeted for submission already has a running job. Draft mode may still prepare a draft.
 *
 * Log Safety: SAFE
 */
export interface ConflictingInstallationJob {
  errorCode: "CONFLICT";
  errorName: "ConflictingInstallationJob";
  errorDescription:
    "An installation targeted for submission already has a running job. Draft mode may still prepare a draft.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * A recommendation supplies a product that is also included in the requested targets. Remove that recommendation.
 *
 * Log Safety: SAFE
 */
export interface ConflictingInstallationRecommendation {
  errorCode: "INVALID_ARGUMENT";
  errorName: "ConflictingInstallationRecommendation";
  errorDescription:
    "A recommendation supplies a product that is also included in the requested targets. Remove that recommendation.";
  errorInstanceId: string;
  parameters: {
    recommendationInstallationRid: unknown;
    requestedInstallationRid: unknown;
  };
}

/**
 * The request token cannot prepare or submit a job for one or more target installations or dependencies.
 *
 * Log Safety: SAFE
 */
export interface CreateInstallationJobPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateInstallationJobPermissionDenied";
  errorDescription:
    "The request token cannot prepare or submit a job for one or more target installations or dependencies.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * Could not register the installation due to insufficient permissions on the marketplace, product, or destination project or folder.
 *
 * Log Safety: SAFE
 */
export interface CreateMarketplaceInstallationPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "CreateMarketplaceInstallationPermissionDenied";
  errorDescription:
    "Could not register the installation due to insufficient permissions on the marketplace, product, or destination project or folder.";
  errorInstanceId: string;
  parameters: {
    marketplaceRid: unknown;
    productId: unknown;
    parentFolderRid: unknown;
  };
}

/**
 * Marketplace could not complete input discovery.
 *
 * Log Safety: SAFE
 */
export interface DiscoverInstallationJobInputsFailed {
  errorCode: "INTERNAL";
  errorName: "DiscoverInstallationJobInputsFailed";
  errorDescription: "Marketplace could not complete input discovery.";
  errorInstanceId: string;
  parameters: {
    errorName: unknown;
    errorCode: unknown;
  };
}

/**
 * The request token does not have permission to edit one or more target installations and cannot discover their inputs.
 *
 * Log Safety: SAFE
 */
export interface DiscoverInstallationJobInputsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "DiscoverInstallationJobInputsPermissionDenied";
  errorDescription:
    "The request token does not have permission to edit one or more target installations and cannot discover their inputs.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * An installation occurs more than once in the target list.
 *
 * Log Safety: SAFE
 */
export interface DuplicateInstallationJobInstallations {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DuplicateInstallationJobInstallations";
  errorDescription: "An installation occurs more than once in the target list.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * More than one target installation uses the same product.
 *
 * Log Safety: SAFE
 */
export interface DuplicateInstallationJobProducts {
  errorCode: "INVALID_ARGUMENT";
  errorName: "DuplicateInstallationJobProducts";
  errorDescription: "More than one target installation uses the same product.";
  errorInstanceId: string;
  parameters: {
    productId: unknown;
    installationRids: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface GetMarketplaceInstallationInputsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMarketplaceInstallationInputsPermissionDenied";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    marketplaceInstallationRid: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface GetMarketplaceInstallationJobDetailsPermissionDenied {
  errorCode: "PERMISSION_DENIED";
  errorName: "GetMarketplaceInstallationJobDetailsPermissionDenied";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    marketplaceInstallationJobRid: unknown;
  };
}

/**
 * The caller already has a preparing or idle draft for a target installation. Complete or abort the existing draft before preparing another job or discovering inputs for that installation.
 *
 * Log Safety: SAFE
 */
export interface InstallationDraftAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "InstallationDraftAlreadyExists";
  errorDescription:
    "The caller already has a preparing or idle draft for a target installation. Complete or abort the existing draft before preparing another job or discovering inputs for that installation.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    existingInstallationJobRid: unknown;
  };
}

/**
 * One or more installations have product inputs without API names. Enable input API name generation for those products before interacting with them.
 *
 * Log Safety: SAFE
 */
export interface InstallationInputApiNamesNotEnabled {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InstallationInputApiNamesNotEnabled";
  errorDescription:
    "One or more installations have product inputs without API names. Enable input API name generation for those products before interacting with them.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * An input API name is not present in the selected product version.
 *
 * Log Safety: UNSAFE
 */
export interface InstallationInputNotFound {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InstallationInputNotFound";
  errorDescription:
    "An input API name is not present in the selected product version.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    apiName: unknown;
  };
}

/**
 * The target products must belong to a single marketplace.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobMarketplaceConstraintViolated {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InstallationJobMarketplaceConstraintViolated";
  errorDescription: "The target products must belong to a single marketplace.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * The target installations must belong to a single namespace.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobNamespaceConstraintViolated {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InstallationJobNamespaceConstraintViolated";
  errorDescription:
    "The target installations must belong to a single namespace.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * The target installations must have at most one resulting ontology after applying location overrides.
 *
 * Log Safety: SAFE
 */
export interface InstallationJobOntologyConstraintViolated {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InstallationJobOntologyConstraintViolated";
  errorDescription:
    "The target installations must have at most one resulting ontology after applying location overrides.";
  errorInstanceId: string;
  parameters: {
    installationRids: unknown;
  };
}

/**
 * The requested target version could not be found within the installation product and marketplace.
 *
 * Log Safety: SAFE
 */
export interface InstallationTargetVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "InstallationTargetVersionNotFound";
  errorDescription:
    "The requested target version could not be found within the installation product and marketplace.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    targetVersion: unknown;
  };
}

/**
 * Uninstall has begun for the target installation. Create a new installation to install the product again.
 *
 * Log Safety: SAFE
 */
export interface InstallationUninstallStarted {
  errorCode: "CONFLICT";
  errorName: "InstallationUninstallStarted";
  errorDescription:
    "Uninstall has begun for the target installation. Create a new installation to install the product again.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
  };
}

/**
 * An input value could not be converted for the selected product version. The error reason does not contain the supplied value.
 *
 * Log Safety: UNSAFE
 */
export interface InvalidInstallationInput {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidInstallationInput";
  errorDescription:
    "An input value could not be converted for the selected product version. The error reason does not contain the supplied value.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    apiName: unknown;
    reason: unknown;
  };
}

/**
 * The target semantic version must be an exact major.minor.patch version with non-negative integer components and no leading zeros. Each component must be at most 2⁵³ - 2 (9,007,199,254,740,990). Version ranges, wildcards, prerelease identifiers, and build metadata are not supported.
 *
 * Log Safety: SAFE
 */
export interface InvalidInstallationTargetVersion {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidInstallationTargetVersion";
  errorDescription:
    "The target semantic version must be an exact major.minor.patch version with non-negative integer components and no leading zeros. Each component must be at most 2⁵³ - 2 (9,007,199,254,740,990). Version ranges, wildcards, prerelease identifiers, and build metadata are not supported.";
  errorInstanceId: string;
  parameters: {
    version: unknown;
  };
}

/**
 * The semantic version in the hint must be an exact major.minor.patch version with non-negative integer components and no leading zeros. Version ranges, wildcards, prerelease identifiers, and build metadata are not supported.
 *
 * Log Safety: SAFE
 */
export interface InvalidInstallationTargetVersionHint {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidInstallationTargetVersionHint";
  errorDescription:
    "The semantic version in the hint must be an exact major.minor.patch version with non-negative integer components and no leading zeros. Version ranges, wildcards, prerelease identifiers, and build metadata are not supported.";
  errorInstanceId: string;
  parameters: {
    targetVersionHint: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface MarketplaceInstallationJobNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceInstallationJobNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    marketplaceInstallationJobRid: unknown;
  };
}

/**
 * Log Safety: SAFE
 */
export interface MarketplaceInstallationNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceInstallationNotFound";
  errorDescription: "";
  errorInstanceId: string;
  parameters: {
    marketplaceInstallationRid: unknown;
  };
}

/**
 * The product could not be found in the specified marketplace or has no released version available for registration.
 *
 * Log Safety: SAFE
 */
export interface MarketplaceProductNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceProductNotFound";
  errorDescription:
    "The product could not be found in the specified marketplace or has no released version available for registration.";
  errorInstanceId: string;
  parameters: {
    marketplaceRid: unknown;
    productId: unknown;
  };
}

/**
 * The hinted product version could not be found in the specified product and marketplace.
 *
 * Log Safety: SAFE
 */
export interface MarketplaceProductVersionNotFound {
  errorCode: "NOT_FOUND";
  errorName: "MarketplaceProductVersionNotFound";
  errorDescription:
    "The hinted product version could not be found in the specified product and marketplace.";
  errorInstanceId: string;
  parameters: {
    marketplaceRid: unknown;
    productId: unknown;
    targetVersionHint: unknown;
  };
}

/**
 * The number of installation targets exceeds the maximum supported by this operation.
 *
 * Log Safety: SAFE
 */
export interface MaxInstallationJobInstallationsCountExceeded {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MaxInstallationJobInstallationsCountExceeded";
  errorDescription:
    "The number of installation targets exceeds the maximum supported by this operation.";
  errorInstanceId: string;
  parameters: {
    installationsCount: unknown;
    maxInstallationsCount: unknown;
  };
}

/**
 * A child input with a value requires its parent to have a value in inputs.values for the same installation.
 *
 * Log Safety: UNSAFE
 */
export interface MissingInstallationInputParentValue {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingInstallationInputParentValue";
  errorDescription:
    "A child input with a value requires its parent to have a value in inputs.values for the same installation.";
  errorInstanceId: string;
  parameters: {
    installationRid: unknown;
    childApiName: unknown;
    parentApiName: unknown;
  };
}

/**
 * At least one installation target must be supplied.
 *
 * Log Safety: SAFE
 */
export interface MissingInstallationJobInstallations {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MissingInstallationJobInstallations";
  errorDescription: "At least one installation target must be supplied.";
  errorInstanceId: string;
  parameters: {};
}

/**
 * The destination project or folder could not be found.
 *
 * Log Safety: SAFE
 */
export interface ParentFolderNotFound {
  errorCode: "NOT_FOUND";
  errorName: "ParentFolderNotFound";
  errorDescription: "The destination project or folder could not be found.";
  errorInstanceId: string;
  parameters: {
    parentFolderRid: unknown;
  };
}

/**
 * Another installation of this product already exists in the destination namespace, and the product version used for registration requires a single installation per namespace.
 *
 * Log Safety: SAFE
 */
export interface SingletonMarketplaceInstallationAlreadyExists {
  errorCode: "CONFLICT";
  errorName: "SingletonMarketplaceInstallationAlreadyExists";
  errorDescription:
    "Another installation of this product already exists in the destination namespace, and the product version used for registration requires a single installation per namespace.";
  errorInstanceId: string;
  parameters: {
    productId: unknown;
    namespaceRid: unknown;
  };
}
