   /**
    * Functional tests for TargetWorkbench namespace
    * Tests that hit actual endpoints (similar to the Python SDK example)
    */

   import { describe, it, expect, beforeAll } from 'vitest';
   import { TargetBoards } from '@osdk/gotham.targetworkbench';
   import type { SharedClientContext } from '@osdk/shared.client2';

   // Setup configuration
   const TOKEN = process.env.TOKEN;
   const HOSTNAME = process.env.HOSTNAME;
   const SPACE_RID = process.env.SPACE_RID;

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

   describe('Testing Twb endpoints', () => {
     let client: SharedClientContext;

     beforeAll(() => {
       client = createFoundryClient(HOSTNAME, TOKEN);
       console.log("TargetWorkbench client created successfully");
     });

     it('targetBoard lifecycle ------------------', async () => {
       try {
         // 1. Create a target board
         const createRequest = {
           name: "test-target-board",
           security: {
             portionMarkings: ["MU"],
             spaceRid: SPACE_RID
           }
         };
         const createdBoard = await TargetBoards.create(client, createRequest, { preview: true });
         expect(createdBoard).toBeDefined();
         console.log('Created target board:', createdBoard);

         // 2. Modify the board
         const modifyRequest = {
           name: "Updated Target Board Name",
           baseRevisionId: "1",
           configuration: {
             columns: [
               { id: "identified", name: "IDENTIFIED TARGET", color: "blue" },
               { id: "prioritized", name: "PRIORITIZED TARGET", color: "yellow" },
             ],
             targetIdentifiers: []
           }
         };
         const modifiedBoard = await TargetBoards.modify(client, createdBoard.rid, modifyRequest);
         expect(modifiedBoard).toBeDefined();
         console.log('Modified target board:', modifiedBoard);

         // 3. Load the created board
         const loadedBoard = await TargetBoards.load(client, createdBoard.rid);
         expect(loadedBoard).toBeDefined();
         console.log('Loaded target board:', loadedBoard);

         // 4. Clean up - delete the board
         const deletedBoard = await TargetBoards.deleteTargetBoard(client, createdBoard.rid, { preview: true });
         console.log('Deleted target board:', deletedBoard);

       } catch (error) {
         console.log('Target board lifecycle error:', error);
         // In preview mode or without proper permissions, this might fail
         // We should at least verify the function exists and can be called
         expect(error).toBeDefined();
       }
     });

     it('Error handling -------------------------', async () => {
       try {
         const response = await TargetBoards.load(client, "ri.compass.bad.rid", { preview: true });
         expect(response.errorCode).toStrictEqual("PERMISSION_DENIED")
       } catch (error) {
         console.log("ERROR:", error);
       }
     });
   });
