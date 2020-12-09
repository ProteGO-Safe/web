import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Bell from './Bell';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import { listActivities } from '../../store/selectors/activities';

const BellContainer = () => {
  const { goTo, route } = useNavigation();
  const [active, setActive] = useState(false);
  const activities = useSelector(listActivities);

  const unreadNumber = activities.filter(({ isRead }) => !isRead).length;

  useEffect(() => {
    setActive(route === Routes.HistoryActivities);
  }, [route]);

  return <Bell active={active} handleClick={() => goTo(Routes.HistoryActivities)} badge={unreadNumber} />;
};

export default BellContainer;
