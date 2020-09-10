import styled from 'styled-components';
import { ReactComponent as IconClose } from '../../../../assets/img/icons/close-modal.svg';

export const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  cursor: pointer;
  z-index: 10;
`;

export const Icon = styled(IconClose)`
  display: block;
  height: 12px;
  width: 12px;
`;
