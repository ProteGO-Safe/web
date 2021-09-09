import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const ListStats = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 16px;
`;

export const ListStatsItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 22px;
  padding-left: 36px;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 22px;
    height: 22px;
  }
`;

export const Label = styled.div`
  padding-top: 1px;
  font-size: 12px;
  line-height: 18px;
  font-weight: ${({ color }) => (color ? FontWeight.Bold : FontWeight.Normal)};
  color: ${({ color }) => color || Color.black};
`;
