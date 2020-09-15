import React from 'react';
import { withTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import Routes from '../../../../routes';
import useLoaderContext from '../../../../hooks/useLoaderContext';
import { clearApplicationState } from '../../../../store/actions/app';

import * as Styled from './ModalConfirmation.styled';

const ModalConfirmation = ({ t }) => {
  const dispatch = useDispatch();
  const { onClose } = useModalContext();
  const history = useHistory();
  const { setLoader } = useLoaderContext();

  const handleClose = () => {
    dispatch(clearApplicationState());
    onClose();

    setLoader(true);
    setTimeout(() => setLoader(false), 1000);
    history.push(Routes.Home);
  };

  return (
    <Styled.ModalConfirmation>
      <Button onClick={handleClose} label={t('ok')} />
    </Styled.ModalConfirmation>
  );
};

export default withTranslation()(ModalConfirmation);
