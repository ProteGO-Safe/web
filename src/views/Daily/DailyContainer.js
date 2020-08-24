import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { createDaysDetails } from '../../utils/calendar';
import Daily from './Daily';
import Routes from '../../routes';

const todayFormat = 'D-MM-YYYY';
const dateFormat = 'HH:mm D-MM-YYYY';

const DailyContainer = () => {
  const history = useHistory();
  const daily = useSelector(state => state.daily);

  const daysInDaily = createDaysDetails(Object.entries(daily), dateFormat);

  const today = moment().format(todayFormat);

  const fill = () => history.push(Routes.DailyData);

  const goToHistory = timestamp => history.push(`/daily/${timestamp}`);

  return (
    <Daily
      previousDays={daysInDaily}
      onFill={fill}
      goToHistory={goToHistory}
      today={today}
    />
  );
};

export default DailyContainer;
