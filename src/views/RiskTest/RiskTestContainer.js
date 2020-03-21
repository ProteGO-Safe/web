import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import RiskTest from './RiskTest';
import createCalendar from '../../utills/calendar';

const RiskTestContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);
  const [isFilled, setIsFilled] = useState(false);

  const daysInRiskTest = Object.keys(riskTest).map(timestamp =>
    moment.unix(timestamp)
  );
  const calendar = createCalendar(daysInRiskTest);

  const _12HoursAgo = moment().subtract(12, 'h');

  const riskFilledToday = daysInRiskTest.find(
    value => _12HoursAgo.diff(value) <= 0
  );

  const goToDiagnosis = () => {
    if (riskFilledToday) {
      setIsFilled(true);
      return;
    }
    history.push('/diagnosis');
  };

  const goToHome = () => history.push('/');

  const goToHistory = timestamp => history.push(`/risk-test-data/${timestamp}`);

  if (isFilled && riskFilledToday) {
    const timestamp = riskFilledToday.unix();
    goToHistory(timestamp);
  }

  return (
    <RiskTest
      onBack={goToHome}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
      isFilledToday={!!riskFilledToday}
      calendar={calendar}
    />
  );
};

export default RiskTestContainer;
