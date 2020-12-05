import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Bell = styled.div`
  position: absolute;
  bottom: 10px;
  right: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? Color.white : 'transparent')};
`;

export const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  min-width: 20px;
  height: 20px;
  border: 2px solid ${Color.primary};
  border-radius: 10px;
  font-size: 12px;
  line-height: 1;
  font-weight: ${FontWeight.Bold};
  color: ${Color.white};
  background-color: ${Color.red};
`;
