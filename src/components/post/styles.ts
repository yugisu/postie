import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.article`
  position: relative;

  background: white;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

export const Title = styled(Link)`
  display: block;
  padding: 1rem;

  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.3);
  }
`;

export const Body = styled.p`
  padding: 1rem;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  left: -1rem;
  transform: translate(-100%, -50%);

  opacity: 0;
  transition: opacity 0.16s;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const TooltipItem = styled.button<{ button?: boolean }>`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.9rem;
  font-weight: bold;

  ${(props) =>
    props.button &&
    css`
      cursor: pointer;
    `}

  color: #444;

  outline: none;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;
