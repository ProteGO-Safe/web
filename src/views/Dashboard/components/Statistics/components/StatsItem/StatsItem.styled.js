import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const StatsItem = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% / 3 - 1.33px);
  overflow: hidden;
  &:not(:last-child) {
    margin-right: 2px;
  }
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  height: 24px;
  padding: 0 4px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.white};
  background-color: ${Color.gradient_c1};
  > * {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${Color.primaryLighter};
`;

export const Number = styled.span`
  display: inline;
  font-size: 20px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const SmallNumber = styled(Number)`
  font-size: 12px;
  line-height: 24px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.gray_5};
`;
