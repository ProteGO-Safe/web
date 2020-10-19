import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import { ImportantInfoItem } from './components';
import { getFontScale } from '../../store/selectors/app';
import * as Styled from './ImportantInfo.styled';

const ImportantInfo = ({ items }) => {
  const fontScale = useSelector(getFontScale);
  const windowWidth = window.innerWidth;

  const changeView = windowWidth < 375 || fontScale > 1;

  const stylesScrollbar = {
    width: '100%',
    height: '100%'
  };

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
        size={changeView}
      />
    );
  });

  return (
    <Layout isNavigation noMargin noPadding>
      <Styled.Container change={changeView}>
        {changeView ? (
          <Scrollbar scrollbarWidth={6} style={stylesScrollbar}>
            {renderItems}
          </Scrollbar>
        ) : (
          renderItems
        )}
      </Styled.Container>
    </Layout>
  );
};

export default ImportantInfo;
