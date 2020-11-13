import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { ReactComponent as ArrowRight } from '../../assets/img/icons/arrow-current-color.svg';

export const MenuSettings = styled.div`
  width: 100%;
`;

export const Item = styled.span`
  position: relative;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 24px 0 30px;
  color: ${Color.primary};
  border-bottom: 1px solid ${Color.gray_1};
  pointer-events: ${({ disabled }) => disabled && 'none'};
  cursor: ${({ disabled }) => disabled && 'default'};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
`;

export const Arrow = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  right: 24px;
  width: 14px;
  height: 14px;
  margin-top: -7px;
`;

export const Name = styled.span`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.primary};
`;

export const Icon = styled.img`
  display: block;
  max-width: 38px;
  max-height: 38px;
  margin-right: 30px;
`;
