import styled from 'styled-components';
import { ReactComponent as IconArrow } from '../../assets/img/icons/angle-right-blue.svg';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

export const ToggleButton = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: auto;
`;

export const Name = styled.span`
  width: auto;
  font-size: 12px;
  line-height: 18px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.primary};
`;

export const Icon = styled(IconArrow)`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 6px;
  transform: rotate(${({ active }) => (active ? '-90deg' : '90deg')});
  transition: all 0.3s;
`;
