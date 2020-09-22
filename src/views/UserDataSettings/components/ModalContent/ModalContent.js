import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';
import * as Styled from './ModalContent.styled.';

const ModalContent = ({ t }) => {
  const { onClose, openModal } = useModalContext();

  const handleSubmit = () => {
    openModal(
      null,
      'dialog',
      t('modal_confirmation_text1'),
      <ModalConfirmation />
    );
  };

  return (
    <Styled.ModalContent>
      <Button onClick={handleSubmit} label={t('yes')} />
      <Button onClick={onClose} label={t('no')} type="outline" />
    </Styled.ModalContent>
  );
};

export default withTranslation()(ModalContent);
