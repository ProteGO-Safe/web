import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const Title = styled.h1`
  width: 100%;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.3;
  color: ${Color.lightBlack};
`;
