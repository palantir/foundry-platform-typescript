---
"@osdk/docs-spec-sdk": patch
---

Template String Additions

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
