import styled from 'styled-components';
import Icon from '../../assets/img/icons/info-tooltip.svg';

export const Tooltip = styled.span`
  display: inline-block;
  width: ${({ sticky }) => (sticky ? '0' : '24px')};
  height: ${({ sticky }) => (sticky ? '0' : '24px')};
  &:focus {
    outline: none;
  }
`;

export const IconInfo = styled.span`
  display: inline-block;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 17px;
    height: 17px;
    margin: -8.5px 0 0 -8.5px;
    background-image: url(${Icon});
    background-repeat: no-repeat;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
  }
`;

export const IconWrapper = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 5px 16px;
  margin-top: -5px;
`;
