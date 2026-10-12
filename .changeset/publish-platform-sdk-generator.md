---
"@osdk/platform-sdk-generator": minor
---

Publish the generator as an installable CLI so other repos can run SDK generation locally. Makes the package public, adds a `platform-sdk-generator` bin, and adds a `fetch-ir` command that wraps the bundled `getOpenApiIr.sh` to download and merge the api-gateway IR (requires bash + wget/jq/yq/tar, run on-network). Also adds an external dependency-closure `generate --mode external --namespace <Name>` mode that emits the requested namespace plus its transitive dependency closure as self-contained, inline-compilable source — real `@osdk/shared.*` versions, no workspace protocols, sls, or build scaffolding — for consumption outside this monorepo.
