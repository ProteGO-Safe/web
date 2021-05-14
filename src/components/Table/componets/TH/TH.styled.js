import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { ARROW_TYPE } from '../../table.constants';

export const TH = styled.th`
  padding: 5px 5px 6px 0;
  color: ${Color.white};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 19px;
  vertical-align: middle;
  text-align: ${({ align }) => align || 'center'};
  box-sizing: border-box;

  &:first-child {
    padding-left: 10px;
  }
`;

export const Icon = styled.span`
  position: relative;
  top: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  margin: 0 0 0 6px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? Color.primaryLighter : 'transparent')};
  color: ${({ selected }) => (selected ? Color.primary : Color.white)};
  overflow: hidden;

  > svg {
    position: relative;
    top: ${({ type, selected }) => (type === ARROW_TYPE.DOWN && selected ? '1px' : '0px')};
    display: block;
    height: 13px;
    width: 9px;
    transform: rotate(${({ type }) => (type === ARROW_TYPE.UP ? '-90deg' : '90deg')});
  }
`;
