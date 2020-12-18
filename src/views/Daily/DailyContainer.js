import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { createDaysDetails } from '../../utils/calendar';
import Daily from './Daily';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const todayFormat = 'D.MM.YYYY';
const dateFormat = 'HH:mm, D.MM.YYYY';

const DailyContainer = () => {
  const { goTo } = useNavigation();
  const daily = useSelector(state => state.daily);

  const daysInDaily = createDaysDetails(Object.entries(daily), dateFormat);

  const today = moment().format(todayFormat);

  const fill = () => goTo(Routes.DailyData);

  const goToHistory = timestamp => goTo(Routes.DailyData, { id: timestamp });

  return <Daily previousDays={daysInDaily} onFill={fill} goToHistory={goToHistory} today={today} />;
};

export default DailyContainer;
