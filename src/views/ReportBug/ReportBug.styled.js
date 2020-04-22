import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Temp solution - because of invalid DOM structure */
  width: 100%;
  min-height: 100vh;
  min-height: calc(100vh - constant(safe-area-inset-top));
  min-height: calc(100vh - env(safe-area-inset-top));
`;

export const Content = styled.p`
  max-width: 375px;
  padding: 15px;
`;

export const Email = styled.a`
  color: #0052a5;
`;
