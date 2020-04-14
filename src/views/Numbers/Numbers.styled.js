import styled from 'styled-components';

import BackgroundFakeMap from '../../assets/img/fake/fake___numbers-map.webp';
import { ReactComponent as PhoneIcon } from '../../assets/img/icons/phone.svg';
import { ReactComponent as NavigationIcon } from '../../assets/img/icons/navigation.svg';
import { ReactComponent as AngleRightIcon } from '../../assets/img/icons/angle-right.svg';

const BackgroundMap = styled.img`
  height: 166px;
  width: 100%;
`;

export const Map = styled(BackgroundMap).attrs({
  src: BackgroundFakeMap
})``;

export const Content = styled.div`
  width: 100%;
  padding: 13px 17px 10px 18px;
`;

export const Info = styled.div`
  font-size: 20px;
  padding-left: 6px;
  padding-bottom: 20px;
  color: #1b1b1b;
`;

export const IconButton = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height: 66px;
  padding: 12px 0 10px 11px;
  border-radius: 4px;
  border: solid 1px #cbcbcb;
`;

export const Phone = styled(PhoneIcon)`
  height: 44px;
  width: 44px;
`;

export const Navigation = styled(NavigationIcon)`
  height: 44px;
  width: 44px;
`;

export const Text = styled.div`
  font-size: 14px;
  line-height: 1.71;
  color: #0052a5;
  margin: auto auto auto 26px;
`;

export const ArrowButton = styled.div`
  display: flex;
  height: 54px;
  border-top: solid 1px #cbcbcb;
`;

export const Text2 = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.14;
  color: #1b1b1b;
  margin: auto auto auto 16px;
`;

export const AngleRight = styled(AngleRightIcon)`
  margin: auto 0 auto auto;
  height: 16px;
  width: 12px;
`;

export const Line = styled.div`
  border-top: solid 1px #cbcbcb;
`;
