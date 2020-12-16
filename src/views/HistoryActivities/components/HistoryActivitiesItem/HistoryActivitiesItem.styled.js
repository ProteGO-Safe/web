import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Arrow = styled.div`
  position: absolute;
  top: 26px;
  right: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  svg {
    width: 12px;
    height: 12px;
    transform: rotate(${({ open }) => (open ? '-90' : '90')}deg);
    transition: all 0.3s ease;
  }
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 19px 16px 0 0;
  border-radius: 50%;
  background-color: ${({ color }) => color || Color.primary};
  z-index: 2;
  svg {
    display: block;
    width: 18px;
    height: 18px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 44px);
  padding: 17px 0 10px 0;
  border-bottom: 1px solid ${Color.gray_6};
`;

export const Header = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding-right: 28px;
`;

export const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2px;
  font-size: 10px;
  line-height: 12px;
  color: ${Color.gray_5};
`;

export const Title = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ status }) => (!status ? FontWeight.Bold : FontWeight.Normal)};
  color: ${Color.black};
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  color: ${Color.black};
  padding: ${({ open }) => (open ? '0 0 4px 0' : '0')};
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  white-space: pre-line;
  transition: padding ${({ open }) => (open ? '0.1s' : '0.2s')}, max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  overflow: hidden;
  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0); 
      transition-delay: 0s;
    `}
`;

export const HistoryActivitiesItem = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  &:not(:last-child) {
    &:before {
      content: '';
      position: absolute;
      top: 36px;
      left: 13px;
      width: 2px;
      height: 100%;
      background-color: ${Color.primaryLighter};
      z-index: 1;
    }
  }
  &:last-child {
    ${Content} {
      border: 0;
    }
  }
`;
