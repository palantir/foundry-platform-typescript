## Test Structure
- `gaia-imports.test.ts` tests that components of the Gaia namespace are defined and importable
- `targetworkbench-imports.test.ts` tests that components of the Twb namespace are defined and importable
- `gaia-functional.test.ts` tests the endpoints of the Gaia public API
- `targetworkbench-functional.test.ts` tests the endpoints of the Twb public API

## Running Tests
1. Install dependencies
    ```bash
    cd tests && npm install
    ```
2. Set environment variables
    ```bash
   export STACK=...// e.g., danube-staging-multitenant.palantircloud.com
   export TOKEN=...// Your personal token found in your stack profile\'s User Settings
   export RID=...// The RID of the Gaia map you want to test
   export ARTIFACT_GID=...// The RID of the Artifact you want to add to your Gaia map
   export SPACE_RID=...// The RID of the space you want to create your TargetBoard in (can be found in Control Panel)
    ```
3. Run tests
    ```bash
   npx vitest gaia-imports.test.ts
    ```