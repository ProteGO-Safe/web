import styled from 'styled-components';

import { ReactComponent as BadgeIcon } from '../../assets/img/icons/badge.svg';

export const Container = styled.div`
  height: 130px;
  width: auto;
  display: grid;
  grid-template-columns: 150px auto;
  grid-column-gap: 26px;
  border-radius: 4px;
  border: solid 1px #598527;
  background-color: #598527;
`;

export const Icon = styled(BadgeIcon)`
  align-self: center;
  justify-self: center;
  height: 100px;
  width: auto;
`;

export const TextContainer = styled.div`
  align-self: center;
  padding-right: 28px;
`;

export const Text = styled.div`
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: 1px;
  text-align: right;
  color: white;
`;
