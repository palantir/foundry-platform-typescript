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

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * An affine transformation for geo-referencing.
 *
 * Log Safety: SAFE
 */
export interface AffineTransform {
  xTranslate?: number;
  xScale?: number;
  xShear?: number;
  yTranslate?: number;
  yShear?: number;
  yScale?: number;
}

/**
 * The format of an audio media item.
 *
 * Log Safety: SAFE
 */
export type AudioDecodeFormat =
  | "FLAC"
  | "MP2"
  | "MP3"
  | "MP4"
  | "NIST_SPHERE"
  | "OGG"
  | "WAV"
  | "WEBM";

/**
 * Metadata for audio media items.
 *
 * Log Safety: SAFE
 */
export interface AudioMediaItemMetadata {
  format: AudioDecodeFormat;
  specification: AudioSpecification;
  sizeBytes: number;
}

/**
 * Technical specifications for audio media items.
 *
 * Log Safety: SAFE
 */
export interface AudioSpecification {
  bitRate: number;
  durationSeconds: number;
  numberOfChannels?: number;
}

/**
 * Information about a band in an image.
 *
 * Log Safety: UNSAFE
 */
export interface BandInfo {
  dataType?: DataType;
  colorInterpretation?: ColorInterpretation;
  paletteInterpretation?: PaletteInterpretation;
  unitInterpretation?: UnitInterpretation;
}

/**
   * A name for a media set branch. Valid branch names must be (a) non-empty, (b) less than 256 characters, and
(c) not a valid ResourceIdentifier.
   *
   * Log Safety: UNSAFE
   */
export type BranchName = LooselyBrandedString<"BranchName">;

/**
 * A resource identifier that identifies a branch of a media set.
 *
 * Log Safety: SAFE
 */
export type BranchRid = LooselyBrandedString<"BranchRid">;

/**
 * The color interpretation of a band.
 *
 * Log Safety: SAFE
 */
export type ColorInterpretation =
  | "UNDEFINED"
  | "GRAY"
  | "PALETTE_INDEX"
  | "RED"
  | "GREEN"
  | "BLUE"
  | "ALPHA"
  | "HUE"
  | "SATURATION"
  | "LIGHTNESS"
  | "CYAN"
  | "MAGENTA"
  | "YELLOW"
  | "BLACK"
  | "Y_CB_CR_SPACE_Y"
  | "Y_CB_CR_SPACE_CB"
  | "Y_CB_CR_SPACE_CR";

/**
 * Common DICOM data elements.
 *
 * Log Safety: UNSAFE
 */
export interface CommonDicomDataElements {
  numberFrames?: number;
  modality?: Modality;
  patientId?: string;
  studyId?: string;
  studyUid?: string;
  seriesUid?: string;
  studyTime?: string;
  seriesTime?: string;
}

/**
 * The coordinate reference system for geo-referenced imagery.
 *
 * Log Safety: UNSAFE
 */
export interface CoordinateReferenceSystem {
  wkt?: string;
}

/**
 * The data type of a band.
 *
 * Log Safety: SAFE
 */
export type DataType =
  | "UNDEFINED"
  | "BYTE"
  | "UINT16"
  | "INT16"
  | "UINT32"
  | "INT32"
  | "FLOAT32"
  | "FLOAT64"
  | "COMPLEX_INT16"
  | "COMPLEX_INT32"
  | "COMPLEX_FLOAT32"
  | "COMPLEX_FLOAT64"
  | "UINT64"
  | "INT64"
  | "INT8";

/**
 * The key of a DICOM data element.
 *
 * Log Safety: UNSAFE
 */
export type DicomDataElementKey = LooselyBrandedString<"DicomDataElementKey">;

/**
 * Metadata for DICOM (Digital Imaging and Communications in Medicine) media items.
 *
 * Log Safety: UNSAFE
 */
export interface DicomMediaItemMetadata {
  metaInformation: DicomMetaInformation;
  mediaType: DicomMediaType;
  commonDataElements: CommonDicomDataElements;
  otherDataElements: Record<DicomDataElementKey, any>;
  sizeBytes: number;
}

/**
 * The type of DICOM media.
 *
 * Log Safety: SAFE
 */
