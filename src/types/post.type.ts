import { CommentType } from './comment.type';

export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type ExtendedPostType = PostType & {
  comments: CommentType[];
};
