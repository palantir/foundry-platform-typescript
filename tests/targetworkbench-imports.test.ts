/**
 * Basic import tests for TargetWorkbench namespace
 * Verifies that all components can be imported correctly
 */

import { describe, it, expect } from 'vitest';

describe('TargetWorkbench Imports', () => {
  it('should import TargetBoards from @osdk/gotham.targetworkbench', async () => {
    const { TargetBoards } = await import('@osdk/gotham.targetworkbench');

    expect(TargetBoards).toBeDefined();
    expect(typeof TargetBoards.create).toBe('function');
    expect(typeof TargetBoards.load).toBe('function');
    expect(typeof TargetBoards.modify).toBe('function');
    expect(typeof TargetBoards.deleteTargetBoard).toBe('function');
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
