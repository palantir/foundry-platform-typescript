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

import type * as _Geo from "@osdk/internal.foundry.geo";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: SAFE
 */
export interface ByteType {}

/**
 * Log Safety: UNSAFE
 */
export interface TimeseriesType {
  itemType?: TimeSeriesItemType;
}

/**
 * The Resource Identifier (RID) of a single View of a Media Set. A Media Set View is an independent collection of Media Items.
 *
 * Log Safety: SAFE
 */
export type MediaSetViewRid = LooselyBrandedString<"MediaSetViewRid">;

/**
 * The page size to use for the endpoint.
 *
 * Log Safety: SAFE
 */
export type PageSize = number;

/**
 * Log Safety: SAFE
 */
export interface UnsupportedType {
  unsupportedType: string;
}

/**
 * The Resource Identifier (RID) of a Media Set in Foundry.
 *
 * Log Safety: SAFE
 */
export type MediaSetRid = LooselyBrandedString<"MediaSetRid">;

/**
   * A user-specified identifier for a media item within a media set.
Paths must be less than 256 characters long.
If multiple items are written to the same media set at the same path, then when retrieving by path the media
item which was written last is returned.
   *
   * Log Safety: UNSAFE
   */
export type MediaItemPath = LooselyBrandedString<"MediaItemPath">;

/**
 * Log Safety: SAFE
 */
export interface GeoShapeType {}

/**
 * Log Safety: SAFE
 */
export interface MarkingType {}

/**
 * Log Safety: SAFE
 */
export interface BinaryType {}

/**
 * Log Safety: SAFE
 */
export interface FilesystemResource {}

/**
 * Represents a fixed size vector of floats. These can be used for vector similarity searches.
 *
 * Log Safety: UNSAFE
 */
export interface VectorType {
  dimension: number;
  supportsSearchWith: Array<VectorSimilarityFunction>;
  embeddingModel?: EmbeddingModel;
}

/**
 * Log Safety: SAFE
 */
export interface TimestampType {}

/**
 * Log Safety: SAFE
 */
export interface AttachmentType {}

/**
 * Log Safety: SAFE
 */
export type VectorSimilarityFunctionValue =
  | "COSINE_SIMILARITY"
  | "DOT_PRODUCT"
  | "EUCLIDEAN_DISTANCE";

/**
 * Log Safety: UNSAFE
 */
export interface FoundryLiveDeployment {
  rid?: string;
  inputParamName?: string;
  outputParamName?: string;
}

/**
 * The release status of the entity.
 *
 * Log Safety: SAFE
 */
export type ReleaseStatus = "ACTIVE" | "EXPERIMENTAL" | "DEPRECATED";

/**
 * A measurement of distance.
 *
 * Log Safety: UNSAFE
 */
export interface Distance {
  value: number;
  unit: DistanceUnit;
}

/**
 * Log Safety: SAFE
 */
export interface MediaSetViewItem {
  mediaSetRid: MediaSetRid;
  mediaSetViewRid: MediaSetViewRid;
  mediaItemRid: MediaItemRid;
}

/**
 * Log Safety: SAFE
 */
export interface MediaReferenceType {}

/**
 * Log Safety: SAFE
 */
export interface BooleanType {}

/**
 * The Resource Identifier (RID) of an individual Media Item within a Media Set in Foundry.
 *
 * Log Safety: SAFE
 */
export type MediaItemRid = LooselyBrandedString<"MediaItemRid">;

/**
 * A union of the types supported by time series properties.
 *
 * Log Safety: UNSAFE
 */
export type TimeSeriesItemType =
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType);

/**
 * Log Safety: SAFE
 */
export interface GeoPointType {}

/**
 * Log Safety: SAFE
 */
export type DistanceUnit =
  | "MILLIMETERS"
  | "CENTIMETERS"
  | "METERS"
  | "KILOMETERS"
  | "INCHES"
  | "FEET"
  | "YARDS"
  | "MILES"
  | "NAUTICAL_MILES";

/**
 * A Foundry User ID.
 *
 * Log Safety: SAFE
 */
export type UserId = string;

/**
 * Log Safety: SAFE
 */
export interface StringType {}

/**
 * Log Safety: SAFE
 */
export interface FloatType {}

/**
   * The media type of the file or attachment.
Examples: application/json, application/pdf, application/octet-stream, image/jpeg
   *
   * Log Safety: SAFE
   */
export type MediaType = LooselyBrandedString<"MediaType">;

/**
 * The name of a File within Foundry. Examples: my-file.txt, my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type Filename = LooselyBrandedString<"Filename">;

/**
 * Log Safety: SAFE
 */
export interface LocalFilePath {}

/**
 * Log Safety: SAFE
 */
export interface GeotimeSeriesReferenceType {}

/**
 * Log Safety: SAFE
 */
export interface MediaSetViewItemWrapper {
  mediaSetViewItem: MediaSetViewItem;
}

/**
 * A model provided by Language Model Service.
 *
 * Log Safety: SAFE
 */
export interface LmsEmbeddingModel {
  value: LmsEmbeddingModelValue;
}

/**
 * Log Safety: SAFE
 */
export interface IntegerType {}

/**
 * Log Safety: UNSAFE
 */
export type EmbeddingModel =
  | ({ type: "lms" } & LmsEmbeddingModel)
  | ({ type: "foundryLiveDeployment" } & FoundryLiveDeployment);

/**
 * Log Safety: SAFE
 */
export interface DateType {}

/**
 * Log Safety: SAFE
 */
export type ContentType = LooselyBrandedString<"ContentType">;

/**
   * The page token indicates where to start paging. This should be omitted from the first page's request.
To fetch the next page, clients should take the value from the nextPageToken field of the previous response
and use it to populate the pageToken field of the next request.
   *
   * Log Safety: UNSAFE
   */
export type PageToken = LooselyBrandedString<"PageToken">;

/**
 * Enables the use of preview functionality.
 *
 * Log Safety: SAFE
 */
export type PreviewMode = boolean;

/**
 * Log Safety: SAFE
 */
export interface ShortType {}

/**
 * Log Safety: SAFE
 */
export interface DecimalType {
  precision?: number;
  scale?: number;
}

/**
 * The representation of a media reference.
 *
 * Log Safety: UNSAFE
 */
export interface MediaReference {
  mimeType: MediaType;
  reference: Reference;
}

/**
 * A union of the types supported by media reference properties.
 *
 * Log Safety: UNSAFE
 */
export type Reference = { type: "mediaSetViewItem" } & MediaSetViewItemWrapper;

/**
 * The format of an archive file.
 *
 * Log Safety: SAFE
 */
export type ArchiveFileFormat = "ZIP";

/**
 * The total number of items across all pages.
 *
 * Log Safety: SAFE
 */
export type TotalCount = string;

/**
 * The time at which the resource was most recently updated.
 *
 * Log Safety: SAFE
 */
export type UpdatedTime = LooselyBrandedString<"UpdatedTime">;

/**
 * Log Safety: SAFE
 */
export type LmsEmbeddingModelValue =
  | "OPENAI_TEXT_EMBEDDING_ADA_002"
  | "TEXT_EMBEDDING_3_SMALL"
  | "SNOWFLAKE_ARCTIC_EMBED_M"
  | "INSTRUCTOR_LARGE"
  | "BGE_BASE_EN_V1_5";

/**
 * Log Safety: SAFE
 */
export type FolderRid = LooselyBrandedString<"FolderRid">;

/**
 * The time at which the resource was created.
 *
 * Log Safety: SAFE
 */
export type CreatedTime = LooselyBrandedString<"CreatedTime">;

/**
 * The name of a field in a Struct.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldName = LooselyBrandedString<"StructFieldName">;

/**
 * Log Safety: SAFE
 */
export interface CipherTextType {
  defaultCipherChannel?: string;
}

/**
   * The vector similarity function to support approximate nearest neighbors search. Will result in an index
specific for the function.
   *
   * Log Safety: SAFE
   */
export interface VectorSimilarityFunction {
  value?: VectorSimilarityFunctionValue;
}

/**
 * Log Safety: SAFE
 */
export interface NullType {}

/**
 * The size of the file or attachment in bytes.
 *
 * Log Safety: SAFE
 */
export type SizeBytes = string;

/**
 * Log Safety: SAFE
 */
export interface LongType {}

/**
 * The display name of the entity.
 *
 * Log Safety: UNSAFE
 */
export type DisplayName = LooselyBrandedString<"DisplayName">;

/**
 * Log Safety: SAFE
 */
export interface AnyType {}

/**
 * The path to a File within Foundry. Examples: my-file.txt, path/to/my-file.jpg, dataframe.snappy.parquet.
 *
 * Log Safety: UNSAFE
 */
export type FilePath = LooselyBrandedString<"FilePath">;

/**
 * Log Safety: SAFE
 */
export interface DoubleType {}

/**
 * Log Safety: SAFE
 */
export type ContentLength = string;

/**
 * @deprecated Use `ListInterfaceTypesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListInterfaceTypesResponse {
  nextPageToken?: PageToken;
  data: Array<InterfaceType>;
}

/**
 * @deprecated Use `Query` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type Query = LooselyBrandedString<"Query">;

/**
 * @deprecated Use `ExecuteQueryResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryResponse {
  value: DataValue;
}

/**
* @deprecated Use `SelectedPropertyApiName` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SearchJsonQuery` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `BoundingBoxValue` in the `foundry.ontologies` package
 *
 * The top left and bottom right coordinate points that make up the bounding box.
 *
 * Log Safety: UNSAFE
 */
export interface BoundingBoxValue {
  topLeft: WithinBoundingBoxPoint;
  bottomRight: WithinBoundingBoxPoint;
}

/**
 * @deprecated Use `DeleteInterfaceObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface DeleteInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
* @deprecated Use `LteQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ObjectPrimaryKey` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type ObjectPrimaryKey = Record<PropertyApiName, PropertyValue>;

/**
 * @deprecated Use `BatchApplyActionResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionResponseV2 {
  edits?: ActionResults;
}

/**
 * @deprecated Use `DeleteLinkRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface DeleteLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
 * @deprecated Use `AggregateObjectSetRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectSetRequestV2 {
  aggregation: Array<AggregationV2>;
  objectSet: ObjectSet;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * @deprecated Use `CenterPoint` in the `foundry.ontologies` package
 *
 * The coordinate point to use as the center of the distance query.
 *
 * Log Safety: UNSAFE
 */
