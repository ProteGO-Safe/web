import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Version, VersionAppWrapper } from './VersionApp.styled';

const VersionApp = ({ t }) => {
  const { version } = useSelector(state => state.nativeData);
  return (
    <VersionAppWrapper>
      <Version>
        `${t('version_app_text1')}:${version}`
      </Version>
    </VersionAppWrapper>
  );
};

export default withTranslation()(VersionApp);
