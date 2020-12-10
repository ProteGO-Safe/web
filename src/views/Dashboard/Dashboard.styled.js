import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Dashboard = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  max-width: 338px;
  margin: 20px auto 0;
  padding-top: 20px;
  border-top: 1px solid ${Color.primaryLighter};
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;
