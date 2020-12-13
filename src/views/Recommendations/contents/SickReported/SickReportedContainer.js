import React from 'react';
import { Routes } from '../../../../services/navigationService/routes';
import useNavigation from '../../../../hooks/useNavigation';
import SickReported from './SickReported';

const SickReportedContainer = () => {
  const { goTo } = useNavigation();

  return <SickReported phoneNumber="222500115" handlePath={() => goTo(Routes.Daily)} />;
};

export default SickReportedContainer;
