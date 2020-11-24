import styled from 'styled-components';

import { ReactComponent as Icon } from '../../../../../assets/img/icons/user-message.svg';
import { FontWeight } from '../../../../../theme/fonts';
import { Color } from '../../../../../theme/colors';

export const ModalFalseContent = styled.div`
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  width: 100%;
  padding: 0 23px;
`;

export const Image = styled(Icon)`
  display: block;
  max-width: 52px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 16px;
  line-height: 18px;
  font-weight: ${FontWeight.Bold};
  color: ${Color.black};
  text-align: center;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.black};
  text-align: center;
`;
