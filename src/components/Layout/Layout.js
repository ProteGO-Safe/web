import React from 'react';
import { BottomNavigation, GovFooter, Header } from '../index';
import * as Styled from './Layout.styled';

const Layout = ({
  children,
  fullHeight,
  hideBackButton,
  noMargin,
  noPadding,
  onBackClick,
  isNavigation,
  isGovFooter
}) => (
  <Styled.Layout>
    <Header hideBackButton={hideBackButton} onBackClick={onBackClick} />
    <Styled.Container
      noMargin={noMargin}
      noPadding={noPadding}
      fullHeight={fullHeight}
    >
      {children}
    </Styled.Container>
    {isNavigation && <BottomNavigation />}
    {isGovFooter && <GovFooter type="black" />}
  </Styled.Layout>
);

export default Layout;
