import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const TextBlockWithIcon = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-right: 24px;
  > svg {
    display: block;
    max-width: 100%;
  }
`;

export const Title = styled.h3`
  width: calc(100% - 74px);
  margin-top: 6px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  color: ${Color.black};
`;

export const Description = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: ${Color.black};
  > * {
    display: inline;
  }
  > a {
    font-weight: 700;
  }
  > .trans-route {
    font-weight: 700;
    color: ${Color.primary};
    text-decoration: none;
  }
`;
