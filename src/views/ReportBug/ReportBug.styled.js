import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Temp solution - because of invalid DOM structure */
  width: 100%;
`;

export const Content = styled.p`
  max-width: 375px;
  padding: 15px;
`;

export const Email = styled.a`
  color: #0052a5;
`;
