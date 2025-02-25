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

import type * as _Core from "@osdk/foundry.core";
import type * as _Geo from "@osdk/foundry.geo";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * ISO 8601 timestamps forming a range for a time series query. Start is inclusive and end is exclusive.
 *
 * Log Safety: UNSAFE
 */
export interface AbsoluteTimeRange {
  startTime?: string;
  endTime?: string;
}

/**
 * Log Safety: UNSAFE
 */
export type Action = LooselyBrandedString<"Action">;

/**
 * Log Safety: SAFE
 */
export type ActionMode = "ASYNC" | "RUN" | "VALIDATE";

/**
 * Log Safety: UNSAFE
 */
export interface ActionParameterArrayType {
  subType: ActionParameterType;
}

/**
 * A union of all the types supported by Ontology Action parameters.
 *
 * Log Safety: UNSAFE
 */
export type ActionParameterType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "interfaceObject" } & OntologyInterfaceObjectType)
  | ({ type: "struct" } & OntologyStructType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "objectType" } & OntologyObjectTypeReferenceType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "marking" } & _Core.MarkingType)
  | ({ type: "attachment" } & _Core.AttachmentType)
  | ({ type: "mediaReference" } & _Core.MediaReferenceType)
  | ({ type: "array" } & ActionParameterArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Details about a parameter of an action.
 *
 * Log Safety: UNSAFE
 */
export interface ActionParameterV2 {
  description?: string;
  dataType: ActionParameterType;
  required: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export type ActionResults =
  | ({ type: "edits" } & ObjectEdits)
  | ({ type: "largeScaleEdits" } & ObjectTypeEdits);

/**
 * The unique resource identifier for an action.
 *
 * Log Safety: SAFE
 */
export type ActionRid = LooselyBrandedString<"ActionRid">;

/**
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionType {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  parameters: Record<ParameterId, Parameter>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
   * The name of the action type in the API. To find the API name for your Action Type, use the List action types
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ActionTypeApiName = LooselyBrandedString<"ActionTypeApiName">;

/**
 * The unique resource identifier of an action type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ActionTypeRid = LooselyBrandedString<"ActionTypeRid">;

/**
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionTypeV2 {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  parameters: Record<ParameterId, ActionParameterV2>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
   * This status indicates that the PropertyType will not change on short notice and should thus be safe to use in
user facing workflows.
   *
   * Log Safety: SAFE
   */
export interface ActivePropertyTypeStatus {}

/**
 * Log Safety: UNSAFE
 */
export interface AddLink {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObject: LinkSideObject;
  bSideObject: LinkSideObject;
}

/**
 * Log Safety: UNSAFE
 */
export interface AddObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectSetRequestV2 {
  aggregation: Array<AggregationV2>;
  objectSet: ObjectSet;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequest {
  aggregation: Array<Aggregation>;
  query?: SearchJsonQuery;
  groupBy: Array<AggregationGroupBy>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequestV2 {
  aggregation: Array<AggregationV2>;
  where?: SearchJsonQueryV2;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponse {
  excludedItems?: number;
  nextPageToken?: _Core.PageToken;
  data: Array<AggregateObjectsResponseItem>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItem {
  group: Record<AggregationGroupKey, AggregationGroupValue>;
  metrics: Array<AggregationMetricResult>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItemV2 {
  group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>;
  metrics: Array<AggregationMetricResultV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseV2 {
  excludedItems?: number;
  accuracy: AggregationAccuracy;
  data: Array<AggregateObjectsResponseItemV2>;
}

/**
 * Specifies an aggregation function.
 *
 * Log Safety: UNSAFE
 */
export type Aggregation =
  | ({ type: "approximateDistinct" } & ApproximateDistinctAggregation)
  | ({ type: "min" } & MinAggregation)
  | ({ type: "avg" } & AvgAggregation)
  | ({ type: "max" } & MaxAggregation)
  | ({ type: "count" } & CountAggregation)
  | ({ type: "sum" } & SumAggregation);

/**
 * Log Safety: SAFE
 */
export type AggregationAccuracy = "ACCURATE" | "APPROXIMATE";

/**
 * Log Safety: SAFE
 */
export type AggregationAccuracyRequest =
  | "REQUIRE_ACCURATE"
  | "ALLOW_APPROXIMATE";

/**
   * Divides objects into groups according to an interval. Note that this grouping applies only on date types.
The interval uses the ISO 8601 notation. For example, "PT1H2M34S" represents a duration of 3754 seconds.
   *
   * Log Safety: UNSAFE
   */
export interface AggregationDurationGrouping {
  field: FieldNameV1;
  duration: Duration;
}

/**
   * Divides objects into groups according to an interval. Note that this grouping applies only on date and timestamp types.
When grouping by YEARS, QUARTERS, MONTHS, or WEEKS, the value must be set to 1.
   *
   * Log Safety: UNSAFE
   */
export interface AggregationDurationGroupingV2 {
  field: PropertyApiName;
  value: number;
  unit: TimeUnit;
}

/**
 * Divides objects into groups according to an exact value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationExactGrouping {
  field: FieldNameV1;
  maxGroupCount?: number;
}

/**
 * Divides objects into groups according to an exact value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationExactGroupingV2 {
  field: PropertyApiName;
  maxGroupCount?: number;
  defaultValue?: string;
}

/**
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGrouping {
  field: FieldNameV1;
  fixedWidth: number;
}

/**
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGroupingV2 {
  field: PropertyApiName;
  fixedWidth: number;
}

/**
 * Specifies a grouping for aggregation results.
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupBy =
  | ({ type: "duration" } & AggregationDurationGrouping)
  | ({ type: "fixedWidth" } & AggregationFixedWidthGrouping)
  | ({ type: "ranges" } & AggregationRangesGrouping)
  | ({ type: "exact" } & AggregationExactGrouping);

/**
 * Specifies a grouping for aggregation results.
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupByV2 =
  | ({ type: "duration" } & AggregationDurationGroupingV2)
  | ({ type: "fixedWidth" } & AggregationFixedWidthGroupingV2)
  | ({ type: "ranges" } & AggregationRangesGroupingV2)
  | ({ type: "exact" } & AggregationExactGroupingV2);

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupKey = LooselyBrandedString<"AggregationGroupKey">;

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupKeyV2 = LooselyBrandedString<
  "AggregationGroupKeyV2"
>;

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupValue = any;

/**
 * Log Safety: UNSAFE
 */
export type AggregationGroupValueV2 = any;

/**
 * A user-specified alias for an aggregation metric name.
 *
 * Log Safety: UNSAFE
 */
export type AggregationMetricName = LooselyBrandedString<
  "AggregationMetricName"
>;

/**
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResult {
  name: string;
  value?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResultV2 {
  name: string;
  value?: any;
}

/**
   * Divides objects into groups based on their object type. This grouping is only useful when aggregating across
multiple object types, such as when aggregating over an interface type.
   *
   * Log Safety: SAFE
   */
export interface AggregationObjectTypeGrouping {}

/**
 * Log Safety: UNSAFE
 */
export interface AggregationOrderBy {
  metricName: string;
}

/**
 * Specifies a date range from an inclusive start date to an exclusive end date.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRange {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGrouping {
  field: FieldNameV1;
  ranges: Array<AggregationRange>;
}

/**
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGroupingV2 {
  field: PropertyApiName;
  ranges: Array<AggregationRangeV2>;
}

/**
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangeV2 {
  startValue: any;
  endValue: any;
}

/**
 * Specifies an aggregation function.
 *
 * Log Safety: UNSAFE
 */
export type AggregationV2 =
  | ({ type: "approximateDistinct" } & ApproximateDistinctAggregationV2)
  | ({ type: "min" } & MinAggregationV2)
  | ({ type: "avg" } & AvgAggregationV2)
  | ({ type: "max" } & MaxAggregationV2)
  | ({ type: "approximatePercentile" } & ApproximatePercentileAggregationV2)
  | ({ type: "count" } & CountAggregationV2)
  | ({ type: "sum" } & SumAggregationV2)
  | ({ type: "exactDistinct" } & ExactDistinctAggregationV2);

/**
   * Returns objects where the specified field contains all of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface AllTermsQuery {
  field: FieldNameV1;
  value: string;
  fuzzy?: Fuzzy;
}

/**
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
   * Returns objects where the specified field contains any of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching.
   *
   * Log Safety: UNSAFE
   */
export interface AnyTermQuery {
  field: FieldNameV1;
  value: string;
  fuzzy?: Fuzzy;
}

/**
 * Log Safety: SAFE
 */
export type ApplyActionMode = "VALIDATE_ONLY" | "VALIDATE_AND_EXECUTE";

/**
 * Log Safety: UNSAFE
 */
export interface ApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: SAFE
 */
export interface ApplyActionRequestOptions {
  mode?: ApplyActionMode;
  returnEdits?: ReturnEditsMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface ApplyActionRequestV2 {
  options?: ApplyActionRequestOptions;
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: SAFE
 */
export interface ApplyActionResponse {}

/**
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximateDistinctAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximateDistinctAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Computes the approximate percentile value for the provided field. Requires Object Storage V2.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximatePercentileAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  approximatePercentile: number;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface Arg {
  name: string;
  value: string;
}

/**
 * The parameter expects an array of values and the size of the array must fall within the defined range.
 *
 * Log Safety: UNSAFE
 */
export interface ArraySizeConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Log Safety: SAFE
 */
export type ArtifactRepositoryRid = LooselyBrandedString<
  "ArtifactRepositoryRid"
>;

/**
 * Log Safety: SAFE
 */
export type AsyncActionOperation = undefined; // {"locator":{"namespaceName":"Ontologies","localName":"AsyncActionOperation"},"type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsync","resultType":{"locator":{"namespaceName":"Ontologies","localName":"AsyncApplyActionResponse"}},"stageType":{"locator":{"namespaceName":"Ontologies","localName":"AsyncActionStatus"}}}},"safety":"SAFE","documentation":{"example":[]}}

/**
 * Log Safety: SAFE
 */
export type AsyncActionStatus =
  | "RUNNING_SUBMISSION_CHECKS"
  | "EXECUTING_WRITE_BACK_WEBHOOK"
  | "COMPUTING_ONTOLOGY_EDITS"
  | "COMPUTING_FUNCTION"
  | "WRITING_ONTOLOGY_EDITS"
  | "EXECUTING_SIDE_EFFECT_WEBHOOK"
  | "SENDING_NOTIFICATIONS";

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionOperationResponseV2 {}

/**
 * Log Safety: SAFE
 */
export type AsyncApplyActionOperationV2 = undefined; // {"locator":{"namespaceName":"Ontologies","localName":"AsyncApplyActionOperationV2"},"type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsyncV2","resultType":{"locator":{"namespaceName":"Ontologies","localName":"AsyncApplyActionOperationResponseV2"}},"stageType":{"locator":{"namespaceName":"Ontologies","localName":"AsyncActionStatus"}}}},"safety":"SAFE","documentation":{"example":[]}}

/**
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequestV2 {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponse {}

/**
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponseV2 {
  operationId: string;
}

/**
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface Attachment {
  rid: AttachmentRid;
  filename: _Core.Filename;
  sizeBytes: _Core.SizeBytes;
  mediaType: _Core.MediaType;
}

/**
 * The attachment metadata response
 *
 * Log Safety: UNSAFE
 */
export type AttachmentMetadataResponse =
  | ({ type: "single" } & AttachmentV2)
  | ({ type: "multiple" } & ListAttachmentsResponseV2);

/**
 * The representation of an attachment as a data type.
 *
 * Log Safety: SAFE
 */
export interface AttachmentProperty {
  rid: AttachmentRid;
}

/**
 * Log Safety: UNSAFE
 */
export type AttachmentPropertyV2 = LooselyBrandedString<"AttachmentPropertyV2">;

/**
 * The unique resource identifier of an attachment.
 *
 * Log Safety: SAFE
 */
export type AttachmentRid = LooselyBrandedString<"AttachmentRid">;

/**
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface AttachmentV2 {
  rid: AttachmentRid;
  filename: _Core.Filename;
  sizeBytes: _Core.SizeBytes;
  mediaType: _Core.MediaType;
}

/**
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface AvgAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface AvgAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequest {
  requests: Array<ApplyActionRequest>;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestItem {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: SAFE
 */
export interface BatchApplyActionRequestOptions {
  returnEdits?: ReturnEditsMode;
}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestV2 {
  options?: BatchApplyActionRequestOptions;
  requests: Array<BatchApplyActionRequestItem>;
}

/**
 * Log Safety: SAFE
 */
export interface BatchApplyActionResponse {}

/**
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionResponseV2 {
  edits?: ActionResults;
}

/**
 * Log Safety: UNSAFE
 */
export interface BlueprintIcon {
  color: string;
  name: string;
}

/**
 * The top left and bottom right coordinate points that make up the bounding box.
 *
 * Log Safety: UNSAFE
 */
export interface BoundingBoxValue {
  topLeft: WithinBoundingBoxPoint;
  bottomRight: WithinBoundingBoxPoint;
}

/**
 * The coordinate point to use as the center of the distance query.
 *
 * Log Safety: UNSAFE
 */
export interface CenterPoint {
  center: CenterPointTypes;
  distance: _Core.Distance;
}

/**
 * Log Safety: UNSAFE
 */
export type CenterPointTypes = { type: "Point" } & _Geo.GeoPoint;

/**
   * Returns objects where the specified field contains all of the terms in the order provided,
but they do have to be adjacent to each other.
The last term can be a partial prefix match. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier can be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsInOrderPrefixLastTerm {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
}

/**
   * Returns objects where the specified field contains all of the terms in the order provided,
but they do have to be adjacent to each other. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsInOrderQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
}

/**
   * Returns objects where the specified field contains all of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAllTermsQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
  fuzzy?: FuzzyV2;
}

/**
   * Returns objects where the specified field contains any of the whitespace separated words in any
order in the provided value. This query supports fuzzy matching. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsAnyTermQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
  fuzzy?: FuzzyV2;
}

/**
 * Returns objects where the specified array contains a value.
 *
 * Log Safety: UNSAFE
 */
export interface ContainsQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified array contains a value. Allows you to specify a property to query on by a
variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface ContainsQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregation {
  name?: AggregationMetricName;
}

/**
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregationV2 {
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface CountObjectsResponseV2 {
  count?: number;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface CreateTemporaryObjectSetRequestV2 {
  objectSet: ObjectSet;
}

/**
 * Log Safety: SAFE
 */
export interface CreateTemporaryObjectSetResponseV2 {
  objectSetRid: ObjectSetRid;
}

/**
 * A UUID representing a custom type in a given Function.
 *
 * Log Safety: SAFE
 */
export type CustomTypeId = LooselyBrandedString<"CustomTypeId">;

/**
   * Represents the value of data in the following format. Note that these values can be nested, for example an array of structs.
| Type                                | JSON encoding                                         | Example                                                                                                                                                       |
|-------------------------------------|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Array                               | array                                                 | ["alpha", "bravo", "charlie"]                                                                                                                               |
| Attachment                          | string                                                | "ri.attachments.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"                                                                                       |
| Boolean                             | boolean                                               | true                                                                                                                                                        |
| Byte                                | number                                                | 31                                                                                                                                                          |
| CipherText                          | string                                                | "CIPHER::ri.bellaso.main.cipher-channel.e414ab9e-b606-499a-a0e1-844fa296ba7e::unzjs3VifsTxuIpf1fH1CJ7OaPBr2bzMMdozPaZJtCii8vVG60yXIEmzoOJaEl9mfFFe::CIPHER" |
| Date                                | ISO 8601 extended local date string                   | "2021-05-01"                                                                                                                                                |
| Decimal                             | string                                                | "2.718281828"                                                                                                                                               |
| Double                              | number                                                | 3.14159265                                                                                                                                                  |
| EntrySet                            | array of JSON objects                                 | [{"key": "EMP1234", "value": "true"}, {"key": "EMP4444", "value": "false"}]                                                                                 |
| Float                               | number                                                | 3.14159265                                                                                                                                                  |
| Integer                             | number                                                | 238940                                                                                                                                                      |
| Long                                | string                                                | "58319870951433"                                                                                                                                            |
| Marking                             | string                                                | "MU"                                                                                                                                                        |
| Null                                | null                                                  | null                                                                                                                                                        |
| Object Set                          | string OR the object set definition                   | ri.object-set.main.versioned-object-set.h13274m8-23f5-431c-8aee-a4554157c57z                                                                                |
| Ontology Object Reference           | JSON encoding of the object's primary key             | 10033123 or "EMP1234"                                                                                                                                     |
| Ontology Interface Object Reference | JSON encoding of the object's api name and primary key| {"objectTypeApiName":"Employee", "primaryKeyValue":"EMP1234"}                                                                                               |
| Ontology Object Type Reference      | string of the object type's api name                  | "Employee"                                                                                                                                                  |
| Set                                 | array                                                 | ["alpha", "bravo", "charlie"]                                                                                                                               |
| Short                               | number                                                | 8739                                                                                                                                                        |
| String                              | string                                                | "Call me Ishmael"                                                                                                                                           |
| Struct                              | JSON object                                           | {"name": "John Doe", "age": 42}                                                                                                                             |
| TwoDimensionalAggregation           | JSON object                                           | {"groups": [{"key": "alpha", "value": 100}, {"key": "beta", "value": 101}]}                                                                                 |
| ThreeDimensionalAggregation         | JSON object                                           | {"groups": [{"key": "NYC", "groups": [{"key": "Engineer", "value" : 100}]}]}                                                                                |
| Timestamp                           | ISO 8601 extended offset date-time string in UTC zone | "2021-01-04T05:00:00Z"                                                                                                                                      |
   *
   * Log Safety: UNSAFE
   */
export type DataValue = any;

/**
 * Log Safety: UNSAFE
 */
export interface DeleteInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface DeleteLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface DeleteObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
   * This status indicates that the PropertyType is reaching the end of its life and will be removed as per the
deadline specified.
   *
   * Log Safety: UNSAFE
   */
export interface DeprecatedPropertyTypeStatus {
  message: string;
  deadline: string;
  replacedBy?: PropertyTypeRid;
}

/**
 * The name of the derived property that will be returned.
 *
 * Log Safety: UNSAFE
 */
export type DerivedPropertyApiName = LooselyBrandedString<
  "DerivedPropertyApiName"
>;

/**
 * Definition of a derived property.
 *
 * Log Safety: UNSAFE
 */
export type DerivedPropertyDefinition = {
  type: "selection";
} & SelectedPropertyDefinition;

/**
 * The representation of a time series property backed by a derived time series calculated with a formula.
 *
 * Log Safety: UNSAFE
 */
export interface DerivedTimeSeriesProperty {
  templateRid: TimeseriesTemplateRid;
  templateVersion?: TimeseriesTemplateVersion;
}

/**
   * Returns objects where the specified field does not intersect the bounding box provided. Allows you to specify a
property to query on by a variety of means. Either field or propertyIdentifier must be supplied, but not
both.
   *
   * Log Safety: UNSAFE
   */
export interface DoesNotIntersectBoundingBoxQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: BoundingBoxValue;
}

/**
   * Returns objects where the specified field does not intersect the polygon provided. Allows you to specify a
property to query on by a variety of means. Either field or propertyIdentifier must be supplied, but not
both.
   *
   * Log Safety: UNSAFE
   */
export interface DoesNotIntersectPolygonQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PolygonValue;
}

/**
   * The vector to search with. The vector must be of the same dimension as the vectors stored in the provided
propertyIdentifier.
   *
   * Log Safety: UNSAFE
   */
export interface DoubleVector {
  value: Array<number>;
}

/**
 * An ISO 8601 formatted duration.
 *
 * Log Safety: UNSAFE
 */
export type Duration = LooselyBrandedString<"Duration">;

/**
 * Log Safety: UNSAFE
 */
export interface EntrySetType {
  keyType: QueryDataType;
  valueType: QueryDataType;
}

/**
 * Returns objects where the specified field is equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface EqualsQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified field is equal to a value. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface EqualsQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Log Safety: UNSAFE
 */
export interface Error {
  error: ErrorName;
  args: Array<Arg>;
}

/**
 * Log Safety: SAFE
 */
export type ErrorName = LooselyBrandedString<"ErrorName">;

/**
 * Computes an exact number of distinct values for the provided field. May be slower than an approximate distinct aggregation. Requires Object Storage V2.
 *
 * Log Safety: UNSAFE
 */
export interface ExactDistinctAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
   * This status indicates that the PropertyType is an example. It is backed by notional data that should not be
used for actual workflows, but can be used to test those workflows.
   *
   * Log Safety: SAFE
   */
export interface ExamplePropertyTypeStatus {}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryResponse {
  value: DataValue;
}

/**
 * This status indicates that the PropertyType is in development.
 *
 * Log Safety: SAFE
 */
export interface ExperimentalPropertyTypeStatus {}

/**
 * A reference to an Ontology object property with the form properties.{propertyApiName}.
 *
 * Log Safety: UNSAFE
 */
export type FieldNameV1 = LooselyBrandedString<"FieldNameV1">;

/**
   * Represents the value of a property filter. For instance, false is the FilterValue in
properties.{propertyApiName}.isNull=false.
   *
   * Log Safety: UNSAFE
   */
export type FilterValue = LooselyBrandedString<"FilterValue">;

/**
 * The unique resource identifier of a Function, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type FunctionRid = LooselyBrandedString<"FunctionRid">;

/**
   * The version of the given Function, written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type FunctionVersion = LooselyBrandedString<"FunctionVersion">;

/**
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type Fuzzy = boolean;

/**
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type FuzzyV2 = boolean;

/**
 * The unique id of a geotime series (track) associated with a GTSR.
 *
 * Log Safety: UNSAFE
 */
export type GeotimeSeriesId = LooselyBrandedString<"GeotimeSeriesId">;

/**
 * The unique resource identifier of a geotime integration.
 *
 * Log Safety: SAFE
 */
export type GeotimeSeriesIntegrationRid = LooselyBrandedString<
  "GeotimeSeriesIntegrationRid"
>;

/**
 * The representation of a geotime series integration as a data type.
 *
 * Log Safety: UNSAFE
 */
export interface GeotimeSeriesProperty {
  geotimeSeriesId: GeotimeSeriesId;
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}

/**
 * The underlying data values pointed to by a GeotimeSeriesReference.
 *
 * Log Safety: UNSAFE
 */
export interface GeotimeSeriesValue {
  position: _Geo.Position;
  timestamp: string;
}

/**
   * Gets a single value of a property. Throws if the target object set is on the MANY side of the link and could
explode the cardinality.
Use collectList or collectSet which will return a list of values in that case.
   *
   * Log Safety: UNSAFE
   */
export interface GetSelectedPropertyOperation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * The parameter value must be the user id of a member belonging to at least one of the groups defined by the constraint.
 *
 * Log Safety: SAFE
 */
export interface GroupMemberConstraint {}

/**
 * Returns objects where the specified field is greater than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface GteQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified field is greater than or equal to a value. Allows you to specify a property
to query on by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface GteQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field is greater than a value.
 *
 * Log Safety: UNSAFE
 */
export interface GtQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified field is greater than a value. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface GtQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * A union currently only consisting of the BlueprintIcon (more icon types may be added in the future).
 *
 * Log Safety: UNSAFE
 */
export type Icon = { type: "blueprint" } & BlueprintIcon;

/**
   * Returns objects where the specified field equals any of the provided values. Allows you to
specify a property to query on by a variety of means. Either field or propertyIdentifier must be supplied,
but not both.
   *
   * Log Safety: UNSAFE
   */
export interface InQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: Array<PropertyValue>;
}

/**
   * A link type constraint defined at the interface level where the implementation of the links is provided
by the implementing object types.
   *
   * Log Safety: UNSAFE
   */
export interface InterfaceLinkType {
  rid: InterfaceLinkTypeRid;
  apiName: InterfaceLinkTypeApiName;
  displayName: _Core.DisplayName;
  description?: string;
  linkedEntityApiName: InterfaceLinkTypeLinkedEntityApiName;
  cardinality: InterfaceLinkTypeCardinality;
  required: boolean;
}

/**
 * A string indicating the API name to use for the interface link.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeApiName = LooselyBrandedString<
  "InterfaceLinkTypeApiName"
>;

/**
   * The cardinality of the link in the given direction. Cardinality can be "ONE", meaning an object can
link to zero or one other objects, or "MANY", meaning an object can link to any number of other objects.
   *
   * Log Safety: SAFE
   */
export type InterfaceLinkTypeCardinality = "ONE" | "MANY";

/**
 * A reference to the linked entity. This can either be an object or an interface type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeLinkedEntityApiName =
  | ({ type: "objectTypeApiName" } & LinkedObjectTypeApiName)
  | ({ type: "interfaceTypeApiName" } & LinkedInterfaceTypeApiName);

/**
 * The unique resource identifier of an interface link type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceLinkTypeRid = LooselyBrandedString<"InterfaceLinkTypeRid">;

/**
   * A shared property type with an additional field to indicate whether the property must be included on every
object type that implements the interface, or whether it is optional.
   *
   * Log Safety: UNSAFE
   */
export interface InterfaceSharedPropertyType {
  rid: SharedPropertyTypeRid;
  apiName: SharedPropertyTypeApiName;
  displayName: _Core.DisplayName;
  description?: string;
  dataType: ObjectPropertyType;
  required: boolean;
}

/**
 * Represents an implementation of an interface (the mapping of interface property to local property).
 *
 * Log Safety: UNSAFE
 */
export type InterfaceToObjectTypeMapping = Record<
  SharedPropertyTypeApiName,
  PropertyApiName
>;

/**
 * Map from object type to the interface-to-object-type mapping for that object type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceToObjectTypeMappings = Record<
  ObjectTypeApiName,
  InterfaceToObjectTypeMapping
>;

/**
 * Represents an interface type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface InterfaceType {
  rid: InterfaceTypeRid;
  apiName: InterfaceTypeApiName;
  displayName: _Core.DisplayName;
  description?: string;
  properties: Record<SharedPropertyTypeApiName, InterfaceSharedPropertyType>;
  allProperties: Record<SharedPropertyTypeApiName, InterfaceSharedPropertyType>;
  extendsInterfaces: Array<InterfaceTypeApiName>;
  allExtendsInterfaces: Array<InterfaceTypeApiName>;
  implementedByObjectTypes: Array<ObjectTypeApiName>;
  links: Record<InterfaceLinkTypeApiName, InterfaceLinkType>;
  allLinks: Record<InterfaceLinkTypeApiName, InterfaceLinkType>;
}

/**
   * The name of the interface type in the API in UpperCamelCase format. To find the API name for your interface
type, use the List interface types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type InterfaceTypeApiName = LooselyBrandedString<"InterfaceTypeApiName">;

/**
 * The unique resource identifier of an interface, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceTypeRid = LooselyBrandedString<"InterfaceTypeRid">;

/**
   * Returns objects where the specified field intersects the bounding box provided. Allows you to specify a property
to query on by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface IntersectsBoundingBoxQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: BoundingBoxValue;
}

/**
   * Returns objects where the specified field intersects the polygon provided. Allows you to specify a property to
query on by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface IntersectsPolygonQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PolygonValue;
}

/**
 * Returns objects based on the existence of the specified field.
 *
 * Log Safety: UNSAFE
 */
export interface IsNullQuery {
  field: FieldNameV1;
  value: boolean;
}

/**
   * Returns objects based on the existence of the specified field. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface IsNullQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: boolean;
}

/**
 * A reference to the linked interface type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedInterfaceTypeApiName {
  apiName: InterfaceTypeApiName;
}

/**
 * A reference to the linked object type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedObjectTypeApiName {
  apiName: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export type LinkedObjectV2 = LooselyBrandedString<"LinkedObjectV2">;

/**
 * Log Safety: UNSAFE
 */
export interface LinkSideObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
   * The name of the link type in the API. To find the API name for your Link Type, check the Ontology Manager
application.
   *
   * Log Safety: UNSAFE
   */
export type LinkTypeApiName = LooselyBrandedString<"LinkTypeApiName">;

/**
 * Log Safety: SAFE
 */
export type LinkTypeRid = LooselyBrandedString<"LinkTypeRid">;

/**
 * Log Safety: UNSAFE
 */
export interface LinkTypeSide {
  apiName: LinkTypeApiName;
  displayName: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
}

/**
 * Log Safety: SAFE
 */
export type LinkTypeSideCardinality = "ONE" | "MANY";

/**
 * Log Safety: UNSAFE
 */
export interface LinkTypeSideV2 {
  apiName: LinkTypeApiName;
  displayName: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
  linkTypeRid: LinkTypeRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<ActionType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponseV2 {
  nextPageToken?: _Core.PageToken;
  data: Array<ActionTypeV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListAttachmentsResponseV2 {
  data: Array<AttachmentV2>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListInterfaceTypesResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<InterfaceType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<OntologyObject>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<OntologyObject>;
  totalCount: _Core.TotalCount;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponseV2 {
  nextPageToken?: _Core.PageToken;
  data: Array<OntologyObjectV2>;
  totalCount: _Core.TotalCount;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectTypesResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<ObjectType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListObjectTypesV2Response {
  nextPageToken?: _Core.PageToken;
  data: Array<ObjectTypeV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOntologiesResponse {
  data: Array<Ontology>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOntologiesV2Response {
  data: Array<OntologyV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<LinkTypeSide>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponseV2 {
  nextPageToken?: _Core.PageToken;
  data: Array<LinkTypeSideV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponse {
  nextPageToken?: _Core.PageToken;
  data: Array<QueryType>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponseV2 {
  nextPageToken?: _Core.PageToken;
  data: Array<QueryTypeV2>;
}

/**
 * Represents the API POST body when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetRequestV2 {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: _Core.PageToken;
  pageSize?: _Core.PageSize;
  excludeRid?: boolean;
}

/**
 * Represents the API response when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: _Core.PageToken;
  totalCount: _Core.TotalCount;
}

/**
 * Represents the API POST body when loading an ObjectSet. Used on the /loadObjectsMultipleObjectTypes endpoint only.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetV2MultipleObjectTypesRequest {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: _Core.PageToken;
  pageSize?: _Core.PageSize;
  excludeRid?: boolean;
}

/**
   * Represents the API response when loading an ObjectSet. An interfaceToObjectTypeMappings field is
optionally returned if the type scope of the returned object set includes any interfaces. The "type scope"
of an object set refers to whether objects contain all their properties (object-type type scope) or just the
properties that implement interface properties (interface type scope). There can be multiple type scopes in a
single object set- some objects may have all their properties and some may only have interface properties.
The interfaceToObjectTypeMappings field contains mappings from SharedPropertyTypeApiNames on the interface(s) to
PropertyApiName for properties on the object(s).
   *
   * Log Safety: UNSAFE
   */
export interface LoadObjectSetV2MultipleObjectTypesResponse {
  data: Array<OntologyObjectV2>;
  nextPageToken?: _Core.PageToken;
  totalCount: _Core.TotalCount;
  interfaceToObjectTypeMappings: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  >;
}

/**
 * Represents the API POST body when loading an ObjectSet. Used on the /loadObjectsOrInterfaces endpoint only.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetV2ObjectsOrInterfacesRequest {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: _Core.PageToken;
  pageSize?: _Core.PageSize;
  excludeRid?: boolean;
}

/**
   * Represents the API response when loading an ObjectSet. Objects in the returned set can either have properties
defined by an interface that the objects belong to or properties defined by the object type of the object.
   *
   * Log Safety: UNSAFE
   */
export interface LoadObjectSetV2ObjectsOrInterfacesResponse {
  data: Array<OntologyObjectV2>;
  nextPageToken?: _Core.PageToken;
  totalCount: _Core.TotalCount;
}

/**
 * Log Safety: UNSAFE
 */
export type LogicRule =
  | ({ type: "deleteInterfaceObject" } & DeleteInterfaceObjectRule)
  | ({ type: "modifyInterfaceObject" } & ModifyInterfaceObjectRule)
  | ({ type: "modifyObject" } & ModifyObjectRule)
  | ({ type: "deleteObject" } & DeleteObjectRule)
  | ({ type: "createInterfaceObject" } & CreateInterfaceObjectRule)
  | ({ type: "deleteLink" } & DeleteLinkRule)
  | ({ type: "createObject" } & CreateObjectRule)
  | ({ type: "createLink" } & CreateLinkRule);

/**
 * Returns objects where the specified field is less than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface LteQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified field is less than or equal to a value. Allows you to specify a property to
query on by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface LteQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field is less than a value.
 *
 * Log Safety: UNSAFE
 */
export interface LtQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
   * Returns objects where the specified field is less than a value. Allows you to specify a property to query on
by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface LtQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MaxAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MaxAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface MediaMetadata {
  path?: _Core.MediaItemPath;
  sizeBytes: _Core.SizeBytes;
  mediaType: _Core.MediaType;
}

/**
 * Log Safety: UNSAFE
 */
export type MediaReferenceProperty = LooselyBrandedString<
  "MediaReferenceProperty"
>;

/**
 * Log Safety: UNSAFE
 */
export type MethodObjectSet = ObjectSet;

/**
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MinAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MinAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface ModifyObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
   * Queries support either a vector matching the embedding model defined on the property, or text that is
automatically embedded.
   *
   * Log Safety: UNSAFE
   */
export type NearestNeighborsQuery =
  | ({ type: "vector" } & DoubleVector)
  | ({ type: "text" } & NearestNeighborsQueryText);

/**
 * Automatically embed the text in a vector using the embedding model configured for the given propertyIdentifier.
 *
 * Log Safety: UNSAFE
 */
export interface NearestNeighborsQueryText {
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface NestedQueryAggregation {
  key: any;
  groups: Array<QueryAggregation>;
}

/**
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQuery {
  value: SearchJsonQuery;
}

/**
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQueryV2 {
  value: SearchJsonQueryV2;
}

/**
 * Log Safety: UNSAFE
 */
export type ObjectEdit =
  | ({ type: "modifyObject" } & ModifyObject)
  | ({ type: "addObject" } & AddObject)
  | ({ type: "addLink" } & AddLink);

/**
 * Log Safety: UNSAFE
 */
export interface ObjectEdits {
  edits: Array<ObjectEdit>;
  addedObjectCount: number;
  modifiedObjectsCount: number;
  deletedObjectsCount: number;
  addedLinksCount: number;
  deletedLinksCount: number;
}

/**
 * Log Safety: UNSAFE
 */
export type ObjectPrimaryKey = Record<PropertyApiName, PropertyValue>;

/**
 * A union of all the types supported by Ontology Object properties.
 *
 * Log Safety: UNSAFE
 */
export type ObjectPropertyType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & StructType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "byte" } & _Core.ByteType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "geopoint" } & _Core.GeoPointType)
  | ({ type: "geotimeSeriesReference" } & _Core.GeotimeSeriesReferenceType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "geoshape" } & _Core.GeoShapeType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "cipherText" } & _Core.CipherTextType)
  | ({ type: "marking" } & _Core.MarkingType)
  | ({ type: "attachment" } & _Core.AttachmentType)
  | ({ type: "mediaReference" } & _Core.MediaReferenceType)
  | ({ type: "timeseries" } & _Core.TimeseriesType)
  | ({ type: "array" } & OntologyObjectArrayType)
  | ({ type: "short" } & _Core.ShortType)
  | ({ type: "vector" } & _Core.VectorType)
  | ({ type: "decimal" } & _Core.DecimalType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * The parameter value must be a property value of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectPropertyValueConstraint {}

/**
 * The parameter value must be the primary key of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectQueryResultConstraint {}

/**
 * The unique resource identifier of an object, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectRid = LooselyBrandedString<"ObjectRid">;

/**
 * Represents the definition of an ObjectSet in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type ObjectSet =
  | ({ type: "searchAround" } & ObjectSetSearchAroundType)
  | ({ type: "static" } & ObjectSetStaticType)
  | ({ type: "intersect" } & ObjectSetIntersectionType)
  | ({ type: "withProperties" } & ObjectSetWithPropertiesType)
  | ({ type: "subtract" } & ObjectSetSubtractType)
  | ({ type: "nearestNeighbors" } & ObjectSetNearestNeighborsType)
  | ({ type: "union" } & ObjectSetUnionType)
  | ({ type: "asType" } & ObjectSetAsTypeType)
  | ({ type: "methodInput" } & ObjectSetMethodInputType)
  | ({ type: "reference" } & ObjectSetReferenceType)
  | ({ type: "filter" } & ObjectSetFilterType)
  | ({ type: "interfaceBase" } & ObjectSetInterfaceBaseType)
  | ({ type: "asBaseObjectTypes" } & ObjectSetAsBaseObjectTypesType)
  | ({ type: "base" } & ObjectSetBaseType);

/**
   * Casts the objects in the object set to their base type and thus ensures objects are returned with all of their
properties in the resulting object set, not just the properties that implement interface properties. This is
currently unsupported and an exception will be thrown if used.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetAsBaseObjectTypesType {
  objectSet: ObjectSet;
}

/**
   * Casts an object set to a specified object type or interface type API name. Any object whose object type does
not match the object type provided or implement the interface type provided will be dropped from the resulting
object set. This is currently unsupported and an exception will be thrown if used.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetAsTypeType {
  entityType: string;
  objectSet: ObjectSet;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetBaseType {
  objectType: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetFilterType {
  objectSet: ObjectSet;
  where: SearchJsonQueryV2;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetInterfaceBaseType {
  interfaceType: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetIntersectionType {
  objectSets: Array<ObjectSet>;
}

/**
   * ObjectSet which is the root of a MethodObjectSet definition.
This feature is experimental and not yet generally available.
   *
   * Log Safety: SAFE
   */
export interface ObjectSetMethodInputType {}

/**
   * ObjectSet containing the top numNeighbors objects with propertyIdentifier nearest to the input vector or
text. This can only be performed on a property with type vector that has been configured to be searched with
approximate nearest neighbors using a similarity function configured in the Ontology.
A non-zero score for each resulting object is returned when the orderType in the orderBy field is set to
relevance. Note that:

Scores will not be returned if a nearestNeighbors object set is composed through union, subtraction
or intersection with non-nearestNeighbors object sets.
If results have scores, the order of the scores will be decreasing (duplicate scores are possible).
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetNearestNeighborsType {
  objectSet: ObjectSet;
  propertyIdentifier: PropertyIdentifier;
  numNeighbors: number;
  query: NearestNeighborsQuery;
}

/**
 * Log Safety: SAFE
 */
export interface ObjectSetReferenceType {
  reference: ObjectSetRid;
}

/**
 * Log Safety: SAFE
 */
export type ObjectSetRid = LooselyBrandedString<"ObjectSetRid">;

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetSearchAroundType {
  objectSet: ObjectSet;
  link: LinkTypeApiName;
}

/**
 * Log Safety: SAFE
 */
export interface ObjectSetStaticType {
  objects: Array<ObjectRid>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetStreamSubscribeRequest {
  objectSet: ObjectSet;
  propertySet: Array<SelectedPropertyApiName>;
  referenceSet: Array<SelectedPropertyApiName>;
}

/**
   * The list of object sets that should be subscribed to. A client can stop subscribing to an object set
by removing the request from subsequent ObjectSetStreamSubscribeRequests.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetStreamSubscribeRequests {
  id: RequestId;
  requests: Array<ObjectSetStreamSubscribeRequest>;
}

/**
 * Log Safety: UNSAFE
 */
export type ObjectSetSubscribeResponse =
  | ({ type: "qos" } & QosError)
  | ({ type: "success" } & SubscriptionSuccess)
  | ({ type: "error" } & SubscriptionError);

/**
 * Returns a response for every request in the same order. Duplicate requests will be assigned the same SubscriberId.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetSubscribeResponses {
  responses: Array<ObjectSetSubscribeResponse>;
  id: RequestId;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetSubtractType {
  objectSets: Array<ObjectSet>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetUnionType {
  objectSets: Array<ObjectSet>;
}

/**
 * Log Safety: UNSAFE
 */
export type ObjectSetUpdate =
  | ({ type: "reference" } & ReferenceUpdate)
  | ({ type: "object" } & ObjectUpdate);

/**
 * Log Safety: UNSAFE
 */
export interface ObjectSetUpdates {
  id: SubscriptionId;
  updates: Array<ObjectSetUpdate>;
}

/**
   * ObjectSet which returns objects with additional derived properties.
This feature is experimental and not yet generally available.
   *
   * Log Safety: UNSAFE
   */
export interface ObjectSetWithPropertiesType {
  objectSet: ObjectSet;
  derivedProperties: Record<DerivedPropertyApiName, DerivedPropertyDefinition>;
}

/**
   * Represents the state of the object within the object set. ADDED_OR_UPDATED indicates that the object was
added to the set or the object has updated and was previously in the set. REMOVED indicates that the object
was removed from the set due to the object being deleted or the object no longer meets the object set
definition.
   *
   * Log Safety: SAFE
   */
export type ObjectState = "ADDED_OR_UPDATED" | "REMOVED";

/**
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectType {
  apiName: ObjectTypeApiName;
  displayName?: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  description?: string;
  visibility?: ObjectTypeVisibility;
  primaryKey: Array<PropertyApiName>;
  properties: Record<PropertyApiName, Property>;
  rid: ObjectTypeRid;
}

/**
   * The name of the object type in the API in camelCase format. To find the API name for your Object Type, use the
List object types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ObjectTypeApiName = LooselyBrandedString<"ObjectTypeApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface ObjectTypeEdits {
  editedObjectTypes: Array<ObjectTypeApiName>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ObjectTypeFullMetadata {
  objectType: ObjectTypeV2;
  linkTypes: Array<LinkTypeSideV2>;
  implementsInterfaces: Array<InterfaceTypeApiName>;
  implementsInterfaces2: Record<
    InterfaceTypeApiName,
    ObjectTypeInterfaceImplementation
  >;
  sharedPropertyTypeMapping: Record<SharedPropertyTypeApiName, PropertyApiName>;
}

/**
 * The unique identifier (ID) for an object type. This can be viewed in Ontology Manager.
 *
 * Log Safety: UNSAFE
 */
export type ObjectTypeId = LooselyBrandedString<"ObjectTypeId">;

/**
 * Log Safety: UNSAFE
 */
export interface ObjectTypeInterfaceImplementation {
  properties: Record<SharedPropertyTypeApiName, PropertyApiName>;
}

/**
 * The unique resource identifier of an object type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeRid = LooselyBrandedString<"ObjectTypeRid">;

/**
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeV2 {
  apiName: ObjectTypeApiName;
  displayName: _Core.DisplayName;
  status: _Core.ReleaseStatus;
  description?: string;
  pluralDisplayName: string;
  icon: Icon;
  primaryKey: PropertyApiName;
  properties: Record<PropertyApiName, PropertyV2>;
  rid: ObjectTypeRid;
  titleProperty: PropertyApiName;
  visibility?: ObjectTypeVisibility;
}

/**
 * The suggested visibility of the object type.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * Log Safety: UNSAFE
 */
export interface ObjectUpdate {
  object: OntologyObjectV2;
  state: ObjectState;
}

/**
 * The parameter has a manually predefined set of options.
 *
 * Log Safety: UNSAFE
 */
export interface OneOfConstraint {
  options: Array<ParameterOption>;
  otherValuesAllowed: boolean;
}

/**
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface Ontology {
  apiName: OntologyApiName;
  displayName: _Core.DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
 * Log Safety: UNSAFE
 */
export type OntologyApiName = LooselyBrandedString<"OntologyApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyArrayType {
  itemType: OntologyDataType;
}

/**
 * A union of all the primitive types used by Palantir's Ontology-based products.
 *
 * Log Safety: UNSAFE
 */
export type OntologyDataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & OntologyStructType)
  | ({ type: "set" } & OntologySetType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "byte" } & _Core.ByteType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "any" } & _Core.AnyType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "cipherText" } & _Core.CipherTextType)
  | ({ type: "marking" } & _Core.MarkingType)
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "array" } & OntologyArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "binary" } & _Core.BinaryType)
  | ({ type: "short" } & _Core.ShortType)
  | ({ type: "decimal" } & _Core.DecimalType)
  | ({ type: "map" } & OntologyMapType)
  | ({ type: "timestamp" } & _Core.TimestampType)
  | ({ type: "object" } & OntologyObjectType);

/**
 * Log Safety: UNSAFE
 */
export interface OntologyFullMetadata {
  ontology: OntologyV2;
  objectTypes: Record<ObjectTypeApiName, ObjectTypeFullMetadata>;
  actionTypes: Record<ActionTypeApiName, ActionTypeV2>;
  queryTypes: Record<QueryApiName, QueryTypeV2>;
  interfaceTypes: Record<InterfaceTypeApiName, InterfaceType>;
  sharedPropertyTypes: Record<SharedPropertyTypeApiName, SharedPropertyType>;
}

/**
 * Either an ontology rid or an ontology api name.
 *
 * Log Safety: UNSAFE
 */
export type OntologyIdentifier = LooselyBrandedString<"OntologyIdentifier">;

/**
 * Log Safety: UNSAFE
 */
export type OntologyInterface = LooselyBrandedString<"OntologyInterface">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyInterfaceObjectType {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyMapType {
  keyType: OntologyDataType;
  valueType: OntologyDataType;
}

/**
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObject {
  properties: Record<PropertyApiName, PropertyValue | undefined>;
  rid: ObjectRid;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectArrayType {
  subType: ObjectPropertyType;
}

/**
 * Log Safety: UNSAFE
 */
export type OntologyObjectSet = LooselyBrandedString<"OntologyObjectSet">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectSetType {
  objectApiName?: ObjectTypeApiName;
  objectTypeApiName?: ObjectTypeApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyObjectType {
  objectApiName: ObjectTypeApiName;
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * Log Safety: SAFE
 */
export interface OntologyObjectTypeReferenceType {}

/**
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type OntologyObjectV2 = Record<PropertyApiName, PropertyValue>;

/**
   * The unique Resource Identifier (RID) of the Ontology. To look up your Ontology RID, please use the
List ontologies endpoint or check the Ontology Manager.
   *
   * Log Safety: SAFE
   */
export type OntologyRid = LooselyBrandedString<"OntologyRid">;

/**
 * Log Safety: UNSAFE
 */
export interface OntologySetType {
  itemType: OntologyDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyStructField {
  name: _Core.StructFieldName;
  fieldType: OntologyDataType;
  required: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface OntologyStructType {
  fields: Array<OntologyStructField>;
}

/**
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyV2 {
  apiName: OntologyApiName;
  displayName: _Core.DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
   * A command representing the list of properties to order by. Properties should be delimited by commas and
prefixed by p or properties. The format expected format is
orderBy=properties.{property}:{sortDirection},properties.{property}:{sortDirection}...
By default, the ordering for a property is ascending, and this can be explicitly specified by appending
:asc (for ascending) or :desc (for descending).
Example: use orderBy=properties.lastName:asc to order by a single property,
orderBy=properties.lastName,properties.firstName,properties.age:desc to order by multiple properties.
You may also use the shorthand p instead of properties such as orderBy=p.lastName:asc.
   *
   * Log Safety: UNSAFE
   */
export type OrderBy = LooselyBrandedString<"OrderBy">;

/**
 * Log Safety: SAFE
 */
export type OrderByDirection = "ASC" | "DESC";

/**
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * Details about a parameter of an action or query.
 *
 * Log Safety: UNSAFE
 */
export interface Parameter {
  description?: string;
  baseType: ValueType;
  dataType?: OntologyDataType;
  required: boolean;
}

/**
   * A constraint that an action parameter value must satisfy in order to be considered valid.
Constraints can be configured on action parameters in the Ontology Manager.
Applicable constraints are determined dynamically based on parameter inputs.
Parameter values are evaluated against the final set of constraints.
The type of the constraint.
| Type                  | Description                                                                                                                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| arraySize           | The parameter expects an array of values and the size of the array must fall within the defined range.                                                                                                                          |
| groupMember         | The parameter value must be the user id of a member belonging to at least one of the groups defined by the constraint.                                                                                                          |
| objectPropertyValue | The parameter value must be a property value of an object found within an object set.                                                                                                                                           |
| objectQueryResult   | The parameter value must be the primary key of an object found within an object set.                                                                                                                                            |
| oneOf               | The parameter has a manually predefined set of options.                                                                                                                                                                         |
| range               | The parameter value must be within the defined range.                                                                                                                                                                           |
| stringLength        | The parameter value must have a length within the defined range.                                                                                                                                                                |
| stringRegexMatch    | The parameter value must match a predefined regular expression.                                                                                                                                                                 |
| unevaluable         | The parameter cannot be evaluated because it depends on another parameter or object set that can't be evaluated. This can happen when a parameter's allowed values are defined by another parameter that is missing or invalid. |
   *
   * Log Safety: UNSAFE
   */
export type ParameterEvaluatedConstraint =
  | ({ type: "oneOf" } & OneOfConstraint)
  | ({ type: "groupMember" } & GroupMemberConstraint)
  | ({ type: "objectPropertyValue" } & ObjectPropertyValueConstraint)
  | ({ type: "range" } & RangeConstraint)
  | ({ type: "arraySize" } & ArraySizeConstraint)
  | ({ type: "objectQueryResult" } & ObjectQueryResultConstraint)
  | ({ type: "stringLength" } & StringLengthConstraint)
  | ({ type: "stringRegexMatch" } & StringRegexMatchConstraint)
  | ({ type: "unevaluable" } & UnevaluableConstraint);

/**
 * Represents the validity of a parameter against the configured constraints.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterEvaluationResult {
  result: ValidationResult;
  evaluatedConstraints: Array<ParameterEvaluatedConstraint>;
  required: boolean;
}

/**
   * The unique identifier of the parameter. Parameters are used as inputs when an action or query is applied.
Parameters can be viewed and managed in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ParameterId = LooselyBrandedString<"ParameterId">;

/**
 * A possible value for the parameter. This is defined in the Ontology Manager by Actions admins.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterOption {
  displayName?: _Core.DisplayName;
  value?: any;
}

/**
 * Returns objects where the specified field contains the provided value as a substring.
 *
 * Log Safety: UNSAFE
 */
export interface PhraseQuery {
  field: FieldNameV1;
  value: string;
}

/**
 * Log Safety: UNSAFE
 */
export type PolygonValue = { type: "Polygon" } & _Geo.Polygon;

/**
 * Returns objects where the specified field starts with the provided value.
 *
 * Log Safety: UNSAFE
 */
export interface PrefixQuery {
  field: FieldNameV1;
  value: string;
}

/**
 * Represents the primary key value that is used as a unique identifier for an object.
 *
 * Log Safety: UNSAFE
 */
export type PrimaryKeyValue = any;

/**
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface Property {
  description?: string;
  displayName?: _Core.DisplayName;
  baseType: ValueType;
}

/**
   * The name of the property in the API. To find the API name for your property, use the Get object type
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type PropertyApiName = LooselyBrandedString<"PropertyApiName">;

/**
 * A property api name that references properties to query on.
 *
 * Log Safety: UNSAFE
 */
export interface PropertyApiNameSelector {
  apiName: PropertyApiName;
}

/**
   * Represents a filter used on properties.
Endpoints that accept this supports optional parameters that have the form:
properties.{propertyApiName}.{propertyFilter}={propertyValueEscapedString} to filter the returned objects.
For instance, you may use properties.firstName.eq=John to find objects that contain a property called
"firstName" that has the exact value of "John".
The following are a list of supported property filters:

properties.{propertyApiName}.contains - supported on arrays and can be used to filter array properties
that have at least one of the provided values. If multiple query parameters are provided, then objects
that have any of the given values for the specified property will be matched.
properties.{propertyApiName}.eq - used to filter objects that have the exact value for the provided
property. If multiple query parameters are provided, then objects that have any of the given values
will be matched. For instance, if the user provides a request by doing
?properties.firstName.eq=John&properties.firstName.eq=Anna, then objects that have a firstName property
of either John or Anna will be matched. This filter is supported on all property types except Arrays.
properties.{propertyApiName}.neq - used to filter objects that do not have the provided property values.
Similar to the eq filter, if multiple values are provided, then objects that have any of the given values
will be excluded from the result.
properties.{propertyApiName}.lt, properties.{propertyApiName}.lte, properties.{propertyApiName}.gt
properties.{propertyApiName}.gte - represent less than, less than or equal to, greater than, and greater
than or equal to respectively. These are supported on date, timestamp, byte, integer, long, double, decimal.
properties.{propertyApiName}.isNull - used to filter objects where the provided property is (or is not) null.
This filter is supported on all property types.
   *
   * Log Safety: SAFE
   */
export type PropertyFilter = LooselyBrandedString<"PropertyFilter">;

/**
   * The immutable ID of a property. Property IDs are only used to identify properties in the Ontology Manager
application and assign them API names. In every other case, API names should be used instead of property IDs.
   *
   * Log Safety: UNSAFE
   */
export type PropertyId = LooselyBrandedString<"PropertyId">;

/**
 * An identifier used to select properties or struct fields.
 *
 * Log Safety: UNSAFE
 */
export type PropertyIdentifier =
  | ({ type: "property" } & PropertyApiNameSelector)
  | ({ type: "structField" } & StructFieldSelector);

/**
 * Log Safety: SAFE
 */
export type PropertyTypeRid = LooselyBrandedString<"PropertyTypeRid">;

/**
 * The status to indicate whether the PropertyType is either Experimental, Active, Deprecated, or Example.
 *
 * Log Safety: UNSAFE
 */
export type PropertyTypeStatus =
  | ({ type: "deprecated" } & DeprecatedPropertyTypeStatus)
  | ({ type: "active" } & ActivePropertyTypeStatus)
  | ({ type: "experimental" } & ExperimentalPropertyTypeStatus)
  | ({ type: "example" } & ExamplePropertyTypeStatus);

/**
 * Log Safety: SAFE
 */
export type PropertyTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface PropertyV2 {
  description?: string;
  displayName?: _Core.DisplayName;
  dataType: ObjectPropertyType;
  rid: PropertyTypeRid;
  status?: PropertyTypeStatus;
  visibility?: PropertyTypeVisibility;
}

/**
   * Represents the value of a property in the following format.
| Type            | JSON encoding                                               | Example                                                                                            |
|---------------- |-------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Array           | array                                                       | ["alpha", "bravo", "charlie"]                                                                    |
| Attachment      | JSON encoded AttachmentProperty object                    | {"rid":"ri.blobster.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"}                       |
| Boolean         | boolean                                                     | true                                                                                             |
| Byte            | number                                                      | 31                                                                                               |
| CipherText      | string                                                      | "CIPHER::ri.bellaso.main.cipher-channel.e414ab9e-b606-499a-a0e1-844fa296ba7e::unzjs3VifsTxuIpf1fH1CJ7OaPBr2bzMMdozPaZJtCii8vVG60yXIEmzoOJaEl9mfFFe::CIPHER"                                                                                                                                                                                        |

| Date            | ISO 8601 extended local date string                         | "2021-05-01"                                                                                     |
| Decimal         | string                                                      | "2.718281828"                                                                                    |
| Double          | number                                                      | 3.14159265                                                                                       |
| Float           | number                                                      | 3.14159265                                                                                       |
| GeoPoint        | geojson                                                     | {"type":"Point","coordinates":[102.0,0.5]}                                                       |
| GeoShape        | geojson                                                     | {"type":"LineString","coordinates":[[102.0,0.0],[103.0,1.0],[104.0,0.0],[105.0,1.0]]}            |
| Integer         | number                                                      | 238940                                                                                           |
| Long            | string                                                      | "58319870951433"                                                                                 |
| MediaReference  | JSON encoded MediaReference object                        | {"mimeType":"application/pdf","reference":{"type":"mediaSetViewItem","mediaSetViewItem":{"mediaSetRid":"ri.mio.main.media-set.4153d42f-ca4b-4e42-8ca5-8e6aa7edb642","mediaSetViewRid":"ri.mio.main.view.82a798ad-d637-4595-acc6-987bcf16629b","mediaItemRid":"ri.mio.main.media-item.001ec98b-1620-4814-9e17-8e9c4e536225"}}}                       |
| Short           | number                                                      | 8739                                                                                             |
| String          | string                                                      | "Call me Ishmael"                                                                                |
| Struct          | JSON object of struct field API name -> value               | {"firstName": "Alex", "lastName": "Karp"}                                                          |
| Timestamp       | ISO 8601 extended offset date-time string in UTC zone       | "2021-01-04T05:00:00Z"                                                                           |
| Timeseries      | JSON encoded TimeseriesProperty object or seriesId string | {"seriesId": "wellPressureSeriesId", "syncRid": ri.time-series-catalog.main.sync.04f5ac1f-91bf-44f9-a51f-4f34e06e42df"} or {"templateRid": "ri.codex-emu.main.template.367cac64-e53b-4653-b111-f61856a63df9", "templateVersion": "0.0.0"} or "wellPressureSeriesId"|                                                                           |
Note that for backwards compatibility, the Boolean, Byte, Double, Float, Integer, and Short types can also be encoded as JSON strings.
   *
   * Log Safety: UNSAFE
   */
export type PropertyValue = any;

/**
 * Represents the value of a property in string format. This is used in URL parameters.
 *
 * Log Safety: UNSAFE
 */
export type PropertyValueEscapedString = LooselyBrandedString<
  "PropertyValueEscapedString"
>;

/**
 * An error indicating that the subscribe request should be attempted on a different node.
 *
 * Log Safety: SAFE
 */
export interface QosError {}

/**
 * The representation of a time series property backed by multiple time series syncs.
 *
 * Log Safety: UNSAFE
 */
export interface QualifiedTimeseriesProperty {
  seriesId: SeriesId;
  syncRid: TimeseriesSyncRid;
}

/**
 * Log Safety: UNSAFE
 */
export type Query = LooselyBrandedString<"Query">;

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregation {
  key: any;
  value: any;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationKeyType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "range" } & QueryAggregationRangeType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRange {
  startValue?: any;
  endValue?: any;
}

/**
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationRangeSubType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRangeType {
  subType: QueryAggregationRangeSubType;
}

/**
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationValueType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * The name of the Query in the API.
 *
 * Log Safety: UNSAFE
 */
export type QueryApiName = LooselyBrandedString<"QueryApiName">;

/**
 * Log Safety: UNSAFE
 */
export interface QueryArrayType {
  subType: QueryDataType;
}

/**
 * A union of all the types supported by Ontology Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type QueryDataType =
  | ({ type: "date" } & _Core.DateType)
  | ({ type: "struct" } & QueryStructType)
  | ({ type: "set" } & QuerySetType)
  | ({ type: "string" } & _Core.StringType)
  | ({ type: "entrySet" } & EntrySetType)
  | ({ type: "double" } & _Core.DoubleType)
  | ({ type: "integer" } & _Core.IntegerType)
  | ({ type: "threeDimensionalAggregation" } & ThreeDimensionalAggregation)
  | ({ type: "union" } & QueryUnionType)
  | ({ type: "float" } & _Core.FloatType)
  | ({ type: "long" } & _Core.LongType)
  | ({ type: "boolean" } & _Core.BooleanType)
  | ({ type: "unsupported" } & _Core.UnsupportedType)
  | ({ type: "attachment" } & _Core.AttachmentType)
  | ({ type: "null" } & _Core.NullType)
  | ({ type: "array" } & QueryArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "twoDimensionalAggregation" } & TwoDimensionalAggregation)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "timestamp" } & _Core.TimestampType);

/**
 * Details about the output of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryOutputV2 {
  dataType: QueryDataType;
  required: boolean;
}

/**
 * Details about a parameter of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryParameterV2 {
  description?: string;
  dataType: QueryDataType;
}

/**
 * Log Safety: UNSAFE
 */
export type QueryRuntimeErrorParameter = LooselyBrandedString<
  "QueryRuntimeErrorParameter"
>;

/**
 * Log Safety: UNSAFE
 */
export interface QuerySetType {
  subType: QueryDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryStructField {
  name: _Core.StructFieldName;
  fieldType: QueryDataType;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryStructType {
  fields: Array<QueryStructField>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryThreeDimensionalAggregation {
  groups: Array<NestedQueryAggregation>;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryTwoDimensionalAggregation {
  groups: Array<QueryAggregation>;
}

/**
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryType {
  apiName: QueryApiName;
  description?: string;
  displayName?: _Core.DisplayName;
  parameters: Record<ParameterId, Parameter>;
  output?: OntologyDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryTypeV2 {
  apiName: QueryApiName;
  description?: string;
  displayName?: _Core.DisplayName;
  parameters: Record<ParameterId, QueryParameterV2>;
  output: QueryDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * Log Safety: UNSAFE
 */
export interface QueryUnionType {
  unionTypes: Array<QueryDataType>;
}

/**
 * The parameter value must be within the defined range.
 *
 * Log Safety: UNSAFE
 */
export interface RangeConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * Log Safety: SAFE
 */
export interface Reason {
  reason: ReasonType;
}

/**
 * Represents the reason a subscription was closed.
 *
 * Log Safety: SAFE
 */
export type ReasonType = "USER_CLOSED" | "CHANNEL_CLOSED";

/**
   * The updated data value associated with an object instance's external reference. The object instance
is uniquely identified by an object type and a primary key. Note that the value of the property
field returns a dereferenced value rather than the reference itself.
   *
   * Log Safety: UNSAFE
   */
export interface ReferenceUpdate {
  objectType: ObjectTypeApiName;
  primaryKey: ObjectPrimaryKey;
  property: PropertyApiName;
  value: ReferenceValue;
}

/**
 * Resolved data values pointed to by a reference.
 *
 * Log Safety: UNSAFE
 */
export type ReferenceValue = {
  type: "geotimeSeriesValue";
} & GeotimeSeriesValue;

/**
 * The list of updated Foundry Objects cannot be provided. The object set must be refreshed using Object Set Service.
 *
 * Log Safety: UNSAFE
 */
export interface RefreshObjectSet {
  id: SubscriptionId;
  objectType: ObjectTypeApiName;
}

/**
 * A relative time, such as "3 days before" or "2 hours after" the current moment.
 *
 * Log Safety: UNSAFE
 */
export interface RelativeTime {
  when: RelativeTimeRelation;
  value: number;
  unit: RelativeTimeSeriesTimeUnit;
}

/**
 * A relative time range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export interface RelativeTimeRange {
  startTime?: RelativeTime;
  endTime?: RelativeTime;
}

/**
 * Log Safety: SAFE
 */
export type RelativeTimeRelation = "BEFORE" | "AFTER";

/**
 * Log Safety: SAFE
 */
export type RelativeTimeSeriesTimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS";

/**
 * Unique request id
 *
 * Log Safety: SAFE
 */
export type RequestId = string;

/**
 * Log Safety: SAFE
 */
export type ReturnEditsMode = "ALL" | "NONE";

/**
 * Log Safety: UNSAFE
 */
export type SdkPackageName = LooselyBrandedString<"SdkPackageName">;

/**
 * Log Safety: UNSAFE
 */
export type SearchJsonQuery =
  | ({ type: "or" } & OrQuery)
  | ({ type: "prefix" } & PrefixQuery)
  | ({ type: "lt" } & LtQuery)
  | ({ type: "allTerms" } & AllTermsQuery)
  | ({ type: "eq" } & EqualsQuery)
  | ({ type: "gt" } & GtQuery)
  | ({ type: "contains" } & ContainsQuery)
  | ({ type: "not" } & NotQuery)
  | ({ type: "phrase" } & PhraseQuery)
  | ({ type: "and" } & AndQuery)
  | ({ type: "isNull" } & IsNullQuery)
  | ({ type: "gte" } & GteQuery)
  | ({ type: "anyTerm" } & AnyTermQuery)
  | ({ type: "lte" } & LteQuery);

/**
 * Log Safety: UNSAFE
 */
export type SearchJsonQueryV2 =
  | ({ type: "or" } & OrQueryV2)
  | ({ type: "in" } & InQuery)
  | ({ type: "doesNotIntersectPolygon" } & DoesNotIntersectPolygonQuery)
  | ({ type: "lt" } & LtQueryV2)
  | ({ type: "doesNotIntersectBoundingBox" } & DoesNotIntersectBoundingBoxQuery)
  | ({ type: "eq" } & EqualsQueryV2)
  | ({ type: "containsAllTerms" } & ContainsAllTermsQuery)
  | ({ type: "gt" } & GtQueryV2)
  | ({ type: "withinDistanceOf" } & WithinDistanceOfQuery)
  | ({ type: "withinBoundingBox" } & WithinBoundingBoxQuery)
  | ({ type: "contains" } & ContainsQueryV2)
  | ({ type: "not" } & NotQueryV2)
  | ({ type: "intersectsBoundingBox" } & IntersectsBoundingBoxQuery)
  | ({ type: "and" } & AndQueryV2)
  | ({ type: "isNull" } & IsNullQueryV2)
  | ({
    type: "containsAllTermsInOrderPrefixLastTerm";
  } & ContainsAllTermsInOrderPrefixLastTerm)
  | ({ type: "containsAnyTerm" } & ContainsAnyTermQuery)
  | ({ type: "gte" } & GteQueryV2)
  | ({ type: "containsAllTermsInOrder" } & ContainsAllTermsInOrderQuery)
  | ({ type: "withinPolygon" } & WithinPolygonQuery)
  | ({ type: "intersectsPolygon" } & IntersectsPolygonQuery)
  | ({ type: "lte" } & LteQueryV2)
  | ({ type: "startsWith" } & StartsWithQuery);

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsForInterfaceRequest {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderByV2;
  augmentedProperties: Record<ObjectTypeApiName, Array<PropertyApiName>>;
  augmentedSharedPropertyTypes: Record<
    InterfaceTypeApiName,
    Array<SharedPropertyTypeApiName>
  >;
  selectedSharedPropertyTypes: Array<SharedPropertyTypeApiName>;
  selectedObjectTypes: Array<ObjectTypeApiName>;
  otherInterfaceTypes: Array<InterfaceTypeApiName>;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequest {
  query: SearchJsonQuery;
  orderBy?: SearchOrderBy;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
  fields: Array<PropertyApiName>;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequestV2 {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderByV2;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
  select: Array<PropertyApiName>;
  excludeRid?: boolean;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponse {
  data: Array<OntologyObject>;
  nextPageToken?: _Core.PageToken;
  totalCount: _Core.TotalCount;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: _Core.PageToken;
  totalCount: _Core.TotalCount;
}

/**
 * Specifies the ordering of search results by a field and an ordering direction.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderBy {
  fields: Array<SearchOrdering>;
}

/**
 * Log Safety: SAFE
 */
export type SearchOrderByType = "fields" | "relevance";

/**
 * Specifies the ordering of search results by a field and an ordering direction or by relevance if scores are required in a nearestNeighbors query. By default orderType is set to fields.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderByV2 {
  orderType?: SearchOrderByType;
  fields: Array<SearchOrderingV2>;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchOrdering {
  field: FieldNameV1;
  direction?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface SearchOrderingV2 {
  field: PropertyApiName;
  direction?: string;
}

/**
   * By default, anytime an object is requested, every property belonging to that object is returned.
The response can be filtered to only include certain properties using the properties query parameter.
Properties to include can be specified in one of two ways.

A comma delimited list as the value for the properties query parameter
properties={property1ApiName},{property2ApiName}
Multiple properties query parameters.
properties={property1ApiName}&properties={property2ApiName}

The primary key of the object will always be returned even if it wasn't specified in the properties values.
Unknown properties specified in the properties list will result in a PropertiesNotFound error.
To find the API name for your property, use the Get object type endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type SelectedPropertyApiName = LooselyBrandedString<
  "SelectedPropertyApiName"
>;

/**
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyApproximateDistinctAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * Computes the approximate percentile value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyApproximatePercentileAggregation {
  selectedPropertyApiName: PropertyApiName;
  approximatePercentile: number;
}

/**
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyAvgAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
   * Lists all values of a property up to the specified limit. The maximum supported limit is 100, by default.
NOTE: A separate count aggregation should be used to determine the total count of values, to account for
a possible truncation of the returned list.
Ignores objects for which a property is absent, so the returned list will contain non-null values only.
Returns an empty list when none of the objects have values for a provided property.
   *
   * Log Safety: UNSAFE
   */
export interface SelectedPropertyCollectListAggregation {
  selectedPropertyApiName: PropertyApiName;
  limit: number;
}

/**
   * Lists all distinct values of a property up to the specified limit. The maximum supported limit is 100.
NOTE: A separate cardinality / exactCardinality aggregation should be used to determine the total count of
values, to account for a possible truncation of the returned set.
Ignores objects for which a property is absent, so the returned list will contain non-null values only.
Returns an empty list when none of the objects have values for a provided property.
   *
   * Log Safety: UNSAFE
   */
export interface SelectedPropertyCollectSetAggregation {
  selectedPropertyApiName: PropertyApiName;
  limit: number;
}

/**
 * Computes the total count of objects.
 *
 * Log Safety: SAFE
 */
export interface SelectedPropertyCountAggregation {}

/**
 * Definition for a selected property over a MethodObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyDefinition {
  objectSet: MethodObjectSet;
  operation: SelectedPropertyOperation;
}

/**
 * Computes an exact number of distinct values for the provided field. May be slower than an approximate distinct aggregation.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyExactDistinctAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyMaxAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyMinAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * Operation on a selected property, can be an aggregation function or retrieval of a single selected property
 *
 * Log Safety: UNSAFE
 */
export type SelectedPropertyOperation =
  | ({
    type: "approximateDistinct";
  } & SelectedPropertyApproximateDistinctAggregation)
  | ({ type: "min" } & SelectedPropertyMinAggregation)
  | ({ type: "avg" } & SelectedPropertyAvgAggregation)
  | ({ type: "max" } & SelectedPropertyMaxAggregation)
  | ({
    type: "approximatePercentile";
  } & SelectedPropertyApproximatePercentileAggregation)
  | ({ type: "get" } & GetSelectedPropertyOperation)
  | ({ type: "count" } & SelectedPropertyCountAggregation)
  | ({ type: "sum" } & SelectedPropertySumAggregation)
  | ({ type: "collectList" } & SelectedPropertyCollectListAggregation)
  | ({ type: "exactDistinct" } & SelectedPropertyExactDistinctAggregation)
  | ({ type: "collectSet" } & SelectedPropertyCollectSetAggregation);

/**
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertySumAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * The unique codex id of a time series.
 *
 * Log Safety: UNSAFE
 */
export type SeriesId = LooselyBrandedString<"SeriesId">;

/**
 * A property type that can be shared across object types.
 *
 * Log Safety: UNSAFE
 */
export interface SharedPropertyType {
  rid: SharedPropertyTypeRid;
  apiName: SharedPropertyTypeApiName;
  displayName: _Core.DisplayName;
  description?: string;
  dataType: ObjectPropertyType;
}

/**
   * The name of the shared property type in the API in lowerCamelCase format. To find the API name for your
shared property type, use the List shared property types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type SharedPropertyTypeApiName = LooselyBrandedString<
  "SharedPropertyTypeApiName"
>;

/**
 * The unique resource identifier of an shared property type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type SharedPropertyTypeRid = LooselyBrandedString<
  "SharedPropertyTypeRid"
>;

/**
   * Returns objects where the specified field starts with the provided value. Allows you to specify a property to
query on by a variety of means. Either field or propertyIdentifier must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface StartsWithQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
}

/**
   * Which format to serialize the binary stream in.
ARROW is more efficient for streaming a large sized response.
   *
   * Log Safety: SAFE
   */
export type StreamingOutputFormat = "JSON" | "ARROW";

/**
 * Log Safety: UNSAFE
 */
export type StreamMessage =
  | ({ type: "objectSetChanged" } & ObjectSetUpdates)
  | ({ type: "refreshObjectSet" } & RefreshObjectSet)
  | ({ type: "subscriptionClosed" } & SubscriptionClosed)
  | ({ type: "subscribeResponses" } & ObjectSetSubscribeResponses);

/**
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsRequest {
  range?: TimeRange;
}

/**
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsResponse {
  data: Array<TimeSeriesPoint>;
}

/**
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesValuesRequest {
  range?: TimeRange;
}

/**
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesValuesResponse {
  data: Array<TimeseriesEntry>;
}

/**
   * The parameter value must have a length within the defined range.
This range is always inclusive.
   *
   * Log Safety: UNSAFE
   */
export interface StringLengthConstraint {
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
}

/**
 * The parameter value must match a predefined regular expression.
 *
 * Log Safety: UNSAFE
 */
export interface StringRegexMatchConstraint {
  regex: string;
  configuredFailureMessage?: string;
}

/**
 * The name of a struct field in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldApiName = LooselyBrandedString<"StructFieldApiName">;

/**
   * A combination of a struct property api name and a struct field api name. This is used to select struct fields
to query on. Note that you can still select struct properties with only a 'PropertyApiNameSelector'; the queries
will then become 'OR' queries across the fields of the struct property.
   *
   * Log Safety: UNSAFE
   */
export interface StructFieldSelector {
  propertyApiName: PropertyApiName;
  structFieldApiName: StructFieldApiName;
}

/**
 * Log Safety: UNSAFE
 */
export interface StructFieldType {
  apiName: StructFieldApiName;
  dataType: ObjectPropertyType;
}

/**
 * Log Safety: UNSAFE
 */
export interface StructType {
  structFieldTypes: Array<StructFieldType>;
}

/**
   * Contains the status of the submission criteria.
Submission criteria are the prerequisites that need to be satisfied before an Action can be applied.
These are configured in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export interface SubmissionCriteriaEvaluation {
  configuredFailureMessage?: string;
  result: ValidationResult;
}

/**
 * The subscription has been closed due to an irrecoverable error during its lifecycle.
 *
 * Log Safety: UNSAFE
 */
export interface SubscriptionClosed {
  id: SubscriptionId;
  cause: SubscriptionClosureCause;
}

/**
 * Log Safety: UNSAFE
 */
export type SubscriptionClosureCause =
  | ({ type: "reason" } & Reason)
  | ({ type: "error" } & Error);

/**
 * Log Safety: UNSAFE
 */
export interface SubscriptionError {
  errors: Array<Error>;
}

/**
 * A unique identifier used to associate subscription requests with responses.
 *
 * Log Safety: SAFE
 */
export type SubscriptionId = string;

/**
 * Log Safety: SAFE
 */
export interface SubscriptionSuccess {
  id: SubscriptionId;
}

/**
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SumAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SumAggregationV2 {
  field: PropertyApiName;
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * Log Safety: UNSAFE
 */
export interface SyncApplyActionResponseV2 {
  validation?: ValidateActionResponseV2;
  edits?: ActionResults;
}

/**
 * Log Safety: UNSAFE
 */
export interface ThreeDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: TwoDimensionalAggregation;
}

/**
 * An absolute or relative range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export type TimeRange =
  | ({ type: "absolute" } & AbsoluteTimeRange)
  | ({ type: "relative" } & RelativeTimeRange);

/**
 * A time and value pair.
 *
 * Log Safety: UNSAFE
 */
export interface TimeseriesEntry {
  time: string;
  value: any;
}

/**
 * A time and value pair.
 *
 * Log Safety: UNSAFE
 */
export interface TimeSeriesPoint {
  time: string;
  value: any;
}

/**
 * Log Safety: UNSAFE
 */
export type TimeSeriesPropertyV2 = LooselyBrandedString<"TimeSeriesPropertyV2">;

/**
 * The RID identifying a time series sync.
 *
 * Log Safety: SAFE
 */
export type TimeseriesSyncRid = LooselyBrandedString<"TimeseriesSyncRid">;

/**
 * The RID identifying a time series codex template that resolves to a derived series.
 *
 * Log Safety: SAFE
 */
export type TimeseriesTemplateRid = LooselyBrandedString<
  "TimeseriesTemplateRid"
>;

/**
 * The version corresponding to a codex template.
 *
 * Log Safety: UNSAFE
 */
export type TimeseriesTemplateVersion = LooselyBrandedString<
  "TimeseriesTemplateVersion"
>;

/**
 * Log Safety: UNSAFE
 */
export type TimeSeriesValueBankProperty = LooselyBrandedString<
  "TimeSeriesValueBankProperty"
>;

/**
 * Log Safety: SAFE
 */
export type TimeUnit =
  | "MILLISECONDS"
  | "SECONDS"
  | "MINUTES"
  | "HOURS"
  | "DAYS"
  | "WEEKS"
  | "MONTHS"
  | "YEARS"
  | "QUARTERS";

/**
 * Log Safety: UNSAFE
 */
export interface TwoDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: QueryAggregationValueType;
}

/**
   * The parameter cannot be evaluated because it depends on another parameter or object set that can't be evaluated.
This can happen when a parameter's allowed values are defined by another parameter that is missing or invalid.
   *
   * Log Safety: SAFE
   */
export interface UnevaluableConstraint {}

/**
 * Log Safety: UNSAFE
 */
export interface ValidateActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponse {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponseV2 {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
}

/**
 * Represents the state of a validation.
 *
 * Log Safety: SAFE
 */
export type ValidationResult = "VALID" | "INVALID";

/**
   * A string indicating the type of each data value. Note that these types can be nested, for example an array of
structs.
| Type                | JSON value                                                                                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| Array               | Array<T>, where T is the type of the array elements, e.g. Array<String>.                                    |
| Attachment          | Attachment                                                                                                      |
| Boolean             | Boolean                                                                                                         |
| Byte                | Byte                                                                                                            |
| CipherText          | CipherText                                                                                                      |
| Date                | LocalDate                                                                                                       |
| Decimal             | Decimal                                                                                                         |
| Double              | Double                                                                                                          |
| Float               | Float                                                                                                           |
| Integer             | Integer                                                                                                         |
| Long                | Long                                                                                                            |
| Marking             | Marking                                                                                                         |
| OntologyObject      | OntologyObject<T> where T is the API name of the referenced object type.                                      |
| Short               | Short                                                                                                           |
| String              | String                                                                                                          |
| Struct              | Struct<T> where T contains field name and type pairs, e.g. Struct<{ firstName: String, lastName: string }>  |
| Timeseries          | TimeSeries<T> where T is either String for an enum series or Double for a numeric series.                 |
| Timestamp           | Timestamp                                                                                                       |
   *
   * Log Safety: SAFE
   */
export type ValueType = LooselyBrandedString<"ValueType">;

/**
 * Log Safety: UNSAFE
 */
export type WithinBoundingBoxPoint = { type: "Point" } & _Geo.GeoPoint;

/**
   * Returns objects where the specified field contains a point within the bounding box provided. Allows you to
specify a property to query on by a variety of means. Either field or propertyIdentifier must be supplied,
but not both.
   *
   * Log Safety: UNSAFE
   */
export interface WithinBoundingBoxQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: BoundingBoxValue;
}

/**
   * Returns objects where the specified field contains a point within the distance provided of the center point.
Allows you to specify a property to query on by a variety of means. Either field or propertyIdentifier
must be supplied, but not both.
   *
   * Log Safety: UNSAFE
   */
export interface WithinDistanceOfQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: CenterPoint;
}

/**
   * Returns objects where the specified field contains a point within the polygon provided. Allows you to specify a
property to query on by a variety of means. Either field or propertyIdentifier must be supplied, but not
both.
   *
   * Log Safety: UNSAFE
   */
export interface WithinPolygonQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PolygonValue;
}