export type DicomMediaType =
  | "IMAGE"
  | "MULTI_FRAME_IMAGE"
  | "VIDEO"
  | "STRUCTURED_REPORT";

/**
 * DICOM meta information.
 *
 * Log Safety: UNSAFE
 */
export type DicomMetaInformation = { type: "v1" } & DicomMetaInformationV1;

/**
 * DICOM meta information version 1.
 *
 * Log Safety: UNSAFE
 */
export interface DicomMetaInformationV1 {
  mediaStorageSop: string;
  mediaStorageSopInstance: string;
  transferSyntax: string;
}

/**
 * The dimensions of an image.
 *
 * Log Safety: SAFE
 */
export interface Dimensions {
  width: number;
  height: number;
}

/**
 * The format of a document media item.
 *
 * Log Safety: SAFE
 */
export type DocumentDecodeFormat = "PDF" | "DOCX" | "TXT" | "PPTX";

/**
 * Metadata for document media items.
 *
 * Log Safety: UNSAFE
 */
export interface DocumentMediaItemMetadata {
  format: DocumentDecodeFormat;
  pages?: number;
  sizeBytes: number;
  title?: string;
  author?: string;
}

/**
 * Metadata about an email attachment.
 *
 * Log Safety: UNSAFE
 */
export interface EmailAttachment {
  attachmentIndex: number;
  fileName?: string;
  mimeType: string;
}

/**
 * The format of an email media item.
 *
 * Log Safety: SAFE
 */
export type EmailDecodeFormat = "EML";

/**
 * Metadata for email media items.
 *
 * Log Safety: UNSAFE
 */
export interface EmailMediaItemMetadata {
  format: EmailDecodeFormat;
  sizeBytes: number;
  sender: Array<Mailbox>;
  date: string;
  attachmentCount: number;
  to: Array<MailboxOrGroup>;
  cc: Array<MailboxOrGroup>;
  subject?: string;
  attachments: Array<EmailAttachment>;
}

/**
 * The flip axis from EXIF orientation.
 *
 * Log Safety: SAFE
 */
export type FlipAxis = "HORIZONTAL" | "VERTICAL" | "UNKNOWN";

/**
 * A list of ground control points for geo-referencing.
 *
 * Log Safety: SAFE
 */
export interface GcpList {
  gcps: Array<GroundControlPoint>;
}

/**
 * Embedded geo-referencing data for an image.
 *
 * Log Safety: UNSAFE
 */
export interface GeoMetadata {
  crs?: CoordinateReferenceSystem;
  geotransform?: AffineTransform;
  gcpInfo?: GcpList;
  gpsData?: GpsMetadata;
}

/**
 * Log Safety: UNSAFE
 */
export interface GetMediaItemInfoResponse {
  viewRid: _Core.MediaSetViewRid;
  path?: _Core.MediaItemPath;
  logicalTimestamp: LogicalTimestamp;
  attribution?: MediaAttribution;
}

/**
 * Log Safety: SAFE
 */
export interface GetMediaItemRidByPathResponse {
  mediaItemRid?: _Core.MediaItemRid;
}

/**
 * GPS location metadata extracted from EXIF data embedded in the image.
 *
 * Log Safety: UNSAFE
 */
