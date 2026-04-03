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
 * Log Safety: UNSAFE
 */
export interface Comment {
  id: CommentId;
  text: CommentText;
  userReferences: Array<_Core.UserId>;
  groupReferences: Array<_Core.GroupId>;
  parentCommentId?: CommentId;
  reactions: Array<CommentReaction>;
  createdBy: _Core.CreatedBy;
  createdTime: _Core.CreatedTime;
  updatedBy: _Core.UpdatedBy;
  updatedTime: _Core.UpdatedTime;
}

/**
 * The ID of a Comment.
 *
 * Log Safety: SAFE
 */
export type CommentId = LooselyBrandedString<"CommentId">;

/**
 * A reaction on a comment with the users who made that reaction.
 *
 * Log Safety: SAFE
 */
export interface CommentReaction {
  type: CommentReactionType;
  users: Array<_Core.UserId>;
}

/**
 * The type of reaction that can be applied to a comment.
 *
 * Log Safety: SAFE
 */
export type CommentReactionType =
  | "HEART"
  | "SMILE"
  | "THUMBS_UP"
  | "THUMBS_DOWN"
  | "CONFUSED"
  | "EYES";

/**
 * The user-entered text content of the comment.
 *
 * Log Safety: UNSAFE
 */
export type CommentText = LooselyBrandedString<"CommentText">;

/**
 * Log Safety: UNSAFE
 */
export interface SearchCommentsRequest {
  resourceRid: string;
  sortOrder?: SortOrder;
  pageSize?: _Core.PageSize;
  pageToken?: _Core.PageToken;
}

/**
 * Paginated response containing comments for a resource.
 *
 * Log Safety: UNSAFE
 */
export interface SearchCommentsResponse {
  data: Array<Comment>;
  nextPageToken?: _Core.PageToken;
}

/**
 * The order in which comments are sorted.
 *
 * Log Safety: SAFE
 */
export type SortOrder = "OLDEST_TO_NEWEST" | "NEWEST_TO_OLDEST";
