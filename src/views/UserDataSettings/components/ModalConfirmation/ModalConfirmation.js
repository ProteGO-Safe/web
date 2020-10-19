import React from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { clearApplicationState } from '../../../../store/actions/app';

import * as Styled from './ModalConfirmation.styled';
import useLoaderContext from '../../../../hooks/useLoaderContext';

const ModalConfirmation = ({ t }) => {
  const dispatch = useDispatch();
  const { onClose } = useModalContext();
  const { setLoader } = useLoaderContext();

  const handleClose = () => {
    dispatch(clearApplicationState());
    onClose();

    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
  };

  return (
    <Styled.ModalConfirmation>
      <Button onClick={handleClose} label={t('ok')} />
    </Styled.ModalConfirmation>
  );
};

export default withTranslation()(ModalConfirmation);
