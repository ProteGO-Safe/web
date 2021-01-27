import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const StatsItem = styled.div`
  display: flex;
  flex-flow: wrap row;
  flex: 1;
  overflow: hidden;
  &:not(:last-child) {
    margin-right: 2px;
  }
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
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
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: ${Color.primaryLighter};
`;

export const Number = styled.span`
  display: flex;
  flex-flow: nowrap row;
  width: 100%;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
  > * {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
  }
`;

export const SmallNumber = styled(Number)`
  display: flex;
  flex-flow: nowrap row;
  justify-content: center;
  width: 100%;
  line-height: 24px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.gray_5};
  > * {
    display: flex;
    flex-flow: wrap row;
    justify-content: center;
    align-items: center;
  }
`;
