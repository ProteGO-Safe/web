import styled from 'styled-components';
import { FontWeight } from '../../../../theme/fonts';
import { Color } from '../../../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  padding-right: 10%;
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 22px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
`;

export const Text = styled.div`
  width: 100%;
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 22px;
  color: ${Color.black};
`;

export const Small = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  color: ${Color.black};
`;
