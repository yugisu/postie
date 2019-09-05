import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem 0 0;
  width: 100%;

  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;

  border-radius: 5px;

  > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
