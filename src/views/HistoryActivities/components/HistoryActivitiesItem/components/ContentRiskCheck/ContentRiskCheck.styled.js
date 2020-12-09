import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const ContentRiskCheck = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const Item = styled.span`
  display: inline;
  font-size: 12px;
  line-height: 16px;
  color: ${Color.black};
`;

export const Exposures = styled.span`
  display: inline;
  font-size: inherit;
  line-height: inherit;
  font-weight: ${({ weight }) => (weight ? FontWeight.Bold : FontWeight.Normal)};
`;