export interface CenterPoint {
  center: CenterPointTypes;
  distance: Distance;
}

/**
 * @deprecated Use `QueryTypeV2` in the `foundry.ontologies` package
 *
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryTypeV2 {
  apiName: QueryApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, QueryParameterV2>;
  output: QueryDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * @deprecated Use `ParameterEvaluationResult` in the `foundry.ontologies` package
 *
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
* @deprecated Use `GteQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ListLinkedObjectsResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponse {
  nextPageToken?: PageToken;
  data: Array<OntologyObject>;
}

/**
 * @deprecated Use `GeotimeSeriesValue` in the `foundry.ontologies` package
 *
 * The underlying data values pointed to by a GeotimeSeriesReference.
 *
 * Log Safety: UNSAFE
 */
export interface GeotimeSeriesValue {
  position: _Geo.Position;
  timestamp: string;
}

/**
* @deprecated Use `AggregationObjectTypeGrouping` in the `foundry.ontologies` package
*
   * Divides objects into groups based on their object type. This grouping is only useful when aggregating across
multiple object types, such as when aggregating over an interface type.
   *
   * Log Safety: SAFE
   */
export interface AggregationObjectTypeGrouping {}

/**
 * @deprecated Use `ActionMode` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ActionMode = "ASYNC" | "RUN" | "VALIDATE";

/**
* @deprecated Use `AggregationDurationGroupingV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ApproximateDistinctAggregationV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `OrderByDirection` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type OrderByDirection = "ASC" | "DESC";

/**
 * @deprecated Use `AbsoluteTimeRange` in the `foundry.ontologies` package
 *
 * ISO 8601 timestamps forming a range for a time series query. Start is inclusive and end is exclusive.
 *
 * Log Safety: UNSAFE
 */
export interface AbsoluteTimeRange {
  startTime?: string;
  endTime?: string;
}

/**
 * @deprecated Use `TimeseriesTemplateVersion` in the `foundry.ontologies` package
 *
 * The version corresponding to a codex template.
 *
 * Log Safety: UNSAFE
 */
export type TimeseriesTemplateVersion = LooselyBrandedString<
  "TimeseriesTemplateVersion"
>;

/**
 * @deprecated Use `ValidateActionRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ValidateActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `AggregationMetricResultV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResultV2 {
  name: string;
  value?: any;
}

/**
 * @deprecated Use `OrQueryV2` in the `foundry.ontologies` package
 *
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * @deprecated Use `AsyncApplyActionRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequestV2 {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `StructFieldApiName` in the `foundry.ontologies` package
 *
 * The name of a struct field in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type StructFieldApiName = LooselyBrandedString<"StructFieldApiName">;

/**
 * @deprecated Use `OntologyFullMetadata` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `TimeseriesEntry` in the `foundry.ontologies` package
 *
 * A time and value pair.
 *
 * Log Safety: UNSAFE
 */
export interface TimeseriesEntry {
  time: string;
  value: any;
}

/**
 * @deprecated Use `LoadObjectSetRequestV2` in the `foundry.ontologies` package
 *
 * Represents the API POST body when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetRequestV2 {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: PageToken;
  pageSize?: PageSize;
  excludeRid?: boolean;
}

/**
 * @deprecated Use `StreamTimeSeriesPointsResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsResponse {
  data: Array<TimeSeriesPoint>;
}

/**
 * @deprecated Use `QueryArrayType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryArrayType {
  subType: QueryDataType;
}

/**
 * @deprecated Use `AggregationExactGrouping` in the `foundry.ontologies` package
 *
 * Divides objects into groups according to an exact value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationExactGrouping {
  field: FieldNameV1;
  maxGroupCount?: number;
}

/**
 * @deprecated Use `SearchObjectsRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequest {
  query: SearchJsonQuery;
  orderBy?: SearchOrderBy;
  pageSize?: PageSize;
  pageToken?: PageToken;
  fields: Array<PropertyApiName>;
}

/**
 * @deprecated Use `OneOfConstraint` in the `foundry.ontologies` package
 *
 * The parameter has a manually predefined set of options.
 *
 * Log Safety: UNSAFE
 */
export interface OneOfConstraint {
  options: Array<ParameterOption>;
  otherValuesAllowed: boolean;
}

/**
 * @deprecated Use `ObjectEdit` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type ObjectEdit =
  | ({ type: "modifyObject" } & ModifyObject)
  | ({ type: "addObject" } & AddObject)
  | ({ type: "addLink" } & AddLink);

/**
 * @deprecated Use `DerivedPropertyDefinition` in the `foundry.ontologies` package
 *
 * Definition of a derived property.
 *
 * Log Safety: UNSAFE
 */
export type DerivedPropertyDefinition = {
  type: "selection";
} & SelectedPropertyDefinition;

/**
* @deprecated Use `AggregationDurationGrouping` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ObjectTypeEdits` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeEdits {
  editedObjectTypes: Array<ObjectTypeApiName>;
}

/**
 * @deprecated Use `OntologyObjectType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObjectType {
  objectApiName: ObjectTypeApiName;
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * @deprecated Use `OntologyObjectV2` in the `foundry.ontologies` package
 *
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export type OntologyObjectV2 = Record<PropertyApiName, PropertyValue>;

/**
 * @deprecated Use `SearchObjectsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `Parameter` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ObjectSetIntersectionType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetIntersectionType {
  objectSets: Array<ObjectSet>;
}

/**
 * @deprecated Use `GeotimeSeriesId` in the `foundry.ontologies` package
 *
 * The unique id of a geotime series (track) associated with a GTSR.
 *
 * Log Safety: UNSAFE
 */
export type GeotimeSeriesId = LooselyBrandedString<"GeotimeSeriesId">;

/**
 * @deprecated Use `OntologyInterfaceObjectType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyInterfaceObjectType {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * @deprecated Use `AsyncApplyActionRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AsyncApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `MinAggregationV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `AddObject` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AddObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * @deprecated Use `SelectedPropertyCountAggregation` in the `foundry.ontologies` package
 *
 * Computes the total count of objects.
 *
 * Log Safety: SAFE
 */
export interface SelectedPropertyCountAggregation {}

/**
 * @deprecated Use `Attachment` in the `foundry.ontologies` package
 *
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface Attachment {
  rid: AttachmentRid;
  filename: Filename;
  sizeBytes: SizeBytes;
  mediaType: MediaType;
}

/**
 * @deprecated Use `OntologyStructField` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyStructField {
  name: StructFieldName;
  fieldType: OntologyDataType;
  required: boolean;
}

/**
* @deprecated Use `InQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `QueryAggregationRangeSubType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by query aggregation ranges.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationRangeSubType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `LoadObjectSetV2MultipleObjectTypesRequest` in the `foundry.ontologies` package
 *
 * Represents the API POST body when loading an ObjectSet. Used on the /loadObjectsMultipleObjectTypes endpoint only.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetV2MultipleObjectTypesRequest {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: PageToken;
  pageSize?: PageSize;
  excludeRid?: boolean;
}

/**
 * @deprecated Use `ApplyActionRequestOptions` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface ApplyActionRequestOptions {
  mode?: ApplyActionMode;
  returnEdits?: ReturnEditsMode;
}

/**
 * @deprecated Use `Duration` in the `foundry.ontologies` package
 *
 * An ISO 8601 formatted duration.
 *
 * Log Safety: UNSAFE
 */
export type Duration = LooselyBrandedString<"Duration">;

/**
* @deprecated Use `PropertyApiName` in the `foundry.ontologies` package
*
   * The name of the property in the API. To find the API name for your property, use the Get object type
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type PropertyApiName = LooselyBrandedString<"PropertyApiName">;

/**
 * @deprecated Use `AggregationGroupValueV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupValueV2 = any;

/**
 * @deprecated Use `ObjectSetUnionType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetUnionType {
  objectSets: Array<ObjectSet>;
}

/**
 * @deprecated Use `ObjectTypeVisibility` in the `foundry.ontologies` package
 *
 * The suggested visibility of the object type.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * @deprecated Use `ListAttachmentsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListAttachmentsResponseV2 {
  data: Array<AttachmentV2>;
  nextPageToken?: PageToken;
}

/**
 * @deprecated Use `ListObjectsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponseV2 {
  nextPageToken?: PageToken;
  data: Array<OntologyObjectV2>;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `ObjectSetReferenceType` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface ObjectSetReferenceType {
  reference: ObjectSetRid;
}

/**
 * @deprecated Use `ApproximatePercentileAggregationV2` in the `foundry.ontologies` package
 *
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
* @deprecated Use `PropertyFilter` in the `foundry.ontologies` package
*
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
 * @deprecated Use `Icon` in the `foundry.ontologies` package
 *
 * A union currently only consisting of the BlueprintIcon (more icon types may be added in the future).
 *
 * Log Safety: UNSAFE
 */
export type Icon = { type: "blueprint" } & BlueprintIcon;

/**
 * @deprecated Use `AggregateObjectsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseV2 {
  excludedItems?: number;
  accuracy: AggregationAccuracy;
  data: Array<AggregateObjectsResponseItemV2>;
}

/**
* @deprecated Use `ContainsAllTermsInOrderPrefixLastTerm` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SubscriptionClosureCause` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type SubscriptionClosureCause =
  | ({ type: "reason" } & Reason)
  | ({ type: "error" } & Error);

/**
 * @deprecated Use `DerivedPropertyApiName` in the `foundry.ontologies` package
 *
 * The name of the derived property that will be returned.
 *
 * Log Safety: UNSAFE
 */
export type DerivedPropertyApiName = LooselyBrandedString<
  "DerivedPropertyApiName"
>;

