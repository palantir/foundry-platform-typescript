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
 * Parent rid → children whose brand literals widen its `LooselyBrandedString`
 * brand union. Keyed by IR `namespaceName` then parent `localName`. Makes
 * `Child → Parent` one-way assignable; siblings stay mutually non-assignable.
 */
const RID_CHILD_BRANDS: Record<string, Record<string, readonly string[]>> = {
  Filesystem: {
    FolderRid: ["SpaceRid", "ProjectRid"],
  },
};

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
          const children = dt.builtin.type === "rid"
            ? RID_CHILD_BRANDS[component.locator.namespaceName]?.[localName]
              ?? []
            : [];
          const brandUnion = [localName, ...children]
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
