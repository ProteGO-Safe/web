import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

import { ReactComponent as Image } from '../../../../assets/img/icons/interoperability.svg';
import { ReactComponent as IconFlagPL } from '../../../../assets/img/icons/flag-pl.svg';
import { ReactComponent as IconFlagUE } from '../../../../assets/img/icons/flag-ue.svg';

export const ContentModal = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  display: block;
  width: 100%;
  max-width: 262px;
  margin: 0 auto 12px;
  font-size: 18px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
  text-align: center;
`;

export const Images = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 255px;
  margin: 22px auto 30px;
`;

export const FlagPL = styled(IconFlagPL)`
  display: block;
  width: 37px;
  height: 25px;
  margin-right: 24px;
`;

export const FlagUE = styled(IconFlagUE)`
  display: block;
  width: 37px;
  height: 25px;
  margin-left: 24px;
`;

export const Img = styled(Image)`
  display: block;
  width: 100%;
  max-width: 116px;
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
  text-align: center;
  > strong {
    font-weight: ${FontWeight.SemiBold};
  }
`;
