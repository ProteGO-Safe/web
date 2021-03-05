import styled from 'styled-components';
import { Color } from '../../../../theme/colors';
import { FontWeight } from '../../../../theme/fonts';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 189px;
  background-image: linear-gradient(#ffffff, #e5edf6);
  margin-bottom: 30px;
`;

export const MainStyles = `
  position: absolute;
  display: block;
`;

export const Heading = styled.h2`
  position: absolute;
  top: 22px;
  left: 0;
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 0 17px;
  margin-top: 0;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.black};
  font-weight: ${FontWeight.Bold};
`;

export const MainImage = styled.div`
  ${MainStyles};
  bottom: 0;
  right: 75px;
  width: 206px;
  height: 126px;
`;

export const Virus1 = styled.div`
  ${MainStyles};
  bottom: 144px;
  right: 78px;
  width: 22px;
  height: 22px;
`;

export const Virus2 = styled.div`
  ${MainStyles};
  bottom: 82px;
  right: 24px;
  width: 36px;
  height: 36px;
`;

export const Virus3 = styled.div`
  ${MainStyles};
  bottom: 115px;
  right: 160px;
  width: 18px;
  height: 18px;
`;
