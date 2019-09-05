import { useDispatch } from 'react-redux';
import React, { useState, useMemo } from 'react';

import { createPost } from 'store/posts/actions';

import { Input } from 'components/styled/input';
import { Button } from 'components/styled/button';
import { Textarea } from 'components/styled/textarea';

import * as S from './styles';

export const CreatePost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const canSubmit = useMemo(() => Boolean(title && body), [title, body]);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setTitle(value);
    } else if (name === 'body') {
      setBody(value);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (canSubmit) {
      dispatch(createPost(title, body));
      setTitle('');
      setBody('');
    }
  };

  return (
    <S.Container as='form' onSubmit={onSubmit}>
      <h2>Create a new post</h2>

      <Input
        name='title'
        type='text'
        placeholder='Title'
        value={title}
        onChange={onInputChange}
      />
      <Textarea
        name='body'
        placeholder="What's new?"
        value={body}
        onChange={onInputChange}
      />
      <Button type='submit' disabled={!canSubmit}>
        New post
      </Button>
    </S.Container>
  );
};
