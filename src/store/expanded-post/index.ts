import { ExtendedPostType } from 'types/post.type';
import {
  ExpandedPostAction,
  FETCH_EXPANDED_POST_REQUEST,
  FETCH_EXPANDED_POST_SUCCESS,
  FETCH_EXPANDED_POST_FAILURE,
  FETCH_EXPANDED_POST_FINALIZE,
} from './types';

type State = {
  item: ExtendedPostType | null;
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  item: null,
  loading: true,
  error: null,
};

export const expandedPostReducer = (
  state = initialState,
  action: ExpandedPostAction
): State => {
  switch (action.type) {
    case FETCH_EXPANDED_POST_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_EXPANDED_POST_SUCCESS:
      return { ...state, item: action.payload };

    case FETCH_EXPANDED_POST_FAILURE:
      return { ...state, error: action.payload };

    case FETCH_EXPANDED_POST_FINALIZE:
      return { ...state, loading: false };

    default:
      return state;
  }
};