/**
 * @deprecated Use `AggregationFixedWidthGrouping` in the `foundry.ontologies` package
 *
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGrouping {
  field: FieldNameV1;
  fixedWidth: number;
}

/**
 * @deprecated Use `Ontology` in the `foundry.ontologies` package
 *
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface Ontology {
  apiName: OntologyApiName;
  displayName: DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
* @deprecated Use `SharedPropertyTypeApiName` in the `foundry.ontologies` package
*
   * The name of the shared property type in the API in lowerCamelCase format. To find the API name for your
shared property type, use the List shared property types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type SharedPropertyTypeApiName = LooselyBrandedString<
  "SharedPropertyTypeApiName"
>;

/**
 * @deprecated Use `QueryAggregationRangeType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRangeType {
  subType: QueryAggregationRangeSubType;
}

/**
 * @deprecated Use `PropertyV2` in the `foundry.ontologies` package
 *
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface PropertyV2 {
  description?: string;
  displayName?: DisplayName;
  dataType: ObjectPropertyType;
  rid: PropertyTypeRid;
  status?: PropertyTypeStatus;
  visibility?: PropertyTypeVisibility;
}

/**
 * @deprecated Use `OntologyV2` in the `foundry.ontologies` package
 *
 * Metadata about an Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyV2 {
  apiName: OntologyApiName;
  displayName: DisplayName;
  description: string;
  rid: OntologyRid;
}

/**
 * @deprecated Use `AvgAggregationV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `InterfaceLinkTypeRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an interface link type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceLinkTypeRid = LooselyBrandedString<"InterfaceLinkTypeRid">;

/**
* @deprecated Use `GtQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `RelativeTimeRelation` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type RelativeTimeRelation = "BEFORE" | "AFTER";

/**
* @deprecated Use `ContainsQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `NotQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQuery {
  value: SearchJsonQuery;
}

/**
 * @deprecated Use `AggregationRangesGrouping` in the `foundry.ontologies` package
 *
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGrouping {
  field: FieldNameV1;
  ranges: Array<AggregationRange>;
}

/**
 * @deprecated Use `FieldNameV1` in the `foundry.ontologies` package
 *
 * A reference to an Ontology object property with the form properties.{propertyApiName}.
 *
 * Log Safety: UNSAFE
 */
export type FieldNameV1 = LooselyBrandedString<"FieldNameV1">;

/**
 * @deprecated Use `QueryUnionType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryUnionType {
  unionTypes: Array<QueryDataType>;
}

/**
* @deprecated Use `EqualsQueryV2` in the `foundry.ontologies` package
*
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
* @deprecated Use `AllTermsQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ActionTypeV2` in the `foundry.ontologies` package
 *
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionTypeV2 {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: DisplayName;
  status: ReleaseStatus;
  parameters: Record<ParameterId, ActionParameterV2>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
 * @deprecated Use `ExactDistinctAggregationV2` in the `foundry.ontologies` package
 *
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
* @deprecated Use `ActionTypeApiName` in the `foundry.ontologies` package
*
   * The name of the action type in the API. To find the API name for your Action Type, use the List action types
endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ActionTypeApiName = LooselyBrandedString<"ActionTypeApiName">;

/**
 * @deprecated Use `SelectedPropertyExactDistinctAggregation` in the `foundry.ontologies` package
 *
 * Computes an exact number of distinct values for the provided field. May be slower than an approximate distinct aggregation.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyExactDistinctAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `AggregationRange` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ObjectTypeV2` in the `foundry.ontologies` package
 *
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeV2 {
  apiName: ObjectTypeApiName;
  displayName: DisplayName;
  status: ReleaseStatus;
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
 * @deprecated Use `TimeSeriesPropertyV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type TimeSeriesPropertyV2 = LooselyBrandedString<"TimeSeriesPropertyV2">;

/**
 * @deprecated Use `StreamMessage` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type StreamMessage =
  | ({ type: "objectSetChanged" } & ObjectSetUpdates)
  | ({ type: "refreshObjectSet" } & RefreshObjectSet)
  | ({ type: "subscriptionClosed" } & SubscriptionClosed)
  | ({ type: "subscribeResponses" } & ObjectSetSubscribeResponses);

/**
* @deprecated Use `DoubleVector` in the `foundry.ontologies` package
*
   * The vector to search with. The vector must be of the same dimension as the vectors stored in the provided
propertyIdentifier.
   *
   * Log Safety: UNSAFE
   */
export interface DoubleVector {
  value: Array<number>;
}

/**
* @deprecated Use `LinkTypeApiName` in the `foundry.ontologies` package
*
   * The name of the link type in the API. To find the API name for your Link Type, check the Ontology Manager
application.
   *
   * Log Safety: UNSAFE
   */
export type LinkTypeApiName = LooselyBrandedString<"LinkTypeApiName">;

/**
 * @deprecated Use `StructType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StructType {
  structFieldTypes: Array<StructFieldType>;
}

/**
 * @deprecated Use `AttachmentRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an attachment.
 *
 * Log Safety: SAFE
 */
export type AttachmentRid = LooselyBrandedString<"AttachmentRid">;

/**
 * @deprecated Use `SearchOrderByV2` in the `foundry.ontologies` package
 *
 * Specifies the ordering of search results by a field and an ordering direction or by relevance if scores are required in a nearestNeighbors query. By default orderType is set to fields.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderByV2 {
  orderType?: SearchOrderByType;
  fields: Array<SearchOrderingV2>;
}

/**
 * @deprecated Use `QueryThreeDimensionalAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryThreeDimensionalAggregation {
  groups: Array<NestedQueryAggregation>;
}

/**
 * @deprecated Use `RangeConstraint` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `OntologyObjectSetType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObjectSetType {
  objectApiName?: ObjectTypeApiName;
  objectTypeApiName?: ObjectTypeApiName;
}

/**
* @deprecated Use `ObjectSetStreamSubscribeRequests` in the `foundry.ontologies` package
*
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
 * @deprecated Use `CenterPointTypes` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type CenterPointTypes = { type: "Point" } & _Geo.GeoPoint;

/**
 * @deprecated Use `InterfaceToObjectTypeMappings` in the `foundry.ontologies` package
 *
 * Map from object type to the interface-to-object-type mapping for that object type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceToObjectTypeMappings = Record<
  ObjectTypeApiName,
  InterfaceToObjectTypeMapping
>;

/**
 * @deprecated Use `SearchOrderByType` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type SearchOrderByType = "fields" | "relevance";

/**
 * @deprecated Use `SelectedPropertyOperation` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ListObjectsResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListObjectsResponse {
  nextPageToken?: PageToken;
  data: Array<OntologyObject>;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `ObjectSetRid` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ObjectSetRid = LooselyBrandedString<"ObjectSetRid">;

/**
 * @deprecated Use `LinkTypeSideV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface LinkTypeSideV2 {
  apiName: LinkTypeApiName;
  displayName: DisplayName;
  status: ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
  linkTypeRid: LinkTypeRid;
}

/**
 * @deprecated Use `SelectedPropertyApproximateDistinctAggregation` in the `foundry.ontologies` package
 *
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyApproximateDistinctAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `CreateLinkRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface CreateLinkRule {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObjectTypeApiName: ObjectTypeApiName;
  bSideObjectTypeApiName: ObjectTypeApiName;
}

/**
 * @deprecated Use `ActionParameterType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by Ontology Action parameters.
 *
 * Log Safety: UNSAFE
 */
