import React from 'react';
import { Button, T } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';
import * as Styled from './ModalContent.styled.';

const ModalContent = () => {
  const { onClose, openModal } = useModalContext();

  const handleSubmit = () => {
    openModal({
      modalTitle: <T i18nKey="modal_confirmation_text1" />,
      modalFooter: <ModalConfirmation />
    });
  };

  return (
    <Styled.ModalContent>
      <Button onClick={handleSubmit} label={<T i18nKey="yes" />} />
      <Button onClick={onClose} label={<T i18nKey="no" />} type="outline" />
    </Styled.ModalContent>
  );
};

export default ModalContent;
