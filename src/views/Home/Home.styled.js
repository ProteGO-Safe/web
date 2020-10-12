import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap column;
  justify-content: flex-start;
  width: 100%;
  max-width: 338px;
  margin: ${({ noMargin }) => (noMargin ? '0 auto' : '24px auto 0')};
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;
