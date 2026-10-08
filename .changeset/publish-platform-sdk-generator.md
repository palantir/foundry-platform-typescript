---
"@osdk/platform-sdk-generator": minor
---

Publish the generator as an installable CLI so other repos can run SDK generation locally. Makes the package public, adds a `platform-sdk-generator` bin, and adds a cross-platform `fetch-ir` command that downloads and merges the api-gateway IR (a dependency-free Node port of `getOpenApiIr.sh`, so no `wget`/`jq`/`yq` are required).
