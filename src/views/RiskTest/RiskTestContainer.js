import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import createCalendar from '../../utills/calendar';
import RiskTest from './RiskTest';
import Routes from '../../routes';

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

  const goBack = () => history.push(Routes.Home);

  return (
    <RiskTest
      previousDays={daysDetails}
      onBack={goBack}
      onFill={goToDiagnosis}
      goToHistory={goToHistory}
      isFilledToday={!!riskFilledToday}
      today={today}
    />
  );
};

export default RiskTestContainer;
