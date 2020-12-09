import React from 'react';
import { always, cond, equals } from 'ramda';
import { ACTIVITY_TYPE as TYPE } from '../../../../constants';
import { T } from '../../../../components';

import { ReactComponent as Icon3 } from '../../../../assets/img/icons/activities-icon-3.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/icons/activities-icon-2.svg';
import { ReactComponent as Icon1 } from '../../../../assets/img/icons/activities-icon-1.svg';
import { ContentRiskCheck } from './components';

export const resolveDatas = (content, riskChecks, riskLevel, title, type) => {
  const resoleRiskLevel = cond([
    [
      equals(1),
      always({
        title: <T i18nKey="history_notifications_text_10" />,
        content: <T i18nKey="history_notifications_text_14" />
      })
    ],
    [
      equals(2),
      always({
        title: <T i18nKey="history_notifications_text_9" />,
        content: <T i18nKey="history_notifications_text_13" />
      })
    ],
    [
      equals(3),
      always({
        title: <T i18nKey="history_notifications_text_8" />,
        content: <T i18nKey="history_notifications_text_12" />
      })
    ]
  ]);

  switch (type) {
    case TYPE.NOTIFICATION: {
      return { icon: <Icon3 />, content, title };
    }
    case TYPE.RISK_CHECK: {
      return {
        content: <ContentRiskCheck data={riskChecks} />,
        icon: <Icon2 />,
        title: <T i18nKey="history_notifications_text_11" />
      };
    }
    case TYPE.EXPOSURE: {
      return { icon: <Icon1 />, ...resoleRiskLevel(riskLevel) };
    }
    default: {
      return null;
    }
  }
};
