import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const CallToActionHealth = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 120px;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: 4px;
  background-color: ${Color.primaryLighter};
  box-shadow: 2px 2px 4px 0 ${Color.gray_1};
`;

export const Image = styled.div`
  position: relative;
  display: block;
  width: 90px;
  min-height: 120px;
  margin-right: 16px;
  svg {
    position: absolute;
    top: 8px;
    left: 12px;
    display: block;
    width: 66px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 90px;
    height: 90px;
    margin: -45px 0 0 -45px;
    background-color: ${Color.gradient_c1};
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 106px);
  padding: 22px 0;
`;

export const Label = styled.span`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 10px;
  padding-right: 18px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};

  svg {
    position: absolute;
    top: 5px;
    right: 0;
    display: block;
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.primary};
  strong {
    font-size: 16px;
  }
`;
