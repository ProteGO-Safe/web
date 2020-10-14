import React from 'react';
import { useSelector } from 'react-redux';
import Scrollbar from 'react-scrollbars-custom';
import { getFontScale } from '../../store/selectors/app';
import { Layout } from '../../components';
import { ImportantInfoItem } from './components';
import * as Styled from './ImportantInfo.styled';

const ImportantInfo = ({ items }) => {
  const fontScale = useSelector(getFontScale);
  console.log(fontScale);

  const windowWidth = window.innerWidth;
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
      />
    );
  });

  return (
    <Layout isNavigation noMargin noPadding>
      font-scale: {fontScale}
      <Styled.Container>
        {windowWidth < 375 ? (
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
