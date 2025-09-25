# @osdk/docs-spec-sdk

A TypeScript specification package that defines the structure and types for OSDK (Ontology SDK) documentation snippet generation. This package serves as the foundation for generating type-safe, version-aware code examples across multiple programming languages.

## Overview

This package is part of a four-package documentation generation ecosystem:

- **`@osdk/docs-spec-sdk`** (this package) - Defines TypeScript types and IR specifications
- **`@osdk/typescript-sdk-docs`** - Contains TypeScript-specific templates and computed variable handlers
- **`@foundry/documentation-snippets`** - Aggregates multiple SDK languages and orchestrates final documentation generation
- **`@foundry/api-documentation-code-templates`** - Production usage that generates IR data from GraphQL schema and populates templates with actual values

## Architecture & Data Flow

```mermaid
graph TD
    A[documentation.yml] --> B[@osdk/typescript-sdk-docs]
    C[@osdk/docs-spec-sdk] --> B
    B --> D[@foundry/documentation-snippets]
    G[GraphQL Schema] --> H[@foundry/api-documentation-code-templates]
    H --> E[IR Data]
    E --> D
    D --> F[Generated Code Snippets]

    C -->|Type Safety| B
    C -->|Template Specs| B
    C -->|IR Types| H
    H -->|Runtime Values| D
    E -->|Runtime Values| D
```

### Complete Flow

1. **Template Definition**: Templates are defined in `documentation.yml` with Handlebars variables
2. **Type Specification**: This package (`docs-spec-sdk`) defines which variables each template requires
3. **Processing**: `typescript-sdk-docs` implements computed variable handlers that transform IR data
4. **IR Data Generation**: `api-documentation-code-templates` queries GraphQL schema and generates IR data using helper functions like `getObjectTypeTemplateStrings()`
5. **Aggregation**: `documentation-snippets` combines processed templates with runtime IR data
6. **Generation**: Final code snippets are generated with actual values injected

## Core Concepts

### Intermediate Representation (IR)

The package defines IR types that represent sample data in a language-agnostic way:

```typescript
// Property values
export type PropertySampleValueTypeIR =
  | BooleanValueType      // { type: "boolean", value: true }
  | StringType           // { type: "string", value: "example" }
  | DateType            // { type: "date", daysOffset: 0 }
  | ObjectType          // { type: "object", primaryKeyType: "string" }
  | { type: "array", subtype: PropertySampleValueTypeIR }
  // ... more types

// Action parameters
export type ActionParameterSampleValuesIR = Array<{
  key: string;
  value: ActionParameterSampleValueTypeIR;
  last: boolean;
}>;
```

### Template Variables

Templates use two types of variables:

- **Direct Variables**: Simple string substitution (`{{objectType}}`, `{{packageName}}`)
- **Computed Variables**: Complex transformations handled by computed functions (`{{{functionInputValues}}}`)

### Version Handling

The system supports multiple SDK versions with different syntax patterns:
- **V1**: Legacy syntax (e.g., `__primaryKey`, `LocalDate.now()`)
- **V2**: Modern syntax (e.g., `$primaryKey`, `"2024-01-01"`)

## Detailed Example: `loadSingleObjectGuide`

Let's trace how the `loadSingleObjectGuide` template works through the complete system:

### 1. Template Definition

In `documentation.yml`:
```yaml
loadSingleObjectGuide:
  - template: |-
      import { type GetObjectError, isOk, type Result } from "{{{packageName}}}";
      import { {{objectType}} } from "{{{packageName}}}";

      const result: Result<{{objectType}}, GetObjectError> = await client.ontology.objects.{{objectType}}.get("primaryKey");
      if (isOk(result)) {
          const object: {{objectType}} = result.value;
      } else {
          console.error(result.error.errorType);
      }
```

### 2. Variable Specification

In `spec.ts`, `loadSingleObjectGuide` requires these variables:
```typescript
loadSingleObjectGuide: {
  variables: {
    ...ObjectTypeTemplateStrings,  // Expands to required variables
    rawOntologyApiName: "required",
    packageName: "required",
  },
}
```

