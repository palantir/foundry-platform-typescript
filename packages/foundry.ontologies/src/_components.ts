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
 * Returns objects where every query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface AndQueryV2 {
  value: Array<SearchJsonQueryV2>;
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
The last term can be a partial prefix match.
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
but they do have to be adjacent to each other.
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
order in the provided value. This query supports fuzzy matching.
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
order in the provided value. This query supports fuzzy matching.
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
export interface ContainsQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field does not intersect the bounding box provided.
 *
 * Log Safety: UNSAFE
 */
export interface DoesNotIntersectBoundingBoxQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: BoundingBoxValue;
}

/**
 * Returns objects where the specified field does not intersect the polygon provided.
 *
 * Log Safety: UNSAFE
 */
export interface DoesNotIntersectPolygonQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PolygonValue;
}

/**
 * Returns objects where the specified field is equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface EqualsQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Setting fuzzy to true allows approximate matching in search queries that support it.
 *
 * Log Safety: SAFE
 */
export type FuzzyV2 = boolean;

/**
 * Returns objects where the specified field is greater than a value.
 *
 * Log Safety: UNSAFE
 */
export interface GtQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field is greater than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface GteQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field equals any of the provided values.
 *
 * Log Safety: UNSAFE
 */
export interface InQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: Array<PropertyValue>;
}

/**
 * Returns objects where the specified field intersects the bounding box provided.
 *
 * Log Safety: UNSAFE
 */
export interface IntersectsBoundingBoxQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: BoundingBoxValue;
}

/**
 * Returns objects where the specified field intersects the polygon provided.
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
export interface IsNullQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: boolean;
}

/**
 * The name of the link type in the API. To find the API name for your Link Type, check the Ontology Manager.
 *
 * Log Safety: UNSAFE
 */
export type LinkTypeApiName = LooselyBrandedString<"LinkTypeApiName">;

/**
 * Returns objects where the specified field is less than a value.
 *
 * Log Safety: UNSAFE
 */
export interface LtQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
}

/**
 * Returns objects where the specified field is less than or equal to a value.
 *
 * Log Safety: UNSAFE
 */
export interface LteQueryV2 {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PropertyValue;
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
 * The Resource Identifier (RID) for an ontology object instance.
 *
 * Log Safety: SAFE
 */
export type ObjectRid = LooselyBrandedString<"ObjectRid">;

/**
 * Represents the definition of an ObjectSet in the ontology.
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
 * Log Safety: SAFE
 */
export interface ObjectSetMethodInputType {}

/**
 * Log Safety: SAFE
 */
export interface ObjectSetNearestNeighborsType {}

/**
 * Log Safety: SAFE
 */
export interface ObjectSetReferenceType {
  reference: ObjectSetRid;
}

/**
 * The Resource Identifier (RID) for an object set.
 *
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
 * Log Safety: SAFE
 */
export interface ObjectSetWithPropertiesType {}

/**
 * The unique identifier (ID) for an object type. This can be viewed in Ontology Manager.
 *
 * Log Safety: UNSAFE
 */
export type ObjectTypeId = LooselyBrandedString<"ObjectTypeId">;

/**
 * The unique Resource Identifier (RID) of an object type, useful for interacting with other Foundry APIs.
 *
 * Log Safety: SAFE
 */
export type ObjectTypeRid = LooselyBrandedString<"ObjectTypeRid">;

/**
 * Either an ontology RID or an ontology API name.
 *
 * Log Safety: UNSAFE
 */
export type OntologyIdentifier = LooselyBrandedString<"OntologyIdentifier">;

/**
 * Returns objects where at least 1 query is satisfied.
 *
 * Log Safety: UNSAFE
 */
export interface OrQueryV2 {
  value: Array<SearchJsonQueryV2>;
}

/**
 * Log Safety: UNSAFE
 */
export type PolygonValue = { type: "Polygon" } & _Geo.Polygon;

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
 * An identifier used to select properties or struct fields.
 *
 * Log Safety: UNSAFE
 */
export type PropertyIdentifier =
  | ({ type: "property" } & PropertyApiNameSelector)
  | ({ type: "structField" } & StructFieldSelector);

/**
 * The RID for a property type from an ontology object.
 *
 * Log Safety: SAFE
 */
export type PropertyTypeRid = LooselyBrandedString<"PropertyTypeRid">;

/**
   * Represents the value of a property in the following format.
| Type       | JSON encoding                                         | Example                                                                                            |
|----------- |-------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| Array      | array                                                 | ["alpha", "bravo", "charlie"]                                                                    |
| Attachment | JSON encoded AttachmentProperty object              | {"rid":"ri.blobster.main.attachment.2f944bae-5851-4204-8615-920c969a9f2e"}                       |
| Boolean    | boolean                                               | true                                                                                             |
| Byte       | number                                                | 31                                                                                               |
| CipherText | string                                                | "CIPHER::ri.bellaso.main.cipher-channel.e414ab9e-b606-499a-a0e1-844fa296ba7e::unzjs3VifsTxuIpf1fH1CJ7OaPBr2bzMMdozPaZJtCii8vVG60yXIEmzoOJaEl9mfFFe::CIPHER" | | Date | ISO 8601 extended local date string |"2021-05-01"| | Decimal | string |"2.718281828"| | Double | number |3.14159265| | Float | number |3.14159265| | GeoPoint | geojson |{"type":"Point","coordinates":[102.0,0.5]}| | GeoShape | geojson |{"type":"LineString","coordinates":[[102.0,0.0],[103.0,1.0],[104.0,0.0],[105.0,1.0]]}| | Integer | number |238940| | Long | string |"58319870951433"| | Short | number |8739| | String | string |"Call me Ishmael"| | Timestamp | ISO 8601 extended offset date-time string in UTC zone |"2021-01-04T05:00:00Z"`                                                                           |
Note that for backwards compatibility, the Boolean, Byte, Double, Float, Integer, and Short types can also be encoded as JSON strings.
   *
   * Log Safety: UNSAFE
   */
export type PropertyValue = any;

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
 * Returns objects where the specified field starts with the provided value.
 *
 * Log Safety: UNSAFE
 */
export interface StartsWithQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: string;
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
export type WithinBoundingBoxPoint = { type: "Point" } & _Geo.GeoPoint;

/**
 * Returns objects where the specified field contains a point within the bounding box provided.
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
 *
 * Log Safety: UNSAFE
 */
export interface WithinDistanceOfQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: CenterPoint;
}

/**
 * Returns objects where the specified field contains a point within the polygon provided.
 *
 * Log Safety: UNSAFE
 */
export interface WithinPolygonQuery {
  field?: PropertyApiName;
  propertyIdentifier?: PropertyIdentifier;
  value: PolygonValue;
}
