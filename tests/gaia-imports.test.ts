    /**
     * Basic import tests for Gaia namespace
     * Verifies that all components can be imported correctly
     */

    import { describe, it, expect } from 'vitest';

    describe('Gaia Imports', () => {
      it('should import Maps from @osdk/gotham.gaia', async () => {
        const { Maps } = await import('@osdk/gotham.gaia');

        expect(Maps).toBeDefined();
        expect(typeof Maps.search).toBe('function');
        expect(typeof Maps.load).toBe('function');
        expect(typeof Maps.loadWithExtension).toBe('function');
        expect(typeof Maps.loadLayers).toBe('function');
        expect(typeof Maps.addArtifactsTo).toBe('function');
      });

      it('should import SharedClientContext type', async () => {
        const module = await import('@osdk/shared.client2');
        expect(module).toBeDefined();
      });

      it('should import PalantirApiError', async () => {
        const { PalantirApiError } = await import('@osdk/client');
        expect(PalantirApiError).toBeDefined();
        expect(typeof PalantirApiError).toBe('function');
      });
    });
