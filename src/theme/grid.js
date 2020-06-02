import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px auto;
  padding-bottom: 24px;
  max-width: 338px;
  width: 100%;

  @media (max-width: 320px) {
    max-width: 290px;
  }
`;

export const View = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  width: 100%;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;
