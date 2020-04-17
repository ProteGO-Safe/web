import styled from 'styled-components';

export const CollapseWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: -1px;
`;

export const Title = styled.span`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  min-height: 54px;
  padding: 10px 44px 10px 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.33;
  color: #0052a5;
  border-top: solid 1px #cbcbcb;
  border-bottom: solid 1px #cbcbcb;
  img {
    position: absolute;
    top: 50%;
    right: 10px;
    display: block;
    max-height: 14px;
    margin-top: -7px;
    transition: all 0.2s linear;
  }
  &.open {
    border-bottom: 0;
    img {
      transform: rotate(-90deg);
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 10px;
`;