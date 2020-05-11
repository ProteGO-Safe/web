import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  * {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
