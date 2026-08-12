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

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { checkApiGatewayVersion } from "./checkApiGatewayVersion.js";

/**
 * Entry point for the api-gateway version guard.
 *
 * Deliberately its own CLI rather than a command on the generator's, since this
 * enforces a repository policy about what may be committed rather than doing any
 * generation.
 */
export async function checkApiGatewayVersionCli(
  args: string[] = process.argv,
): Promise<void> {
  const parsed = await yargs(hideBin(args))
    .version(false)
    .strict()
    .option("base", {
      describe: "The git ref to compare against",
      type: "string",
      default: "origin/main",
      requiresArg: true,
    })
    .option("head", {
      describe: "The git ref to check",
      type: "string",
      default: "HEAD",
      requiresArg: true,
    })
    .parseAsync();

  let ok: boolean;
  let message: string;
  try {
    ({ ok, message } = checkApiGatewayVersion(parsed.base, parsed.head));
  } catch (e) {
    // An unreadable ref or an unparseable version is a failure of this check,
    // not a crash to show a stack trace for.
    // eslint-disable-next-line no-console
    console.error(e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
    return;
  }

  if (ok) {
    // eslint-disable-next-line no-console
    console.log(message);
    return;
  }

  // eslint-disable-next-line no-console
  console.error(message);
  process.exitCode = 1;
}
