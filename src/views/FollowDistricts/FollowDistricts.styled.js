import styled from 'styled-components';
import { Color } from '../../theme/colors';

export const FollowDistricts = styled.div`
  position: relative;
  width: 100%;
`;

export const DateUpdate = styled.span`
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-end;
  width: 100%;
  max-width: 338px;
  margin: 0 auto 4px;
  font-size: 12px;
  line-height: 20px;
  color: ${Color.gray_5};
  @media (max-width: 320px) {
    max-width: 290px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding: 10px 17px 0;
  background-color: ${Color.primaryLighter};
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0 0 8px 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${Color.black};
`;
