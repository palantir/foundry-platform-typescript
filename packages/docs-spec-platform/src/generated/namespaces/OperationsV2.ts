/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
export const OperationsV2: Namespace = {"name":"Operations","version":"v2","outputAuditVersions":"V3_ONLY","resources":[{"singleton":false,"documentation":{"example":[]},"component":{"namespaceName":"Operations","localName":"AsyncOperation"},"pluralName":"AsyncOperations","operations":[{"name":"getOperation","verb":"get","documentation":{"description":"Get an asynchronous operation by its ID.\n","plainTextDescription":"Get an asynchronous operation by its ID.","example":[]},"releaseStage":"PRIVATE_BETA","auditCategories":[],"auth":{"includeAuthHeader":true,"scopes":["api:ontologies-read"],"expandedScopes":[]},"http":{"path":"/v2/operations/{operationId}","httpMethod":"GET","parameters":[{"name":"operationId","documentation":{"description":"The unique Resource Identifier (RID) of the operation. \nThis is the id returned in the response of the invoking operation.\n","plainTextDescription":"The unique Resource Identifier (RID) of the operation.\nThis is the id returned in the response of the invoking operation.","example":["ri.actions.main.action.c61d9ab5-2919-4127-a0a1-ac64c0ce6367"]},"inputType":"PATH","type":{"type":{"type":"builtin","builtin":{"type":"rid","rid":{}}},"safety":"SAFE","documentation":{"example":[]}}},{"name":"preview","documentation":{"description":"A boolean flag that, when set to true, enables the use of beta features in preview mode.\n","plainTextDescription":"A boolean flag that, when set to true, enables the use of beta features in preview mode.","example":[]},"inputType":"QUERY","type":{"type":{"type":"optional","optional":{"subType":{"type":"reference","reference":{"locator":{"namespaceName":"Core","localName":"PreviewMode"}}}}},"safety":"SAFE","documentation":{"example":[]}}}],"response":{"documentation":{"description":"Success response.","plainTextDescription":"Success response.","example":[]},"body":{"type":"ok","ok":{"responseType":{"type":"component","component":{"mediaType":"application/json","type":{"type":{"type":"reference","reference":{"locator":{"namespaceName":"Operations","localName":"AsyncOperation"}}},"safety":"UNSAFE","documentation":{"example":[]}}}},"required":true}},"code":"200"},"conjureServerAsync":false,"conjureRequestContext":false},"throwableErrors":[]}]}],"components":[{"locator":{"namespaceName":"Operations","localName":"AsyncOperation"},"type":{"type":"union","union":{"discriminator":"type","subTypes":{"applyActionAsyncV2":{"type":{"type":"reference","reference":{"locator":{"namespaceName":"Ontologies","localName":"AsyncApplyActionOperationV2"}}}},"applyActionAsync":{"type":{"type":"reference","reference":{"locator":{"namespaceName":"Ontologies","localName":"AsyncActionOperation"}}}}}}},"safety":"UNSAFE","documentation":{"example":[]}}],"errors":[{"locator":{"namespaceName":"Operations","localName":"OperationNotFound"},"errorType":"INVALID_ARGUMENT","parameters":{"id":{"type":{"type":"builtin","builtin":{"type":"rid","rid":{}}},"safety":"SAFE","documentation":{"example":[]}}},"documentation":{"description":"The operation is not found, or the user does not have access to it.","plainTextDescription":"The operation is not found, or the user does not have access to it.","example":[]}}]};
