import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const HistoryActivitiesEmpty = styled.div`
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  width: 100%;
  margin-bottom: 22px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.SemiBold};
  color: ${Color.black};
`;

export const Text = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${FontWeight.Normal};
  color: ${Color.black};
`;
