import React from 'react';
import { useSelector } from 'react-redux';
import { Version, VersionAppWrapper } from './VersionApp.styled';

const VersionApp = () => {
  const { version } = useSelector(state => state.nativeData);
  return (
    <VersionAppWrapper>
      <Version>wersja: {version}</Version>
    </VersionAppWrapper>
  );
};

export default VersionApp;
