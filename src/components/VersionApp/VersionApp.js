import React from 'react';
import { useSelector } from 'react-redux';
import { Version, VersionAppWrapper } from './VersionApp.styled';
import { T } from '../index';

const VersionApp = () => {
  const { version } = useSelector(state => state.nativeData);
  return (
    <VersionAppWrapper>
      <Version>
        <T i18nKey="version_app_text1" />:{version}
      </Version>
    </VersionAppWrapper>
  );
};

export default VersionApp;
