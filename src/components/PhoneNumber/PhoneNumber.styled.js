import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Link = styled.a`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};
`;
