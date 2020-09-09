import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/img/logo/protegosafe_logo_white.svg';
import GovFooter from '../../components/GovFooter/GovFooter';
import { Color } from '../../theme/colors';

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  flex: 1;
`;

export const LogoWrapper = styled.h1`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto 0 0;
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 302px;
`;

export const Subtitle = styled.p`
  margin-top: 43px;
  margin-bottom: 43px;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.white};
  text-align: center;
`;

export const ChooseLang = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Label = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${Color.white};
  text-align: center;
`;

export const Info = styled.span`
  width: 100%;
  margin-top: 6px;
  margin-bottom: 36px;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  color: ${Color.white};
  text-align: center;
`;

export const Footer = styled(GovFooter)`
  max-width: 375px;
  padding-bottom: calc(32px + constant(safe-area-inset-bottom));
  padding-bottom: calc(32px + env(safe-area-inset-bottom));
`;

export const Button = styled.button`
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 232px;
  height: 52px;
  margin-bottom: auto;
  border-radius: 4px;
  border: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${Color.primary};
  background: #ffffff;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
`;
