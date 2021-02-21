import styled from 'styled-components';
import { Color } from '../../../../../../theme/colors';
import { FontWeight } from '../../../../../../theme/fonts';

export const UrlLink = styled.a`
  display: block;
`;

export const Title = styled.h2`
  margin: 20px 0 16px 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const NumberList = styled.ol`
  counter-reset: number;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NumberListItem = styled.li`
  position: relative;
  width: 100%;
  padding-left: 34px;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  counter-increment: number;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:before {
    content: counter(number) '.';
    position: absolute;
    top: -1px;
    left: 0;
    font-size: 16px;
    line-height: 22px;
    font-weight: ${FontWeight.SemiBold};
    color: ${Color.primary};
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
