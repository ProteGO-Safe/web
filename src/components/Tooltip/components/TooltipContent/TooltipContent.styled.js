import styled from 'styled-components';
import { Paragraph as P } from '../../../../theme/typography';

export const TooltipContent = styled.span`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const Paragraph = styled(P)`
  font-size: 14px;
  line-height: 22px;
`;
