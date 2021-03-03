import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: wrap column;
  flex-shrink: 0;
  width: 100%;
  max-width: 200px;
  padding: 20px;
  border-radius: 3px;
  background-color: ${Color.white};
  box-shadow: 1px 1px 8px 0 rgb(0 0 0 / 18%);
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 17px;
  }
`;

export const Heading = styled.span`
  width: 100%;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 18px;
  color: ${Color.black};
`;

export const FirstLine = styled.span`
  width: 100%;
  margin-bottom: 6px;
  font-size: 10px;
  color: ${Color.darkGray};
`;

export const SecondLine = styled(FirstLine)`
  margin-bottom: 12px;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  margin-top: auto;
  background-color: ${Color.primaryLighter};
`;
