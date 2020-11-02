import React from 'react';
import { Layout } from '../../components';
import InfoLabTest from './InfoLabTest';

const InfoLabTestContainer = () => {
  return (
    <Layout isNavigation hideBackButton fullHeight noPadding>
      <InfoLabTest handleClickYes={() => null} handleClickCancel={() => null} />
    </Layout>
  );
};

export default InfoLabTestContainer;
