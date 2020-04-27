import styled from 'styled-components';

export const IconButton = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 20px 28px;
  border: solid 1px #cbcbcb;
  > svg {
    width: 40px;
    height: auto;
    margin-right: 24px;
  }
  &.small {
    padding: 11px;
  }
`;

export const Text = styled.div`
  width: calc(100% - 64px);
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  color: #0052a5;
`;
