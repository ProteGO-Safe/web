import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/img/logo/protegosafe_logo_white.svg';
import GovFooter from '../../components/GovFooter/GovFooter';

export const Container = styled.section`
  background-image: linear-gradient(to bottom, #0075e2, #003061);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Temp solution - because of invalid DOM structure */
  width: 100vw;
  height: 100vh;
  height: calc(100vh - constant(safe-area-inset-top));
  height: calc(100vh - env(safe-area-inset-top));
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  flex: 1;
`;

export const LogoWrapper = styled.h1`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 227px;
  margin: 0 40px;
`;

export const Message = styled.p`
  margin-top: 28px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.31;
  text-align: center;
  color: #ffffff;
  max-width: 280px;
`;

export const Footer = styled(GovFooter)`
  max-width: 375px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
`;

// TODO: In the future should be replaced with predefined Button component
export const Button = styled.button`
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  color: #0052a5;
  border: 2px solid currentColor;
  background: #ffffff;
  padding: 7px 25px;
  margin-top: 56px;
  font-size: 16px;
  font-weight: 700;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #0075e2;
  }
`;
