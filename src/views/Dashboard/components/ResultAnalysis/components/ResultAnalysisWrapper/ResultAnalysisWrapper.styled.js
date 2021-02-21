import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
  padding: 10px 17px 0 28px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 17px;
    display: block;
    width: 5px;
    height: 100%;
    background-color: ${({ color }) => color};
  }
`;
