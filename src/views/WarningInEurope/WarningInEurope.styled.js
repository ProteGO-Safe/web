import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

import { ReactComponent as IconFlagPL } from '../../assets/img/icons/flag-pl.svg';

export const WarningInEurope = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  max-width: 338px;
  margin: 0 auto;
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  margin: 0 0 24px;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.black};
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.SemiBold};
  color: ${Color.black};
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
  + ${Title} {
    margin-top: 22px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: 100%;
  margin-top: 22px;
`;

export const Flag = styled(IconFlagPL)`
  display: block;
  width: 37px;
  height: 25px;
  margin-right: 11px;
`;

export const Text = styled.p`
  width: calc(100% - 48px);
  font-size: 12px;
  line-height: 17px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;
