import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 14px 19px;
  margin-bottom: 24px;
  border-radius: 4px;
  background-color: ${resolveDefaultColor(Color.info)};
  p {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.44;
    color: #ffffff;
  }
`;
