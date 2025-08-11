#!/usr/bin/env bash
set -e

print_help() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Options:
  --namespace NAMESPACE         Generate SDKs for specific class only (foundry|gotham|all). Default: foundry.
  --help                        Show this help message and exit.
EOF
}

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

source "$SCRIPT_DIR/checkCommand.sh"

REALPATH=$(checkCommand "grealpath" "realpath" "Try 'brew install coreutils'")
XQ=$(checkCommand "yq" "yq" "Try 'brew install yq'")
WGET=$(checkCommand "wget" "wget" "Try 'brew install wget'")

echo "Making sure the tool is built"
pnpm exec turbo run transpile typecheck --filter ./packages/platform-sdk-generator --output-logs=errors-only

# "$SCRIPT_DIR/getOpenApiIr.sh"

CODE_GENERATOR="$SCRIPT_DIR/../packages/platform-sdk-generator/bin/platform-sdk-generator.mjs"
IR_JSON="${SCRIPT_DIR}/../tmp/api-gateway-ir/combined-ir.json"
OPENAPI_MANIFEST_YML="${SCRIPT_DIR}/../tmp/api-gateway-ir/manifest.yml"

PACKAGE_PATH="${SCRIPT_DIR}/../packages/internal.foundry"
OUT_PATH="${SCRIPT_DIR}/../packages/"

# Parse args
parse_args() {
    PREFIX="foundry"
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --prefix)
                PREFIX="$2"
                shift 2
                ;;
            --help)
                print_help
                exit 0
                ;;
            *)
                echo "Unknown option: $1"
                print_help
                exit 1
                ;;
        esac
    done
}

parse_args "$@"

# Whether to generate docs, sdks, or both
# One of: docs, sdks, docs-and-sdks
GENERATION_MODE="docs-and-sdks"

# Build filter patterns based on namespace selection
FILTERS=""
if [[ "${PREFIX}" == "all" || "${PREFIX}" == "foundry" ]]; then
    FILTERS+=" --filter ./packages/foundry --filter ./packages/internal.foundry --filter=\"./packages/foundry.*\" --filter=\"./packages/internal.foundry.*\""
fi
if [[ "${PREFIX}" == "all" || "${PREFIX}" == "gotham" ]]; then
    FILTERS+=" --filter ./packages/gotham --filter=\"./packages/gotham.*\""
fi


if [[ "${GENERATION_MODE}" != "docs" ]]; then
  if [[ "${PREFIX}" == "all" || "${PREFIX}" == "foundry" ]]; then
    echo "Generating bindings for internal.foundry"
    $CODE_GENERATOR generate \
        --v2 \
        --prefix "internal.foundry" \
        --inputFile "${IR_JSON}" \
        --manifestFile "${OPENAPI_MANIFEST_YML}" \
        --outputDir "${OUT_PATH}" \
        --deprecatedFile "${SCRIPT_DIR}/../packages/deprecated/internal.foundry.core/core.json" \
        --endpointVersion "v1" \
        --mode "sdks" # We don't generate docs based on the OpenAPI IR
  fi
fi

if [[ "${PREFIX}" == "all" || "${PREFIX}" == "foundry" ]]; then
  echo "Generating foundry bindings"
  $CODE_GENERATOR generate \
      --v2 \
      --prefix "foundry" \
      --inputFile "${IR_JSON}" \
      --manifestFile "${OPENAPI_MANIFEST_YML}" \
      --outputDir "${OUT_PATH}" \
      --deprecatedFile "${SCRIPT_DIR}/../packages/deprecated/foundry.core/core.json" \
      --endpointVersion "v2" \
      --mode "${GENERATION_MODE}"
fi

if [[ "${PREFIX}" == "all" || "${PREFIX}" == "gotham" ]]; then
  echo "Generating gotham bindings"
  $CODE_GENERATOR generate \
      --v2 \
      --prefix "gotham" \
      --inputFile "${IR_JSON}" \
      --manifestFile "${OPENAPI_MANIFEST_YML}" \
      --outputDir "${OUT_PATH}" \
      --deprecatedFile "${SCRIPT_DIR}/../packages/deprecated/gotham.core/core.json" \
      --endpointVersion "v2" \
      --mode "${GENERATION_MODE}"
fi

echo
echo pnpm install to make align deps
pnpm install --reporter=silent

echo
echo "Running mrl"
pnpm exec mrl check --fix --quiet

echo
echo "Fixing lint and formatting lines"
pnpm exec -- \
    turbo run --output-logs=errors-only fix-lint \
        --filter ./packages/docs-spec-platform \
        --filter ./packages/foundry \
        --filter ./packages/internal.foundry \
        --filter="./packages/foundry.*" \
        --filter="./packages/internal.foundry.*" \

if [[ "${PREFIX}" == "all" || "${PREFIX}" == "gotham" ]]; then
  pnpm exec -- \
      turbo run --output-logs=errors-only fix-lint \
          --filter ./packages/gotham \
          --filter="./packages/gotham.*"
fi

echo
echo "Checking for any remaining lint errors"
pnpm exec -- \
    turbo run --output-logs=errors-only check \
        --filter ./packages/docs-spec-platform \
        --filter ./packages/foundry \
        --filter ./packages/internal.foundry \
        --filter="./packages/foundry.*" \
        --filter="./packages/internal.foundry.*" \

if [[ "${PREFIX}" == "all" || "${PREFIX}" == "gotham" ]]; then
  pnpm exec -- \
    turbo run --output-logs=errors-only check \
        --filter ./packages/gotham \
        --filter="./packages/gotham.*"
fi
