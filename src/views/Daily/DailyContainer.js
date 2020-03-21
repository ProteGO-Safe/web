import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Daily from './Daily';
import createCalendar from '../../utills/calendar';

const DailyContainer = () => {
  const history = useHistory();
  const [isFilled, setIsFilled] = useState(false);
  const daily = useSelector(state => state.daily);

  const daysInDaily = Object.keys(daily).map(timestamp =>
    moment.unix(timestamp)
  );

  const calendar = createCalendar(daysInDaily);

  const _24HoursAgo = moment().subtract(24, 'h');

  const dailyFilledToday = daysInDaily.find(
    value => _24HoursAgo.diff(value) <= 0
  );

  const fill = () => {
    if (dailyFilledToday) {
      setIsFilled(true);
      return;
    }

    history.push('/daily-data');
  };

  const goToHome = () => history.push('/');

  const goToHistory = timestamp => history.push(`/daily/${timestamp}`);

  if (isFilled && dailyFilledToday) {
    const timestamp = dailyFilledToday.unix();
    goToHistory(timestamp);
  }

  return (
    <Daily
      calendar={calendar}
      onFill={fill}
      onBack={goToHome}
      goToHistory={goToHistory}
      isFilledToday={!!dailyFilledToday}
    />
  );
};

export default DailyContainer;
