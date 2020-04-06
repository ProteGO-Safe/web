import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import createDaysDetails from '../../utills/calendar';
import Daily from './Daily';
import Routes from '../../routes';

const todayFormat = 'D-MM-YYYY';

const DailyContainer = () => {
  const history = useHistory();
  const daily = useSelector(state => state.daily);

  const daysInDaily = createDaysDetails(Object.keys(daily));

  const today = moment().format(todayFormat);

  const fill = () => history.push('/daily-data');

  const goBack = () => history.push(Routes.Home);

  const goToHistory = timestamp => history.push(`/daily/${timestamp}`);

  return (
    <Daily
      previousDays={daysInDaily}
      onBack={goBack}
      onFill={fill}
      goToHistory={goToHistory}
      today={today}
    />
  );
};

export default DailyContainer;
