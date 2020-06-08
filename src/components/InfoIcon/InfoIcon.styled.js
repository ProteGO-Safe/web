import styled from 'styled-components';

export const InfoIconContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
  > img {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 14px;
  }
`;

export const InfoIconContent = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: calc(100% - 38px);
  p {
    font-size: 12px;
  }
`;
