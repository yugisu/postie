import { Post } from 'types/post.type';
import { PostsAction, ADD_POST } from './types';

export const addPost = (post: Post): PostsAction => ({
  type: ADD_POST,
  payload: post,
});
