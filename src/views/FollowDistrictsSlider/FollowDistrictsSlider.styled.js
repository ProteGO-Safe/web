import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { ReactComponent as IconArrow } from '../../assets/img/icons/arrow-current-color.svg';
import { FontWeight } from '../../theme/fonts';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding-top: 20px;
  > * {
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 100%;
    height: 1px;
    transform: translateX(-50%);
    background-color: ${Color.primaryLighter};
  }
`;

export const Head = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
`;

export const IconTitle = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  > svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Title = styled.div`
  display: block;
  width: calc(100% - 34px);
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${({ primary }) => (primary ? Color.primary : Color.black)};
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

export const Add = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: auto;
  padding-left: 26px;
  font-size: 12px;
  line-height: 20px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};
  svg {
    position: absolute;
    top: -4px;
    left: -4px;
    display: block;
    margin-right: 6px;
  }
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  flex-flow: nowrap row;
  width: calc(100% + 34px);
  margin: 14px -17px 0 -17px;
  overflow-x: auto;
  padding: 4px 6px 0 17px;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.span`
  position: relative;
  display: block;
  width: 100%;
  padding-right: 20px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.SemiBold};
  color: ${Color.primary};
`;

export const Icon = styled(IconArrow)`
  position: absolute;
  top: 6px;
  right: 4px;
  width: 12px;
  height: 12px;
  color: ${Color.primary};
`;
