import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Head = styled.div`
  position: relative;
  width: 100%;
  padding: 16px 0 41px 21px;
  border-radius: 3px;
  transition: all 0.3s ease;

  ${({ isOpen }) => isOpen && `padding-bottom: 16px;`}
`;

export const Title = styled.h1`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 42px;
  font-size: 20px;
  line-height: 28px;
  font-weight: ${FontWeight.Bold};
  color: currentColor;
`;

export const CurrentState = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  background-color: ${Color.white};
`;

export const ToggleButtonWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  width: 100%;
  padding-left: 21px;
  margin-top: ${({ active }) => (active ? '3px' : '-26px')};
  transition: all 0.3s ease;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 5px);
  margin-left: 5px;
  padding: 0 19px 0 17px;
  max-height: ${({ isOpen }) => (isOpen ? '9999px' : '0')};
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s, padding 0.2s cubic-bezier(0, 1, 0, 1) -0.1s;
  white-space: pre-line;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
      padding: 0 19px 10px 17px;
    `}

  > *:last-child {
    margin-bottom: 10px;
  }
`;
