import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Statistics = styled.div`
  width: 100%;
`;

export const Update = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 17px;
  font-size: 16px;
  line-height: 20px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  padding: 0 17px;
  transition: max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  white-space: pre-line;
  overflow: hidden;
  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(1, 0, 1, 0);
      transition-delay: 0s;
    `}
  ${({ existsStatsItems }) =>
    existsStatsItems &&
    `& > *:first-child {
    margin-top: 38px;
  }`}
`;

export const ContentStats = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 17px;
`;

export const Wrapper = styled(ContentStats)`
  margin-bottom: 0;
  padding: 0;
`;

export const Source = styled.div`
  position: absolute;
  bottom: -28px;
  right: 17px;
  font-size: 12px;
  line-height: 18px;
  color: ${Color.gray_5};
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 0 17px;
`;
