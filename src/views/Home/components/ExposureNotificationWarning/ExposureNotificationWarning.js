import React from 'react';
import { Warning } from '../../../../components';

const ExposureNotificationWarning = ({ enableServices }) => {
  return (
    <Warning
      onClick={enableServices}
      status="error"
      title="Powiadamianie o możliwym kontakcie z koronawirusem jest nieaktywne"
      content="Kliknij, aby je włączyć."
    />
  );
};

export { ExposureNotificationWarning };
