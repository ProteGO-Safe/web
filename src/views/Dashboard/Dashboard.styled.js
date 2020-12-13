import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Dashboard = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 42px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  max-width: 678px;
  margin: 21px auto 0;
  padding: ${({ padding }) => (padding ? '20px 17px 0' : '20px 0 0')};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: calc(100% - 34px);
    height: 1px;
    transform: translateX(-50%);
    background-color: ${Color.primaryLighter};
  }
`;
