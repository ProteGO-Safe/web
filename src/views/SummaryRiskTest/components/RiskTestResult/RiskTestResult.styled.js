import styled from 'styled-components';
import { Color } from '../../../../theme/colors';

export const RiskTestResult = styled.div`
  position: relative;
  width: 100%;
  padding: 2px 0 8px 21px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ color }) => color};
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 3px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: ${Color.black};
`;

export const Result = styled.span`
  position: relative;
  display: inline-flex;
  padding-right: 48px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.black};
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 32px;
    height: 32px;
    margin-top: -16px;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px 32px;
  }
`;
