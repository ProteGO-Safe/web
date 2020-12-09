import React from 'react';
import { useSelector } from 'react-redux';
import HistoryActivities from './HistoryActivities';
import { listActivities } from '../../store/selectors/activities';

const HistoryActivitiesContainer = () => {
  const activities = useSelector(listActivities);

  const isMarkAllReadVisible = activities.some(item => item.isRead === false);

  return (
    <HistoryActivities handleMarkAllRead={() => null} isMarkAllReadVisible={isMarkAllReadVisible} items={activities} />
  );
};

export default HistoryActivitiesContainer;
