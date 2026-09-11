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

import type { Namespace } from "../../ir/Namespace.js";

// dprint-ignore
export const CoreV3: Namespace = {"name":"Core","version":"v3","outputAuditVersions":"V3_ONLY","resources":[],"components":[{"locator":{"namespaceName":"Core","localName":"PageSize"},"type":{"type":"builtin","builtin":{"type":"integer","integer":{}}},"safety":"SAFE","documentation":{"example":[]}},{"locator":{"namespaceName":"Core","localName":"PageToken"},"type":{"type":"builtin","builtin":{"type":"string","string":{}}},"safety":"UNSAFE","documentation":{"example":[]}}],"errors":[{"locator":{"namespaceName":"Core","localName":"BatchRequestSizeExceededLimit"},"errorType":"INVALID_ARGUMENT","parameters":{"maximumBatchSize":{"type":{"type":"builtin","builtin":{"type":"integer","integer":{}}},"safety":"SAFE","documentation":{"example":[]}},"providedBatchSize":{"type":{"type":"builtin","builtin":{"type":"integer","integer":{}}},"safety":"SAFE","documentation":{"example":[]}}},"documentation":{"example":[]}},{"locator":{"namespaceName":"Core","localName":"MissingBatchRequest"},"errorType":"INVALID_ARGUMENT","parameters":{},"documentation":{"example":[]}}]};
