import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 24px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const HistoryActivities = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 36px;
  border-top: 1px solid ${Color.gray_6};
  border-bottom: 2px solid ${Color.primaryLighter};
  &:after {
    content: '';
    position: absolute;
    bottom: -26px;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Color.primaryLighter};
  }
`;

export const MarkAllRead = styled.span`
  position: absolute;
  top: -26px;
  right: 0;
  font-size: 10px;
  line-height: 20px;
  color: ${Color.primary};
`;
