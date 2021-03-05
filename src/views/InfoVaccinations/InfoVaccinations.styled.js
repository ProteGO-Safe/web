import styled from 'styled-components';
import { Color } from '../../theme/colors';
import { FontWeight } from '../../theme/fonts';

export const Content = styled.div`
  width: 100%;
  padding: 0 17px 26px;
`;

export const Heading = styled.h2`
  margin-top: ${({ mgr }) => (mgr ? '24px' : '0')};
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 22px;
  color: ${Color.black};
  font-weight: ${FontWeight.Bold};
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
`;

export const ListNumber = styled.ol`
  margin: 0 0 24px 0;
  padding-left: 0;
  list-style: none;
  counter-reset: counter;
`;
export const ListItem = styled.li`
  position: relative;
  counter-increment: counter;
  padding-left: 34px;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:before {
    content: counter(counter) '. ';
    position: absolute;
    top: -2px;
    left: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: ${Color.primary};
  }
`;

export const ListDots = styled.ul`
  margin: 0 0 24px;
  padding-left: 0;
  list-style: none;
`;

export const ListDotsItem = styled.li`
  position: relative;
  width: 100%;
  padding-left: 34px;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};

  &:before {
    content: '';
    position: absolute;
    top: 7px;
    left: 0;
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${Color.primary};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-content: center;
  width: 100%;
  margin-top: 24px;
`;

export const UrlLink = styled.a`
  display: block;
  width: 100%;
`;

export const Small = styled.div`
  width: 100%;
  margin-top: 4px;
  font-size: 10px;
  line-height: 14px;
  color: ${Color.primary};
  text-align: center;
`;
