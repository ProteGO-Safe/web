import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bell from './Bell';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';
import { listActivities } from '../../store/selectors/activities';
import { fetchActivities } from '../../store/actions/activities';

const BellContainer = () => {
  const dispatch = useDispatch();
  const { goTo, route } = useNavigation();
  const [active, setActive] = useState(false);

  const activities = useSelector(listActivities);

  const unreadNumber = useMemo(() => activities.filter(({ isRead }) => !isRead).length, [activities]);

  useEffect(() => {
    dispatch(fetchActivities());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setActive(route === Routes.HistoryActivities);
  }, [route]);

  return <Bell active={active} handleClick={() => goTo(Routes.HistoryActivities)} badge={unreadNumber} />;
};

export default BellContainer;
