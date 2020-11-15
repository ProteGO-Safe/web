import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Link = styled.a`
  text-decoration: ${props => (props.underlineOff ? '' : 'underline')};
  color: ${Color.primary};
`;
