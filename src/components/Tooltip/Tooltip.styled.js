import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/img/icons/info-tooltip.svg';

export const Tooltip = styled.span`
  position: relative;
  bottom: -2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 24px;
`;

export const IconInfo = styled(Icon)`
  width: 17px;
  height: 17px;
`;
