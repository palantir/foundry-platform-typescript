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

import type * as ir from "@osdk/docs-spec-platform";
import type { Model } from "./Model.js";
import type { Namespace } from "./Namespace.js";
import { Type } from "./Type.js";

/**
 * Models IS-A relationships between branded rid types so the generated SDK
 * matches the documented domain. Example: in the Filesystem namespace,
 * `FolderType = "FOLDER" | "SPACE" | "PROJECT"` — a Space and a Project are
 * both folders. We express that here so `SpaceRid` and `ProjectRid` are
 * one-way assignable to `FolderRid` without needing a cast at the call site.
 *
 * Outer key: IR `namespaceName`. Inner key: child rid `localName`. Value: the
 * parent rid names this rid IS-A.
 *
 * Encoding: when we emit a PARENT rid, we widen its `LooselyBrandedString`
 * brand union to include all of its declared children. Children themselves
 * stay as `LooselyBrandedString<"Child">`. This keeps `Child → Parent`
 * assignable (the child's brand literal is in the parent's union) while
 * leaving sibling children mutually non-assignable.
 */
const RID_SUBTYPES: Record<string, Record<string, readonly string[]>> = {
  Filesystem: {
    SpaceRid: ["FolderRid"],
    ProjectRid: ["FolderRid"],
  },
};

function getChildBrandsOf(
  namespaceName: string,
  parentLocalName: string,
): string[] {
  const namespaceMap = RID_SUBTYPES[namespaceName];
  if (!namespaceMap) {
    return [];
  }
  const children: string[] = [];
  for (const [child, parents] of Object.entries(namespaceMap)) {
    if (parents.includes(parentLocalName)) {
      children.push(child);
    }
  }
  return children;
}

export class Component extends Type {
  isComponent = true;
  namespace: Namespace;
  packageLocalFilePath: string;
  externalImportSpecifier: string;
  component: ir.Component;
  model: Model;
  name: string;
  isDeprecated: boolean;

  constructor(
    model: Model,
    namespace: Namespace,
    packageLocalFilePath: string,
    externalImportSpecifier: string,
    component: ir.Component,
    isDeprecated: boolean,
  ) {
    super();
    this.namespace = namespace;
    this.packageLocalFilePath = packageLocalFilePath;
    this.externalImportSpecifier = externalImportSpecifier;
    this.component = component;
    this.model = model;
    this.name = component.locator.localName;
    this.isDeprecated = isDeprecated;
  }

  get referencedTypes(): Set<Type> {
    return this.model.getType(this.component.type).referencedTypes;
  }

  getTsReferenceString(localNamespace: string) {
    const revisedName = this.component.locator.localName.replace(
      /\bRecord\b(?![<])/g,
      "_Record",
    );
    if (localNamespace === this.namespace.name) {
      return revisedName;
    } else {
      return `_${this.component.locator.namespaceName}.${revisedName}`;
    }
  }

  getDeclaration(localNamespace: string | undefined): string {
    const component = this.component;
    const dt = this.component.type;
    const isAlias = dt.type !== "object";
    let out = "";
    out += `
  /** ${
      this.isDeprecated
        ? `\n* @deprecated Use \`${this.component.locator.localName}\` in the \`${
          this.namespace.version === "v1" ? "internal." : ""
        }foundry.ontologies\` package\n*`
        : ""
    } 
   * ${component.documentation.plainTextDescription ?? ""}
   * 
   * Log Safety: ${component.safety}
   */
  export ${isAlias ? "type" : "interface"} ${
      this.getTsReferenceString(localNamespace ?? this.namespace.name)
    } ${isAlias ? " = " : ""}`;

    const ourType = this.model.getType(dt);

    switch (dt.type) {
      case "enum":
      case "list":
      case "map":
      case "union":
      case "object":
      case "reference":
        out += ourType.getTsReferenceString(localNamespace);
        break;

      case "builtin":
        // need to special case this since we use a branded type
        if (dt.builtin.type === "rid" || dt.builtin.type === "string") {
          const localName = component.locator.localName;
          const childBrands = getChildBrandsOf(
            component.locator.namespaceName,
            localName,
          );
          const brandUnion = [localName, ...childBrands]
            .map((n) => `"${n}"`)
            .join(" | ");
          out += `LooselyBrandedString<${brandUnion}>`;
        } else {
          out += ourType.getDeclaration(localNamespace);
        }
        break;

      default:
        if (isAlias) {
          out += " undefined; //" + JSON.stringify(component);
        }
    }

    out += `\n\n`;
    return out;
  }
}
