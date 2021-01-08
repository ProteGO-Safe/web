import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HistoryActivities from './HistoryActivities';
import { listActivities } from '../../store/selectors/activities';
import { markAllActivitiesAsRead } from '../../store/actions/activities';

const HistoryActivitiesContainer = () => {
  const dispatch = useDispatch();
  const activities = useSelector(listActivities);

  const isMarkAllReadVisible = activities.some(item => item.isRead === false);

  return (
    <HistoryActivities
      handleMarkAllRead={() => dispatch(markAllActivitiesAsRead())}
      isMarkAllReadVisible={isMarkAllReadVisible}
      items={activities}
    />
  );
};

export default HistoryActivitiesContainer;
