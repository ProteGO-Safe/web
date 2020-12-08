import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { T } from '../../../../components';
import { Color } from '../../../../theme/colors';
import { Routes } from '../../../../services/navigationService/routes';
import ExposureNotification from './ExposureNotification';

const ExposureNotificationContainer = ({ enableServices, t }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  const color = enableServices ? Color.green_1 : Color.red;
  const text = enableServices ? t('exposure_notification_text_2') : t('exposure_notification_text_3');

  return (
    <ExposureNotification
      active={enableServices}
      color={color}
      description={<T i18nKey="exposure_notification_text_8" />}
      handleDisable={() => null}
      handleEnable={Routes.HowItWorks}
      handleToggleButton={handleOpen}
      keys={<T i18nKey="exposure_notification_text_4" variables={{ keys: 8000 }} />}
      labelDisable={<T i18nKey="exposure_notification_text_9" />}
      labelEnable={<T i18nKey="exposure_notification_text_5" />}
      open={open}
      title={<T i18nKey="exposure_notification_text_1" variables={{ color, text }} />}
    />
  );
};

export default withTranslation()(ExposureNotificationContainer);
