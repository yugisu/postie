import { PostType, ExtendedPostType } from 'types/post.type';
import api from 'helpers/api.helper';

const getAll = (): Promise<PostType[]> => {
  return api.get('/posts');
};

const getById = (id: PostType['id']): Promise<ExtendedPostType> => {
  return api.get(`/posts/${id}?_embed=comments`);
};

const create = (title: string, body: string) => {
  return api.post('/posts', { title, body });
};

const updateById = (post: PostType) => {
  return api.put(`/posts/${post.id}`, { title: post.title, body: post.body });
};

const deleteById = (id: PostType['id']) => {
  return api.delete(`/posts/${id}`);
};

const addComment = (postId: PostType['id'], body: string) => {
  return api.post('/comments', { postId, body });
};

export const postService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
  addComment,
};
