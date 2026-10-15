---
"@osdk/platform-sdk-generator": minor
---

Publish the generator as an installable CLI so other repos can run SDK generation locally. Makes the package public and adds a `platform-sdk-generator` bin. Adds a separate `generate-external --namespace <Name>` command that emits the requested namespace plus its transitive dependency closure as self-contained, inline-compilable source — real `@osdk/shared.*` versions, no workspace protocols, sls, or build scaffolding — for consumption outside this monorepo. It takes the api-gateway IR as input (`--inputFile`/`--irDir`); fetching the IR stays a repo-local dev script (`scripts/getOpenApiIr.sh`) that consumers vendor their own copy of. Optional `--manifestFile` + `--slsPackageJson` flags on `generate-external` write the api-gateway product dependency from `manifest.yml` into a consumer's `package.json` `sls` block, so downstream repos require the api-gateway version the code was generated from. The existing `generate` command is unchanged.
