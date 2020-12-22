import React from 'react';
import InstallKwarantannaActionButton from './InstallKwarantannaActionButton';
import { isIOSWebView } from '../../../../../../utils/native';

const InstallKwarantannaActionButtonContainer = () => {
  const resolveUrl = () => {
    if (isIOSWebView()) {
      return 'https://apps.apple.com/pl/app/kwarantanna-domowa/id1502997499?l=pl';
    }

    return 'https://play.google.com/store/apps/details?id=pl.nask.droid.kwarantannadomowa';
  };

  return <InstallKwarantannaActionButton path={resolveUrl()} />;
};

export default InstallKwarantannaActionButtonContainer;
