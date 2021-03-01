import React from 'react';
import { useSelector } from 'react-redux';
import { T } from '../index';
import * as Styled from './VersionApp.styled';

const VersionApp = () => {
  const { version } = useSelector(state => state.nativeData);

  return (
    <Styled.VersionAppWrapper>
      <Styled.Version>
        <T i18nKey="version_app_text1" />: {version}
      </Styled.Version>
    </Styled.VersionAppWrapper>
  );
};

export default VersionApp;
