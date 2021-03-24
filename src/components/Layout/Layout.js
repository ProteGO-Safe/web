import React from 'react';
import { BottomNavigation, GovFooter, Header } from '../index';
import * as Styled from './Layout.styled';

const Layout = ({
  children,
  fullHeight,
  hideBackButton,
  hideBell,
  id,
  isGovFooter,
  isNavigation,
  logoText,
  noMargin,
  noPadding,
  onBackClick
}) => (
  <Styled.Layout data-cy={id}>
    <Header hideBackButton={hideBackButton} logoText={logoText} onBackClick={onBackClick} hideBell={hideBell} />
    <Styled.Container noMargin={noMargin} noPadding={noPadding} fullHeight={fullHeight}>
      {children}
    </Styled.Container>
    {isNavigation && <BottomNavigation />}
    {isGovFooter && <GovFooter type="black" />}
  </Styled.Layout>
);

export default Layout;
