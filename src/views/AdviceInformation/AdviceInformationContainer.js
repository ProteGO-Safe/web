import React from 'react';
import { Layout } from '../../components';
import AdviceInformation from './AdviceInformation';
import advicesData from './advices.json';

const AdviceInformationContainer = () => {
  if (!advicesData) {
    return null;
  }
  const { advices, watermark } = advicesData;

  return (
    <Layout hideBackButton isNavigation>
      <AdviceInformation
        collapse={advices}
        watermark={watermark}
      />
    </Layout>
  );
};

export default AdviceInformationContainer;
