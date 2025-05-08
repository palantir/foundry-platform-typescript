# @osdk/platform-sdk-generator

## 0.17.0

### Minor Changes

- d89bef7: Use the pluralName field on the IR instead of relying on pluralize to name resources
- 539c731: Regenerate Platform SDKs

### Patch Changes

- Updated dependencies [539c731]
  - @osdk/docs-spec-platform@0.7.0

## 0.16.0

### Minor Changes

- 98ec492: Update Platform SDKs
- d41a131: Update docs spec

### Patch Changes

- Updated dependencies [98ec492]
- Updated dependencies [d41a131]
  - @osdk/docs-spec-platform@0.6.0
  - @osdk/docs-spec-core@0.5.0

## 0.15.0

### Patch Changes

- Updated dependencies [37b4958]
  - @osdk/docs-spec-core@0.4.0
  - @osdk/docs-spec-platform@0.5.0

## 0.14.0

### Minor Changes

- f355209: Update helpers for platform docs and drop variables in platform docs spec

### Patch Changes

- Updated dependencies [0965559]
- Updated dependencies [f355209]
- Updated dependencies [38b4379]
  - @osdk/docs-spec-platform@0.4.0
  - @osdk/docs-spec-core@0.3.0

## 0.13.0

### Patch Changes

- Updated dependencies [db7ee48]
  - @osdk/docs-spec-platform@0.3.0

## 0.12.0

### Patch Changes

- Updated dependencies [1a50672]
- Updated dependencies [45b549f]
  - @osdk/docs-spec-core@0.2.0
  - @osdk/docs-spec-platform@0.2.0

## 0.11.0

### Minor Changes

- d7161f2: Platform docs spec

### Patch Changes

- Updated dependencies [85f2000]
- Updated dependencies [d7161f2]
- Updated dependencies [cde3ab6]
  - @osdk/docs-spec-core@0.1.0
  - @osdk/docs-spec-platform@0.1.0

## 0.10.0

### Minor Changes

- 0d34388: Migrates components and errors from Core to Ontologies namespaces, and deprecates old components.
- b61dd32: Release a new version of the SDKs

## 0.9.0

### Minor Changes

- 19b5edf: Updating platform sdks with semantic search capabilities and other improvements.

## 0.8.0

### Minor Changes

- b025652: Update APIs and make backend dependency non-optional.

## 0.7.0

### Minor Changes

- bd6d407: Adds a "default" export entry
- 7e79126: Updates the response type of methods that returned Blob to return Response

## 0.7.0-beta.0

### Minor Changes

- 7e79126: Updates the response type of methods that returned Blob to return Response

## 0.6.0

### Minor Changes

- 02fc65d: Fix codegen for new APIs.
- bd00a28: Fix deps issue.
- ca65018: Updating deps for platform sdk.

## 0.6.0-beta.0

### Minor Changes

- 02fc65d: Fix codegen for new APIs.

## 0.5.0

### Minor Changes

- 5d6d5ab: Use the "verb" where possible
- 0441dab: Generates @alpha/@beta/@public jsdoc tags
- 1770490: URLs in jsdoc now link to palantir.com
- 5d6d5ab: Internal improvement to type references
- 5d6d5ab: We now generate error types
- 5d6d5ab: Internally refactored to support new API versions
- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- 885c8e4: Fixing bug for codegen on windows machines, where we would use backslashes instead of forward slashes for import paths, which should be OS agnostic.
- 5d6d5ab: SLS dependencies are optional
- d4d6605: Audited and cleaned up deps

## 0.5.0-beta.5

### Minor Changes

- 5d6d5ab: Internal improvement to type references
- d4d6605: Audited and cleaned up deps

## 0.5.0-beta.4

### Minor Changes

- 885c8e4: Fixing bug for codegen on windows machines, where we would use backslashes instead of forward slashes for import paths, which should be OS agnostic.

## 0.5.0-beta.3

### Minor Changes

- 5d6d5ab: Internally refactored to support new API versions

## 0.5.0-beta.2

### Minor Changes

- 5d6d5ab: We now generate error types

## 0.5.0-beta.1

### Minor Changes

- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- 5d6d5ab: SLS dependencies are optional

## 0.5.0-beta.0

### Minor Changes

- 0441dab: Generates @alpha/@beta/@public jsdoc tags
- 1770490: URLs in jsdoc now link to palantir.com

## 0.4.0

### Minor Changes

- af1d316: Added support to omni api code gen for binary type bodies in requests.
- 388dba9: Change all internal dependencies to be tilde not caret
- bc89b62: Spelling fixes and spell check in CI
- 9405a3e: Handle new Core namespace
- a8dc51a: Modified codegen so that return types now include Blobs.

## 0.4.0-beta.2

### Minor Changes

- bc89b62: Spelling fixes and spell check in CI

## 0.4.0-beta.1

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret
- a8dc51a: Modified codegen so that return types now include Blobs.

## 0.4.0-beta.0

### Minor Changes

- af1d316: Added support to omni api code gen for binary type bodies in requests.

## 0.3.0

### Minor Changes

- e0eb7f8: Prepare foundry platform sdk for shipping

## 0.2.0

### Minor Changes

- 63ff4b2: Only producing ESM now

## 0.1.0

### Minor Changes

- 9906a41: Foundry Platform support
