import React, { useEffect } from 'react';
import useModalContext from '../../hooks/useModalContext';
import { TYPE } from '../../components/Modal/Modal.helpers';
import { ModalContent } from './components';

const ExposureNotificationContactDetection = ({ data, handleReceiveLabTest, handleBack }) => {
  const { openModal } = useModalContext();

  useEffect(() => {
    openModal({
      disableOverlayClose: true,
      hideCloseButton: true,
      value: <ModalContent data={data} handleReceiveLabTest={handleReceiveLabTest} handleBack={handleBack} />,
      modalType: TYPE.CUSTOM,
      modalFooter: null
    });
    // eslint-disable-next-line
  }, []);

  return null;
};

export default ExposureNotificationContactDetection;
