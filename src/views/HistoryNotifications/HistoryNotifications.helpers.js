import React from 'react';
import { TYPE } from './HistoryNotifications.constants';

import { ReactComponent as Icon3 } from '../../assets/img/icons/notification-icon-3.svg';
import { ReactComponent as Icon2 } from '../../assets/img/icons/notification-icon-2.svg';
import { ReactComponent as Icon1 } from '../../assets/img/icons/notification-icon-1.svg';

export const renderIcon = type => {
  switch (type) {
    case TYPE.NOTIFICATIONS: {
      return <Icon3 />;
    }
    case TYPE.RISK_CHECKS: {
      return <Icon2 />;
    }
    case TYPE.EXPOSURES: {
      return <Icon1 />;
    }
    default: {
      return null;
    }
  }
};

export const DATA = [
  {
    id: 'notifications_1',
    isRead: true,
    title: 'Kontrola ryzyka infekcji koronawirusem',
    type: 'riskChecks',
    description: '',
    timestamp: 1370001284000, // risk check
    riskChecks: [
      {
        timestamp: 137000128400,
        keys: 12121,
        exposures: 1
      },
      {
        timestamp: 1370001284,
        keys: 21,
        exposures: 0
      }
    ],
    riskLevel: 0
  },
  {
    id: 'notifications_2',
    isRead: false,
    title: '',
    type: 'riskChecks',
    description: '',
    timestamp: 1370001284000, // risk check
    riskChecks: [
      {
        timestamp: 1270001223,
        keys: 12121,
        exposures: 0
      }
    ],
    riskLevel: 0
  },
  {
    id: 'notifications_4',
    isRead: false,
    title: '',
    type: 'exposures',
    description: '', // exposure
    timestamp: 1370001284000,
    riskChecks: [],
    riskLevel: 3
  },
  {
    id: 'notifications_3',
    isRead: false,
    title: 'asdasd',
    type: 'notifications',
    description: 'Dsdsdsdsddsdsdsdsds', // notyfiakcaj
    timestamp: 1370001284000,
    riskChecks: [],
    riskLevel: 0
  }
];
