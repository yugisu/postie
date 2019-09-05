import { PostType } from 'types/post.type';
import {
  PostsAction,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_FINALIZE,
} from './types';

type State = {
  items: PostType[];
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  items: [],
  loading: true,
  error: null,
};

export const postsReducer = (state = initialState, action: PostsAction): State => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_POSTS_SUCCESS:
      return { ...state, items: action.payload };

    case FETCH_POSTS_FAILURE:
      return { ...state, error: action.payload };

    case FETCH_POSTS_FINALIZE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
