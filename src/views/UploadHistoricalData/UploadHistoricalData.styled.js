import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: auto;
  margin-bottom: 24px;
`;

export const SuccessInfo = styled.div`
  display: block;
  width: 100%;
  p {
    margin-bottom: 10px !important;
    &:last-child {
      margin-bottom: 0 !important;
    }
  }
`;
