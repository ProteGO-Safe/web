import React from 'react';
import Routes from '../../routes';
import Menu from './Menu';
import useMenuContext from '../../hooks/useMenuContext';

import Icon1 from '../../assets/img/icons/menu-boczne-dziennik_BLUE.svg';
import Icon2 from '../../assets/img/icons/menu-boczne-kwestionariusz_BLUE.svg';
import Icon3 from '../../assets/img/icons/menu-boczne-jak-to-dziala_BLUE.svg';
import Icon4 from '../../assets/img/icons/menu-boczne-zle-sie-czuje_BLUE.svg';
import Icon5 from '../../assets/img/icons/menu-boczne-numery-alarm_BLUE.svg';
import Icon6 from '../../assets/img/icons/menu-boczne-polityka-prywatnosci_BLUE.svg';
import Icon7 from '../../assets/img/icons/menu-boczne-ustawienia_BLUE.svg';
import Icon8 from '../../assets/img/icons/menu-boczne-moje-dane_BLUE.svg';
import Icon9 from '../../assets/img/icons/menu-boczne-zglos-blad_BLUE.svg';

const MenuContainer = () => {
  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const items = [
    {
      icon: Icon1,
      path: Routes.Daily,
      slug: 'menu_container_text1',
      title: 'menu_container_text1'
    },
    {
      icon: Icon2,
      path: Routes.RiskTest,
      slug: 'menu_container_text2',
      title: 'menu_container_text2'
    },
    {
      icon: Icon3,
      path: Routes.HowItWorks,
      slug: 'menu_container_text3',
      title: 'menu_container_text3'
    },
    {
      icon: Icon4,
      path: Routes.IAmSick,
      slug: 'menu_container_text4',
      title: 'menu_container_text4'
    },
    {
      icon: Icon5,
      path: Routes.EmergencyNumbers,
      slug: 'menu_container_text5',
      title: 'menu_container_text5'
    },
    {
      icon: Icon6,
      path: Routes.PrivacyPolicy,
      slug: 'menu_container_text6',
      title: 'menu_container_text6'
    },
    {
      icon: Icon7,
      path: Routes.Settings,
      slug: 'menu_container_text7',
      title: 'menu_container_text7'
    },
    {
      icon: Icon8,
      path: Routes.UserData,
      slug: 'menu_container_text8',
      title: 'menu_container_text8'
    },
    {
      icon: Icon9,
      path: Routes.ReportBug,
      slug: 'menu_container_text9',
      title: 'menu_container_text9'
    }
  ];

  return <Menu items={items} />;
};

export default MenuContainer;
