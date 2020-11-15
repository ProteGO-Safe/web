import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

import { ReactComponent as arrow } from '../../assets/img/icons/angle-right.svg';

const colorFont = defaultColor => ({ color }) => color || defaultColor;
const colorBorder = defaultColor => ({ border }) => border || defaultColor;

export const WarningWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 18px;
  padding: 12px 24px 12px 8px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${colorBorder(Color.lightGray)};
`;

export const IconArrow = styled(arrow)`
  position: absolute;
  top: 50%;
  right: 8px;
  width: 14px;
  height: 14px;
  margin-top: -7px;
  color: ${colorFont(Color.lightBlack)};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 32px);
  font-size: 14px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.4;
  color: ${colorFont(Color.lightBlack)};
`;

export const Icon = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  img {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const Content = styled.p`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 32px);
  margin-top: 9px;
  margin-left: 30px;
  font-size: 14px;
  line-height: 1.36;
  font-weight: ${FontWeight.Normal};
  color: ${colorFont(Color.lightBlack)};
`;
