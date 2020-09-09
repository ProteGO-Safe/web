import React from 'react';
import { withTranslation } from 'react-i18next';
import { RegulationsContent } from './component/RegulationsContent';
import { Layout } from '../../components';
import { Title } from './Regulations.styled';

const Regulations = ({ t }) => {
  return (
    <Layout isNavigation>
      <Title>{t('regulations_text1')}</Title>
      <RegulationsContent />
    </Layout>
  );
};

export default withTranslation()(Regulations);
