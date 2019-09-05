import React from 'react';

import * as S from './styles';

export const NotFound = () => {
  return (
    <S.Container>
      <h3>Whoops! Seems like page you came to was stolen by mean goblins!</h3>
      <S.Redirectie>Bring me back!</S.Redirectie>
    </S.Container>
  );
};
