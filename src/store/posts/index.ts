import { Post } from 'types/post.type';
import { PostsAction } from './types';

type State = {
  posts: Post[];
};

const initialState: State = {
  posts: [],
};

export const postsReducer = (state = initialState, action: PostsAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
