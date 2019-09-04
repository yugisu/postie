import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export const AppHeader = () => {
  return (
    <S.Container>
      <Link to='/'>
        <S.Logo>postie</S.Logo>
      </Link>
    </S.Container>
  );
};
