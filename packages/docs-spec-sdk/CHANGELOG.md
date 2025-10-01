# @osdk/docs-spec-sdk

## 0.9.0

### Minor Changes

- c233e66: Cleanup the spec and rename to linkApiName

## 0.8.0

### Minor Changes

- c4ed450: Template String Additions

  FunctionTemplateStrings (lines 112-113):

  - Added hasAttachmentProperty: "required"
  - Added objectType: "required"

  ActionTemplateStrings (lines 134-136):

  - Added hasAttachmentProperty: "required"
  - Added attachmentParameter: "required"
  - Added objectType: "required"

  AttachmentTemplateStrings (lines 155-159):

  - Changed from empty object to include:
    - actionApiName: "required"
    - property: "required"
    - rawPrimaryKeyProperty: "required"

  Template Specification Updates

  Query Filter Templates (lines 457, 464, 471):

  - Changed notTemplate, andTemplate, and orTemplate from using ObjectTypeTemplateStrings to ObjectTypeWithPropertyTemplateStrings

  Interface Templates (lines 496, 504):

  - Added property: "required" to searchInterfacesGuide and searchInterfacesReference

  Property Templates (lines 601, 684):

  - Added linkName: "required" to derivedPropertyApproximateDistinctAggregation
  - Added otherProperty: "required" to objectSetWithLinkExtractPart

  These changes ensure that templates have access to all the required variables they need, particularly for attachment handling, object type
  references, property specifications, and link relationships.

## 0.7.0

### Minor Changes

- bb1ac6b: vectorProperty -> property

## 0.6.0

### Minor Changes

- 1fb2aca: Fix nearestNeighbor spec
- f289f64: Add knn doc spec

## 0.5.0

### Minor Changes

- e761952: Update expressions template to support extract part

## 0.4.0

### Minor Changes

- a5b9219: Add unary flag for numeric expressions

## 0.3.0

### Minor Changes

- a86e1ab: Add documentation for OSDK RDP expressions

## 0.2.0

### Minor Changes

- 387548d: Add doc specs for contains and searchAround

## 0.1.0

### Minor Changes

- b54403b: Create @osdk/docs-spec-sdk
