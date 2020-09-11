import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 999;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${Color.darkGray};
  opacity: 0.5;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100% - 34px);
  height: ${({ type, height }) =>
    type === 'dialog' || height < 260 ? 'auto' : '100vh'};
  max-height: 62%;
  max-width: 450px;
  margin: 0 auto;
  padding: 30px 40px;
  grid-area: wrapper;
  align-self: center;
  background-color: ${Color.white};
  box-shadow: 5px 5px 15px #00000026;
  border-radius: 4px;
  z-index: 2;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.black};
`;

export const ScrollbarContent = styled.div`
  width: calc(100% + 24px);
  height: 100%;
  margin-top: 12px;
  overflow-x: hidden;

  .scrollbar-container {
    padding-right: 24px;
    .ps {
      &__rail-y,
      &__rail-x {
        right: 2px !important;
        opacity: 1 !important;
        background-color: ${Color.gray_1} !important;
        width: 8px;
        border-radius: 4px;
      }

      &__thumb-y,
      &__thumb-x {
        right: 0;
        width: 8px !important;
        background-color: ${Color.lightGray} !important;
        border-radius: 4px;
      }
    }
  }
`;
