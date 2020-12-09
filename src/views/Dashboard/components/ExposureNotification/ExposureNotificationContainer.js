import React, { useState } from 'react';
import { T } from '../../../../components';
import { Color } from '../../../../theme/colors';
import { Routes } from '../../../../services/navigationService/routes';
import ExposureNotification from './ExposureNotification';

const ExposureNotificationContainer = ({ isEnActive }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(prev => !prev);

  const color = isEnActive ? Color.green_1 : Color.red;

  return (
    <ExposureNotification
      active={isEnActive}
      color={color}
      handleDisable={() => null}
      pathToEnable={Routes.HowItWorks}
      handleToggleButton={handleOpen}
      keys={<T i18nKey="exposure_notification_text_4" variables={{ keys: 8000 }} />}
      open={open}
    />
  );
};

export default ExposureNotificationContainer;
