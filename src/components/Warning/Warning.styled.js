import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const WarningWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 22px;
  padding: 12px 20px;
  border-radius: 4px;
  border: solid 2px;
  &.success {
    border-color: ${Color.green};
  }
  &.warning {
    border-color: ${Color.info};
  }
  &.info {
    border-color: ${Color.secondary};
  }
  &.error {
    border-color: ${Color.danger};
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 42px);
  font-size: 16px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.4;
  color: ${Color.lightBlack};
`;

export const Icon = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  margin-right: 14px;
  img {
    display: block;
    width: 28px;
    height: 28px;
  }
`;

export const Content = styled.p`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 9px;
  font-size: 14px;
  line-height: 1.36;
  font-weight: ${FontWeight.Normal};
  color: ${Color.lightBlack};
`;
