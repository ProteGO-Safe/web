import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-column-gap: 2px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const Box = styled.div`
  display: grid;
  grid-template-rows: minmax(23px, max-content) minmax(57px, max-content);
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.primaryLight_2};
`;

export const Dot = styled.div`
  display: block;
  width: 10px;
  height: 10px;
  border: 1px solid ${Color.white};
  border-radius: 50%;
  background-color: ${({ color = 'transparent' }) => color};
  margin-right: 4px;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Color.black};
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 23px;
  background-color: ${Color.primaryLighter};
`;
