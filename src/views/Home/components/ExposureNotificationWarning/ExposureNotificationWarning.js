import React from 'react';
import { Warning } from '../../../../components';
import { Color } from '../../../../theme/colors';

const ExposureNotificationWarning = ({ enableServices }) => {
  return (
    <Warning
      arrow
      onClick={enableServices}
      colorFont={Color.secondary}
      status="error"
      title="Powiadamianie o możliwym kontakcie z koronawirusem jest wyłączone"
      content="Kliknij, aby włączyć monitorowanie ryzyka"
    />
  );
};

export { ExposureNotificationWarning };
