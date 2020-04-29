import styled from 'styled-components';

import { ReactComponent as AngleRightIcon } from '../../assets/img/icons/angle-right.svg';

export const ArrowButton = styled.div`
  display: flex;
  height: 54px;
  border-top: solid 1px #cbcbcb;
  cursor: pointer;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.14;
  color: #1b1b1b;
  margin: auto auto auto 6px;
`;

export const AngleRight = styled(AngleRightIcon)`
  margin: auto 0 auto auto;
  height: 16px;
  width: 12px;
`;
