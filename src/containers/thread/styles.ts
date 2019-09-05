import styled from 'styled-components';

import { fadeIn } from 'styles/keyframes/fadeIn';

export const Container = styled.div`
  min-width: 20rem;
  width: 40rem;
  max-width: 40rem;

  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.64s;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
