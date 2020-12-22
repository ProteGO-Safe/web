import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  width: 100%;
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.25;
  color: #1b1b1b;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;
