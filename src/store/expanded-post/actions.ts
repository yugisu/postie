import { ExtendedPostType } from 'types/post.type';
import { postService } from 'services/posts.service';
import {
  ExpandedPostAction,
  AsyncExpandedPostAction,
  FETCH_EXPANDED_POST_REQUEST,
  FETCH_EXPANDED_POST_SUCCESS,
  FETCH_EXPANDED_POST_FAILURE,
  FETCH_EXPANDED_POST_FINALIZE,
} from './types';

const fetchExpandedPostRequest = (): ExpandedPostAction => ({
  type: FETCH_EXPANDED_POST_REQUEST,
});

export const fetchExpandedPostSuccess = (post: ExtendedPostType): ExpandedPostAction => ({
  type: FETCH_EXPANDED_POST_SUCCESS,
  payload: post,
});

const fetchExpandedPostFailure = (error: string): ExpandedPostAction => ({
  type: FETCH_EXPANDED_POST_FAILURE,
  payload: error,
});

const fetchExpandedPostFinalize = (): ExpandedPostAction => ({
  type: FETCH_EXPANDED_POST_FINALIZE,
});

export const clearExpandedPost = (): ExpandedPostAction => ({
  type: FETCH_EXPANDED_POST_SUCCESS,
  payload: null,
});

export const fetchExpandedPost = (
  id: ExtendedPostType['id']
): AsyncExpandedPostAction => async (dispatch) => {
  dispatch(fetchExpandedPostRequest());

  try {
    const post = await postService.getById(id);

    dispatch(fetchExpandedPostSuccess(post));
  } catch (err) {
    dispatch(fetchExpandedPostFailure(err.message || err));
  } finally {
    dispatch(fetchExpandedPostFinalize());
  }
};

export const addComment = (
  postId: ExtendedPostType['id'],
  body: string
): AsyncExpandedPostAction => async (dispatch, getState) => {
  try {
    const newComment = await postService.addComment(postId, body);

    const { item } = getState().expandedPost;

    if (item) {
      dispatch(
        fetchExpandedPostSuccess({ ...item, comments: [...item.comments, newComment] })
      );
    }
  } catch (err) {
    console.log('Whoops! Could not add a comment :(');
  }
};
