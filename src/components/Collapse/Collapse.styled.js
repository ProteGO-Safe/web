import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { ReactComponent as ArrowIcon } from '../../assets/img/icons/angle-right.svg';

export const CollapseWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: -1px;
`;

export const Header = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'title icon';
  grid-template-columns: 1fr 12px;
  grid-column-gap: 30px;
  align-items: center;
  width: 100%;
  padding: 14px 10px 14px 0;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  color: ${Color.primary};
  border-top: solid 1px ${Color.gray_7};
  border-bottom: solid 1px ${({ open }) => (open ? 'transparent' : Color.gray_7)};
`;

export const Title = styled.span`
  grid-area: title;
`;

export const Icon = styled(ArrowIcon)`
  grid-area: icon;
  display: block;
  width: 12px;
  height: 12px;
  transform: rotate(${({ open }) => open && '-'}90deg);
  transition: all 0.3s;
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  max-height: ${({ open }) => (open ? '9999px' : '0')};
  padding: ${({ open }) => (open ? '0 0 10px 0' : '0')};
  font-size: 14px;
  line-height: 1.61;
  color: ${Color.lightBlack};
  white-space: pre-line;
  transition: padding ${({ open }) => (open ? '0.1s' : '0.5s')}, max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.1s;
  overflow: hidden;
  ${({ open }) =>
    open &&
    `
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0); 
      transition-delay: 0s;
    `}

  * {
    font-size: 14px;
    line-height: 1.61;
    color: ${Color.lightBlack};
  }
  a {
    color: ${Color.primary};
  }
`;
