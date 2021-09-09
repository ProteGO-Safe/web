import styled from 'styled-components';

import { ReactComponent as IconStopCovid } from '../../../../assets/img/icons/stop-covid-logo.svg';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const RatingAppModalContent = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
  padding: 0 23px;
  margin-top: 30px;
`;

export const Image = styled(IconStopCovid)`
  display: block;
  max-width: 64px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  width: 100%;
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
  text-align: center;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  text-align: center;
`;
