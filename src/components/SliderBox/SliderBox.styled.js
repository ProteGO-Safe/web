import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 0 17px;
`;

export const Head = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.div`
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
  color: ${Color.primary};
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  flex-flow: nowrap row;
  width: calc(100% + 34px);
  margin: 0 -17px;
  padding: 20px 0;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &:before,
  &:after {
    content: '\\00a0';
    display: flex;
    flex-shrink: 0;
    width: 17px;
    height: 100%;
  }
`;
