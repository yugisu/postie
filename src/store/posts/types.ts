import { Post } from 'types/post.type';
import { Thunky } from 'store/types';

export const ADD_POST = '@POSTS:ADD_POST';

type AddPost = {
  type: typeof ADD_POST;
  payload: Post;
};

export type PostsAction = AddPost;
export type AsyncPostsAction = Thunky<AddPost>;