Where `ObjectTypeTemplateStrings` includes:
```typescript
const ObjectTypeTemplateStrings = {
  objectType: "required",                    // → "Employee"
  rawObjectTypeApiName: "required",          // → "com.company.Employee"
  titleProperty: "required",                 // → "firstName"
  titlePropertySnakeCase: "required",        // → "first_name"
  allCapsTitlePropertySnakeCase: "required", // → "FIRST_NAME"
  rawProperties: "required",                 // → PropertySampleIR[]
  rawPrimaryKeyProperty: "required",         // → PropertySampleIR
  structSubPropertyApiName: "optional",      // → "address.street" (if applicable)
} as const satisfies SnippetVariables;
```

### 3. Property Population

Properties are populated from different sources:

#### Static Properties (Direct Substitution)
```typescript
// These come from context/configuration
{
  packageName: "@osdk/client",           // Set by calling application
  objectType: "Employee",               // Derived from object type definition
  rawOntologyApiName: "hr-ontology",    // From ontology metadata
  titleProperty: "firstName"            // Primary display property
}
```

#### IR-Based Properties (Computed Variables)
```typescript
// Sample IR data for an Employee object
const sampleEmployeeData: PropertySampleIR[] = [
  {
    apiName: "firstName",
    value: { type: "string", value: "John" }
  },
  {
    apiName: "age",
    value: { type: "integer", value: 30 }
  },
  {
    apiName: "hireDate",
    value: { type: "date", daysOffset: -365 }
  }
];
```

### 4. Value Transformation

The TypeScript computed variable handlers transform IR data:

```typescript
// In typescript-sdk-docs/src/docs.ts
function renderPropertyValue(
  propertyValue: PropertySampleValueTypeIR,
  majorVersion: SdkMajorVersion,
): string {
  switch (propertyValue.type) {
    case "string":
      return `"${propertyValue.value}"`;           // → "John"
    case "integer":
      return propertyValue.value.toString();      // → 30
    case "date":
      if (majorVersion >= SdkMajorVersion.V2) {
        const offsetDate = new Date();
        offsetDate.setDate(offsetDate.getDate() + propertyValue.daysOffset);
        return `"${offsetDate.toISOString().split("T")[0]}"`;  // → "2023-09-25"
      }
      return "LocalDate.now().plusDays(-365)";    // V1 syntax
  }
}
```

### 5. Final Output

After all transformations, the final generated TypeScript code:

```typescript
import { type GetObjectError, isOk, type Result } from "@osdk/client";
import { Employee } from "@osdk/client";

const result: Result<Employee, GetObjectError> = await client.ontology.objects.Employee.get("primaryKey");
if (isOk(result)) {
    const object: Employee = result.value;
} else {
    console.error(result.error.errorType);
}
```

## Property Reference

### Template Variable Categories

| Category | Description | Example Variables |
|----------|-------------|------------------|
| **Base** | Common to all snippets | `packageName` |
| **Object Type** | Object-related properties | `objectType`, `titleProperty`, `rawProperties` |
| **Object with Property** | Object + specific property | `property`, `rawPropertyValue`, `isDateProperty` |
| **Object with Link** | Object relationships | `sourceObjectType`, `linkedObjectType`, `linkApiName` |
| **Action** | Action/function related | `actionApiName`, `rawActionParameterValues` |
| **Attachment** | File upload functionality | `hasAttachmentUpload`, `attachmentProperty` |

### Data Sources

| Variable Type | Source | Example |
|---------------|--------|---------|
| **Static Context** | Configuration/Metadata | `packageName`, `objectType`, `actionApiName` |
| **Computed Properties** | Derived from static data | `titlePropertySnakeCase`, `objectDisplayName` |
| **IR Data** | Sample values from spec | `rawProperties`, `rawPropertyValue`, `rawActionParameterValues` |
| **Computed Variables** | IR transformation functions | `functionInputValues`, `propertyValue`, `actionParameterSampleValues` |

### Required vs Optional Variables

