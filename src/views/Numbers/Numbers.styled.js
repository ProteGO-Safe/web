import styled from 'styled-components';

import { ReactComponent as PhoneIcon } from '../../assets/img/icons/phone.svg';

export const Info = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #1b1b1b;
`;

export const Phone = styled(PhoneIcon)`
  height: 44px;
  width: 44px;
`;

export const Line = styled.div`
  border-top: solid 1px #cbcbcb;
`;
