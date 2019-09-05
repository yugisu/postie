import { PostType } from 'types/post.type';
import { Thunky } from 'store/types';

export const FETCH_POSTS_REQUEST = '@POSTS:FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = '@POSTS:FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = '@POSTS:FETCH_POSTS_FAILURE';
export const FETCH_POSTS_FINALIZE = '@POSTS:FETCH_POSTS_FINALIZE';

export const UPDATE_POST = '@POSTS:UPDATE_POST';

type FetchPostsRequest = {
  type: typeof FETCH_POSTS_REQUEST;
};

type FetchPostsSuccess = {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: PostType[];
};

type FetchPostsFailure = {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
};

type FetchPostsFinalize = {
  type: typeof FETCH_POSTS_FINALIZE;
};

type UpdatePost = {
  type: typeof UPDATE_POST;
  payload: PostType;
};

export type PostsAction =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | FetchPostsFinalize
  | UpdatePost;

export type AsyncPostsAction = Thunky<PostsAction>;