export type ActionParameterType =
  | ({ type: "date" } & DateType)
  | ({ type: "interfaceObject" } & OntologyInterfaceObjectType)
  | ({ type: "struct" } & OntologyStructType)
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "long" } & LongType)
  | ({ type: "objectType" } & OntologyObjectTypeReferenceType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "mediaReference" } & MediaReferenceType)
  | ({ type: "array" } & ActionParameterArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `AggregationGroupBy` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `MethodObjectSet` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type MethodObjectSet = ObjectSet;

/**
 * @deprecated Use `MaxAggregationV2` in the `foundry.ontologies` package
 *
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
* @deprecated Use `OntologyRid` in the `foundry.ontologies` package
*
   * The unique Resource Identifier (RID) of the Ontology. To look up your Ontology RID, please use the
List Core endpoint or check the Ontology Manager.
   *
   * Log Safety: SAFE
   */
export type OntologyRid = LooselyBrandedString<"OntologyRid">;

/**
 * @deprecated Use `PropertyIdentifier` in the `foundry.ontologies` package
 *
 * An identifier used to select properties or struct fields.
 *
 * Log Safety: UNSAFE
 */
export type PropertyIdentifier =
  | ({ type: "property" } & PropertyApiNameSelector)
  | ({ type: "structField" } & StructFieldSelector);

/**
 * @deprecated Use `AggregationRangesGroupingV2` in the `foundry.ontologies` package
 *
 * Divides objects into groups according to specified ranges.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangesGroupingV2 {
  field: PropertyApiName;
  ranges: Array<AggregationRangeV2>;
}

/**
 * @deprecated Use `ValidateActionResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponse {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
}

/**
 * @deprecated Use `QueryStructField` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryStructField {
  name: StructFieldName;
  fieldType: QueryDataType;
}

/**
 * @deprecated Use `ThreeDimensionalAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ThreeDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: TwoDimensionalAggregation;
}

/**
 * @deprecated Use `OntologyObject` in the `foundry.ontologies` package
 *
 * Represents an object in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObject {
  properties: Record<PropertyApiName, PropertyValue | undefined>;
  rid: ObjectRid;
}

/**
 * @deprecated Use `ObjectType` in the `foundry.ontologies` package
 *
 * Represents an object type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectType {
  apiName: ObjectTypeApiName;
  displayName?: DisplayName;
  status: ReleaseStatus;
  description?: string;
  visibility?: ObjectTypeVisibility;
  primaryKey: Array<PropertyApiName>;
  properties: Record<PropertyApiName, Property>;
  rid: ObjectTypeRid;
}

/**
 * @deprecated Use `CreateTemporaryObjectSetResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface CreateTemporaryObjectSetResponseV2 {
  objectSetRid: ObjectSetRid;
}

/**
* @deprecated Use `NearestNeighborsQuery` in the `foundry.ontologies` package
*
   * Queries support either a vector matching the embedding model defined on the property, or text that is
automatically embedded.
   *
   * Log Safety: UNSAFE
   */
export type NearestNeighborsQuery =
  | ({ type: "vector" } & DoubleVector)
  | ({ type: "text" } & NearestNeighborsQueryText);

/**
 * @deprecated Use `SearchJsonQueryV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `Property` in the `foundry.ontologies` package
 *
 * Details about some property of an object.
 *
 * Log Safety: UNSAFE
 */
export interface Property {
  description?: string;
  displayName?: DisplayName;
  baseType: ValueType;
}

/**
* @deprecated Use `LoadObjectSetV2MultipleObjectTypesResponse` in the `foundry.ontologies` package
*
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
  nextPageToken?: PageToken;
  totalCount: TotalCount;
  interfaceToObjectTypeMappings: Record<
    InterfaceTypeApiName,
    InterfaceToObjectTypeMappings
  >;
}

/**
* @deprecated Use `WithinDistanceOfQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SearchObjectsRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchObjectsRequestV2 {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderByV2;
  pageSize?: PageSize;
  pageToken?: PageToken;
  select: Array<PropertyApiName>;
  excludeRid?: boolean;
}

/**
 * @deprecated Use `OntologyApiName` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type OntologyApiName = LooselyBrandedString<"OntologyApiName">;

/**
 * @deprecated Use `AttachmentMetadataResponse` in the `foundry.ontologies` package
 *
 * The attachment metadata response
 *
 * Log Safety: UNSAFE
 */
export type AttachmentMetadataResponse =
  | ({ type: "single" } & AttachmentV2)
  | ({ type: "multiple" } & ListAttachmentsResponseV2);

/**
* @deprecated Use `FilterValue` in the `foundry.ontologies` package
*
   * Represents the value of a property filter. For instance, false is the FilterValue in
properties.{propertyApiName}.isNull=false.
   *
   * Log Safety: UNSAFE
   */
export type FilterValue = LooselyBrandedString<"FilterValue">;

/**
 * @deprecated Use `LoadObjectSetV2ObjectsOrInterfacesRequest` in the `foundry.ontologies` package
 *
 * Represents the API POST body when loading an ObjectSet. Used on the /loadObjectsOrInterfaces endpoint only.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetV2ObjectsOrInterfacesRequest {
  objectSet: ObjectSet;
  orderBy?: SearchOrderByV2;
  select: Array<SelectedPropertyApiName>;
  pageToken?: PageToken;
  pageSize?: PageSize;
  excludeRid?: boolean;
}

/**
 * @deprecated Use `ListActionTypesResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<ActionTypeV2>;
}

/**
 * @deprecated Use `LinkTypeSideCardinality` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type LinkTypeSideCardinality = "ONE" | "MANY";

/**
* @deprecated Use `FunctionVersion` in the `foundry.ontologies` package
*
   * The version of the given Function, written <major>.<minor>.<patch>-<tag>, where -<tag> is optional.
Examples: 1.2.3, 1.2.3-rc1.
   *
   * Log Safety: UNSAFE
   */
export type FunctionVersion = LooselyBrandedString<"FunctionVersion">;

/**
 * @deprecated Use `RefreshObjectSet` in the `foundry.ontologies` package
 *
 * The list of updated Foundry Objects cannot be provided. The object set must be refreshed using Object Set Service.
 *
 * Log Safety: UNSAFE
 */
export interface RefreshObjectSet {
  id: SubscriptionId;
  objectType: ObjectTypeApiName;
}

/**
 * @deprecated Use `InterfaceLinkTypeLinkedEntityApiName` in the `foundry.ontologies` package
 *
 * A reference to the linked entity. This can either be an object or an interface type.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeLinkedEntityApiName =
  | ({ type: "objectTypeApiName" } & LinkedObjectTypeApiName)
  | ({ type: "interfaceTypeApiName" } & LinkedInterfaceTypeApiName);

/**
 * @deprecated Use `BatchApplyActionRequestOptions` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface BatchApplyActionRequestOptions {
  returnEdits?: ReturnEditsMode;
}

/**
 * @deprecated Use `OntologyMapType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyMapType {
  keyType: OntologyDataType;
  valueType: OntologyDataType;
}

/**
* @deprecated Use `ParameterId` in the `foundry.ontologies` package
*
   * The unique identifier of the parameter. Parameters are used as inputs when an action or query is applied.
Parameters can be viewed and managed in the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ParameterId = LooselyBrandedString<"ParameterId">;

/**
 * @deprecated Use `PropertyTypeVisibility` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type PropertyTypeVisibility = "NORMAL" | "PROMINENT" | "HIDDEN";

/**
 * @deprecated Use `InterfaceType` in the `foundry.ontologies` package
 *
 * Represents an interface type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface InterfaceType {
  rid: InterfaceTypeRid;
  apiName: InterfaceTypeApiName;
  displayName: DisplayName;
  description?: string;
  properties: Record<SharedPropertyTypeApiName, SharedPropertyType>;
  allProperties: Record<SharedPropertyTypeApiName, SharedPropertyType>;
  extendsInterfaces: Array<InterfaceTypeApiName>;
  allExtendsInterfaces: Array<InterfaceTypeApiName>;
  implementedByObjectTypes: Array<ObjectTypeApiName>;
  links: Record<InterfaceLinkTypeApiName, InterfaceLinkType>;
  allLinks: Record<InterfaceLinkTypeApiName, InterfaceLinkType>;
}

/**
 * @deprecated Use `OntologyInterface` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type OntologyInterface = LooselyBrandedString<"OntologyInterface">;

/**
 * @deprecated Use `ActionRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier for an action.
 *
 * Log Safety: SAFE
 */
export type ActionRid = LooselyBrandedString<"ActionRid">;

/**
* @deprecated Use `DeprecatedPropertyTypeStatus` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ListQueryTypesResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<QueryTypeV2>;
}

/**
 * @deprecated Use `ObjectUpdate` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectUpdate {
  object: OntologyObjectV2;
  state: ObjectState;
}

/**
 * @deprecated Use `SdkPackageName` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type SdkPackageName = LooselyBrandedString<"SdkPackageName">;

/**
* @deprecated Use `ObjectTypeApiName` in the `foundry.ontologies` package
*
   * The name of the object type in the API in camelCase format. To find the API name for your Object Type, use the
List object types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type ObjectTypeApiName = LooselyBrandedString<"ObjectTypeApiName">;

/**
 * @deprecated Use `LinkSideObject` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface LinkSideObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * @deprecated Use `ListObjectTypesV2Response` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListObjectTypesV2Response {
  nextPageToken?: PageToken;
  data: Array<ObjectTypeV2>;
}

/**
 * @deprecated Use `InterfaceLinkTypeApiName` in the `foundry.ontologies` package
 *
 * A string indicating the API name to use for the interface link.
 *
 * Log Safety: UNSAFE
 */
export type InterfaceLinkTypeApiName = LooselyBrandedString<
  "InterfaceLinkTypeApiName"
>;

/**
 * @deprecated Use `AggregateObjectsResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponse {
  excludedItems?: number;
  nextPageToken?: PageToken;
  data: Array<AggregateObjectsResponseItem>;
}

/**
* @deprecated Use `SubmissionCriteriaEvaluation` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SumAggregationV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `OntologyObjectSet` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type OntologyObjectSet = LooselyBrandedString<"OntologyObjectSet">;

/**
 * @deprecated Use `ApplyActionMode` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ApplyActionMode = "VALIDATE_ONLY" | "VALIDATE_AND_EXECUTE";

/**
 * @deprecated Use `CreateInterfaceObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface CreateInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * @deprecated Use `ObjectSetStaticType` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface ObjectSetStaticType {
  objects: Array<ObjectRid>;
}

/**
 * @deprecated Use `DeleteObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface DeleteObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * @deprecated Use `PropertyApiNameSelector` in the `foundry.ontologies` package
 *
 * A property api name that references properties to query on.
 *
 * Log Safety: UNSAFE
 */
export interface PropertyApiNameSelector {
  apiName: PropertyApiName;
}

/**
 * @deprecated Use `GtQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field is greater than a value.
 *
 * Log Safety: UNSAFE
 */
export interface GtQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
 * @deprecated Use `ObjectPropertyType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by Ontology Object properties.
 *
 * Log Safety: UNSAFE
 */
export type ObjectPropertyType =
  | ({ type: "date" } & DateType)
  | ({ type: "struct" } & StructType)
  | ({ type: "string" } & StringType)
  | ({ type: "byte" } & ByteType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "geopoint" } & GeoPointType)
  | ({ type: "geotimeSeriesReference" } & GeotimeSeriesReferenceType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "float" } & FloatType)
  | ({ type: "geoshape" } & GeoShapeType)
  | ({ type: "long" } & LongType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "cipherText" } & CipherTextType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "mediaReference" } & MediaReferenceType)
  | ({ type: "timeseries" } & TimeseriesType)
  | ({ type: "array" } & OntologyObjectArrayType)
  | ({ type: "short" } & ShortType)
  | ({ type: "vector" } & VectorType)
  | ({ type: "decimal" } & DecimalType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `TimeseriesSyncRid` in the `foundry.ontologies` package
 *
 * The RID identifying a time series sync.
 *
 * Log Safety: SAFE
 */
export type TimeseriesSyncRid = LooselyBrandedString<"TimeseriesSyncRid">;

/**
 * @deprecated Use `ActionParameterV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `InterfaceToObjectTypeMapping` in the `foundry.ontologies` package
 *
 * Represents an implementation of an interface (the mapping of interface property to local property).
 *
 * Log Safety: UNSAFE
 */
export type InterfaceToObjectTypeMapping = Record<
  SharedPropertyTypeApiName,
  PropertyApiName
>;

/**
* @deprecated Use `StreamingOutputFormat` in the `foundry.ontologies` package
*
   * Which format to serialize the binary stream in.
ARROW is more efficient for streaming a large sized response.
   *
   * Log Safety: SAFE
   */
export type StreamingOutputFormat = "JSON" | "ARROW";

/**
 * @deprecated Use `SearchOrdering` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrdering {
  field: FieldNameV1;
  direction?: string;
}

/**
* @deprecated Use `StringLengthConstraint` in the `foundry.ontologies` package
*
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
* @deprecated Use `SelectedPropertyCollectSetAggregation` in the `foundry.ontologies` package
*
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
 * @deprecated Use `QueryApiName` in the `foundry.ontologies` package
 *
 * The name of the Query in the API.
 *
 * Log Safety: UNSAFE
 */
export type QueryApiName = LooselyBrandedString<"QueryApiName">;

/**
 * @deprecated Use `PhraseQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field contains the provided value as a substring.
 *
 * Log Safety: UNSAFE
 */
export interface PhraseQuery {
  field: FieldNameV1;
  value: string;
}

/**
 * @deprecated Use `QueryTwoDimensionalAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryTwoDimensionalAggregation {
  groups: Array<QueryAggregation>;
}

/**
* @deprecated Use `ValueType` in the `foundry.ontologies` package
*
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
 * @deprecated Use `LinkedInterfaceTypeApiName` in the `foundry.ontologies` package
 *
 * A reference to the linked interface type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedInterfaceTypeApiName {
  apiName: InterfaceTypeApiName;
}

/**
 * @deprecated Use `ApproximateDistinctAggregation` in the `foundry.ontologies` package
 *
 * Computes an approximate number of distinct values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface ApproximateDistinctAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * @deprecated Use `SharedPropertyType` in the `foundry.ontologies` package
 *
 * A property type that can be shared across object types.
 *
 * Log Safety: UNSAFE
 */
export interface SharedPropertyType {
  rid: SharedPropertyTypeRid;
  apiName: SharedPropertyTypeApiName;
  displayName: DisplayName;
  description?: string;
  dataType: ObjectPropertyType;
}

/**
 * @deprecated Use `Error` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface Error {
  error: ErrorName;
  args: Array<Arg>;
}

/**
 * @deprecated Use `AndQueryV2` in the `foundry.ontologies` package
 *
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * @deprecated Use `ObjectQueryResultConstraint` in the `foundry.ontologies` package
 *
 * The parameter value must be the primary key of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectQueryResultConstraint {}

/**
 * @deprecated Use `ListOutgoingLinkTypesResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponseV2 {
  nextPageToken?: PageToken;
  data: Array<LinkTypeSideV2>;
}

/**
 * @deprecated Use `ModifyObject` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ModifyObject {
  primaryKey: PropertyValue;
  objectType: ObjectTypeApiName;
}

/**
 * @deprecated Use `RelativeTimeRange` in the `foundry.ontologies` package
 *
 * A relative time range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export interface RelativeTimeRange {
  startTime?: RelativeTime;
  endTime?: RelativeTime;
}

/**
 * @deprecated Use `SyncApplyActionResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SyncApplyActionResponseV2 {
  validation?: ValidateActionResponseV2;
  edits?: ActionResults;
}

/**
 * @deprecated Use `Fuzzy` in the `foundry.ontologies` package
 *
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type Fuzzy = boolean;

/**
 * @deprecated Use `AggregationMetricName` in the `foundry.ontologies` package
 *
 * A user-specified alias for an aggregation metric name.
 *
 * Log Safety: UNSAFE
 */
export type AggregationMetricName = LooselyBrandedString<
  "AggregationMetricName"
>;

/**
* @deprecated Use `ObjectSetAsTypeType` in the `foundry.ontologies` package
*
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
* @deprecated Use `LtQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `QueryAggregationRange` in the `foundry.ontologies` package
 *
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface QueryAggregationRange {
  startValue?: any;
  endValue?: any;
}

/**
 * @deprecated Use `CustomTypeId` in the `foundry.ontologies` package
 *
 * A UUID representing a custom type in a given Function.
 *
 * Log Safety: SAFE
 */
export type CustomTypeId = LooselyBrandedString<"CustomTypeId">;

/**
 * @deprecated Use `MinAggregation` in the `foundry.ontologies` package
 *
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MinAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * @deprecated Use `ModifyInterfaceObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ModifyInterfaceObjectRule {
  interfaceTypeApiName: InterfaceTypeApiName;
}

/**
 * @deprecated Use `QueryStructType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryStructType {
  fields: Array<QueryStructField>;
}

/**
 * @deprecated Use `DerivedTimeSeriesProperty` in the `foundry.ontologies` package
 *
 * The representation of a time series property backed by a derived time series calculated with a formula.
 *
 * Log Safety: UNSAFE
 */
export interface DerivedTimeSeriesProperty {
  templateRid: TimeseriesTemplateRid;
  templateVersion?: TimeseriesTemplateVersion;
}

/**
 * @deprecated Use `TimeUnit` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `PropertyTypeRid` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type PropertyTypeRid = LooselyBrandedString<"PropertyTypeRid">;

/**
* @deprecated Use `PropertyValue` in the `foundry.ontologies` package
*
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
 * @deprecated Use `StreamTimeSeriesPointsRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesPointsRequest {
  range?: TimeRange;
}

/**
 * @deprecated Use `ObjectSet` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `SubscriptionError` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SubscriptionError {
  errors: Array<Error>;
}

/**
 * @deprecated Use `ObjectSetUpdates` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetUpdates {
  id: SubscriptionId;
  updates: Array<ObjectSetUpdate>;
}

/**
 * @deprecated Use `Arg` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface Arg {
  name: string;
  value: string;
}

/**
 * @deprecated Use `AggregateObjectsRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequest {
  aggregation: Array<Aggregation>;
  query?: SearchJsonQuery;
  groupBy: Array<AggregationGroupBy>;
}

/**
 * @deprecated Use `ApplyActionResponse` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface ApplyActionResponse {}

/**
 * @deprecated Use `BatchApplyActionResponse` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface BatchApplyActionResponse {}

/**
 * @deprecated Use `AsyncApplyActionOperationV2` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type AsyncApplyActionOperationV2 = undefined; // {"locator":{"namespaceName":"Core","localName":"AsyncApplyActionOperationV2"},"type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsyncV2","resultType":{"locator":{"namespaceName":"Core","localName":"AsyncApplyActionOperationResponseV2"}},"stageType":{"locator":{"namespaceName":"Core","localName":"AsyncActionStatus"}}}},"safety":"SAFE","documentation":{"example":[]}}

/**
 * @deprecated Use `AggregateObjectsRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsRequestV2 {
  aggregation: Array<AggregationV2>;
  where?: SearchJsonQueryV2;
  groupBy: Array<AggregationGroupByV2>;
  accuracy?: AggregationAccuracyRequest;
}

/**
 * @deprecated Use `IsNullQuery` in the `foundry.ontologies` package
 *
 * Returns objects based on the existence of the specified field.
 *
 * Log Safety: UNSAFE
 */
export interface IsNullQuery {
  field: FieldNameV1;
  value: boolean;
}

/**
 * @deprecated Use `MediaReferenceProperty` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type MediaReferenceProperty = LooselyBrandedString<
  "MediaReferenceProperty"
>;

/**
 * @deprecated Use `RelativeTime` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `SelectedPropertySumAggregation` in the `foundry.ontologies` package
 *
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertySumAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `QueryAggregationValueType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationValueType =
  | ({ type: "date" } & DateType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `PropertyValueEscapedString` in the `foundry.ontologies` package
 *
 * Represents the value of a property in string format. This is used in URL parameters.
 *
 * Log Safety: UNSAFE
 */
export type PropertyValueEscapedString = LooselyBrandedString<
  "PropertyValueEscapedString"
>;

/**
* @deprecated Use `DoesNotIntersectBoundingBoxQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `CreateTemporaryObjectSetRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface CreateTemporaryObjectSetRequestV2 {
  objectSet: ObjectSet;
}

/**
 * @deprecated Use `ObjectEdits` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ReasonType` in the `foundry.ontologies` package
 *
 * Represents the reason a subscription was closed.
 *
 * Log Safety: SAFE
 */
export type ReasonType = "USER_CLOSED" | "CHANNEL_CLOSED";

/**
 * @deprecated Use `GroupMemberConstraint` in the `foundry.ontologies` package
 *
 * The parameter value must be the user id of a member belonging to at least one of the groups defined by the constraint.
 *
 * Log Safety: SAFE
 */
export interface GroupMemberConstraint {}

/**
 * @deprecated Use `ObjectSetSubscribeResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type ObjectSetSubscribeResponse =
  | ({ type: "qos" } & QosError)
  | ({ type: "success" } & SubscriptionSuccess)
  | ({ type: "error" } & SubscriptionError);

/**
 * @deprecated Use `QueryAggregationKeyType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by query aggregation keys.
 *
 * Log Safety: UNSAFE
 */
export type QueryAggregationKeyType =
  | ({ type: "date" } & DateType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "range" } & QueryAggregationRangeType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `AggregationGroupByV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `LoadObjectSetResponseV2` in the `foundry.ontologies` package
 *
 * Represents the API response when loading an ObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface LoadObjectSetResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `SearchObjectsResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchObjectsResponse {
  data: Array<OntologyObject>;
  nextPageToken?: PageToken;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `AttachmentProperty` in the `foundry.ontologies` package
 *
 * The representation of an attachment as a data type.
 *
 * Log Safety: SAFE
 */
export interface AttachmentProperty {
  rid: AttachmentRid;
}

/**
* @deprecated Use `PropertyId` in the `foundry.ontologies` package
*
   * The immutable ID of a property. Property IDs are only used to identify properties in the Ontology Manager
application and assign them API names. In every other case, API names should be used instead of property IDs.
   *
   * Log Safety: UNSAFE
   */
export type PropertyId = LooselyBrandedString<"PropertyId">;

/**
 * @deprecated Use `BatchApplyActionRequestItem` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestItem {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `ParameterOption` in the `foundry.ontologies` package
 *
 * A possible value for the parameter. This is defined in the Ontology Manager by Actions admins.
 *
 * Log Safety: UNSAFE
 */
export interface ParameterOption {
  displayName?: DisplayName;
  value?: any;
}

/**
 * @deprecated Use `OntologySetType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologySetType {
  itemType: OntologyDataType;
}

/**
 * @deprecated Use `CountAggregation` in the `foundry.ontologies` package
 *
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregation {
  name?: AggregationMetricName;
}

/**
 * @deprecated Use `PolygonValue` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type PolygonValue = { type: "Polygon" } & _Geo.Polygon;

/**
 * @deprecated Use `GteQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field is greater than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface GteQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
 * @deprecated Use `RelativeTimeSeriesTimeUnit` in the `foundry.ontologies` package
 *
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
* @deprecated Use `DataValue` in the `foundry.ontologies` package
*
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
| Float                               | number                                                | 3.14159265                                                                                                                                                  |
| Double                              | number                                                | 3.14159265                                                                                                                                                  |
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
 * @deprecated Use `OntologyDataType` in the `foundry.ontologies` package
 *
 * A union of all the primitive types used by Palantir's Ontology-based products.
 *
 * Log Safety: UNSAFE
 */
export type OntologyDataType =
  | ({ type: "date" } & DateType)
  | ({ type: "struct" } & OntologyStructType)
  | ({ type: "set" } & OntologySetType)
  | ({ type: "string" } & StringType)
  | ({ type: "byte" } & ByteType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "float" } & FloatType)
  | ({ type: "any" } & AnyType)
  | ({ type: "long" } & LongType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "cipherText" } & CipherTextType)
  | ({ type: "marking" } & MarkingType)
  | ({ type: "unsupported" } & UnsupportedType)
  | ({ type: "array" } & OntologyArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "binary" } & BinaryType)
  | ({ type: "short" } & ShortType)
  | ({ type: "decimal" } & DecimalType)
  | ({ type: "map" } & OntologyMapType)
  | ({ type: "timestamp" } & TimestampType)
  | ({ type: "object" } & OntologyObjectType);

