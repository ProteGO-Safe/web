import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const List = styled.ul`
  margin: 24px 0 44px 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    width: 38px;
    height: auto;
    margin-right: 18px;
  }
  p {
    width: calc(100% - 56px);
    font-size: 14px;
    line-height: 1.68;
    color: #1b1b1b;
  }
`;