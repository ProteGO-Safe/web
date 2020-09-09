import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { ModalConfirmation } from '../ModalConfirmation';

const ModalContent = ({ t }) => {
  const { onClose, openModal } = useModalContext();

  const handleSubmit = () => {
    openModal(<ModalConfirmation />, 'dialog');
  };

  return (
    <div className="user-data__modal-content">
      <h4 className="text-center medium-2">{t('modal_content_text1')}</h4>
      <p className="text-center medium">{t('modal_content_text2')}</p>
      <div className="buttons">
        <Button onClick={handleSubmit} label={t('yes')} />
        <Button onClick={onClose} label={t('no')} />
      </div>
    </div>
  );
};

export default withTranslation()(ModalContent);
