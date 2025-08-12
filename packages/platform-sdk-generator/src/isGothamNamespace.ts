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

export function isGothamNamespace(
  ns?: string,
  packagePrefix: string,
): boolean {
  // Always ignored
  switch (ns) {
    case "Operations":
      return true;
    case "Core":
      return false;
  }

  const isFoundryIgnored = () => {
    switch (ns) {
      case "TargetWorkbench":
        return true;
      case "Gaia":
        return true;
      case "MapRendering":
        return true;
    }
    return false;
  };

  if (packagePrefix === "all") {
    return false;
  }

  if (packagePrefix === "gotham") {
    return !isFoundryIgnored();
  }

  // Default behavior is foundry-only
  return isFoundryIgnored();
}