/**
 * @deprecated Use `QualifiedTimeseriesProperty` in the `foundry.ontologies` package
 *
 * The representation of a time series property backed by multiple time series syncs.
 *
 * Log Safety: UNSAFE
 */
export interface QualifiedTimeseriesProperty {
  seriesId: SeriesId;
  syncRid: TimeseriesSyncRid;
}

/**
 * @deprecated Use `SelectedPropertyMinAggregation` in the `foundry.ontologies` package
 *
 * Computes the minimum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyMinAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `FunctionRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of a Function, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type FunctionRid = LooselyBrandedString<"FunctionRid">;

/**
 * @deprecated Use `BlueprintIcon` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface BlueprintIcon {
  color: string;
  name: string;
}

/**
 * @deprecated Use `OntologyObjectArrayType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyObjectArrayType {
  subType: ObjectPropertyType;
}

/**
* @deprecated Use `IntersectsBoundingBoxQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SubscriptionSuccess` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface SubscriptionSuccess {
  id: SubscriptionId;
}

/**
 * @deprecated Use `AggregateObjectsResponseItemV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItemV2 {
  group: Record<AggregationGroupKeyV2, AggregationGroupValueV2>;
  metrics: Array<AggregationMetricResultV2>;
}

/**
 * @deprecated Use `AggregationGroupKeyV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupKeyV2 = LooselyBrandedString<
  "AggregationGroupKeyV2"
>;

/**
 * @deprecated Use `AddLink` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AddLink {
  linkTypeApiNameAtoB: LinkTypeApiName;
  linkTypeApiNameBtoA: LinkTypeApiName;
  aSideObject: LinkSideObject;
  bSideObject: LinkSideObject;
}

/**
 * @deprecated Use `ListObjectTypesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListObjectTypesResponse {
  nextPageToken?: PageToken;
  data: Array<ObjectType>;
}

/**
* @deprecated Use `LoadObjectSetV2ObjectsOrInterfacesResponse` in the `foundry.ontologies` package
*
   * Represents the API response when loading an ObjectSet. Objects in the returned set can either have properties
defined by an interface that the objects belong to or properties defined by the object type of the object.
   *
   * Log Safety: UNSAFE
   */
