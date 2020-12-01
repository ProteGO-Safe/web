import React from 'react';
import { Warning, T } from '../../../../components';
import { Color } from '../../../../theme/colors';

const ExposureNotificationWarning = ({ enableServices }) => {
  return (
    <Warning
      arrow
      onClick={enableServices}
      colorFont={Color.primary}
      status="error"
      title={<T i18nKey="exposure_notification_warning_text1" />}
      content={<T i18nKey="exposure_notification_warning_text2" />}
    />
  );
};

export default ExposureNotificationWarning;
