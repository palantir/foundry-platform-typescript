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
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import type { Arguments, Argv, CommandModule } from "yargs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateExternalSdk } from "./external/generateExternalSdk.js";
import { generatePlatformSdks } from "./generatePlatformSdks.js";
import { updateSls } from "./updateSls.js";

export async function cli(
  args: string[] = process.argv,
): Promise<{ [x: string]: unknown; _: (string | number)[]; $0: string }> {
  const base = yargs(hideBin(args))
    .version(false)
    .command(new GenerateCommand())
    .command(new GenerateExternalCommand())
    .command(new FetchIrCommand())
    .demandCommand();

  return base.parseAsync();
}

export interface Options {
  inputFile: string;
  manifestFile: string;
  outputDir: string;
  deprecatedFile: string[];
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
      .option("manifestFile", {
        describe: "The location of the API manifest.yml",
        type: "string",
        demandOption: true,
      })
      .option("outputDir", {
        describe: "The output directory for the generated code",
        type: "string",
        demandOption: true,
      })
      // TODO: When we major version our packages, remove this flag and stop generating these
      .option("deprecatedFile", {
        describe:
          "The location of the API IR that contains deprecated or legacy components no longer in the original IR",
        type: "string",
        array: true,
        demandOption: true,
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

export interface GenerateExternalOptions {
  inputFile: string;
  outputDir: string;
  namespace: string[];
  npmOrg: string;
  manifestFile?: string;
  slsPackageJson?: string;
}

/**
 * Emits the requested namespace(s) plus their transitive dependency closure as
 * self-contained, inline-compilable source — with real `@osdk/shared.*` npm
 * versions and no workspace protocols, sls, or build scaffolding — for
 * consumption outside this monorepo. Deliberately separate from `generate` so
 * the internal full-repo path stays untouched.
 */
export class GenerateExternalCommand
  implements CommandModule<{}, GenerateExternalOptions>
{
  public aliases = [] as const;

  public command = "generate-external";

  public describe =
    "Generate self-contained TypeScript source for the given namespace(s) plus their dependency closure";

  public builder(args: Argv): Argv<GenerateExternalOptions> {
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
      .option("namespace", {
        describe:
          "Namespace(s) to emit; their dependency closure is pulled in automatically (e.g. --namespace <namespace>)",
        type: "string",
        array: true,
        demandOption: true,
      })
      .option("npmOrg", {
        describe: "npm org/scope for the generated packages",
        type: "string",
        default: "@osdk",
      })
      .option("manifestFile", {
        describe:
          "The api-gateway manifest.yml (from fetch-ir). Used with --slsPackageJson to record the api-gateway minimum version",
        type: "string",
      })
      .option("slsPackageJson", {
        describe:
          "The package.json to write the api-gateway product dependency into (its sls.dependencies block). Requires --manifestFile",
        type: "string",
      });
  }

  public handler = async (
    args: Arguments<GenerateExternalOptions>,
  ): Promise<void> => {
    if (!args.inputFile) {
      throw new Error("Must provide an input file");
    } else if (!args.outputDir) {
      throw new Error("Must provide an output directory");
    }
    if (args.namespace == null || args.namespace.length === 0) {
      throw new Error("--namespace is required (e.g. --namespace <namespace>)");
    }
    if ((args.manifestFile == null) !== (args.slsPackageJson == null)) {
      throw new Error(
        "--manifestFile and --slsPackageJson must be passed together",
      );
    }

    const irSpecRead = await fs.readFile(`${args.inputFile}`, {
      encoding: "utf8",
    });
    const irSpec: ApiSpec = JSON.parse(irSpecRead);

    await generateExternalSdk(irSpec, args.outputDir, {
      npmOrg: args.npmOrg,
      seedNamespaces: args.namespace,
    });

    // Lets consumers (e.g. via Wizard's product-dependencies.lock) require the
    // api-gateway version this code was generated from.
    if (args.manifestFile != null && args.slsPackageJson != null) {
      const manifest = parseYaml(
        await fs.readFile(args.manifestFile, { encoding: "utf8" }),
      );
      await updateSls(manifest, path.dirname(args.slsPackageJson));
    }
  };
}

export interface FetchIrCommandOptions {
  artifactoryUrl?: string;
  apiGatewayVersion?: string;
  outputDir: string;
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

    // The bash fetch script ships in the package at ../scripts relative to the
    // built module (build/esm/cli.js -> <pkg>/scripts/getOpenApiIr.sh).
    const scriptPath = fileURLToPath(
      new URL("../../scripts/getOpenApiIr.sh", import.meta.url),
    );
    const scriptArgs = ["--outDir", args.outputDir];
    if (args.apiGatewayVersion) {
      scriptArgs.push("--api-gateway-version", args.apiGatewayVersion);
    }

    await new Promise<void>((resolve, reject) => {
      const child = spawn("bash", [scriptPath, ...scriptArgs], {
        stdio: "inherit",
        env: { ...process.env, MAVEN_DIST_RELEASE: artifactoryUrl },
      });
      child.on("error", reject);
      child.on("exit", code => {
        if (code === 0) {
          resolve();
        } else {
          reject(
            new Error(`getOpenApiIr.sh exited with code ${code ?? "null"}`),
          );
        }
      });
    });
  };
}
