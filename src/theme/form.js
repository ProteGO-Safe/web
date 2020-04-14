import styled from 'styled-components';
import { SmallText } from './typography';
import { Color } from './colors';

export const Label = styled(SmallText)`
  color: ${Color.lightBlack};
  margin-bottom: 4px;
  
  &:after {
    content: '${({ required }) => (required ? '*' : '')}';
    color: ${Color.danger}
  }
`;