export interface LoadObjectSetV2ObjectsOrInterfacesResponse {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
  totalCount: TotalCount;
}

/**
 * @deprecated Use `TimeRange` in the `foundry.ontologies` package
 *
 * An absolute or relative range for a time series query.
 *
 * Log Safety: UNSAFE
 */
export type TimeRange =
  | ({ type: "absolute" } & AbsoluteTimeRange)
  | ({ type: "relative" } & RelativeTimeRange);

/**
 * @deprecated Use `ObjectPropertyValueConstraint` in the `foundry.ontologies` package
 *
 * The parameter value must be a property value of an object found within an object set.
 *
 * Log Safety: SAFE
 */
export interface ObjectPropertyValueConstraint {}

/**
 * @deprecated Use `SumAggregation` in the `foundry.ontologies` package
 *
 * Computes the sum of values for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SumAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
* @deprecated Use `InterfaceLinkTypeCardinality` in the `foundry.ontologies` package
*
   * The cardinality of the link in the given direction. Cardinality can be "ONE", meaning an object can
link to zero or one other objects, or "MANY", meaning an object can link to any number of other objects.
   *
   * Log Safety: SAFE
   */
export type InterfaceLinkTypeCardinality = "ONE" | "MANY";

/**
 * @deprecated Use `TwoDimensionalAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface TwoDimensionalAggregation {
  keyType: QueryAggregationKeyType;
  valueType: QueryAggregationValueType;
}

/**
 * @deprecated Use `OntologyArrayType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyArrayType {
  itemType: OntologyDataType;
}

/**
 * @deprecated Use `Action` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type Action = LooselyBrandedString<"Action">;

/**
 * @deprecated Use `ExecuteQueryRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ExecuteQueryRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `OrQuery` in the `foundry.ontologies` package
 *
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * @deprecated Use `SelectedPropertyMaxAggregation` in the `foundry.ontologies` package
 *
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyMaxAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `ObjectSetStreamSubscribeRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetStreamSubscribeRequest {
  objectSet: ObjectSet;
  propertySet: Array<SelectedPropertyApiName>;
  referenceSet: Array<SelectedPropertyApiName>;
}

/**
 * @deprecated Use `PrimaryKeyValue` in the `foundry.ontologies` package
 *
 * Represents the primary key value that is used as a unique identifier for an object.
 *
 * Log Safety: UNSAFE
 */
export type PrimaryKeyValue = any;

/**
 * @deprecated Use `QueryAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QueryAggregation {
  key: any;
  value: any;
}

/**
 * @deprecated Use `MaxAggregation` in the `foundry.ontologies` package
 *
 * Computes the maximum value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface MaxAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * @deprecated Use `ObjectSetInterfaceBaseType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetInterfaceBaseType {
  interfaceType: string;
}

/**
 * @deprecated Use `CountAggregationV2` in the `foundry.ontologies` package
 *
 * Computes the total count of objects.
 *
 * Log Safety: UNSAFE
 */
export interface CountAggregationV2 {
  name?: AggregationMetricName;
  direction?: OrderByDirection;
}

/**
 * @deprecated Use `QuerySetType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface QuerySetType {
  subType: QueryDataType;
}

/**
* @deprecated Use `ObjectState` in the `foundry.ontologies` package
*
   * Represents the state of the object within the object set. ADDED_OR_UPDATED indicates that the object was
added to the set or the object has updated and was previously in the set. REMOVED indicates that the object
was removed from the set due to the object being deleted or the object no longer meets the object set
definition.
   *
   * Log Safety: SAFE
   */
export type ObjectState = "ADDED_OR_UPDATED" | "REMOVED";

/**
 * @deprecated Use `GeotimeSeriesIntegrationRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of a geotime integration.
 *
 * Log Safety: SAFE
 */
export type GeotimeSeriesIntegrationRid = LooselyBrandedString<
  "GeotimeSeriesIntegrationRid"
>;

/**
 * @deprecated Use `QueryOutputV2` in the `foundry.ontologies` package
 *
 * Details about the output of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryOutputV2 {
  dataType: QueryDataType;
  required: boolean;
}

/**
* @deprecated Use `ObjectSetAsBaseObjectTypesType` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ObjectSetSubtractType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetSubtractType {
  objectSets: Array<ObjectSet>;
}

/**
* @deprecated Use `GetSelectedPropertyOperation` in the `foundry.ontologies` package
*
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
 * @deprecated Use `AggregationOrderBy` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregationOrderBy {
  metricName: string;
}

/**
 * @deprecated Use `AggregationV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ApplyActionRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ApplyActionRequestV2 {
  options?: ApplyActionRequestOptions;
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
* @deprecated Use `ContainsAnyTermQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `GeotimeSeriesProperty` in the `foundry.ontologies` package
 *
 * The representation of a geotime series integration as a data type.
 *
 * Log Safety: UNSAFE
 */
export interface GeotimeSeriesProperty {
  geotimeSeriesId: GeotimeSeriesId;
  geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
}

/**
 * @deprecated Use `OntologyIdentifier` in the `foundry.ontologies` package
 *
 * Either an ontology rid or an ontology api name.
 *
 * Log Safety: UNSAFE
 */
export type OntologyIdentifier = LooselyBrandedString<"OntologyIdentifier">;

/**
 * @deprecated Use `AggregationAccuracyRequest` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type AggregationAccuracyRequest =
  | "REQUIRE_ACCURATE"
  | "ALLOW_APPROXIMATE";

/**
 * @deprecated Use `LtQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field is less than a value.
 *
 * Log Safety: UNSAFE
 */
export interface LtQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
 * @deprecated Use `AggregationGroupValue` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupValue = any;

/**
 * @deprecated Use `LinkedObjectV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type LinkedObjectV2 = LooselyBrandedString<"LinkedObjectV2">;

/**
 * @deprecated Use `SearchObjectsForInterfaceRequest` in the `foundry.ontologies` package
 *
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
  pageSize?: PageSize;
  pageToken?: PageToken;
}

/**
 * @deprecated Use `SelectedPropertyApproximatePercentileAggregation` in the `foundry.ontologies` package
 *
 * Computes the approximate percentile value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyApproximatePercentileAggregation {
  selectedPropertyApiName: PropertyApiName;
  approximatePercentile: number;
}

/**
 * @deprecated Use `StreamTimeSeriesValuesRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesValuesRequest {
  range?: TimeRange;
}

/**
 * @deprecated Use `LogicRule` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `StringRegexMatchConstraint` in the `foundry.ontologies` package
 *
 * The parameter value must match a predefined regular expression.
 *
 * Log Safety: UNSAFE
 */
export interface StringRegexMatchConstraint {
  regex: string;
  configuredFailureMessage?: string;
}

/**
 * @deprecated Use `ActionResults` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type ActionResults =
  | ({ type: "edits" } & ObjectEdits)
  | ({ type: "largeScaleEdits" } & ObjectTypeEdits);

/**
 * @deprecated Use `AggregationGroupKey` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type AggregationGroupKey = LooselyBrandedString<"AggregationGroupKey">;

/**
 * @deprecated Use `ValidationResult` in the `foundry.ontologies` package
 *
 * Represents the state of a validation.
 *
 * Log Safety: SAFE
 */
export type ValidationResult = "VALID" | "INVALID";

