import { ExtendedPostType } from 'types/post.type';
import { Thunky } from 'store/types';

export const FETCH_EXPANDED_POST_REQUEST = '@EXPANDED_POST:FETCH_EXPANDED_POST_REQUEST';
export const FETCH_EXPANDED_POST_SUCCESS = '@EXPANDED_POST:FETCH_EXPANDED_POST_SUCCESS';
export const FETCH_EXPANDED_POST_FAILURE = '@EXPANDED_POST:FETCH_EXPANDED_POST_FAILURE';
export const FETCH_EXPANDED_POST_FINALIZE = '@EXPANDED_POST:FETCH_EXPANDED_POST_FINALIZE';

type FetchExpandedPostRequest = {
  type: typeof FETCH_EXPANDED_POST_REQUEST;
};

type FetchExpandedPostSuccess = {
  type: typeof FETCH_EXPANDED_POST_SUCCESS;
  payload: ExtendedPostType | null;
};

type FetchExpandedPostFailure = {
  type: typeof FETCH_EXPANDED_POST_FAILURE;
  payload: string;
};

type FetchExpandedPostFinalize = {
  type: typeof FETCH_EXPANDED_POST_FINALIZE;
};

export type ExpandedPostAction =
  | FetchExpandedPostRequest
  | FetchExpandedPostSuccess
  | FetchExpandedPostFailure
  | FetchExpandedPostFinalize;

export type AsyncExpandedPostAction = Thunky<ExpandedPostAction>;
