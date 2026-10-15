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
import * as path from "node:path";
import * as process from "node:process";
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

/** Fixed filenames the IR fetch script writes into its output directory. */
const IR_FILENAME = "combined-ir.json";
const MANIFEST_FILENAME = "manifest.yml";

export interface GenerateExternalOptions {
  inputFile?: string;
  irDir?: string;
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
      .option("irDir", {
        describe:
          "Directory containing the fetched IR; reads combined-ir.json (and manifest.yml) from it. Alternative to --inputFile/--manifestFile",
        type: "string",
      })
      .option("inputFile", {
        describe:
          "The location of the API IR (defaults to <irDir>/combined-ir.json)",
        type: "string",
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
          "The api-gateway manifest.yml (defaults to <irDir>/manifest.yml). Used with --slsPackageJson to record the api-gateway minimum version",
        type: "string",
      })
      .option("slsPackageJson", {
        describe:
          "The package.json to write the api-gateway product dependency into (its sls.dependencies block). Reads the version from --manifestFile or <irDir>/manifest.yml",
        type: "string",
      });
  }

  public handler = async (
    args: Arguments<GenerateExternalOptions>,
  ): Promise<void> => {
    if (!args.outputDir) {
      throw new Error("Must provide an output directory");
    }
    if (args.namespace == null || args.namespace.length === 0) {
      throw new Error("--namespace is required (e.g. --namespace <namespace>)");
    }

    // Accept either explicit files or an --irDir containing the fetched IR,
    // which lets callers pass just the folder and have the filenames resolved.
    const inputFile = args.inputFile
      ?? (args.irDir != null ? path.join(args.irDir, IR_FILENAME) : undefined);
    if (!inputFile) {
      throw new Error("Provide --inputFile or --irDir");
    }
    const manifestFile = args.manifestFile
      ?? (args.irDir != null
        ? path.join(args.irDir, MANIFEST_FILENAME)
        : undefined);
    if (args.slsPackageJson != null && manifestFile == null) {
      throw new Error(
        "--slsPackageJson needs the manifest: pass --manifestFile or --irDir",
      );
    }

    const irSpecRead = await fs.readFile(inputFile, { encoding: "utf8" });
    const irSpec: ApiSpec = JSON.parse(irSpecRead);

    await generateExternalSdk(irSpec, args.outputDir, {
      npmOrg: args.npmOrg,
      seedNamespaces: args.namespace,
    });

    // Lets consumers (e.g. via Wizard's product-dependencies.lock) require the
    // api-gateway version this code was generated from.
    if (args.slsPackageJson != null && manifestFile != null) {
      const manifest = parseYaml(
        await fs.readFile(manifestFile, { encoding: "utf8" }),
      );
      await updateSls(manifest, path.dirname(args.slsPackageJson));
    }
  };
}