Variables are marked as `"required"` or `"optional"` in the spec:
- **Required**: Must be provided or template generation fails
- **Optional**: Can be omitted; templates should handle gracefully with conditionals

## Developer Guide

### Adding New Snippet Types

1. **Define template variables** in `spec.ts`:
```typescript
const MyNewTemplateStrings = {
  customProperty: "required",
  optionalField: "optional",
} as const satisfies SnippetVariables;

// Add to OSDK_SNIPPETS_SPEC
myNewSnippet: {
  variables: {
    ...MyNewTemplateStrings,
    packageName: "required",
  },
}
```

2. **Create template** in `documentation.yml`:
```yaml
myNewSnippet:
  - template: |-
      // {{customProperty}} is guaranteed to exist
      {{#if optionalField}}
      // {{optionalField}} might be present
      {{/if}}
```

3. **Implement computed variables** in `typescript-sdk-docs` if needed

### Extending Existing Templates

To add new properties to existing templates:

1. Update the relevant `TemplateStrings` constant
2. Update any dependent templates in `documentation.yml`
3. Add computed variable handlers if needed
4. Update IR types if new data structures are required

### Testing Computed Variable Handlers

When modifying computed variables:
1. Test with different IR data types
2. Verify both V1 and V2 SDK version outputs
3. Check edge cases (empty arrays, null values, complex nested types)
4. Validate generated TypeScript compiles correctly

### Version Compatibility

When adding version-specific features:
- Use `SdkMajorVersion` enum for branching logic
- Provide fallbacks for older versions
- Document version requirements in template specifications
- Test across supported SDK versions

## Integration Points

### How typescript-sdk-docs Consumes This Package

```typescript
import type {
  OSDK_SNIPPETS_SPEC,
  PropertySampleValueTypeIR,
  // ... other IR types
} from "@osdk/docs-spec-sdk";

// Type-safe snippet processing
export const TYPESCRIPT_OSDK_SNIPPETS: SdkSnippets<typeof OSDK_SNIPPETS_SPEC> = {
  // ... computed variable implementations
};
```

### How documentation-snippets Uses Processed Templates

```typescript
import { TYPESCRIPT_OSDK_SNIPPETS } from "@osdk/typescript-sdk-docs";

// Runtime template resolution with actual data
const snippet = TYPESCRIPT_OSDK_SNIPPETS.snippets.loadSingleObjectGuide[0];
const rendered = snippet.template.render({
  objectType: "Employee",
  packageName: "@osdk/client",
  rawProperties: sampleEmployeeData,
  // ... other runtime values
});
```

### Runtime Value Injection Process

1. **Context Building**: Application builds context with static values and IR data
2. **Template Selection**: Version resolver picks appropriate template variant
3. **Variable Processing**: Computed variables transform IR data to language-specific code
4. **Template Rendering**: Handlebars processes template with final variable values
5. **Output Generation**: Final code snippet ready for documentation display

## Production Data Generation

The `@foundry/api-documentation-code-templates` package shows how IR data gets generated from real GraphQL schema in production applications (like the Dev Console).

### IR Data Generation from GraphQL

```typescript
// From codeSnippetTemplates.ts
import {
    ActionParameterSampleValuesIR,
    FunctionSampleParametersIR,
    PropertySampleIR,
    PropertySampleValueTypeIR,
} from "@foundry/documentation-snippets-spec";

// Generate ObjectTypeTemplateStrings from GraphQL schema
export function getObjectTypeTemplateStrings(
    objectType: CodeSnippetObjectType.Result | undefined,
): ObjectTypeTemplateStrings {
    if (objectType == null) {
        return FALLBACK_OBJECT_TYPE_TEMPLATE_STRINGS;
    }
    return {
        objectType: processObjectApiName(objectType.apiName ?? ""),
        rawObjectTypeApiName: objectType.apiName ?? "",
        titleProperty: objectType.titleProperty.apiName,
        titlePropertySnakeCase: pythonOsdkSnakeCase(objectType.titleProperty.apiName) ?? "",
        // Convert GraphQL properties to IR format
        rawProperties: objectType.properties.map(property => ({
            apiName: property.apiName,
            value: getPropertySampleValueIR(property), // Converts GraphQL to IR
        })),
        rawPrimaryKeyProperty: {
            apiName: objectType.primaryKeyProperties[0]?.apiName ?? "",
            value: getPropertySampleValueIR(objectType.primaryKeyProperties[0]!),
        },
    };
}
```

