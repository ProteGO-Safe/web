import React from 'react';
import { withTranslation } from 'react-i18next';
import { Warning } from '../../../../components';
import { Color } from '../../../../theme/colors';

const ExposureNotificationWarning = ({ t, enableServices }) => {
  return (
    <Warning
      arrow
      onClick={enableServices}
      colorFont={Color.secondary}
      status="error"
      title={t('exposure_notification_warning_text1')}
      content={t('exposure_notification_warning_text2')}
    />
  );
};

export default withTranslation()(ExposureNotificationWarning);
