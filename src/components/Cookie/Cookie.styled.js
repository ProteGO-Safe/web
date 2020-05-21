import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const CookieWrapper = styled.div`
  position: fixed;
  left: 15px;
  bottom: 64px;
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 30px);
  padding: 12px 12px 12px 4px;
  z-index: 99;
  background-color: white;
  border-radius: 4px;
  border: solid 2px ${Color.primaryLight};
`;

export const Close = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  img {
    display: block;
    width: 12px;
    height: 12px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 45px);
  padding-top: 3px;
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.5;
  color: ${Color.lightBlack};
`;

export const Icon = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: flex-start;
  width: 35px;
  margin-right: 10px;
  img {
    display: block;
    width: 30px;
    height: 30px;
  }
`;
