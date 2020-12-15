import styled, { keyframes } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  animation: ${blink} 0.2s ease-in-out;
  max-width: ${({ noMargin }) => (noMargin ? '420px' : '338px')};
  min-height: ${({ fullHeight }) => (fullHeight ? 'calc(100vh - 138px)' : 'auto')};
  margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
  padding: ${({ noPadding }) => (noPadding ? '0' : '0 0 98px 0')};
  @media (max-width: 320px) {
    max-width: ${({ noMargin }) => (noMargin ? '420px' : '290px')};
    margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
    padding: ${({ noPadding }) => (noPadding ? '0' : '0 0 50px 0')};
  }
  @media (max-width: 300px) {
    padding: ${({ noPadding }) => (noPadding ? '0' : '0 6px 50px 6px')};
  }
`;
