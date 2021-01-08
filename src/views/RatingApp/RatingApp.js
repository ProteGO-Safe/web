import React, { useCallback, useEffect } from 'react';
import useModalContext from '../../hooks/useModalContext';
import { RatingAppModalContent, RatingAppModalFooter } from './components';
import { TYPE } from '../../components/Modal/Modal.helpers';
import { ModalFalseContent, ModalFalseFooter } from './components/RatingAppModalFalse';

const RatingApp = ({ handleClose, handleYes, handleNo }) => {
  const { openModal, onClose } = useModalContext();

  const handleModalClickYes = useCallback(() => {
    handleYes();
    onClose();
    // eslint-disable-next-line
  }, []);

  const handleModalClickNo = useCallback(() => {
    handleNo();
    openModal({
      value: <ModalFalseContent />,
      modalType: TYPE.CUSTOM,
      modalFooter: <ModalFalseFooter />
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    openModal({
      value: <RatingAppModalContent />,
      modalType: TYPE.CUSTOM,
      modalFooter: <RatingAppModalFooter handleClickYes={handleModalClickYes} handleClickNo={handleModalClickNo} />,
      closeCallback: handleClose
    });
    // eslint-disable-next-line
  }, []);

  return null;
};

export default RatingApp;
