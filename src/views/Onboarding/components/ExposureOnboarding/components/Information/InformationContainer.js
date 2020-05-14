import React, { useState } from 'react';
import Information from './Information';
import { MoreInformation } from './components/MoreInformation';

const InformationContainer = ({ onNext }) => {
  const [isMoreInformationShowed, setIsMoreInformationShowed] = useState(false);

  if (isMoreInformationShowed) {
    return <MoreInformation onNext={onNext} />;
  }

  return (
    <Information
      onNext={onNext}
      onMore={() => setIsMoreInformationShowed(true)}
    />
  );
};

export default InformationContainer;