export interface GpsMetadata {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

/**
 * A ground control point for geo-referencing.
 *
 * Log Safety: SAFE
 */
export interface GroundControlPoint {
  pixX?: number;
  pixY?: number;
  projX?: number;
  projY?: number;
  projZ?: number;
}

/**
 * A named group of mailboxes.
 *
 * Log Safety: UNSAFE
 */
export interface Group {
  groupName: string;
  mailboxes: Array<Mailbox>;
}

/**
 * A wrapper for a group in the MailboxOrGroup union.
 *
 * Log Safety: UNSAFE
 */
export interface GroupWrapper {
  group: Group;
}

/**
 * The domain of an image attribute.
 *
 * Log Safety: UNSAFE
 */
export type ImageAttributeDomain = LooselyBrandedString<"ImageAttributeDomain">;

/**
 * The key of an image attribute within a domain.
 *
 * Log Safety: UNSAFE
 */
export type ImageAttributeKey = LooselyBrandedString<"ImageAttributeKey">;

/**
 * The format of an imagery media item.
 *
 * Log Safety: SAFE
 */
export type ImageryDecodeFormat =
  | "BMP"
  | "TIFF"
  | "NITF"
  | "JP2K"
  | "JPG"
  | "PNG"
  | "WEBP";

/**
 * Metadata for imagery (image) media items.
 *
 * Log Safety: UNSAFE
 */
export interface ImageryMediaItemMetadata {
  format: ImageryDecodeFormat;
  dimensions?: Dimensions;
  bands: Array<BandInfo>;
  attributes: Record<ImageAttributeDomain, Record<ImageAttributeKey, string>>;
  iccProfile?: string;
  geo?: GeoMetadata;
  pages?: number;
  orientation?: Orientation;
  sizeBytes: number;
}

/**
   * A number representing a logical ordering to be used for transactions, etc.
This can be interpreted as a timestamp in microseconds, but may differ slightly from system clock time due
to clock drift and slight adjustments for the sake of ordering.
Only positive timestamps (representing times after epoch) are supported.
   *
   * Log Safety: SAFE
   */
export type LogicalTimestamp = string;

/**
 * An email mailbox with an optional display name and email address.
 *
 * Log Safety: UNSAFE
 */
export interface Mailbox {
  displayName?: string;
  emailAddress: string;
}

/**
 * Either a mailbox or a group of mailboxes.
 *
 * Log Safety: UNSAFE
 */
export type MailboxOrGroup =
  | ({ type: "mailbox" } & MailboxWrapper)
  | ({ type: "group" } & GroupWrapper);

/**
 * A wrapper for a mailbox in the MailboxOrGroup union.
 *
 * Log Safety: UNSAFE
 */
export interface MailboxWrapper {
  mailbox: Mailbox;
}

/**
 * Log Safety: SAFE
 */
export interface MediaAttribution {
  creatorId: _Core.UserId;
  creationTimestamp: string;
}

/**
   * Detailed metadata about a media item, including type-specific information such as dimensions for images,
duration for audio/video, page count for documents, etc.
   *
   * Log Safety: UNSAFE
   */
export type MediaItemMetadata =
  | ({ type: "document" } & DocumentMediaItemMetadata)
  | ({ type: "imagery" } & ImageryMediaItemMetadata)
  | ({ type: "spreadsheet" } & SpreadsheetMediaItemMetadata)
  | ({ type: "untyped" } & UntypedMediaItemMetadata)
  | ({ type: "audio" } & AudioMediaItemMetadata)
  | ({ type: "video" } & VideoMediaItemMetadata)
  | ({ type: "dicom" } & DicomMediaItemMetadata)
  | ({ type: "email" } & EmailMediaItemMetadata);

/**
 * Format of the media item attempted to be decoded based on the XML structure.
 *
 * Log Safety: SAFE
 */
export type MediaItemXmlFormat = "DOCX" | "XLSX" | "PPTX";

/**
 * Log Safety: UNSAFE
 */
export interface MediaSet {
  rid: _Core.MediaSetRid;
  name: MediaSetName;
  parentFolderRid: _Core.FolderRid;
}

/**
 * Log Safety: UNSAFE
 */
export type MediaSetName = LooselyBrandedString<"MediaSetName">;

/**
   * DICOM modality code. A list of modalities and their meanings can be found in the DICOM specification.
https://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html#sect_C.7.3.1.1.1
   *
   * Log Safety: SAFE
   */
export type Modality =
  | "AR"
  | "ASMT"
  | "AU"
  | "BDUS"
  | "BI"
  | "BMD"
  | "CR"
  | "CT"
  | "CTPROTOCOL"
  | "DG"
  | "DOC"
  | "DX"
  | "ECG"
  | "EPS"
  | "ES"
  | "FID"
  | "GM"
  | "HC"
  | "HD"
  | "IO"
  | "IOL"
  | "IVOCT"
  | "IVUS"
  | "KER"
  | "KO"
  | "LEN"
  | "LS"
  | "MG"
  | "MR"
  | "M3D"
  | "NM"
  | "OAM"
  | "OCT"
  | "OP"
  | "OPM"
  | "OPT"
  | "OPTBSV"
  | "OPTENF"
  | "OPV"
  | "OSS"
  | "OT"
  | "PLAN"
  | "PR"
  | "PT"
  | "PX"
  | "REG"
  | "RESP"
  | "RF"
  | "RG"
  | "RTDOSE"
  | "RTIMAGE"
  | "RTINTENT"
  | "RTPLAN"
  | "RTRAD"
  | "RTRECORD"
  | "RTSEGANN"
  | "RTSTRUCT"
  | "RWV"
  | "SEG"
  | "SM"
  | "SMR"
  | "SR"
  | "SRF"
  | "STAIN"
  | "TEXTUREMAP"
  | "TG"
  | "US"
  | "VA"
  | "XA"
  | "XC"
  | "AS"
  | "CD"
  | "CF"
  | "CP"
  | "CS"
  | "DD"
  | "DF"
  | "DM"
  | "DS"
  | "EC"
  | "FA"
  | "FS"
  | "LP"
  | "MA"
  | "MS"
  | "OPR"
  | "ST"
  | "VF";

/**
 * The orientation information as encoded in EXIF metadata.
 *
 * Log Safety: SAFE
 */
export interface Orientation {
  rotationAngle?: RotationAngle;
  flipAxis?: FlipAxis;
}

/**
 * The palette interpretation of a band.
 *
 * Log Safety: SAFE
 */
export type PaletteInterpretation = "GRAY" | "RGB" | "RGBA" | "CMYK" | "HLS";

/**
 * Log Safety: SAFE
 */
export interface PutMediaItemResponse {
  mediaItemRid: _Core.MediaItemRid;
}

/**
 * The rotation angle from EXIF orientation.
 *
 * Log Safety: SAFE
 */
export type RotationAngle =
  | "DEGREE_90"
  | "DEGREE_180"
  | "DEGREE_270"
  | "UNKNOWN";

/**
 * The format of a spreadsheet media item.
 *
 * Log Safety: SAFE
 */
export type SpreadsheetDecodeFormat = "XLSX";

/**
 * Metadata for spreadsheet media items.
 *
 * Log Safety: UNSAFE
 */
export interface SpreadsheetMediaItemMetadata {
  format: SpreadsheetDecodeFormat;
  sheetNames: Array<string>;
  sizeBytes: number;
  title?: string;
  author?: string;
}

/**
 * Log Safety: SAFE
 */
export interface TrackedTransformationFailedResponse {}

/**
 * Log Safety: SAFE
 */
export interface TrackedTransformationPendingResponse {}

/**
 * Log Safety: UNSAFE
 */
export type TrackedTransformationResponse =
  | ({ type: "pending" } & TrackedTransformationPendingResponse)
  | ({ type: "failed" } & TrackedTransformationFailedResponse)
  | ({ type: "successful" } & TrackedTransformationSuccessfulResponse);

/**
 * Log Safety: SAFE
 */
export interface TrackedTransformationSuccessfulResponse {}

/**
 * An identifier which represents a transaction on a media set.
 *
 * Log Safety: SAFE
 */
export type TransactionId = string;

/**
 * The unit interpretation for a band.
 *
 * Log Safety: UNSAFE
 */
export interface UnitInterpretation {
  unit?: string;
  scale?: number;
  offset?: number;
}

/**
 * Metadata for untyped media items (media items without a recognized type).
 *
 * Log Safety: SAFE
 */
export interface UntypedMediaItemMetadata {
  sizeBytes: number;
}

/**
 * The format of a video media item.
 *
 * Log Safety: SAFE
 */
export type VideoDecodeFormat = "MP4" | "MKV" | "MOV" | "TS";

/**
 * Metadata for video media items.
 *
 * Log Safety: SAFE
 */
export interface VideoMediaItemMetadata {
  format: VideoDecodeFormat;
  specification: VideoSpecification;
  sizeBytes: number;
}

/**
 * Technical specifications for video media items.
 *
 * Log Safety: SAFE
 */
export interface VideoSpecification {
  bitRate: number;
  durationSeconds: number;
}
