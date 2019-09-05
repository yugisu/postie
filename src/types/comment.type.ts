import { PostType } from './post.type';

export type CommentType = {
  id: number;
  postId: PostType['id'];
  body: string;
};
