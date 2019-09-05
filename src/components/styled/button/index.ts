import styled from 'styled-components';

export const Button = styled.button`
  align-self: flex-end;

  padding: 0.5rem 3rem;

  color: white;
  font-weight: bold;

  cursor: pointer;
  background-color: #ffb700;
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 0 10px #ffb70055;

  transition: all 0.16s;

  &,
  &:active,
  &:focus {
    outline: none;
  }

  &:active {
    background-color: #ffb700cc;
  }

  &:disabled {
    color: #9a9a9a;

    background-color: #d8d8d8;
    cursor: not-allowed;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;
