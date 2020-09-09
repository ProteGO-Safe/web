import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;

export const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  max-width: ${({ noMargin }) => (noMargin ? '420px' : '338px')};
  margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
  padding-bottom: 50px;
  @media (max-width: 320px) {
    max-width: ${({ noMargin }) => (noMargin ? '420px' : '290px')};
    margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
  }
`;
