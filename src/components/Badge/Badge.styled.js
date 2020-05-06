import styled from 'styled-components';
import { Color } from '../../theme/colors';

import { ReactComponent as BadgeIcon } from '../../assets/img/icons/badge.svg';

export const Container = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 130px;
  padding: 24px;
  border-radius: 4px;
  border: solid 1px ${Color.green};
  background-color: ${Color.green};
`;

export const Icon = styled(BadgeIcon)`
  display: block;
  width: 88px;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-self: center;
  width: calc(100% - 100px);
`;

export const Text = styled.div`
  display: block;
  width: 100%;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: 1px;
  text-align: right;
  color: ${Color.white};
`;
