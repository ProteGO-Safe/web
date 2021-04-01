import React from 'react';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import { ImportantInfoItem } from './components';
import { getFontScale } from '../../store/selectors/app';
import * as Styled from './ImportantInfo.styled';

const ImportantInfo = ({ items }) => {
  const fontScale = useSelector(getFontScale);
  const windowWidth = window.innerWidth;

  const changeView = windowWidth < 375 || fontScale > 1 ? 1 : 0;

  const renderItems = items.map((item, key) => {
    const { danger, description, icon, link, newFeature, path, title, type } = item;

    return (
      <ImportantInfoItem
        key={key}
        danger={danger}
        description={description}
        icon={icon}
        link={link}
        path={path}
        title={title}
        type={type}
        isSmallDevice={changeView}
        newFeature={newFeature}
      />
    );
  });

  return (
    <Layout isNavigation noMargin noPadding hideBackButton>
      <Styled.Container size={changeView}>{renderItems}</Styled.Container>
    </Layout>
  );
};

export default ImportantInfo;
