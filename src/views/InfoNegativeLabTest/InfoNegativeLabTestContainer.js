import React from 'react';
import { Layout } from '../../components';
import InfoNegativeLabTest from './InfoNegativeLabTest';
import useNavigation from '../../hooks/useNavigation';
import { Routes } from '../../services/navigationService/routes';

const InfoNegativeLabTestContainer = () => {
  const { goTo, gotToWithHomeAsBack } = useNavigation();
  return (
    <Layout isNavigation hideBackButton fullHeight noPadding>
      <InfoNegativeLabTest
        handleClickYes={() => gotToWithHomeAsBack(Routes.Diagnosis)}
        handleClickCancel={() => goTo(Routes.Home)}
      />
    </Layout>
  );
};

export default InfoNegativeLabTestContainer;
