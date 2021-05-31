import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${Color.black};
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  margin-top: 24px;
`;

export const List = styled.ul`
  display: block;
  width: 100%;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  padding-left: 30px;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Color.primary};
  }
`;
