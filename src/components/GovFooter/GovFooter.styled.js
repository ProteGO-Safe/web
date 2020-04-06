import styled from 'styled-components';

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
