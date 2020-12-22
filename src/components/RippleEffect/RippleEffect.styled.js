import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
  to {
      opacity: 0;
      transform: scale(2);
    }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Ripple = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 100%;
  opacity: 0.3;
  background-color: ${({ color }) => color};
  animation-name: ${rippleAnimation};
  animation-duration: ${({ duration }) => duration}ms;
  transform: scale(0);

  @keyframes rippleAnimation {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
