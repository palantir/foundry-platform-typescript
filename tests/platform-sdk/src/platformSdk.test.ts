/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type * as EndpointsV3 from "@osdk/foundry.endpoints/unstable_do_not_use_v3";
import type * as OntologiesV2 from "@osdk/foundry.ontologies/v2";
import type * as GaiaV2 from "@osdk/gotham.gaia/v2";
import type { SharedClient, SharedClientContext } from "@osdk/shared.client2";
import { symbolClientContext } from "@osdk/shared.client2";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";

describe("Smoke tests for import paths and basic e2e functionality", () => {
  const baseUrl = "https://platform.example.com";
  const context: SharedClientContext = {
    baseUrl,
    fetch: (...args) => globalThis.fetch(...args),
    tokenProvider: async () => "test-token",
  };
  const client: SharedClient = { [symbolClientContext]: context };
  const server = setupServer();

  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe.each(
    [
      [
        "Foundry package root",
        async () => (await import("@osdk/foundry.ontologies")).Actions,
      ],
      [
        "Foundry root resource",
        () => import("@osdk/foundry.ontologies/Action"),
      ],
      [
        "Foundry v2 namespace",
        async () => (await import("@osdk/foundry.ontologies/v2")).Actions,
      ],
      [
        "Foundry v2 resource",
        () => import("@osdk/foundry.ontologies/v2/Action"),
      ],
    ] as const,
  )("%s", (_name, loadActions) => {
    const ontology: OntologiesV2.OntologyIdentifier = "ontology/with space";
    const action: OntologiesV2.ActionTypeApiName = "update-record";
    const body: OntologiesV2.ApplyActionRequestV2 = {
      parameters: { id: "record-1" },
    };
    const response: OntologiesV2.SyncApplyActionResponseV2 = {
      validation: { result: "VALID", parameters: {}, submissionCriteria: [] },
    };

    it("sends a v2 action with path, body, query, and header arguments", async () => {
      const actions = await loadActions();
      const requests: Request[] = [];
      server.use(http.post(
        `${baseUrl}/api/v2/ontologies/:ontology/actions/:action/apply`,
        ({ request }) => {
          requests.push(request);
          return HttpResponse.json(response);
        },
      ));

      await expect(actions.apply(
        client,
        ontology,
        action,
        body,
        { sdkVersion: "2.0.0", branch: "feature/sdk" },
        { traceParent: "test-trace", traceState: "test-state" },
      )).resolves.toEqual(response);

      expect(requests).toHaveLength(1);
      const [request] = requests;
      const url = new URL(request.url);
      expect(url.pathname).toBe(
        "/api/v2/ontologies/ontology%2Fwith%20space/actions/update-record/apply",
      );
      expect(Object.fromEntries(url.searchParams)).toEqual({
        sdkVersion: "2.0.0",
        branch: "feature/sdk",
      });
      expect(request.headers.get("Content-Type")).toBe("application/json");
      expect(request.headers.get("Accept")).toBe("application/json");
      expect(request.headers.get("traceParent")).toBe("test-trace");
      expect(request.headers.get("traceState")).toBe("test-state");
      expect(await request.json()).toEqual(body);
    });

    it("allows optional query and header arguments to be omitted", async () => {
      const actions = await loadActions();
      const requests: Request[] = [];
      server.use(http.post(
        `${baseUrl}/api/v2/ontologies/:ontology/actions/:action/apply`,
        ({ request }) => {
          requests.push(request);
          return HttpResponse.json(response);
        },
      ));

      await expect(actions.apply(context, ontology, action, body)).resolves
        .toEqual(response);

      expect(requests).toHaveLength(1);
      expect(new URL(requests[0].url).search).toBe("");
      expect(requests[0].headers.has("traceParent")).toBe(false);
      expect(await requests[0].json()).toEqual(body);
    });
  });

  describe.each(
    [
      [
        "Foundry v3 namespace",
        async () =>
          (await import("@osdk/foundry.endpoints/unstable_do_not_use_v3"))
            .EndpointSetEndpoints,
      ],
      [
        "Foundry v3 resource",
        () =>
          import(
            "@osdk/foundry.endpoints/unstable_do_not_use_v3/EndpointSetEndpoint"
          ),
      ],
    ] as const,
  )("%s", (_name, loadEndpoints) => {
    const endpointSetRid: EndpointsV3.EndpointSetRid =
      "ri.endpoints.main.set.1";
    const endpointRid: EndpointsV3.EndpointSetEndpointRid =
      "ri.endpoints.main.endpoint.2";
    const endpoint: EndpointsV3.EndpointSetEndpoint = {
      rid: endpointRid,
      name: "test-endpoint",
    };

    it("gets an endpoint using the set ID followed by the endpoint ID", async () => {
      const endpoints = await loadEndpoints();
      const requests: Request[] = [];
      server.use(http.get(
        `${baseUrl}/api/v3/platform/endpointSets/:setRid/endpoints/:endpointRid`,
        ({ request }) => {
          requests.push(request);
          return HttpResponse.json(endpoint);
        },
      ));

      await expect(endpoints.get(client, endpointSetRid, endpointRid)).resolves
        .toEqual(endpoint);

      expect(requests).toHaveLength(1);
      expect(requests[0].url).toBe(
        `${baseUrl}/api/v3/platform/endpointSets/${endpointSetRid}/endpoints/${endpointRid}`,
      );
    });
  });

  describe.each(
    [
      [
        "Gotham package root",
        async () => (await import("@osdk/gotham.gaia")).Maps,
      ],
      ["Gotham root resource", () => import("@osdk/gotham.gaia/Map")],
      [
        "Gotham v2 namespace",
        async () => (await import("@osdk/gotham.gaia/v2")).Maps,
      ],
      ["Gotham v2 resource", () => import("@osdk/gotham.gaia/v2/Map")],
    ] as const,
  )("%s", (_name, loadMaps) => {
    it("searches maps through the Gotham v2 API", async () => {
      const maps = await loadMaps();
      const response: GaiaV2.SearchMapsResponse = { data: [] };
      const requests: Request[] = [];
      server.use(
        http.get(`${baseUrl}/api/v2/gaia/maps/search`, ({ request }) => {
          requests.push(request);
          return HttpResponse.json(response);
        }),
      );

      await expect(maps.search(context, {
        mapName: "Operations & response",
        pageSize: 25,
      })).resolves.toEqual(response);

      expect(requests).toHaveLength(1);
      expect(Object.fromEntries(new URL(requests[0].url).searchParams)).toEqual(
        {
          mapName: "Operations & response",
          pageSize: "25",
        },
      );
    });
  });
});
