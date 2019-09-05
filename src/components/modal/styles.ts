import styled from 'styled-components';

import { fadeIn } from 'styles/keyframes/fadeIn';

export const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.32s;
`;

export const Container = styled.div`
  position: relative;

  width: 40rem;

  display: flex;
  flex-direction: column;

  cursor: initial;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.32s;
`;

export const Close = styled.button`
  z-index: 1005;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);

  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: #000;
  background: #fff;
  border-radius: 50%;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  &:active {
    outline: none;
  }
`;
