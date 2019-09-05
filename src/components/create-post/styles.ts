import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  > *:not(:first-child) {
    margin-top: 1rem;
  }
`;
