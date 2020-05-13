import React from 'react';
import PropTypes from 'prop-types';
import { Version, VersionAppWrapper } from './VersionApp.styled';

const VersionApp = ({ version }) => {
  return (
    <VersionAppWrapper>
      <Version>wersja: {version}</Version>
    </VersionAppWrapper>
  );
};

VersionApp.propTypes = {
  version: PropTypes.string.isRequired
};

export default VersionApp;
