# Platform SDK consumer tests

Each test dynamically imports a built workspace package through its public package exports and calls the generated client. MSW intercepts the request and fails on unhandled requests, so the same test checks both import resolution and HTTP behavior. The suite covers Foundry v2 and v3, Gotham v2, package roots, versioned namespaces, and direct resource imports.

Run from the repository root:

```sh
pnpm exec turbo run test --filter @osdk/monorepo.test.platform-sdk
```

Turbo builds the generated dependencies and typechecks the consumers before running the tests. Typed resource identifiers check the generated argument order as well as the requests observed by MSW. This package also runs through the root `pnpm test` and `pnpm check` commands.
