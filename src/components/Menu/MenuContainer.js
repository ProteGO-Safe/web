import React from 'react';
import Routes from '../../routes';
import Menu from './Menu';
import useMenuContext from '../../hooks/useMenuContext';

import Icon1 from '../../assets/img/icons/menu-boczne-dziennik_BLUE.svg';
import Icon2 from '../../assets/img/icons/menu-boczne-kwestionariusz_BLUE.svg';
import Icon3 from '../../assets/img/icons/menu-boczne-polityka-prywatnosci_BLUE.svg';
import Icon4 from '../../assets/img/icons/menu-boczne-ustawienia_BLUE.svg';
import Icon5 from '../../assets/img/icons/menu-boczne-moje-dane_BLUE.svg';
import Icon6 from '../../assets/img/icons/menu-boczne-kwestionariusz_RED.svg';

const MenuContainer = () => {
  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const items = [
    {
      icon: Icon1,
      color: 'blue',
      path: Routes.Daily,
      slug: 'menu_container_text1',
      title: 'menu_container_text1'
    },
    {
      icon: Icon2,
      color: 'blue',
      path: Routes.RiskTest,
      slug: 'menu_container_text2',
      title: 'menu_container_text2'
    },
    {
      icon: Icon3,
      color: 'blue',
      path: Routes.PrivacyPolicy,
      slug: 'menu_container_text6',
      title: 'menu_container_text6'
    },
    {
      icon: Icon4,
      color: 'blue',
      path: Routes.Settings,
      slug: 'menu_container_text7',
      title: 'menu_container_text7'
    },
    {
      icon: Icon5,
      color: 'blue',
      path: Routes.UserData,
      slug: 'menu_container_text8',
      title: 'menu_container_text8'
    },
    {
      icon: Icon6,
      color: 'blue',
      path: Routes.UserData, // TODO: adding logic
      invisible: true, // TODO: adding logic
      slug: 'menu_container_text10',
      title: 'menu_container_text10'
    }
  ];

  return <Menu items={items} />;
};

export default MenuContainer;
