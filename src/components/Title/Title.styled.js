import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 16px;
  margin-bottom: 21px;
`;

export const Icon = styled.div`
  width: 24px;

  > * {
    width: 100%;
    height: auto;
  }
`;

