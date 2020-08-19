import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { ReactComponent as ArrowIcon } from '../../../../assets/img/icons/arrow-current-color.svg';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

export const InfoBorderContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 14px 19px;
  margin-bottom: 24px;
  border-radius: 4px;
  border-style: solid;
  border-width: 2px;
  border-color: ${resolveDefaultColor(Color.info)};
  .p1 {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.44;
    color: #1b1b1b;
  }
`;

export const LinkArrow = styled.a`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  color: ${Color.primary};
`;

export const Arrow = styled(ArrowIcon)`
  display: block;
  height: 14px;
  width: 14px;
  margin-left: 20px;
`;
