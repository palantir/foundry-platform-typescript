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
import type { Component } from "./Component.js";
import type { Model } from "./Model.js";
import type { Namespace } from "./Namespace.js";
import { Type } from "./Type.js";

export class ErrorType extends Type {
  isComponent = false;
  namespace: Namespace;
  packageLocalFilePath: string;
  externalImportSpecifier: string;
  spec: ir.Error;
  model: Model;
  name: string;
  isDeprecated: boolean;

  constructor(
    model: Model,
    namespace: Namespace,
    packageLocalFilePath: string,
    externalImportSpecifier: string,
    spec: ir.Error,
    isDeprecated: boolean,
  ) {
    super();
    this.namespace = namespace;
    this.packageLocalFilePath = packageLocalFilePath;
    this.externalImportSpecifier = externalImportSpecifier;
    this.spec = spec;
    this.model = model;
    this.name = spec.locator.localName;
    this.isDeprecated = isDeprecated;
  }

  get referencedComponents(): Component[] {
    const ret = new Set<Component>();

    // Right now, we can't actually refer to any of the types in the error due to namespace issues
    // so we will be just setting everything we can't refer to as unknown.
    // Uncomment this when we can actually refer to the types in the error.
    // addAll(
    //   ret,
    //   this.parameters.flatMap(p => p.type.referencedComponents),
    // );
    return [...ret];
  }

  get referencedTypes(): Set<Type> {
    return new Set(this.referencedComponents);
  }

  get tsReferenceString(): string {
    return this.spec.locator.localName;
  }

  getTsReferenceString(localNamespace: string): string {
    if (localNamespace === this.namespace.name) {
      return this.spec.locator.localName;
    } else {
      return `_${this.spec.locator.namespaceName}.${this.spec.locator.localName}`;
    }
  }

  getDeclaration(localNamespace: string | undefined): string {
    const error = this.spec;

    const safety = this.parameters.find(p => p.safety === "UNSAFE") != null
      ? "UNSAFE"
      : "SAFE";

    let out = "";
    out += `
  /** ${
      this.isDeprecated
        ? `\n* @deprecated Use \`${this.name}\` in the \`${
          this.namespace.version === "v1" ? "internal." : ""
        }foundry.ontologies\` package\n*`
        : ""
    } 
   * ${error.documentation.plainTextDescription ?? ""}
   * 
   * Log Safety: ${safety}
   */
  export interface ${error.locator.localName} {
    errorCode: "${error.errorType}";
    errorName: "${error.locator.localName}";
    errorInstanceId: string;
    parameters: {
      ${
      this.parameters.map(p =>
        `${p.name}: ${
          true ? "unknown" : p.type.getDeclaration(localNamespace)
        };`
      ).join(
        "\n",
      )
    }
    }
  }`;

    out += `\n\n`;
    return out;
  }

  get parameters(): Params {
    const ret: Params = [];

    for (
      const [name, { type, safety, documentation }] of Object.entries(
        this.spec.parameters,
      )
    ) {
      ret.push({
        name,
        type: this.model.getType(type),
        safety,
        documentation,
      });
    }
    return ret;
  }
}
type Params = Array<
  {
    name: string;
    type: Type;
    safety: ir.Safety;
    documentation?: ir.Documentation;
  }
>;
