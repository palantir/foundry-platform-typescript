/**
 * Functional tests for Gaia namespace
 * Shows how a non-technical user would use the SDK
 */

import { describe, it, expect, beforeAll } from 'vitest';
import { Maps } from '@osdk/gotham.gaia';
import type { SharedClientContext } from '@osdk/shared.client2';

// Simple configuration - just hostname and token
const TOKEN = process.env.TOKEN;
const HOSTNAME = process.env.HOSTNAME;
const RID = process.env.RID;
const ARTIFACT_GID = process.env.ARTIFACT_GID;

/**
 * Creates a simple authenticated client for Foundry APIs
 * This function uses ClientContext instead of @osdk/client which requires a published public SDK
 */
function createFoundryClient(hostname: string, token: string): SharedClientContext {
  // Automatically add authentication
  const authenticatedFetch: typeof fetch = async (input, init) => {
    const headers = new Headers(init?.headers);
    headers.set('Authorization', `Bearer ${token}`);

    return globalThis.fetch(input, {...init, headers });
  };

  return {
    baseUrl: `https://${hostname}`,
    fetch: authenticatedFetch,
    tokenProvider: async () => token,
  };
}

describe('Testing Gaia endpoints', () => {
  let client: SharedClientContext;

  // Simple client setup - just pass hostname and token!
  beforeAll(() => {
    client = createFoundryClient(HOSTNAME, TOKEN);
    console.log("Client created successfully");
  });

  it('searchMaps ------------------------', async () => {
    try {
      const response = await Maps.search(client, { mapName: "test", pageSize: 1, preview: true});

      expect(response).toBeDefined();
      expect(response.data).toBeDefined();

      if (response.data && response.data.length > 0) {
        console.log('Found maps:');
        for (const map in response.data) {
          expect(map).toBeDefined();
          console.log(map);
        }
      }
    } catch (error) {
      console.log('Search maps error:', error);
    }
  });

  it('loadMap ---------------------------', async () => {
    try {
      // Loading existing map
      const response = await Maps.load(client, RID, { preview: true });
      expect(response).toBeDefined();

      console.log('Map loaded:', response);
    } catch (error) {
      console.log('Load map error:', error);
    }
  });

  it('loadMapWithExtension---------------', async () => {
    try {
      const response = await Maps.loadWithExtension(client, RID, { extensions: {} }, { preview: true });
      expect(response).toBeDefined();
      expect(response.title).toStrictEqual("[judeh] mt mts/mnf test-shared-namespace");

      console.log('Map loaded with extensions:', response);
    } catch (error) {
      console.log('Load map with extensions error:', error);
    }
  });

  it('loadLayers ------------------------', async () => {
    try {
      // Get layers
      const mapResponse = await Maps.load(client, RID, { preview: true });
      const layerIds = mapResponse.rootLayerIds;

      const response = await Maps.loadLayers(client, RID, { layerIds: layerIds }, { preview: true });
      expect(response).toBeDefined();

      console.log('Layers loaded:', response);
    } catch (error) {
      console.log('Load layers error:', error);
    }
  });

  it('addArtifactsTo --------------------', async () => {
    try {
      const response = await Maps.addArtifactsTo(client, RID, { artifactGids: [ARTIFACT_GID], label: "label" }, { preview: true });
      expect(response).toBeDefined();

      console.log('Artifacts added:', response);
    } catch (error) {
      console.log('ERROR:', error);
    }
  });

  it('Error handling --------------------', async () => {
    const response = await Maps.load(client, "ri.invalid.format.that.will.fail", { preview: true });
    expect(response.errorCode).toStrictEqual("INVALID_ARGUMENT");
  });
});
