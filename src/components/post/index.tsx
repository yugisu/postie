import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { PostType } from 'types/post.type';
import { deletePost } from 'store/posts/actions';

import * as S from './styles';

type Props = {
  item: PostType;
};

export const Post = ({ item }: Props) => {
  const dispatch = useDispatch();

  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deletePost(item.id));
  };

  return (
    <S.Container>
      <S.Title title='Expand item' to={`/posts/${item.id}`}>
        {item.title}
      </S.Title>
      <S.Body>{item.body}</S.Body>

      <S.Tooltip>
        <S.TooltipItem as='div'>#{item.id}</S.TooltipItem>
        <S.TooltipItem button onClick={onDelete}>
          <FaTrash />
        </S.TooltipItem>
      </S.Tooltip>
    </S.Container>
  );
};
