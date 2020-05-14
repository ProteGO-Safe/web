import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDaysDetails } from '../../utils/calendar';
import RiskTest from './RiskTest';

const RiskTestContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);

  const daysDetails = createDaysDetails(Object.keys(riskTest));

  const goToDiagnosis = () => {
    history.push('/diagnosis');
  };

  const goToHistory = timestamp => history.push(`/risk-test-data/${timestamp}`);

  return (
    <RiskTest
      previousDays={daysDetails}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
    />
  );
};

export default RiskTestContainer;
