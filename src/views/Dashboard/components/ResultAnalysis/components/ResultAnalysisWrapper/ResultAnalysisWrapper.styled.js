import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: calc(100% - 34px);
  margin: 20px 17px 0;

  &:before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    display: block;
    width: 5px;
    height: calc(100% - 6px);
    background-color: ${({ pipeColor }) => pipeColor};
    z-index: 20;
  }

  & > div:first-child {
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ fontColor }) => fontColor};
  }
`;
