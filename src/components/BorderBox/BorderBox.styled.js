import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import IconArrow from '../../assets/img/icons/angle-right-blue.svg';

export const BorderBoxInfo = styled.div`
  width: 100%;
  margin-bottom: 16px;
  padding: 22px 20px 22px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => color};
`;

export const BorderBoxNavLink = styled(NavLink)`
  width: 100%;
  margin-bottom: 16px;
  padding: 22px 20px 22px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color }) => color};
`;

export const Title = styled.h3`
  position: relative;
  width: 100%;
  margin: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${({ color }) => color};
  &:after {
    content: '';
    position: absolute;
    top: 1px;
    right: -16px;
    display: ${({ arrow }) => (arrow ? 'block' : 'none')};
    width: 20px;
    height: 20px;
    background-image: url(${IconArrow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 14px;
  }
`;

export const Description = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ color }) => color};
  strong {
    font-weight: 600;
  }
`;
