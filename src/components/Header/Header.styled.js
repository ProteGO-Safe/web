import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/img/logo/protegosafe_logo_white.svg';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/angle-left.svg';
import { ReactComponent as MenuIcon } from '../../assets/img/icons/menu-white.svg';

export const Container = styled.header`
  height: 50px;
  background-color: #0052a5;
  width: 100%;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LogoSVG)`
  height: 30px;
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

export const MenuButton = styled(Button)`
  right: 15px;
`;

export const Arrow = styled(ArrowIcon)`
  height: 15px;
  width: auto;
  fill: currentColor;
  margin-right: 10px;
`;

export const Burger = styled(MenuIcon)`
  height: 32px;
  width: auto;
  fill: currentColor;
`;
