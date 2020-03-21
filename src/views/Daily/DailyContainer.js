import React from 'react';
import { useHistory } from 'react-router-dom';

import Daily from './Daily';
import createCalendar from '../../utills/calendar';

const DailyContainer = () => {
  const history = useHistory();

  const filledDays = [];
  const calendar = createCalendar(filledDays);

  const fill = () => history.push('/daily-data');

  const goToHome = () => history.push('/');

  return <Daily calendar={calendar} onFill={fill} onBack={goToHome} />;
};

export default DailyContainer;