### Sample Value Generation

The package includes sophisticated sample value generation that converts GraphQL type definitions to IR:

```typescript
// Convert different GraphQL property types to IR values
function getPropertySampleValueIR(property: GraphQLProperty): PropertySampleValueTypeIR {
    switch (property.type.__typename) {
        case "ObjectTypePropertyType_String":
            return { type: "string", value: "sampleValue" };
        case "ObjectTypePropertyType_Integer":
            return { type: "integer", value: 42 };
        case "ObjectTypePropertyType_Date":
            return { type: "date", daysOffset: 0 };
        case "ObjectTypePropertyType_Array":
            return {
                type: "array",
                subtype: getPropertySampleValueIR(property.type.subtype)
            };
        // ... handle all GraphQL types
    }
}
```

### Real Usage Pattern

In production, the flow looks like:

1. **GraphQL Query**: Dev Console queries for object type schema
2. **IR Generation**: `getObjectTypeTemplateStrings()` transforms GraphQL data to IR
3. **Template Population**: IR data is passed to `documentation-snippets`
4. **Code Generation**: Final TypeScript/Python/Java code is generated

```typescript
// In Dev Console or similar application
const graphqlObjectType = await client.query(GET_OBJECT_TYPE_SCHEMA, { apiName: "Employee" });
const templateStrings = getObjectTypeTemplateStrings(graphqlObjectType);

// This provides all the IR data that powers the templates:
// templateStrings.rawProperties → PropertySampleIR[]
// templateStrings.rawPrimaryKeyProperty → PropertySampleIR
// templateStrings.objectType → "Employee"
// etc.
```

This demonstrates how the abstract IR types defined in this package get populated with real data from production ontologies, making the documentation system work with actual user schemas rather than just examples.

## Common Patterns

### Handling Complex Data Types

For complex nested structures, use computed variables:

```typescript
// In IR
const complexValue = {
  type: "object",
  primaryKeyType: "string",
  apiName: "com.company.Address"
};

// Computed variable transforms to appropriate syntax
function renderObjectValue(value, majorVersion) {
  if (majorVersion >= SdkMajorVersion.V2) {
    return `{ $primaryKey: "addressKey" }`;
  }
  return `{ __primaryKey: "addressKey" }`;
}
```

### Supporting Multiple SDK Versions

Always branch on SDK version for syntax differences:

```typescript
function renderDateValue(dateValue, majorVersion) {
  if (majorVersion >= SdkMajorVersion.V2) {
    // Modern: use ISO string literals
    return `"${new Date().toISOString().split('T')[0]}"`;
  }
  // Legacy: use Java-style date constructors
  return "LocalDate.now()";
}
```

### Handling Optional Variables

Templates should gracefully handle missing optional variables:

```handlebars
{{#if structSubPropertyApiName}}
// Access nested property: {{structSubPropertyApiName}}
const nested = object.{{structSubPropertyApiName}};
{{/if}}
```

## Summary

This README provides the complete picture of how the OSDK documentation generation system works across four interconnected packages:

1. **`@osdk/docs-spec-sdk`** provides the type foundation and IR specifications
2. **`@osdk/typescript-sdk-docs`** implements language-specific template processing
3. **`@foundry/documentation-snippets`** orchestrates multi-language snippet generation
4. **`@foundry/api-documentation-code-templates`** bridges the gap between real GraphQL schemas and documentation templates

The system enables type-safe, version-aware, multi-language code snippet generation that works with actual production ontology schemas. By understanding these relationships, developers can effectively maintain and extend the documentation generation capabilities across the entire OSDK ecosystem.