#!/usr/bin/env node

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

// Usage: check-api-gateway-version.mjs [--base <ref>] [--head <ref>]
//
// Fails if any generated package raises its pinned api-gateway version relative
// to the base ref. See src/checkApiGatewayVersion.ts for why.

import { checkApiGatewayVersion } from "../build/esm/checkApiGatewayVersion.js";

function parseArgs(argv) {
  const args = { base: "origin/main", head: "HEAD" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--base" || argv[i] === "--head") {
      const value = argv[i + 1];
      if (value == null) {
        throw new Error(`${argv[i]} requires a value`);
      }
      args[argv[i].slice(2)] = value;
      i++;
    } else {
      throw new Error(`Unknown option: ${argv[i]}`);
    }
  }
  return args;
}

const { base, head } = parseArgs(process.argv.slice(2));
const { ok, message } = checkApiGatewayVersion(base, head);

if (ok) {
  // eslint-disable-next-line no-console
  console.log(message);
} else {
  // eslint-disable-next-line no-console
  console.error(message);
  process.exit(1);
}