/**
 * @deprecated Use `ObjectTypeFullMetadata` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `LinkTypeRid` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type LinkTypeRid = LooselyBrandedString<"LinkTypeRid">;

/**
 * @deprecated Use `AvgAggregation` in the `foundry.ontologies` package
 *
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface AvgAggregation {
  field: FieldNameV1;
  name?: AggregationMetricName;
}

/**
 * @deprecated Use `SearchOrderingV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderingV2 {
  field: PropertyApiName;
  direction?: string;
}

/**
 * @deprecated Use `AggregateObjectsResponseItem` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregateObjectsResponseItem {
  group: Record<AggregationGroupKey, AggregationGroupValue>;
  metrics: Array<AggregationMetricResult>;
}

/**
 * @deprecated Use `ValidateActionResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ValidateActionResponseV2 {
  result: ValidationResult;
  submissionCriteria: Array<SubmissionCriteriaEvaluation>;
  parameters: Record<ParameterId, ParameterEvaluationResult>;
}

/**
 * @deprecated Use `ArtifactRepositoryRid` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ArtifactRepositoryRid = LooselyBrandedString<
  "ArtifactRepositoryRid"
>;

/**
 * @deprecated Use `StructFieldType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StructFieldType {
  apiName: StructFieldApiName;
  dataType: ObjectPropertyType;
}

/**
 * @deprecated Use `ObjectTypeInterfaceImplementation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectTypeInterfaceImplementation {
  properties: Record<SharedPropertyTypeApiName, PropertyApiName>;
}

/**
 * @deprecated Use `AsyncActionOperation` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type AsyncActionOperation = undefined; // {"locator":{"namespaceName":"Core","localName":"AsyncActionOperation"},"type":{"type":"asyncOperation","asyncOperation":{"operationType":"applyActionAsync","resultType":{"locator":{"namespaceName":"Core","localName":"AsyncApplyActionResponse"}},"stageType":{"locator":{"namespaceName":"Core","localName":"AsyncActionStatus"}}}},"safety":"SAFE","documentation":{"example":[]}}

/**
 * @deprecated Use `RequestId` in the `foundry.ontologies` package
 *
 * Unique request id
 *
 * Log Safety: SAFE
 */
export type RequestId = string;

/**
* @deprecated Use `StartsWithQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `AsyncApplyActionResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponseV2 {
  operationId: string;
}

/**
 * @deprecated Use `ObjectSetSearchAroundType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetSearchAroundType {
  objectSet: ObjectSet;
  link: LinkTypeApiName;
}

/**
 * @deprecated Use `AggregationExactGroupingV2` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ContainsQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified array contains a value.
 *
 * Log Safety: UNSAFE
 */
export interface ContainsQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
* @deprecated Use `ObjectSetMethodInputType` in the `foundry.ontologies` package
*
   * ObjectSet which is the root of a MethodObjectSet definition.
This feature is experimental and not yet generally available.
   *
   * Log Safety: SAFE
   */
export interface ObjectSetMethodInputType {}

/**
 * @deprecated Use `LteQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field is less than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface LteQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
 * @deprecated Use `AndQuery` in the `foundry.ontologies` package
 *
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQuery {
  value: Array<SearchJsonQuery>;
}

/**
 * @deprecated Use `CreateObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface CreateObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}

/**
 * @deprecated Use `ListLinkedObjectsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListLinkedObjectsResponseV2 {
  data: Array<OntologyObjectV2>;
  nextPageToken?: PageToken;
}

/**
 * @deprecated Use `OntologyObjectTypeReferenceType` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface OntologyObjectTypeReferenceType {}

/**
 * @deprecated Use `QosError` in the `foundry.ontologies` package
 *
 * An error indicating that the subscribe request should be attempted on a different node.
 *
 * Log Safety: SAFE
 */
export interface QosError {}

/**
 * @deprecated Use `SeriesId` in the `foundry.ontologies` package
 *
 * The unique codex id of a time series.
 *
 * Log Safety: UNSAFE
 */
export type SeriesId = LooselyBrandedString<"SeriesId">;

/**
 * @deprecated Use `PropertyTypeStatus` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `ObjectSetUpdate` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type ObjectSetUpdate =
  | ({ type: "reference" } & ReferenceUpdate)
  | ({ type: "object" } & ObjectUpdate);

/**
 * @deprecated Use `AttachmentV2` in the `foundry.ontologies` package
 *
 * The representation of an attachment.
 *
 * Log Safety: UNSAFE
 */
export interface AttachmentV2 {
  rid: AttachmentRid;
  filename: Filename;
  sizeBytes: SizeBytes;
  mediaType: MediaType;
}

/**
* @deprecated Use `ReferenceUpdate` in the `foundry.ontologies` package
*
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
 * @deprecated Use `Aggregation` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `SelectedPropertyDefinition` in the `foundry.ontologies` package
 *
 * Definition for a selected property over a MethodObjectSet.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyDefinition {
  objectSet: MethodObjectSet;
  operation: SelectedPropertyOperation;
}

/**
 * @deprecated Use `SubscriptionId` in the `foundry.ontologies` package
 *
 * A unique identifier used to associate subscription requests with responses.
 *
 * Log Safety: SAFE
 */
export type SubscriptionId = string;

/**
 * @deprecated Use `TimeSeriesPoint` in the `foundry.ontologies` package
 *
 * A time and value pair.
 *
 * Log Safety: UNSAFE
 */
export interface TimeSeriesPoint {
  time: string;
  value: any;
}

/**
* @deprecated Use `WithinPolygonQuery` in the `foundry.ontologies` package
*
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

/**
* @deprecated Use `DoesNotIntersectPolygonQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `AsyncApplyActionResponse` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface AsyncApplyActionResponse {}

/**
* @deprecated Use `OrderBy` in the `foundry.ontologies` package
*
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
* @deprecated Use `ObjectSetWithPropertiesType` in the `foundry.ontologies` package
*
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
* @deprecated Use `IntersectsPolygonQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `NotQueryV2` in the `foundry.ontologies` package
 *
 * Returns objects where the query is not satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface NotQueryV2 {
  value: SearchJsonQueryV2;
}

/**
 * @deprecated Use `ObjectSetBaseType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetBaseType {
  objectType: string;
}

/**
 * @deprecated Use `ListOntologiesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListOntologiesResponse {
  data: Array<Ontology>;
}

/**
 * @deprecated Use `BatchApplyActionRequestV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequestV2 {
  options?: BatchApplyActionRequestOptions;
  requests: Array<BatchApplyActionRequestItem>;
}

/**
 * @deprecated Use `NearestNeighborsQueryText` in the `foundry.ontologies` package
 *
 * Automatically embed the text in a vector using the embedding model configured for the given propertyIdentifier.
 *
 * Log Safety: UNSAFE
 */
export interface NearestNeighborsQueryText {
  value: string;
}

/**
 * @deprecated Use `ListActionTypesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListActionTypesResponse {
  nextPageToken?: PageToken;
  data: Array<ActionType>;
}

/**
 * @deprecated Use `QueryParameterV2` in the `foundry.ontologies` package
 *
 * Details about a parameter of a query.
 *
 * Log Safety: UNSAFE
 */
export interface QueryParameterV2 {
  description?: string;
  dataType: QueryDataType;
}

/**
 * @deprecated Use `AggregationRangeV2` in the `foundry.ontologies` package
 *
 * Specifies a range from an inclusive start value to an exclusive end value.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationRangeV2 {
  startValue: any;
  endValue: any;
}

/**
 * @deprecated Use `WithinBoundingBoxPoint` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type WithinBoundingBoxPoint = { type: "Point" } & _Geo.GeoPoint;

/**
 * @deprecated Use `SelectedPropertyAvgAggregation` in the `foundry.ontologies` package
 *
 * Computes the average value for the provided field.
 *
 * Log Safety: UNSAFE
 */
export interface SelectedPropertyAvgAggregation {
  selectedPropertyApiName: PropertyApiName;
}

/**
 * @deprecated Use `TimeseriesTemplateRid` in the `foundry.ontologies` package
 *
 * The RID identifying a time series codex template that resolves to a derived series.
 *
 * Log Safety: SAFE
 */
export type TimeseriesTemplateRid = LooselyBrandedString<
  "TimeseriesTemplateRid"
>;

/**
 * @deprecated Use `SearchOrderBy` in the `foundry.ontologies` package
 *
 * Specifies the ordering of search results by a field and an ordering direction.
 *
 * Log Safety: UNSAFE
 */
export interface SearchOrderBy {
  fields: Array<SearchOrdering>;
}

/**
 * @deprecated Use `ErrorName` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ErrorName = LooselyBrandedString<"ErrorName">;

/**
 * @deprecated Use `OntologyStructType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface OntologyStructType {
  fields: Array<OntologyStructField>;
}

/**
 * @deprecated Use `ReturnEditsMode` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type ReturnEditsMode = "ALL" | "NONE";

/**
 * @deprecated Use `ActionType` in the `foundry.ontologies` package
 *
 * Represents an action type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface ActionType {
  apiName: ActionTypeApiName;
  description?: string;
  displayName?: DisplayName;
  status: ReleaseStatus;
  parameters: Record<ParameterId, Parameter>;
  rid: ActionTypeRid;
  operations: Array<LogicRule>;
}

/**
 * @deprecated Use `ReferenceValue` in the `foundry.ontologies` package
 *
 * Resolved data values pointed to by a reference.
 *
 * Log Safety: UNSAFE
 */
export type ReferenceValue = {
  type: "geotimeSeriesValue";
} & GeotimeSeriesValue;

