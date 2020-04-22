import styled from 'styled-components';
import { ReactComponent as RiskTestIcon } from '../../assets/img/icons/risk-test.svg';

export const Container = styled.div`
  width: 100%;
  padding: 19px 17px 10px 17px;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  color: #1b1b1b;
  margin-bottom: 20px;
`;

export const Icon = styled(RiskTestIcon)`
  height: 44px;
  width: 44px;
`;

export const ListTitle = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 1.71;
  color: #656565;
`;
