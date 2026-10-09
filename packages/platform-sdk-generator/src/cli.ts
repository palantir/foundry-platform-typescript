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

import type { ApiSpec } from "@osdk/docs-spec-platform";
import fs from "node:fs/promises";
import * as process from "node:process";
import { parse as parseYaml } from "yaml";
import type { Arguments, Argv, CommandModule } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fetchIr } from "./fetchIr.js";
import type { ExternalGenerateOptions } from "./generatePlatformSdks.js";
import { generatePlatformSdks } from "./generatePlatformSdks.js";
import { updateSls } from "./updateSls.js";

const EXTERNAL_SHARED_DEPENDENCIES: Record<string, string> = {
  "@osdk/shared.client": "^1.0.1",
  "@osdk/shared.client2": "^1.0.0",
  "@osdk/shared.net.platformapi": "^1.8.0",
};

export async function cli(
  args: string[] = process.argv,
): Promise<{ [x: string]: unknown; _: (string | number)[]; $0: string }> {
  const base = yargs(hideBin(args))
    .version(false)
    .command(new GenerateCommand())
    .command(new FetchIrCommand())
    .demandCommand();

  return base.parseAsync();
}

export interface Options {
  inputFile: string;
  manifestFile?: string;
  outputDir: string;
  deprecatedFile?: string[];
  mode: "internal" | "external";
  namespace?: string[];
  npmOrg: string;
}

export class GenerateCommand implements CommandModule<{}, Options> {
  public aliases = [] as const;

  public command = "generate";

  public describe = "Generate TypeScript bindings for a OpenApi API";

  public builder(args: Argv): Argv<Options> {
    return args
      .option("inputFile", {
        describe: "The location of the API IR",
        type: "string",
        demandOption: true,
      })
      .option("outputDir", {
        describe: "The output directory for the generated code",
        type: "string",
        demandOption: true,
      })
      .option("mode", {
        describe:
          "\"internal\" generates this repo's full package set; \"external\" emits the requested namespace(s) plus their dependency closure as self-contained source",
        choices: ["internal", "external"] as const,
        default: "internal" as const,
      })
      .option("namespace", {
        describe:
          "External mode: namespace(s) to emit; their dependency closure is pulled in automatically (e.g. --namespace Pack)",
        type: "string",
        array: true,
      })
      .option("npmOrg", {
        describe: "External mode: npm org/scope for the generated packages",
        type: "string",
        default: "@osdk",
      })
      .option("manifestFile", {
        describe:
          "The location of the API manifest.yml (required in internal mode)",
        type: "string",
      })
      // TODO: When we major version our packages, remove this flag and stop generating these
      .option("deprecatedFile", {
        describe:
          "The location of the API IR that contains deprecated or legacy components no longer in the original IR (internal mode)",
        type: "string",
        array: true,
      });
  }

  public handler = async (args: Arguments<Options>): Promise<void> => {
    const input = args.inputFile;
    const output = args.outputDir;

    if (!input) {
      throw new Error("Must provide an input file");
    } else if (!output) {
      throw new Error("Must provide an output directory");
    }

    const irSpecRead = await fs.readFile(`${input}`, { encoding: "utf8" });
    const irSpec: ApiSpec = JSON.parse(irSpecRead);

    if (args.mode === "external") {
      if (args.namespace == null || args.namespace.length === 0) {
        throw new Error(
          "--namespace is required in external mode (e.g. --namespace Pack)",
        );
      }
      const external: ExternalGenerateOptions = {
        npmOrg: args.npmOrg,
        seedNamespaces: args.namespace,
        sharedDependencies: EXTERNAL_SHARED_DEPENDENCIES,
      };
      await generatePlatformSdks(irSpec, output, [], external);
      return;
    }

    if (!args.manifestFile) {
      throw new Error("--manifestFile is required in internal mode");
    }
    if (args.deprecatedFile == null || args.deprecatedFile.length === 0) {
      throw new Error("--deprecatedFile is required in internal mode");
    }

    const manifest = parseYaml(
      await fs.readFile(`${args.manifestFile}`, {
        encoding: "utf8",
      }),
    );

    const deprecatedIrSpecs: ApiSpec[] = await Promise.all(
      args.deprecatedFile.map(async deprecatedFile =>
        JSON.parse(await fs.readFile(deprecatedFile, { encoding: "utf8" }))
      ),
    );
    const pkgDirs = await generatePlatformSdks(
      irSpec,
      output,
      deprecatedIrSpecs,
    );
    for (const pkgDir of pkgDirs) {
      await updateSls(manifest, pkgDir);
    }
  };
}

export interface FetchIrCommandOptions {
  artifactoryUrl?: string;
  apiGatewayVersion?: string;
  outputDir: string;
  groupId?: string;
}

export class FetchIrCommand
  implements CommandModule<{}, FetchIrCommandOptions>
{
  public aliases = [] as const;

  public command = "fetch-ir";

  public describe =
    "Fetch and merge the api-gateway IR from a Maven repository";

  public builder(args: Argv): Argv<FetchIrCommandOptions> {
    return args
      .option("artifactoryUrl", {
        describe:
          "Base Maven repository url; defaults to the MAVEN_DIST_RELEASE env var",
        type: "string",
      })
      .option("apiGatewayVersion", {
        describe:
          "Pinned api-gateway version; when omitted the latest release is resolved",
        type: "string",
      })
      .option("outputDir", {
        describe: "Directory to write combined-ir.json and manifest.yml into",
        type: "string",
        demandOption: true,
      })
      .option("groupId", {
        describe: "Maven group id",
        type: "string",
        default: "com.palantir.foundry.api",
      });
  }

  public handler = async (
    args: Arguments<FetchIrCommandOptions>,
  ): Promise<void> => {
    const artifactoryUrl = args.artifactoryUrl
      ?? process.env.MAVEN_DIST_RELEASE;
    if (!artifactoryUrl) {
      throw new Error(
        "Provide --artifactoryUrl or set the MAVEN_DIST_RELEASE environment variable",
      );
    }
    await fetchIr({
      artifactoryUrl,
      apiGatewayVersion: args.apiGatewayVersion,
      outDir: args.outputDir,
      groupId: args.groupId,
    });
  };
}
