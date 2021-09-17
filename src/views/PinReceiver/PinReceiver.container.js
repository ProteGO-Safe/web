import React from 'react';
import { withTranslation } from 'react-i18next';
import PinReceiver from './PinReceiver';
import nativeBridge from '../../services/nativeBridge';

const PinReceiverContainer = () => {
  const onClickButton = () => {
    nativeBridge.sendSms('538400500', 'PINstopcovid');
  };

  return <PinReceiver onClickButton={onClickButton} />;
};

export default withTranslation()(PinReceiverContainer);
