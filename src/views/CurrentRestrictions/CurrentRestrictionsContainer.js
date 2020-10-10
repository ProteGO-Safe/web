import React from 'react';
import CurrentRestrictions from './CurrentRestrictions';
import { Layout } from '../../components';

const CurrentRestrictionsContainer = () => {
  return (
    <Layout isNavigation noMargin>
      <CurrentRestrictions />
    </Layout>
  );
};

export default CurrentRestrictionsContainer;
