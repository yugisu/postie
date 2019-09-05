import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from 'components/styled/button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Redirectie = styled(Button).attrs({ as: Link, to: '/' })`
  margin-top: 1rem;
  align-self: center;
`;
