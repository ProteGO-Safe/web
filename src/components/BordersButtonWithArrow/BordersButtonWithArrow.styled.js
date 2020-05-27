import styled from 'styled-components';

export const IconButton = styled.div`
  display: flex;
  position: relative;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 24px;
  padding: 20px 18px;
  border: solid 1px #cbcbcb;
  cursor: pointer;

  @media screen and (max-width: 330px) {
    padding: 10px 9px;
  }

  > svg {
    width: 40px;
    height: auto;
    margin-right: 15px;
  }

  &.small {
    padding: 11px;
  }

  img {
    position: absolute;
    top: 50%;
    right: 15px;
    height: 14px;
    width: 14px;
    margin-top: -7px;
    @media screen and (max-width: 330px) {
      right: 5px;
    }
  }
`;

export const Text = styled.div`
  width: calc(100% - 64px);
  font-size: 14px;
  font-weight: bold;
  line-height: 2;
  color: #0052a5;
`;

export const Content = styled.div`
  width: calc(100% - 64px);
`;

export const Description = styled.div`
  font-size: 11px;
  line-height: 2;
  color: #0052a5;
`;
