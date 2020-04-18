import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Notification.scss';
import { hideNotification } from '../../store/actions/nativeData';
import Notification from './Notification';

const NotificationContainer = () => {
  const { notification } = useSelector(state => state.nativeData);
  const dispatch = useDispatch();

  const hide = () => {
    dispatch(hideNotification());
  };

  if (notification) {
    const { title, content, status } = notification;
    return (
      <Notification
        title={title}
        content={content}
        status={status}
        onClick={hide}
      />
    );
  }
  return null;
};

export default NotificationContainer;
