import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const RowHeader = styled.tr`
  background-color: ${Color.primaryLight_2};
`;

export const RowBody = styled.tr`
  background-color: ${Color.primaryLighter};

  &:nth-child(odd) {
    background-color: ${Color.white};
  }
`;

export const TD = styled.td`
  color: ${Color.white};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: ${({ align }) => align || 'center'};
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: ${({ padding }) => padding || 0}px;

  &:first-child {
    padding-left: 10px;
  }
`;
