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

import type { ApiSpec } from "../ir/ApiSpec.js";
import { AdminV2 } from "./namespaces/AdminV2.js";
import { AipAgentsV2 } from "./namespaces/AipAgentsV2.js";
import { AuditV2 } from "./namespaces/AuditV2.js";
import { CheckpointsV2 } from "./namespaces/CheckpointsV2.js";
import { CommentsV2 } from "./namespaces/CommentsV2.js";
import { ConnectivityV2 } from "./namespaces/ConnectivityV2.js";
import { CoreV1 } from "./namespaces/CoreV1.js";
import { CoreV2 } from "./namespaces/CoreV2.js";
import { DataHealthV2 } from "./namespaces/DataHealthV2.js";
import { DatasetsV1 } from "./namespaces/DatasetsV1.js";
import { DatasetsV2 } from "./namespaces/DatasetsV2.js";
import { FilesystemV2 } from "./namespaces/FilesystemV2.js";
import { FunctionsV2 } from "./namespaces/FunctionsV2.js";
import { GaiaV2 } from "./namespaces/GaiaV2.js";
import { GeojsonV2 } from "./namespaces/GeojsonV2.js";
import { GeoV1 } from "./namespaces/GeoV1.js";
import { GeoV2 } from "./namespaces/GeoV2.js";
import { LanguageModelsV2 } from "./namespaces/LanguageModelsV2.js";
import { LohiV2 } from "./namespaces/LohiV2.js";
import { MapRenderingV2 } from "./namespaces/MapRenderingV2.js";
import { MediaSetsV2 } from "./namespaces/MediaSetsV2.js";
import { ModelsV2 } from "./namespaces/ModelsV2.js";
import { NotepadV2 } from "./namespaces/NotepadV2.js";
import { ObservabilityV2 } from "./namespaces/ObservabilityV2.js";
import { OntologiesV1 } from "./namespaces/OntologiesV1.js";
import { OntologiesV2 } from "./namespaces/OntologiesV2.js";
import { OntologyMcpV2 } from "./namespaces/OntologyMcpV2.js";
import { OperationsV2 } from "./namespaces/OperationsV2.js";
import { OrchestrationV2 } from "./namespaces/OrchestrationV2.js";
import { PackV2 } from "./namespaces/PackV2.js";
import { PublicApisV2 } from "./namespaces/PublicApisV2.js";
import { ResourceManagementV2 } from "./namespaces/ResourceManagementV2.js";
import { SdsV2 } from "./namespaces/SdsV2.js";
import { SqlQueriesV2 } from "./namespaces/SqlQueriesV2.js";
import { StreamsV2 } from "./namespaces/StreamsV2.js";
import { TargetWorkbenchV2 } from "./namespaces/TargetWorkbenchV2.js";
import { ThirdPartyApplicationsV2 } from "./namespaces/ThirdPartyApplicationsV2.js";
import { WidgetsV2 } from "./namespaces/WidgetsV2.js";
import { WorkbenchV2 } from "./namespaces/WorkbenchV2.js";

export const PLATFORM_API_IR: ApiSpec = {
  irVersion: "v2",
  namespaces: [
    ThirdPartyApplicationsV2,
    PublicApisV2,
    TargetWorkbenchV2,
    MediaSetsV2,
    FunctionsV2,
    ResourceManagementV2,
    GeojsonV2,
    CoreV1,
    CoreV2,
    LohiV2,
    OntologiesV2,
    SdsV2,
    WidgetsV2,
    OntologiesV1,
    AipAgentsV2,
    AdminV2,
    DatasetsV2,
    DatasetsV1,
    OntologyMcpV2,
    FilesystemV2,
    ConnectivityV2,
    OrchestrationV2,
    DataHealthV2,
    ObservabilityV2,
    MapRenderingV2,
    StreamsV2,
    LanguageModelsV2,
    ModelsV2,
    GeoV1,
    GeoV2,
    AuditV2,
    SqlQueriesV2,
    CommentsV2,
    WorkbenchV2,
    OperationsV2,
    PackV2,
    CheckpointsV2,
    NotepadV2,
    GaiaV2,
  ],
};
