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

import type { ApiSpec } from "../ir/ApiSpec.js";
import { Admin_v2 } from "./namespaces/Admin_v2.js";
import { AipAgents_v2 } from "./namespaces/AipAgents_v2.js";
import { Audit_v2 } from "./namespaces/Audit_v2.js";
import { Checkpoints_v2 } from "./namespaces/Checkpoints_v2.js";
import { Comments_v2 } from "./namespaces/Comments_v2.js";
import { Connectivity_v2 } from "./namespaces/Connectivity_v2.js";
import { Core_v1 } from "./namespaces/Core_v1.js";
import { Core_v2 } from "./namespaces/Core_v2.js";
import { DataHealth_v2 } from "./namespaces/DataHealth_v2.js";
import { Datasets_v1 } from "./namespaces/Datasets_v1.js";
import { Datasets_v2 } from "./namespaces/Datasets_v2.js";
import { Filesystem_v2 } from "./namespaces/Filesystem_v2.js";
import { Functions_v2 } from "./namespaces/Functions_v2.js";
import { Gaia_v2 } from "./namespaces/Gaia_v2.js";
import { Geo_v1 } from "./namespaces/Geo_v1.js";
import { Geo_v2 } from "./namespaces/Geo_v2.js";
import { Geojson_v2 } from "./namespaces/Geojson_v2.js";
import { LanguageModels_v2 } from "./namespaces/LanguageModels_v2.js";
import { Lohi_v2 } from "./namespaces/Lohi_v2.js";
import { MapRendering_v2 } from "./namespaces/MapRendering_v2.js";
import { MediaSets_v2 } from "./namespaces/MediaSets_v2.js";
import { Models_v2 } from "./namespaces/Models_v2.js";
import { Notepad_v2 } from "./namespaces/Notepad_v2.js";
import { Observability_v2 } from "./namespaces/Observability_v2.js";
import { Ontologies_v1 } from "./namespaces/Ontologies_v1.js";
import { Ontologies_v2 } from "./namespaces/Ontologies_v2.js";
import { OntologyMcp_v2 } from "./namespaces/OntologyMcp_v2.js";
import { Operations_v2 } from "./namespaces/Operations_v2.js";
import { Orchestration_v2 } from "./namespaces/Orchestration_v2.js";
import { Pack_v2 } from "./namespaces/Pack_v2.js";
import { PublicApis_v2 } from "./namespaces/PublicApis_v2.js";
import { ResourceManagement_v2 } from "./namespaces/ResourceManagement_v2.js";
import { Sds_v2 } from "./namespaces/Sds_v2.js";
import { SqlQueries_v2 } from "./namespaces/SqlQueries_v2.js";
import { Streams_v2 } from "./namespaces/Streams_v2.js";
import { TargetWorkbench_v2 } from "./namespaces/TargetWorkbench_v2.js";
import { ThirdPartyApplications_v2 } from "./namespaces/ThirdPartyApplications_v2.js";
import { Widgets_v2 } from "./namespaces/Widgets_v2.js";
import { Workbench_v2 } from "./namespaces/Workbench_v2.js";

export const PLATFORM_API_IR: ApiSpec = {
  irVersion: "v2",
  namespaces: [
    ThirdPartyApplications_v2,
    PublicApis_v2,
    TargetWorkbench_v2,
    MediaSets_v2,
    Functions_v2,
    ResourceManagement_v2,
    Geojson_v2,
    Core_v1,
    Core_v2,
    Lohi_v2,
    Ontologies_v2,
    Sds_v2,
    Widgets_v2,
    Ontologies_v1,
    AipAgents_v2,
    Admin_v2,
    Datasets_v2,
    Datasets_v1,
    OntologyMcp_v2,
    Filesystem_v2,
    Connectivity_v2,
    Orchestration_v2,
    DataHealth_v2,
    Observability_v2,
    MapRendering_v2,
    Streams_v2,
    LanguageModels_v2,
    Models_v2,
    Geo_v1,
    Geo_v2,
    Audit_v2,
    SqlQueries_v2,
    Comments_v2,
    Workbench_v2,
    Operations_v2,
    Pack_v2,
    Checkpoints_v2,
    Notepad_v2,
    Gaia_v2,
  ],
};
