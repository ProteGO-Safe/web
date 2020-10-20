import styled from 'styled-components';
import { Color } from '../../theme/colors';

import { ReactComponent as IconClose } from '../../assets/img/icons/close.svg';

const handleColorStatus = status => {
  switch (status) {
    case 0:
      return Color.lightGray;
    case 1:
      return Color.info;
    case 2:
      return Color.danger;
    default:
      return Color.lightGray;
  }
};

export const StatusItem = styled.div`
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  width: auto;
  margin: 0 10px 10px 0;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: ${Color.white};
`;

export const Status = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => handleColorStatus(status)};
`;

export const Name = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: ${Color.black};
  white-space: nowrap;
`;

export const Action = styled(IconClose)`
  display: block;
  width: 12px;
  height: 12px;
  margin-left: 16px;
`;
