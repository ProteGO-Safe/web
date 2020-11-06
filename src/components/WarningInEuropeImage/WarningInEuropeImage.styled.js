import styled from 'styled-components';

import { ReactComponent as IconFlagPL } from '../../assets/img/icons/flag-pl.svg';
import { ReactComponent as IconFlagUE } from '../../assets/img/icons/flag-ue.svg';
import { ReactComponent as Image } from '../../assets/img/icons/interoperability.svg';

export const WarningInEuropeImage = styled.div`
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 256px;
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
