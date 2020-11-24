import React, { useEffect, useCallback } from 'react';
import useModalContext from '../../hooks/useModalContext';
import { RatingAppModalFooter, RatingAppModalContent } from './components';

const RatingApp = () => {
  const { openModal, onClose } = useModalContext();

  const handleModalClickTrue = useCallback(() => {
    onClose();
    // eslint-disable-next-line
  }, []);

  const handleModalClickFalse = useCallback(() => {
    onClose();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    openModal(
      <RatingAppModalContent />,
      'rating-app',
      null,
      <RatingAppModalFooter
        handleClickTrue={handleModalClickTrue}
        handleClickFalse={handleModalClickFalse}
      />
    );
    // eslint-disable-next-line
  }, []);

  return null;
};

export default RatingApp;
