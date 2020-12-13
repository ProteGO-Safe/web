import React from 'react';
import NoData from './NoData';
import useNavigation from '../../../../../../hooks/useNavigation';
import { Routes } from '../../../../../../services/navigationService/routes';

const NoDataContainer = () => {
  const { goTo } = useNavigation();
  const goToDiagnosis = () => {
    goTo(Routes.Diagnosis);
  };

  return <NoData onClick={goToDiagnosis} />;
};

export default NoDataContainer;
