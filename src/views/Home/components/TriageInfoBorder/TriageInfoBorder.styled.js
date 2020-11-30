import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

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
    font-weight: ${FontWeight.SemiBold};
    line-height: 1.44;
    color: #1b1b1b;
  }
`;
