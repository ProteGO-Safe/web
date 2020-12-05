import React from 'react';
import { DATA } from './HistoryNotifications.helpers';
import HistoryNotifications from './HistoryNotifications';

const HistoryNotificationsContainer = () => {
  const showMarkAllRead = DATA.some(item => item.isRead === false);

  return <HistoryNotifications handleMarkAllRead={() => null} isMarkAllReadVisible={showMarkAllRead} items={DATA} />;
};

export default HistoryNotificationsContainer;
