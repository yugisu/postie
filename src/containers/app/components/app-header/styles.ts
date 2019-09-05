import styled, { keyframes } from 'styled-components';

export const Container = styled.header`
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3rem;

  overflow: hidden;
  padding: 0 10rem;
  display: flex;
  align-items: center;

  background: white;
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.1);
`;

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(15%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Logo = styled.div`
  color: #888;
  font-size: 1.5rem;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;

  user-select: none;
  transition: color 0.5s;
  animation: ${appear} 0.5s;

  > a {
    display: contents;
  }

  &:hover {
    color: #444;
  }
`;
