import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Daily from './Daily';

const todayFormat = 'D-MM-YYYY';
const dayWeekFormat = 'dddd';
const dateFormat = 'D-MM-YYYY HH:mm';

const DailyContainer = () => {
  const history = useHistory();
  const daily = useSelector(state => state.daily);

  const descending = (a, b) => b - a;

  const daysInDaily = Object.keys(daily)
    .sort(descending)
    .map(_timestamp => {
      return {
        timestamp: _timestamp,
        dayWeek: moment.unix(_timestamp).format(dayWeekFormat),
        day: moment.unix(_timestamp).format(dateFormat)
      };
    });

  const today = moment().format(todayFormat);

  const fill = () => history.push('/daily-data');

  const goToHome = () => history.push('/');

  const goToHistory = timestamp => history.push(`/daily/${timestamp}`);

  return (
    <Daily
      previousDays={daysInDaily}
      onFill={fill}
      onBack={goToHome}
      goToHistory={goToHistory}
      today={today}
    />
  );
};

export default DailyContainer;
