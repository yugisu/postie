import { useDispatch } from 'react-redux';
import React, { useState, useMemo } from 'react';

import { PostType } from 'types/post.type';
import { addComment } from 'store/expanded-post/actions';

import { Button } from 'components/styled/button';
import { Textarea } from 'components/styled/textarea';

import * as S from './styles';

type Props = {
  postId: PostType['id'];
};

export const CreateComment = ({ postId }: Props) => {
  const dispatch = useDispatch();

  const [body, setBody] = useState('');

  const canSubmit = useMemo(() => Boolean(body), [body]);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'body') {
      setBody(value);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (canSubmit) {
      dispatch(addComment(postId, body));
      setBody('');
    }
  };

  return (
    <S.Container as='form' onSubmit={onSubmit}>
      <Textarea
        name='body'
        placeholder="What's new?"
        value={body}
        onChange={onInputChange}
      />
      <Button type='submit' disabled={!canSubmit}>
        New comment
      </Button>
    </S.Container>
  );
};
