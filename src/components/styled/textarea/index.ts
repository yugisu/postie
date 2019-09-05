import styled from 'styled-components';
import { Input } from '../input';

export const Textarea = styled(Input).attrs({ as: 'textarea', rows: 5 })`
  min-height: 2rem;
  resize: vertical;

  font-family: 'Roboto', sans-serif;
`;
