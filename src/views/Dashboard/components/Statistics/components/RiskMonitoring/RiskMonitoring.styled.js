import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const RiskMonitoring = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  width: 100%;
`;

export const Item = styled.span`
  width: 100%;
  font-size: 12px;
  color: ${Color.gray_5};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BoldItem = styled(Item)`
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const Left = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: calc(100% - 138px);
`;

export const Right = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 138px;
`;
