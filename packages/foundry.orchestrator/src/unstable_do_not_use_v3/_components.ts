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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * The data to attach to a signal completion.
 *
 * Log Safety: UNSAFE
 */
export interface CompleteProcessExecutionSignalRequest {
  payload?: any;
}

/**
   * A single execution of a durable process run by the platform. Durable processes are long-running,
multi-step workflows whose progress is recorded so they can pause and resume reliably.
   *
   * Log Safety: SAFE
   */
export interface ProcessExecution {
  id: ProcessExecutionId;
}

/**
 * Identifies a single execution of a durable process run by the platform.
 *
 * Log Safety: SAFE
 */
export type ProcessExecutionId = LooselyBrandedString<"ProcessExecutionId">;

/**
   * A named condition associated with a process execution. A process execution may wait on one or more
signals whether it is running or suspended; completing them contributes toward the conditions it is
waiting on.
   *
   * Log Safety: UNSAFE
   */
export interface ProcessExecutionSignal {
  id: SignalId;
}

/**
 * Identifies a signal on a process execution.
 *
 * Log Safety: UNSAFE
 */
export type SignalId = LooselyBrandedString<"SignalId">;
