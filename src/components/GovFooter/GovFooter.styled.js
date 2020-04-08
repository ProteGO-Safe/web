import styled from 'styled-components';

import govPLBlackUrl from '../../assets/img/logo/Logo-govpl.svg';
import govTechBlackUrl from '../../assets/img/logo/govtech_black.svg';

import govPLWhiteUrl from '../../assets/img/logo/Logo-govpl-WHITE.svg';
import govTechWhiteUrl from '../../assets/img/logo/govtech_white.svg';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  overflow: hidden;
  padding: 22px 15px;
  width: 100%;
`;

const GovLogo = styled.img`
  height: 31px;
`;

export const GovPLBlackLogo = styled(GovLogo).attrs({
  src: govPLBlackUrl
})``;

export const GovTechBlackLogo = styled(GovLogo).attrs({
  src: govTechBlackUrl
})``;

export const GovPLWhiteLogo = styled(GovLogo).attrs({
  src: govPLWhiteUrl
})``;

export const GovTechWhiteLogo = styled(GovLogo).attrs({
  src: govTechWhiteUrl
})`
  /* It's not necessary, but svg has BAD viewbox */
  height: 47px;
  margin-right: -14px;
`;
