import React from 'react';
import styled from 'styled-components';

import { CommentType } from 'types/comment.type';

const Container = styled.div`
  margin-top: 0.5rem;

  padding: 0.5rem 1rem;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h5`
  color: #999;
`;

type Props = {
  item: CommentType;
};

export const Comment = ({ item }: Props) => {
  return (
    <Container>
      <Title>#{item.id}</Title>
      {item.body}
    </Container>
  );
};
