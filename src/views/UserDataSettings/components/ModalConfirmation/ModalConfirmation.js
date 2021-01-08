import React from 'react';
import { useDispatch } from 'react-redux';

import { Button, T } from '../../../../components';
import useModalContext from '../../../../hooks/useModalContext';
import { clearApplicationState } from '../../../../store/actions/app';

import * as Styled from './ModalConfirmation.styled';
import useLoaderContext from '../../../../hooks/useLoaderContext';

const ModalConfirmation = () => {
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
      <Button onClick={handleClose} label={<T i18nKey="ok" />} />
    </Styled.ModalConfirmation>
  );
};

export default ModalConfirmation;
