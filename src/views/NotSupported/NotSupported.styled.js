import styled from 'styled-components';
import logo from '../../assets/img/logo/not_supported_logo.svg';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

const CenterLogo = styled.img`
  height: 105px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 31px;
  margin-top: 35px;
`;

export const Logo = styled(CenterLogo).attrs({
  src: logo
})``;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  color: #1b1b1b;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.black};
  margin-bottom: auto;
`;
