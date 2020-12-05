import React, { useState } from 'react';
import HistoryNotificationsItem from './HistoryNotificationsItem';
import useLanguage from '../../../../hooks/useLanguage';
import { ContentRiskCheck } from './components';
import { Color } from '../../../../theme/colors';
import { renderIcon } from '../../HistoryNotifications.helpers';

const HistoryNotificationsItemContainer = ({ riskLevel, title, type, timestamp, isRead, riskChecks, content }) => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  const date = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(timestamp);

  const color = riskLevel === 3 ? Color.red : Color.primary;
  const icon = renderIcon(type);

  return (
    <HistoryNotificationsItem
      open={open}
      onClick={handleOpen}
      icon={icon}
      title={title}
      date={date}
      isRead={isRead}
      color={color}
    >
      {riskChecks.length > 0 ? <ContentRiskCheck data={riskChecks} /> : content}
    </HistoryNotificationsItem>
  );
};

export default HistoryNotificationsItemContainer;
