import React from 'react';

import { isAndroidWebView, isIOSWebView } from '../../utils/native';
import NotSupported from './NotSupported';

const NotSupportedContainer = () => {
  if (isAndroidWebView()) {
    return <NotSupported url="https://play.google.com/store/apps/details?id=pl.gov.mc.protegosafe" />;
  }
  if (isIOSWebView()) {
    return <NotSupported url="https://apps.apple.com/pl/app/protego-safe/id1508481566" />;
  }
  return null;
};

export default NotSupportedContainer;
