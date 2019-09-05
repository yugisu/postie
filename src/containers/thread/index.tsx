import React from 'react';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';

import { RootState } from 'store/types';

import { Post } from 'components/post';
import { CreatePost } from 'components/create-post';
import { ExpandedPost } from 'containers/expanded-post';

import * as S from './styles';

export const Thread = () => {
  const posts = useSelector((state: RootState) => state.posts.items);

  console.log(posts);

  return (
    <S.Container>
      <S.Title>Thread</S.Title>

      <S.Content>
        <CreatePost />

        {posts.map((p) => (
          <Post item={p} key={`post-${p.id}-${p.title.slice(0, 5)}`} />
        ))}
      </S.Content>

      <Route exact path='/posts/:postId' component={ExpandedPost} />
    </S.Container>
  );
};
