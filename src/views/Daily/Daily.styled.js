import styled from 'styled-components';

import { ReactComponent as Notebook } from '../../assets/img/icons/welcome-screen.svg';

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.3;
  color: #1b1b1b;
`;

export const NotebookIcon = styled(Notebook)`
  display: block;
`;

export const DiaryHistory = styled.div`
  grid-area: list;
  align-self: start;
  width: 100%;
`;

export const DiaryLabel = styled.h3`
  display: flex;
  width: 100%;
  padding-bottom: 14px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
  color: #656565;
  border-bottom: 1px solid #e4e4e4;
`;

export const Diarylist = styled.div`
  display: flex;
  flex-flow: wrap column;
  width: 100%;
`;

export const DiaryListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  padding: 0 6px;
  border-bottom: 1px solid #e4e4e4;
  span {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.4;
    color: #1b1b1b;
  }
  img {
    display: block;
    width: auto;
    max-height: 16px;
  }
`;
