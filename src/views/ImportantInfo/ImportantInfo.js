import React from 'react';
import { Layout } from '../../components';
import { ImportantInfoItem } from './components';
import * as Styled from './ImportantInfo.styled';

const ImportantInfo = ({ items }) => {
  const renderItems = items.map(item => {
    const { danger, description, icon, link, path, title, type } = item;
    return (
      <ImportantInfoItem
        key={title}
        danger={danger}
        description={description}
        icon={icon}
        link={link}
        path={path}
        title={title}
        type={type}
      />
    );
  });

  return (
    <Layout isNavigation noMargin noPadding>
      <Styled.Container>{renderItems}</Styled.Container>
    </Layout>
  );
};

export default ImportantInfo;