/**
 * @deprecated Use `ObjectRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an object, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectRid = LooselyBrandedString<"ObjectRid">;

/**
* @deprecated Use `StructFieldSelector` in the `foundry.ontologies` package
*
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
 * @deprecated Use `NestedQueryAggregation` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface NestedQueryAggregation {
  key: any;
  groups: Array<QueryAggregation>;
}

/**
 * @deprecated Use `FuzzyV2` in the `foundry.ontologies` package
 *
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type FuzzyV2 = boolean;

/**
 * @deprecated Use `ArraySizeConstraint` in the `foundry.ontologies` package
 *
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
 * @deprecated Use `CountObjectsResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface CountObjectsResponseV2 {
  count?: number;
}

/**
 * @deprecated Use `AggregationMetricResult` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface AggregationMetricResult {
  name: string;
  value?: number;
}

/**
 * @deprecated Use `EqualsQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field is equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface EqualsQuery {
  field: FieldNameV1;
  value: PropertyValue;
}

/**
* @deprecated Use `ContainsAllTermsInOrderQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `StreamTimeSeriesValuesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface StreamTimeSeriesValuesResponse {
  data: Array<TimeseriesEntry>;
}

/**
 * @deprecated Use `AsyncApplyActionOperationResponseV2` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface AsyncApplyActionOperationResponseV2 {}

/**
* @deprecated Use `ContainsAllTermsQuery` in the `foundry.ontologies` package
*
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
* @deprecated Use `ExamplePropertyTypeStatus` in the `foundry.ontologies` package
*
   * This status indicates that the PropertyType is an example. It is backed by notional data that should not be
used for actual workflows, but can be used to test those workflows.
   *
   * Log Safety: SAFE
   */
export interface ExamplePropertyTypeStatus {}

/**
 * @deprecated Use `QueryDataType` in the `foundry.ontologies` package
 *
 * A union of all the types supported by Ontology Query parameters or outputs.
 *
 * Log Safety: UNSAFE
 */
export type QueryDataType =
  | ({ type: "date" } & DateType)
  | ({ type: "struct" } & QueryStructType)
  | ({ type: "set" } & QuerySetType)
  | ({ type: "string" } & StringType)
  | ({ type: "double" } & DoubleType)
  | ({ type: "integer" } & IntegerType)
  | ({ type: "threeDimensionalAggregation" } & ThreeDimensionalAggregation)
  | ({ type: "union" } & QueryUnionType)
  | ({ type: "float" } & FloatType)
  | ({ type: "long" } & LongType)
  | ({ type: "boolean" } & BooleanType)
  | ({ type: "unsupported" } & UnsupportedType)
  | ({ type: "attachment" } & AttachmentType)
  | ({ type: "null" } & NullType)
  | ({ type: "array" } & QueryArrayType)
  | ({ type: "objectSet" } & OntologyObjectSetType)
  | ({ type: "twoDimensionalAggregation" } & TwoDimensionalAggregation)
  | ({ type: "object" } & OntologyObjectType)
  | ({ type: "timestamp" } & TimestampType);

/**
 * @deprecated Use `AggregationFixedWidthGroupingV2` in the `foundry.ontologies` package
 *
 * Divides objects into groups with the specified width.
 *
 * Log Safety: UNSAFE
 */
export interface AggregationFixedWidthGroupingV2 {
  field: PropertyApiName;
  fixedWidth: number;
}

/**
 * @deprecated Use `ObjectSetFilterType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetFilterType {
  objectSet: ObjectSet;
  where: SearchJsonQueryV2;
}

/**
 * @deprecated Use `ListOutgoingLinkTypesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListOutgoingLinkTypesResponse {
  nextPageToken?: PageToken;
  data: Array<LinkTypeSide>;
}

/**
 * @deprecated Use `BatchApplyActionRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface BatchApplyActionRequest {
  requests: Array<ApplyActionRequest>;
}

/**
 * @deprecated Use `ExperimentalPropertyTypeStatus` in the `foundry.ontologies` package
 *
 * This status indicates that the PropertyType is in development.
 *
 * Log Safety: SAFE
 */
export interface ExperimentalPropertyTypeStatus {}

/**
* @deprecated Use `IsNullQueryV2` in the `foundry.ontologies` package
*
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
 * @deprecated Use `AsyncActionStatus` in the `foundry.ontologies` package
 *
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
* @deprecated Use `SelectedPropertyCollectListAggregation` in the `foundry.ontologies` package
*
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
 * @deprecated Use `ActionTypeRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an action type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ActionTypeRid = LooselyBrandedString<"ActionTypeRid">;

/**
 * @deprecated Use `QueryType` in the `foundry.ontologies` package
 *
 * Represents a query type in the Ontology.
 *
 * Log Safety: UNSAFE
 */
export interface QueryType {
  apiName: QueryApiName;
  description?: string;
  displayName?: DisplayName;
  parameters: Record<ParameterId, Parameter>;
  output?: OntologyDataType;
  rid: FunctionRid;
  version: FunctionVersion;
}

/**
 * @deprecated Use `ObjectSetSubscribeResponses` in the `foundry.ontologies` package
 *
 * Returns a response for every request in the same order. Duplicate requests will be assigned the same SubscriberId.
 *
 * Log Safety: UNSAFE
 */
export interface ObjectSetSubscribeResponses {
  responses: Array<ObjectSetSubscribeResponse>;
  id: RequestId;
}

/**
* @deprecated Use `WithinBoundingBoxQuery` in the `foundry.ontologies` package
*
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
* @deprecated Use `AnyTermQuery` in the `foundry.ontologies` package
*
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
 * @deprecated Use `LinkedObjectTypeApiName` in the `foundry.ontologies` package
 *
 * A reference to the linked object type.
 *
 * Log Safety: UNSAFE
 */
export interface LinkedObjectTypeApiName {
  apiName: ObjectTypeApiName;
}

/**
* @deprecated Use `ObjectSetNearestNeighborsType` in the `foundry.ontologies` package
*
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
 * @deprecated Use `SubscriptionClosed` in the `foundry.ontologies` package
 *
 * The subscription has been closed due to an irrecoverable error during its lifecycle.
 *
 * Log Safety: UNSAFE
 */
export interface SubscriptionClosed {
  id: SubscriptionId;
  cause: SubscriptionClosureCause;
}

/**
* @deprecated Use `InterfaceLinkType` in the `foundry.ontologies` package
*
   * A link type constraint defined at the interface level where the implementation of the links is provided
by the implementing object types.
   *
   * Log Safety: UNSAFE
   */
export interface InterfaceLinkType {
  rid: InterfaceLinkTypeRid;
  apiName: InterfaceLinkTypeApiName;
  displayName: DisplayName;
  description?: string;
  linkedEntityApiName: InterfaceLinkTypeLinkedEntityApiName;
  cardinality: InterfaceLinkTypeCardinality;
  required: boolean;
}

/**
 * @deprecated Use `Reason` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export interface Reason {
  reason: ReasonType;
}

/**
 * @deprecated Use `AggregationAccuracy` in the `foundry.ontologies` package
 *
 * Log Safety: SAFE
 */
export type AggregationAccuracy = "ACCURATE" | "APPROXIMATE";

/**
 * @deprecated Use `AttachmentPropertyV2` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type AttachmentPropertyV2 = LooselyBrandedString<"AttachmentPropertyV2">;

/**
 * @deprecated Use `ListQueryTypesResponse` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListQueryTypesResponse {
  nextPageToken?: PageToken;
  data: Array<QueryType>;
}

/**
 * @deprecated Use `InterfaceTypeRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an interface, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type InterfaceTypeRid = LooselyBrandedString<"InterfaceTypeRid">;

/**
 * @deprecated Use `LinkTypeSide` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface LinkTypeSide {
  apiName: LinkTypeApiName;
  displayName: DisplayName;
  status: ReleaseStatus;
  objectTypeApiName: ObjectTypeApiName;
  cardinality: LinkTypeSideCardinality;
  foreignKeyPropertyApiName?: PropertyApiName;
}

/**
* @deprecated Use `UnevaluableConstraint` in the `foundry.ontologies` package
*
   * The parameter cannot be evaluated because it depends on another parameter or object set that can't be evaluated.
This can happen when a parameter's allowed values are defined by another parameter that is missing or invalid.
   *
   * Log Safety: SAFE
   */
export interface UnevaluableConstraint {}

/**
 * @deprecated Use `QueryRuntimeErrorParameter` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type QueryRuntimeErrorParameter = LooselyBrandedString<
  "QueryRuntimeErrorParameter"
>;

/**
* @deprecated Use `ParameterEvaluatedConstraint` in the `foundry.ontologies` package
*
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
 * @deprecated Use `TimeSeriesValueBankProperty` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export type TimeSeriesValueBankProperty = LooselyBrandedString<
  "TimeSeriesValueBankProperty"
>;

/**
* @deprecated Use `InterfaceTypeApiName` in the `foundry.ontologies` package
*
   * The name of the interface type in the API in UpperCamelCase format. To find the API name for your interface
type, use the List interface types endpoint or check the Ontology Manager.
   *
   * Log Safety: UNSAFE
   */
export type InterfaceTypeApiName = LooselyBrandedString<"InterfaceTypeApiName">;

/**
 * @deprecated Use `ListOntologiesV2Response` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ListOntologiesV2Response {
  data: Array<OntologyV2>;
}

/**
* @deprecated Use `ActivePropertyTypeStatus` in the `foundry.ontologies` package
*
   * This status indicates that the PropertyType will not change on short notice and should thus be safe to use in
user facing workflows.
   *
   * Log Safety: SAFE
   */
export interface ActivePropertyTypeStatus {}

/**
 * @deprecated Use `ActionParameterArrayType` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ActionParameterArrayType {
  subType: ActionParameterType;
}

/**
 * @deprecated Use `SharedPropertyTypeRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an shared property type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type SharedPropertyTypeRid = LooselyBrandedString<
  "SharedPropertyTypeRid"
>;

/**
 * @deprecated Use `ObjectTypeRid` in the `foundry.ontologies` package
 *
 * The unique resource identifier of an object type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeRid = LooselyBrandedString<"ObjectTypeRid">;

/**
 * @deprecated Use `PrefixQuery` in the `foundry.ontologies` package
 *
 * Returns objects where the specified field starts with the provided value.
 *
 * Log Safety: UNSAFE
 */
export interface PrefixQuery {
  field: FieldNameV1;
  value: string;
}

/**
 * @deprecated Use `ApplyActionRequest` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ApplyActionRequest {
  parameters: Record<ParameterId, DataValue | undefined>;
}

/**
 * @deprecated Use `MediaMetadata` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface MediaMetadata {
  path?: MediaItemPath;
  sizeBytes: SizeBytes;
  mediaType: MediaType;
}

/**
 * @deprecated Use `ModifyObjectRule` in the `foundry.ontologies` package
 *
 * Log Safety: UNSAFE
 */
export interface ModifyObjectRule {
  objectTypeApiName: ObjectTypeApiName;
}
