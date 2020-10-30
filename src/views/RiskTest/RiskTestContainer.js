import React from 'react';
import { useSelector } from 'react-redux';

import { createDaysDetailsByTimestamp } from '../../utils/calendar';
import RiskTest from './RiskTest';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const RiskTestContainer = () => {
  const { goTo } = useNavigation();
  const riskTest = useSelector(state => state.riskTest);

  const daysDetails = createDaysDetailsByTimestamp(Object.keys(riskTest));

  const goToDiagnosis = () => {
    goTo(Routes.Diagnosis);
  };

  const goToHistory = timestamp =>
    goTo(Routes.RiskTestData, { id: timestamp });

  return (
    <RiskTest
      previousDays={daysDetails}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
    />
  );
};

export default RiskTestContainer;
