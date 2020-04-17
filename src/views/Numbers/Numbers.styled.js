import styled from 'styled-components';

import { ReactComponent as PhoneIcon } from '../../assets/img/icons/phone.svg';

export const Content = styled.div`
  width: 100%;
  padding: 13px 17px 10px 18px;
`;

export const Info = styled.div`
  font-size: 20px;
  padding-left: 6px;
  padding-bottom: 20px;
  color: #1b1b1b;
`;

export const Phone = styled(PhoneIcon)`
  height: 44px;
  width: 44px;
`;

export const Line = styled.div`
  border-top: solid 1px #cbcbcb;
`;
