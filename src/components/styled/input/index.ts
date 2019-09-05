import styled from 'styled-components';

export const Input = styled.input.attrs({ autoComplete: 'off' })`
  padding: 0.5rem;

  font-size: 1rem;

  border: none;
  background: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  transition: box-shadow 0.16s;

  &,
  &:active,
  &:focus {
    outline: none;
  }

  &:focus {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px #ffb70055;
  }
`;
