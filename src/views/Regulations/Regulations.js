import React from 'react';
import { RegulationsContent } from './component/RegulationsContent';
import { Layout, T } from '../../components';
import { Title } from './Regulations.styled';

const Regulations = () => {
  return (
    <Layout isNavigation>
      <Title>
        <T i18nKey="regulations_text1" />
      </Title>
      <RegulationsContent />
    </Layout>
  );
};

export default Regulations;
