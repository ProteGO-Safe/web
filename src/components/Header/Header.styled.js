import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

import { ReactComponent as LogoSVG } from '../../assets/img/logo/protegosafe_logo_white.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/angle-left.svg';

export const Container = styled.header`
  height: 50px;
  background-color: #0052a5;
  width: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;
`;

export const Logo = styled(LogoSVG)`
  height: 30px;
  width: auto;
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  appearance: none;
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
  margin-right: ${({ titlePosition }) =>
    titlePosition === 'left' ? 'auto' : 0};
  color: ${Color.white};
  font-size: 18px;
  font-weight: ${FontWeight.Normal}
  line-height: 24px;
`;
