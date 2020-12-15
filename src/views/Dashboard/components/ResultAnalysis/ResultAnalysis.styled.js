import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const ResultAnalysis = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  padding: 10px 17px 0 28px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 17px;
    display: block;
    width: 5px;
    height: 100%;
    background-color: ${({ color }) => color};
  }
`;

export const Title = styled.h1`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 10px 0;
  padding-left: 10px;
  padding-right: 42px;
  font-size: 20px;
  line-height: 28px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const CurrentState = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
`;

export const CurrentStateText = styled.span`
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  padding-left: 10px;
  font-size: 18px;
  line-height: 26px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
`;

export const CurrentStateIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 42px;
  height: 42px;
  transform: translateY(-50%);
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  width: 100%;
  padding-left: 10px;
  margin-top: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding-left: 10px;
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  white-space: pre-line;
  overflow: hidden;
  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
    `}
`;
