#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Call getOpenApiIr.sh to fetch and extract the IR and manifest
"$SCRIPT_DIR/getOpenApiIr.sh" "$@"

# Call generatePlatformSdk.sh to generate the SDKs and docs
"$SCRIPT_DIR/generatePlatformSdk.sh"

pnpm install

if ! command -v expect >/dev/null 2>&1; then
  apt update && apt install -y expect
fi

pnpm exec turbo transpile --filter "./packages/tool.release" --output-logs=errors-only
node "$SCRIPT_DIR/../packages/tool.release/build/esm/writeRegeneratedChangeset.js" --cwd "$SCRIPT_DIR/.."
