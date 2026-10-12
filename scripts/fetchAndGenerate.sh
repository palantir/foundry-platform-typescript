#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Call getOpenApiIr.sh (now shipped with the generator package) to fetch and
# extract the IR and manifest into the repo-root tmp dir the generator reads.
"$SCRIPT_DIR/../packages/platform-sdk-generator/scripts/getOpenApiIr.sh" \
    --outDir "$SCRIPT_DIR/../tmp/api-gateway-ir" "$@"

# Call generatePlatformSdk.sh to generate the SDKs and docs
"$SCRIPT_DIR/generatePlatformSdk.sh"

pnpm install

pnpm exec turbo transpile --filter "./packages/tool.release" --output-logs=errors-only
node "$SCRIPT_DIR/../packages/tool.release/build/esm/writeRegeneratedChangeset.js" --cwd "$SCRIPT_DIR/.."
node "$SCRIPT_DIR/../packages/tool.release/build/esm/versionPackages.js" --cwd "$SCRIPT_DIR/.." --releaseType main

