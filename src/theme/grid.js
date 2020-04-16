import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px auto;
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
`;
