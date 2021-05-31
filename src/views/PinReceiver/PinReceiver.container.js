import React from 'react';
import { withTranslation } from 'react-i18next';
import PinReceiver from './PinReceiver';
import nativeBridge from '../../services/nativeBridge';

const PinReceiverContainer = () => {
  const onClickButton = () => {
    // todo https://kyotu.atlassian.net/browse/PSAFE-3710
    nativeBridge.sendSms('', '');
  };

  return <PinReceiver onClickButton={onClickButton} />;
};

export default withTranslation()(PinReceiverContainer);
