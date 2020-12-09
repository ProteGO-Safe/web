import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import HistoryActivitiesItem from './HistoryActivitiesItem';
import { Color } from '../../../../theme/colors';
import { resolveDatas } from './HistoryActivitiesItem.helpers';
import { markActivityAsRead } from '../../../../store/actions/activities';
import { getFormattedDate } from '../../../../utils/date';

const HistoryActivitiesItemContainer = ({ riskLevel, title, type, timestamp, isRead, riskChecks, content, id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(prev => !prev);
    if (!isRead) {
      dispatch(markActivityAsRead(id));
    }
  };

  const color = riskLevel === 3 ? Color.red : Color.primary;
  const data = resolveDatas(content, riskChecks, riskLevel, title, type);

  return (
    <HistoryActivitiesItem
      open={open}
      onClick={handleOpen}
      icon={data.icon}
      title={data.title}
      date={getFormattedDate(timestamp)}
      isRead={isRead}
      color={color}
    >
      {data.content}
    </HistoryActivitiesItem>
  );
};

export default HistoryActivitiesItemContainer;
