#!/usr/bin/env bash

set -eu

print_help() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS]

Options:
  --api-gateway-version VERSION  Use the specified API Gateway version instead of resolving from Maven.
  --outDir DIR                   Directory to write combined-ir.json and manifest.yml into
                                 (defaults to <script>/../tmp/api-gateway-ir).
  --help                        Show this help message and exit.
EOF
}

parse_args() {
    API_GATEWAY_VERSION=""
    OUT_DIR=""
    while [[ $# -gt 0 ]]; do
        case "$1" in
            --api-gateway-version)
                API_GATEWAY_VERSION="$2"
                shift 2
                ;;
            --outDir)
                OUT_DIR="$2"
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

resolve_api_gateway_version() {
    if [[ -z "${API_GATEWAY_VERSION}" ]]; then
        API_GATEWAY_VERSION=$(wget -q -O - "${MAVEN_REPO_PATH}/maven-metadata.xml" | \
            yq -p xml -r '.metadata.versioning.release')
    fi
    echo "GATEWAY VERSION: ${API_GATEWAY_VERSION}"
}

download_bundle() {
    mkdir -p "${DOWNLOAD_DIR}"
    mkdir -p "${EXTRACT_DIR}"
    wget -O "${DOWNLOAD_DIR}/${MAVEN_CONJURE_ARTIFACT_ID}-${API_GATEWAY_VERSION}.sls.tgz" "${MAVEN_REPO_PATH}/${API_GATEWAY_VERSION}/${MAVEN_CONJURE_ARTIFACT_ID}-${API_GATEWAY_VERSION}.sls.tgz"
    wget -O "${EXTRACT_DIR}/federated-ir.json" "${FEDERATED_IR_REPO_PATH}/${API_GATEWAY_VERSION}/${FEDERATED_IR_ARTIFACT_ID}-${API_GATEWAY_VERSION}.omni.json"
}

extract_bundle() {
    mkdir -p "${EXTRACT_DIR}"
    tar -xf "${DOWNLOAD_DIR}/api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}.sls.tgz" -C "${EXTRACT_DIR}" --strip-components=4 "api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}/asset/palantir/ir-v2/combined-ir.json"
    tar -xf "${DOWNLOAD_DIR}/api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}.sls.tgz" -C "${EXTRACT_DIR}" --strip-components=2 "api-gateway-rosetta-bundle-${API_GATEWAY_VERSION}/deployment/manifest.yml"
}

merge_irs() {
    jq -s '
        .[0] as $existing |
        .[1] as $federated |
        $existing + {
            irVersion: $federated.irVersion,
            dependencies: ((($existing.dependencies // []) + ($federated.dependencies // [])) | unique),
            namespaces: ($existing.namespaces + $federated.namespaces)
        }
    ' "${EXTRACT_DIR}/combined-ir.json" "${EXTRACT_DIR}/federated-ir.json" > "${EXTRACT_DIR}/combined-ir.merged.json"
    mv "${EXTRACT_DIR}/combined-ir.merged.json" "${EXTRACT_DIR}/combined-ir.json"
}

main() {
    # Define the necessary directories and files
    SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

    parse_args "$@"

    BUILD_DIR="${SCRIPT_DIR}/../tmp"
    EXTRACT_DIR="${OUT_DIR:-${BUILD_DIR}/api-gateway-ir}"
    DOWNLOAD_DIR="${EXTRACT_DIR}/.bundle"
    mkdir -p "${DOWNLOAD_DIR}" "${EXTRACT_DIR}"

    MAVEN_CONJURE_GROUP_ID="com.palantir.foundry.api"
    MAVEN_CONJURE_ARTIFACT_ID="api-gateway-rosetta-bundle"
    MAVEN_REPO_PATH="${MAVEN_DIST_RELEASE}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${MAVEN_CONJURE_ARTIFACT_ID}"
    FEDERATED_IR_ARTIFACT_ID="api-gateway-federated-ir"
    FEDERATED_IR_REPO_PATH="${MAVEN_DIST_RELEASE}/$(echo "$MAVEN_CONJURE_GROUP_ID" | sed 's/\./\//g')/${FEDERATED_IR_ARTIFACT_ID}"

    resolve_api_gateway_version
    download_bundle
    extract_bundle
    merge_irs
}

main "$@"
