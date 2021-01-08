import styled from 'styled-components';
import { Color } from '../../theme/colors';

import IconStarSolid from '../../assets/img/icons/star-solid.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DateUpdate = styled.span`
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-end;
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: ${Color.gray_5};
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 6px 0 0;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 8px 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${Color.black};
`;

export const Description = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
`;

export const Star = styled.span`
  display: inline-block;
  margin-bottom: -1px;
  width: 16px;
  height: 16px;
  background-image: url(${IconStarSolid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
`;
