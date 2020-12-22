import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { ReactComponent as LogoSVG } from '../../assets/img/logo/protegosafe_logo_white.svg';
import GovFooter from '../../components/GovFooter/GovFooter';
import { DEVICE } from '../../theme/deviceResponsive';

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
  padding: 0 24px calc(68px + env(safe-area-inset-bottom));
  flex: 1;
`;

export const LogoWrapper = styled.h1`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto 0 0;
  @media (max-width: 330px) {
    height: 22%;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 100%;
  max-width: 302px;
  ${DEVICE.XS} {
    max-height: 120px;
  }
  @media (max-width: 330px) {
    height: 100% !important;
  }
  ${({ change }) =>
    change &&
    `
    max-height: 110px!important;
  `}
`;

export const Subtitle = styled.p`
  margin-top: 43px;
  margin-bottom: 43px;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.white};
  text-align: center;
  ${DEVICE.XS} {
    margin-top: 28px;
    margin-bottom: 28px;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 330px) {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 20px;
  }
  ${({ change }) =>
    change &&
    `
    margin-top: 20px!important;
    margin-bottom: 20px!important;
  `}
`;

export const ChooseLang = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  margin-bottom: ${({ change }) => (change ? '24px' : 'auto')};
  ${DEVICE.XS} {
    margin-top: 0;
  }
`;

export const Label = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${Color.white};
  text-align: center;
  ${DEVICE.XS} {
    font-size: 16px;
    line-height: 22px;
  }
  @media (max-width: 330px) {
    font-size: 14px;
    line-height: 20px;
  }
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
  ${DEVICE.XS} {
    margin-bottom: 24px;
  }
  @media (max-width: 330px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Footer = styled(GovFooter)`
  background-color: transparent;
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
  @media (max-width: 330px) {
    margin-top: 20px;
  }
`;
