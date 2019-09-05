import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { useLockBodyScroll } from 'helpers/hooks/use-lock-body-scroll.hook';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  showCondition: boolean;
  onClose: () => void;
};

export const Modal = ({ children, showCondition, onClose }: Props) => {
  useLockBodyScroll();

  return (
    <S.Wrapper onMouseDown={onClose} role='presentation'>
      {showCondition && (
        <S.Container onMouseDown={(e) => e.stopPropagation()}>
          <S.Close onClick={onClose}>
            <FaTimes />
          </S.Close>

          {children}
        </S.Container>
      )}
    </S.Wrapper>
  );
};
