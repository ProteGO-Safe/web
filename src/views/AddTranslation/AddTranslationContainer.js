import React from 'react';
import { Layout } from '../../components';
import AddTranslation from './AddTranslation';
import Routes from '../../routes';

const AddTranslationContainer = () => (
  <Layout isNavigation>
    <AddTranslation path={Routes.Home} />
  </Layout>
);

export default AddTranslationContainer;
