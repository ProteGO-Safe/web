import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const Counter = styled.div`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 44px;
  margin-top: calc(${({ margin }) => margin}px + 4px);
  font-size: 14px;
  line-height: 24px;
  color: ${({ count }) => (count > 0 ? Color.gray : Color.gray_1)};
`;
