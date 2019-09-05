import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store/types';
import { deletePost, updatePost } from 'store/posts/actions';
import { fetchExpandedPost, clearExpandedPost } from 'store/expanded-post/actions';

import { Modal } from 'components/modal';
import { Comment } from 'components/comment';
import { Input } from 'components/styled/input';
import { Textarea } from 'components/styled/textarea';
import { CreateComment } from 'components/create-comment';

import * as S from './styles';

export const ExpandedPost = withRouter(({ history, match }) => {
  const postId = +match.params.postId;

  const dispatch = useDispatch();

  const { loading, item, error } = useSelector((state: RootState) => state.expandedPost);
  const [editing, setEditing] = useState<null | 'title' | 'body'>(null);

  useEffect(() => {
    if (isNaN(postId)) {
      history.push('/');
    } else {
      dispatch(fetchExpandedPost(postId));

      return () => {
        dispatch(clearExpandedPost());
      };
    }
  }, [dispatch, history, postId]);

  if (error) {
    history.push('/');
  }

  const onClose = () => history.push('/posts');
  const onDelete = () => {
    if (item) {
      dispatch(deletePost(item.id));
      onClose();
    }
  };

  const onInputClick = (name: 'title' | 'body') => () => {
    setEditing(name);
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (item && (name === 'title' || name === 'body') && name === editing) {
      console.log('AAAA', name, value);

      const { comments, ...restPost } = item;

      dispatch(updatePost({ ...restPost, [name]: value }));
      setEditing(null);
    }
  };

  return (
    <Modal showCondition={!loading} onClose={onClose}>
      {item && (
        <article>
          <S.PostHeader>
            {editing === 'title' ? (
              <Input
                defaultValue={item.title}
                name='title'
                onBlur={onInputBlur}
                style={{ width: '100%' }}
                autoFocus
              />
            ) : (
              <S.PostTitle onClick={onInputClick('title')}>{item.title}</S.PostTitle>
            )}
            <S.PostMeta>
              <span>#{item.id}</span>
              <button onClick={onDelete}>delete</button>
            </S.PostMeta>
          </S.PostHeader>

          <S.PostBody>
            {editing === 'body' ? (
              <Textarea
                defaultValue={item.body}
                name='body'
                onBlur={onInputBlur}
                style={{ width: '100%' }}
                autoFocus
              />
            ) : (
              <div onClick={onInputClick('body')}>{item.body}</div>
            )}
          </S.PostBody>

          <S.CommentSection>
            <h3>Comments</h3>

            <CreateComment postId={postId} />

            {item.comments.length > 0 &&
              item.comments.map((c) => (
                <Comment item={c} key={`comment-${c.id}-${c.body.slice(0, 5)}`} />
              ))}
          </S.CommentSection>
        </article>
      )}
    </Modal>
  );
});
