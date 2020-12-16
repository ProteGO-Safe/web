import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

import { ReactComponent as LogoSVG } from '../../assets/img/logo/stopcovid_protegosafe_logo_sygnet.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/angle-left.svg';

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 100vw;
  padding: 0 14px;
  background-color: ${Color.primary};
  transition: all 0.2s ease-in;
  z-index: 600;
`;

export const Logo = styled(LogoSVG)`
  height: 38px;
  width: auto;
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${Color.white};
  cursor: pointer;
  appearance: none;
  @media (max-width: 300px) {
    font-size: 12px;
  }
`;

export const ArrowButton = styled(Button)`
  left: 15px;
`;

export const Arrow = styled(ArrowIcon)`
  height: 15px;
  width: auto;
  fill: currentColor;
  margin-right: 10px;
`;

export const Title = styled.p` 
  margin-right: ${({ titlePosition }) => (titlePosition === 'left' ? 'auto' : 0)};
  color: ${Color.white};
  font-size: 18px;
  font-weight: ${FontWeight.Normal}
  line-height: 24px;
`;
