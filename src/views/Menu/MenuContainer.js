import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from '../../services/navigationService/routes';
import { fetchLabTestSubscription } from '../../store/actions/nativeData';
import { Layout, VersionApp } from '../../components';
import useLabTest from '../../hooks/useLabTest';
import Menu from './Menu';

import { ReactComponent as Icon1 } from '../../assets/img/icons/menu-boczne-dziennik_BLUE.svg';
import { ReactComponent as Icon2 } from '../../assets/img/icons/menu-boczne-kwestionariusz_BLUE.svg';
import { ReactComponent as Icon3 } from '../../assets/img/icons/menu-boczne-polityka-prywatnosci_BLUE.svg';
import { ReactComponent as Icon4 } from '../../assets/img/icons/menu-boczne-ustawienia_BLUE.svg';
import { ReactComponent as Icon5 } from '../../assets/img/icons/menu-boczne-moje-dane_BLUE.svg';
import { ReactComponent as Icon6 } from '../../assets/img/icons/menu-boczne-kwestionariusz_RED.svg';

const MenuContainer = () => {
  const dispatch = useDispatch();
  const { isSubscriptionInProgress } = useLabTest();

  useEffect(() => {
    dispatch(fetchLabTestSubscription());
    // eslint-disable-next-line
  }, []);

  const items = [
    {
      icon: <Icon1 />,
      path: Routes.Daily,
      slug: 'menu_container_text1',
      title: 'menu_container_text1'
    },
    {
      icon: <Icon2 />,
      path: Routes.RiskTest,
      slug: 'menu_container_text2',
      title: 'menu_container_text2'
    },
    {
      icon: <Icon3 />,
      path: Routes.PrivacyPolicy,
      slug: 'menu_container_text6',
      title: 'menu_container_text6'
    },
    {
      icon: <Icon4 />,
      path: Routes.Settings,
      slug: 'menu_container_text7',
      title: 'menu_container_text7'
    },
    {
      icon: <Icon5 />,
      path: Routes.UserData,
      slug: 'menu_container_text8',
      title: 'menu_container_text8'
    },
    {
      icon: <Icon6 />,
      path: Routes.LabTest,
      invisible: isSubscriptionInProgress,
      slug: 'menu_container_text10',
      title: 'menu_container_text10'
    }
  ];

  return (
    <Layout hideBackButton isNavigation noMargin noPadding fullHeight>
      <Menu items={items} />
      <VersionApp />
    </Layout>
  );
};

export default MenuContainer;
