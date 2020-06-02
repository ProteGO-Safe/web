import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Paragraph = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 12px;
  line-height: 2;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
