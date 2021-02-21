import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  min-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? 'calc(100vh - 52px)' : 'initial')};
  max-width: 504px;
  margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
  padding: ${({ noPadding }) =>
    noPadding
      ? '0 0 calc(66px + env(safe-area-inset-bottom)) 0'
      : '0 17px calc(92px + env(safe-area-inset-bottom)) 17px'};
  animation: ${blink} 0.2s ease-in-out;
`;
