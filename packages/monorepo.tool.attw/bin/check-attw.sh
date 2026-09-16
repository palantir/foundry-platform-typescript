#!/usr/bin/env bash

set -e

BUILD_TYPE="${1:-esm}"

if [[ "$BUILD_TYPE" != "esm" && "$BUILD_TYPE" != "both" ]]; then
    echo "Invalid build type: $BUILD_TYPE"
    exit 1
fi

ATTW_ARGS=(--pack .)
if [[ "$BUILD_TYPE" == "esm" ]]; then
    ATTW_ARGS+=(--profile esm-only)
fi

# ATTW doesn't expand wildcard exports like ./v1/*, so we list the concrete paths.
EXTRA_ENTRY_POINTS=()
while IFS= read -r -d '' file; do
    entrypoint="${file/\/public\///}"
    entrypoint="${entrypoint#src/}"
    EXTRA_ENTRY_POINTS+=("./${entrypoint%.ts}")
done < <(find src -type f -path '*/public/*.ts' -print0)

if [[ ${#EXTRA_ENTRY_POINTS[@]} -gt 0 ]]; then
    ATTW_ARGS+=(--include-entrypoints "${EXTRA_ENTRY_POINTS[@]}")
fi

pnpm exec attw "${ATTW_ARGS[@]}"
