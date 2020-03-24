import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import createCalendar from '../../utills/calendar';
import RiskTest from './RiskTest';

const todayFormat = 'D-MM-YYYY';

const RiskTestContainer = () => {
  const history = useHistory();
  const riskTest = useSelector(state => state.riskTest);

  const daysDetails = createCalendar(Object.keys(riskTest));

  const today = moment().format(todayFormat);

  const _12HoursAgo = moment().subtract(12, 'h');

  const riskFilledToday = daysDetails
    .map(value => moment.unix(value.timestamp))
    .find(value => _12HoursAgo.diff(value) <= 0);

  const goToDiagnosis = () => {
    if (riskFilledToday) {
      return;
    }
    history.push('/diagnosis');
  };

  const goToHistory = timestamp => history.push(`/risk-test-data/${timestamp}`);

  return (
    <RiskTest
      previousDays={daysDetails}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
      isFilledToday={!!riskFilledToday}
      today={today}
    />
  );
};

export default RiskTestContainer;
