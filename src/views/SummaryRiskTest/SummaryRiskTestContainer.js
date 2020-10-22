import React from 'react';
import { Layout } from '../../components';
import { DATA } from './SummaryRiskTest.helpers';
import SummaryRiskTest from './SummaryRiskTest';

const SummaryRiskTestContainer = () => {
  return (
    <Layout isNavigation noPadding fullHeight>
      <SummaryRiskTest data={DATA.TOR_RED_EN_RED} />
    </Layout>
  );
};

export default SummaryRiskTestContainer;
