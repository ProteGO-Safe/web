import React from 'react';
import MoreInformation from './MoreInformation';
import useTriage from '../../../../hooks/useTriage';

const MoreInformationContainer = () => {
  const { isExposure = false } = useTriage();
  if (isExposure) {
    return null;
  }
  return <MoreInformation />;
};

export default MoreInformationContainer;
