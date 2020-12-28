import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

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
  max-height: ${({ isOpen }) => (isOpen ? '9999px' : '0')};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  white-space: pre-line;
  overflow: hidden;
  ${({ isOpen }) =>
    isOpen &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
    `}
  > *:last-child {
    margin-bottom: 10px;
  }
`;
