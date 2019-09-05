import { PostType } from 'types/post.type';
import { postService } from 'services/posts.service';
import {
  PostsAction,
  AsyncPostsAction,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_FINALIZE,
} from './types';
import { fetchExpandedPostSuccess } from 'store/expanded-post/actions';

export const createPost = (title: string, body: string): AsyncPostsAction => async (
  dispatch,
  getState
) => {
  try {
    const newPost = await postService.create(title, body);

    const { items } = getState().posts;

    const updatedPosts = [...items, newPost];

    dispatch(fetchPostsSuccess(updatedPosts));
  } catch (err) {
    console.warn('Unable to create a post :(', err);
  }
};

export const updatePost = (post: PostType): AsyncPostsAction => async (
  dispatch,
  getState
) => {
  try {
    const newPost = await postService.updateById(post);

    const {
      posts: { items },
      expandedPost: { item },
    } = getState();

    dispatch(fetchPostsSuccess(items.map((i) => (i.id === newPost.id ? newPost : i))));

    if (item) {
      dispatch<any>(fetchExpandedPostSuccess({ ...item, ...newPost }));
    }
  } catch (err) {
    console.warn('Could not update post :(');
  }
};

export const deletePost = (id: PostType['id']): AsyncPostsAction => async (
  dispatch,
  getState
) => {
  const { items } = getState().posts;

  try {
    await postService.deleteById(id);

    const newItems = items.filter((p) => p.id !== id);
    dispatch(fetchPostsSuccess(newItems));
  } catch (err) {
    console.warn('Unable to delete a post :(', err);
  }
};

const fetchPostsRequest = (): PostsAction => ({
  type: FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (posts: PostType[]): PostsAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

const fetchPostsFailure = (error: string): PostsAction => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

const fetchPostsFinalize = (): PostsAction => ({
  type: FETCH_POSTS_FINALIZE,
});

export const fetchPosts = (): AsyncPostsAction => async (dispatch, getRoot) => {
  dispatch(fetchPostsRequest());

  try {
    const posts = await postService.getAll();

    dispatch(fetchPostsSuccess(posts));
  } catch (err) {
    dispatch(fetchPostsFailure(err.message || err));
  } finally {
    dispatch(fetchPostsFinalize());
  }
};
