---
"@osdk/platform-sdk-generator": minor
---

Publish the generator as an installable CLI so other repos can run SDK generation locally. Makes the package public, adds a `platform-sdk-generator` bin, and adds a `fetch-ir` command that wraps the bundled `getOpenApiIr.sh` to download and merge the api-gateway IR (requires bash + wget/jq/yq/tar, run on-network). Also adds a separate `generate-external --namespace <Name>` command that emits the requested namespace plus its transitive dependency closure as self-contained, inline-compilable source — real `@osdk/shared.*` versions, no workspace protocols, sls, or build scaffolding — for consumption outside this monorepo. Optional `--manifestFile` + `--slsPackageJson` flags on `generate-external` write the api-gateway product dependency from `manifest.yml` into a consumer's `package.json` `sls` block, so downstream repos require the api-gateway version the code was generated from. The existing `generate` command is unchanged.
