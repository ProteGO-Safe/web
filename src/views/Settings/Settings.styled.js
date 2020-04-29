import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 18px;
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #1b1b1b;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #1b1b1b;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  margin-top: 16px;
  > * {
    padding: 12px 4px;
    border-top: 1px solid #e4e4e4;
    &:last-child {
      border-bottom: 1px solid #e4e4e4;
    }
  }
`;
