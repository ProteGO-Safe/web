import React from 'react';

import { isAndroidWebView, isIOSWebView } from '../../utills/native';
import NotSupported from './NotSupported';

const NotSupportedContainer = () => {
  if (isAndroidWebView()) {
    return (
      <NotSupported
        date="09.06.2020"
        url="https://play.google.com/store/apps/details?id=pl.gov.mc.protegosafe"
      />
    );
  }
  if (isIOSWebView()) {
    return (
      <NotSupported
        date="15.06.2020"
        url="https://apps.apple.com/pl/app/protego-safe/id1508481566"
      />
    );
  }
  return null;
};

export default NotSupportedContainer;
