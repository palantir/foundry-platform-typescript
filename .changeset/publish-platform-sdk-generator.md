---
"@osdk/platform-sdk-generator": minor
---

Publish the generator as an installable CLI so other repos can run SDK generation locally. Makes the package public, adds a `platform-sdk-generator` bin, and adds a cross-platform `fetch-ir` command that downloads and merges the api-gateway IR (a dependency-free Node port of `getOpenApiIr.sh`, so no `wget`/`jq`/`yq` are required). Also adds an external dependency-closure `generate` mode (`--mode external --namespace <Name>`) that emits the requested namespace plus its transitive dependency closure as self-contained, inline-compilable source — real `@osdk/shared.*` versions, no workspace protocols, sls, or build scaffolding — for consumption outside this monorepo.
