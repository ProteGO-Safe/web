import React from 'react';
import { ifElse, or } from 'ramda';
import ExposureNotificationContactDetection from './ExposureNotificationContactDetection';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import useModalContext from '../../hooks/useModalContext';
import useExposureNotification from '../../hooks/useExposureNotification';
import { Color } from '../../theme/colors';
import { ReactComponent as EnHighIcon } from '../../assets/img/icons/en-high-circle.svg';
import { ReactComponent as EnMiddleIcon } from '../../assets/img/icons/en-middle-circle.svg';

const ExposureNotificationContactDetectionContainer = () => {
  const { goTo } = useNavigation();
  const { onClose } = useModalContext();
  const { occurredHighEn, occurredMiddleEn } = useExposureNotification();

  const handleReceiveLabTest = () => {
    onClose();
    goTo(Routes.LabTest);
  };

  const handleBack = () => {
    onClose();
    goTo(Routes.Home);
  };

  const resolveData = () => {
    if (occurredHighEn) {
      return { color: Color.red, icon: <EnHighIcon /> };
    }
    if (occurredMiddleEn) {
      return { color: Color.info, icon: <EnMiddleIcon /> };
    }

    return { color: Color.white, icon: null };
  };

  const renderComponent = () => (
    <ExposureNotificationContactDetection
      data={resolveData()}
      handleReceiveLabTest={handleReceiveLabTest}
      handleBack={handleBack}
    />
  );
  const renderEmptyView = () => null;

  return ifElse(() => or(occurredHighEn, occurredMiddleEn), renderComponent, renderEmptyView)();
};

export default ExposureNotificationContactDetectionContainer;
