import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: auto;
  * {
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
