import React from 'react';
import ExposureMiddle from './ExposureMiddle';
import useNavigation from '../../../../hooks/useNavigation';
import { Routes } from '../../../../services/navigationService/routes';

const ExposureMiddleContainer = () => {
  const { goTo } = useNavigation();

  return <ExposureMiddle handlePath={() => goTo(Routes.Daily)} phoneNumber="222500115" />;
};

export default ExposureMiddleContainer;
