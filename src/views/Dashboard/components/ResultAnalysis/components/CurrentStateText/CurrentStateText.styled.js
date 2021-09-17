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
  display: block;
  width: 100%;
  font-size: 16px;
  max-height: ${({ display }) => (display ? '9999px' : '0')};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;

  ${({ display }) =>
    display &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
    `}
`;
