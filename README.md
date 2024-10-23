# foundry-platform-typescript

## Getting started

The Foundry Platform SDK for Typescript is an SDK for the APIs listed in the [Foundry API documentation](https://www.palantir.com/docs/foundry/api/). Packages are available on NPM for each API namespace as [`@osdk/foundry.{namespace}`](https://www.npmjs.com/search?q=%40osdk%2Ffoundry). The SDK can be used either with an [Ontology SDK](https://www.palantir.com/docs/foundry/ontology-sdk/overview/) client (for easy use alongside a generated Ontology SDK) or with a standalone platform SDK client.

## Hello world example

The following is a complete, annotated example of a "hello, world" web app using the Platform SDK to greet users by name.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Hello world!</title>
    <!-- Load dependencies from a CDN. In production, most developers use a dependency and build
         system like npm instead. -->
    <script type="importmap">
      {
        "imports": {
          "vue": "https://cdn.jsdelivr.net/npm/vue@3.5.11/dist/vue.esm-browser.min.js",
          "@osdk/client": "https://cdn.jsdelivr.net/npm/@osdk/client@2.0.4/+esm",
          "@osdk/oauth": "https://cdn.jsdelivr.net/npm/@osdk/oauth@1.0.0/+esm",
          "@osdk/foundry.admin": "https://cdn.jsdelivr.net/npm/@osdk/foundry.admin@2.1.0/+esm"
        }
      }
    </script>
  </head>
  <body>
    <h1>Hello world!</h1>
    <!-- The contents of our vue app. -->
    <div id="app">
      <!-- Suspense handles the fact that Greeting is an async component, since it needs to wait on
           the network to load our name and greet us. -->
      <Suspense>
        <!-- Greeting is the main component of our app, defined below. -->
        <Greeting />
      </Suspense>
    </div>
    <script type="module">
      import { createApp } from "vue"
      // Create a standalone platform SDK client. Users can also use an OSDK client created with
      // `createClient` if they have an Ontology SDK.
      import { createPlatformClient } from "@osdk/client"
      // Create a public OAuth2 client. OSDK clients and Platform SDK clients use the same auth
      // client types.
      import { createPublicOauthClient } from "@osdk/oauth"
      // The admin endpoints, which include our getCurrentUser endpoint.
      import { Users } from "@osdk/foundry.admin"

      // The hostname of your Foundry instance, like `https://foundry.example.com`.
      const stack = "TODO";
      // Your OAuth2 client ID from Developer Console.
      const clientId = "TODO";
      // The URL of your app (this HTML page).
      const redirectUrl = "http://localhost:8000";

      const auth = createPublicOauthClient(clientId, stack, redirectUrl);
      const client = createPlatformClient(stack, auth);

      createApp({})
      .component('Greeting', {
        // Use the Platform SDK to call the getCurrentUser endpoint with the client we created.
        // Await the result before rendering the greeting template below.
        async setup() {
          return {
            user: await Users.getCurrent(client, { preview: true }),
          }
        },
        template: `<p>Hello, <b>{{ user.givenName }}</b>!</p>`
      })
      .mount('#app');
    </script>
  </body>
</html>
```

To run this example, do the following:

1. Copy the above HTML into an editor and save it as (for exmaple) `~/Desktop/test-website/index.html`.
2. In Foundry, open the Developer Console and create a new third-party application for your web app.
3. Copy your client ID and Foundry hostname into the spaces labeled `TODO` in the code.
4. In terminal, run `cd ~/Desktop/test-website`.
5. Start a web server to serve the file by running `python3 -m http.server` (or your preferred web server).
6. Navigate to `http://localhost:8000` in your browser and authenticate your app with Foundry.
7. Enjoy being greeted by name!

## Dev workflow

1. Fork the repo
2. Create a branch
3. `pnpm install`
4. Start dev mode: `pnpm dev`
5. Add your code
6. Add a changeset

   > 📘 Note
   >
   > **Follow semver rules here.**
   1. Assuming you've run `pnpm install`, run `changeset` (or `pnpm exec changeset`).
   2. The tool will split things into changed vs unchanged packages (which you may need if you decide to add changeset logs in a future PR for past features)
   3. Select the packages you want the changeset applied to using the arrow keys (up/down) and space-bar to "select" the package.
   4. Press enter to continue.
   5. The CLI will go through a progression of asking you which packages you previously selected need a major bump? Then a minor bump? Patch bumps assumed for remaining packages changed. Arrows and space bar to select. Enter to continue (even if you selected nothing).
   6. Enter a change (or press enter on empty to open your editor.)

   > Info
   >
   > Full docs on the `changesets` tool can be found at the [changesets/changesets github repo](https://github.com/changesets/changesets).
7. If you're curious what the final build output might look like you can run `pnpm build` from root.
8. Run all lint rules and tests with `pnpm check` from root.
