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
  grid-template-columns: 1fr 14px;
  grid-column-gap: 16px;
  align-items: center;
  width: 100%;
  min-height: 54px;
  padding: 12px 15px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;
  color: ${Color.primary};
  border-top: solid 1px ${Color.gray_7};
  border-bottom: solid 1px
    ${({ open }) => (open ? 'transparent' : Color.gray_7)};
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
`;

export const Description = styled.div`
  display: block;
  width: 100%;
  padding: 0 15px 10px 15px;
  font-size: 14px;
  line-height: 1.61;
  color: ${Color.lightBlack};
  white-space: pre-line;
  * {
    font-size: 14px;
    line-height: 1.61;
    color: ${Color.lightBlack};
  }
  a {
    color: ${Color.primary};
  }
`;
