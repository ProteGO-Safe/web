import React from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { clearApplicationState } from '../../../../store/actions/app';

import * as Styled from './ModalConfirmation.styled';

const ModalConfirmation = ({ t }) => {
  const dispatch = useDispatch();
  const { onClose } = useModalContext();

  const handleClose = () => {
    dispatch(clearApplicationState());
    onClose();
  };

  return (
    <Styled.ModalConfirmation>
      <Button onClick={handleClose} label={t('ok')} />
    </Styled.ModalConfirmation>
  );
};

export default withTranslation()(ModalConfirmation);
