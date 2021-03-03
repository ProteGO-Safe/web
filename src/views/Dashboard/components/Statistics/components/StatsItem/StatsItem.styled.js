import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';

export const Label = styled.span``;

export const Value = styled.span`
  font-size: ${({ smallSize }) => (smallSize ? '12px' : '16px')};
  font-weight: 700;
  color: ${Color.black};
`;
