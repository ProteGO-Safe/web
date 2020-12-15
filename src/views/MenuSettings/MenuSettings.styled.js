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
  width: calc(100% - 68px);
  margin-left: 68px;
  padding-right: 14px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${Color.primary};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 30px;
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 100%;
  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
`;
