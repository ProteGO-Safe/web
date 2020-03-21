import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import RiskTest from './RiskTest';
import createCalendar from '../../utills/calendar';
import { RiskTestAlreadyDone } from './components/RiskTestAlreadyDone';

const RiskTestContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);
  const [isFilled, setIsFilled] = useState(false);

  const daysInRiskTest = Object.keys(riskTest).map(timestamp =>
    moment.unix(timestamp)
  );
  const calendar = createCalendar(daysInRiskTest);

  const isFilledisInLast12Hours = () => {
    const _12HoursAgo = moment().subtract(12, 'h');
    return daysInRiskTest.some(value => _12HoursAgo.diff(value) <= 0);
  };

  const goToDiagnosis = () => {
    if (isFilledisInLast12Hours()) {
      setIsFilled(true);
      return;
    }
    history.push('/diagnosis');
  };

  const goToHome = () => history.push('/');

  if (isFilled) {
    return <RiskTestAlreadyDone goBack={() => setIsFilled(false)} />;
  }

  return (
    <RiskTest onBack={goToHome} onFill={goToDiagnosis} calendar={calendar} />
  );
};

export default RiskTestContainer;
