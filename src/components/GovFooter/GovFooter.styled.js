import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: calc(24px + env(safe-area-inset-bottom));
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  width: 100%;
  padding: 0 17px 0;
  background-color: ${Color.white};
  overflow: hidden;
  z-index: 999;
  > svg {
    display: block;
    height: 32px;
  }
`;

export const SVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  > svg {
    height: 47px;
    margin-right: -12px;
  }
`;
