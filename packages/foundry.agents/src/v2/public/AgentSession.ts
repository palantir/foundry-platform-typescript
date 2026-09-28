/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type * as _Core from "@osdk/foundry.core/v2";
import type {
  SharedClient as $OldClient,
  SharedClientContext as $OldClientContext,
} from "@osdk/shared.client";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client2";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Agents from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    $body: _Agents.CreateAgentSessionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Agents.AgentSession>
> = [1, "/v2/agents/agentSessions", 3];

/**
 * Create a session for the specified Agent version. Creating a session runs Agent logic and may modify
 * platform data.
 *
 * @alpha
 *
 * Required Scopes: [api:agents-write]
 * URL: /v2/agents/agentSessions
 */
export function create(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    $body: _Agents.CreateAgentSessionRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Agents.AgentSession> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _sendEvent: $FoundryPlatformMethod<
  (
    agentSessionId: _Agents.SessionId,
    $body: _Agents.SendEventRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Agents.SendEventResponse>
> = [1, "/v2/agents/agentSessions/{0}/sendEvent", 3];

/**
 * Send an event to the specified Agent session. Handling an event runs Agent logic and may modify platform data. An `ACCEPTED`
 * status confirms that the event was accepted for handling. Retry a `SESSION_NOT_READY` status after a short delay.
 *
 * @alpha
 *
 * Required Scopes: [api:agents-write]
 * URL: /v2/agents/agentSessions/{agentSessionId}/sendEvent
 */
export function sendEvent(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    agentSessionId: _Agents.SessionId,
    $body: _Agents.SendEventRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Agents.SendEventResponse> {
  return $foundryPlatformFetch($ctx, _sendEvent, ...args);
}

const _getSessionState: $FoundryPlatformMethod<
  (
    agentSessionId: _Agents.SessionId,
    $queryParams?: {
      consistencyKey?: _Agents.ConsistencyKey | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<_Agents.GetStateResponse>
> = [0, "/v2/agents/agentSessions/{0}/getSessionState", 2];

/**
 * Get the state of an Agent session.
 *
 * @alpha
 *
 * Required Scopes: [api:agents-read]
 * URL: /v2/agents/agentSessions/{agentSessionId}/getSessionState
 */
export function getSessionState(
  $ctx: $Client | $ClientContext | $OldClient | $OldClientContext,
  ...args: [
    agentSessionId: _Agents.SessionId,

    $queryParams?: {
      consistencyKey?: _Agents.ConsistencyKey | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<_Agents.GetStateResponse> {
  return $foundryPlatformFetch($ctx, _getSessionState, ...args);
}
