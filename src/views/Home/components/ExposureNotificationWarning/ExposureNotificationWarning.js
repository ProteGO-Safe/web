import React from 'react';
import { Warning } from '../../../../components';

const ExposureNotificationWarning = ({ enableServices }) => {
  return (
    <Warning
      onClick={enableServices}
      status="error"
      title="Powiadamianie o narażeniu jest nieaktywne"
      content="Kliknij, aby włączyć powiadamianie o narażeniu na kontakt COVID-19"
    />
  );
};

export { ExposureNotificationWarning };
