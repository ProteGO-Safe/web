import styled from 'styled-components';
import { FontWeight } from '../../../../../../theme/fonts';

export const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  font-weight: ${FontWeight.Normal};
  color: inherit;
`;

export const TextContactDetected = styled(Wrapper)`
  font-size: 16px;
`;
