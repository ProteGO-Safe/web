import React from 'react';
import { Routes } from '../../../../services/navigationService/routes';
import useNavigation from '../../../../hooks/useNavigation';
import SickApprove from './SickApprove';

const SickApproveContainer = () => {
  const { goTo } = useNavigation();

  return <SickApprove handlePath={() => goTo(Routes.Daily)} />;
};

export default SickApproveContainer;
