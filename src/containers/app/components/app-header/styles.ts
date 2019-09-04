import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3rem;

  padding: 0 5rem;
  display: flex;
  align-items: center;

  background: white;
  box-shadow: 0 0 18px -5px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  color: #888;
  font-size: 1.5rem;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;

  user-select: none;
  transition: color 0.5s;

  > a {
    display: contents;
  }

  &:hover {
    color: #444;
  }
`;
