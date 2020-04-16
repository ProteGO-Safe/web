import React from 'react';

import Icon1 from '../../assets/img/icons/001-care.svg';
import Icon2 from '../../assets/img/icons/002-laptop.svg';
import Icon3 from '../../assets/img/icons/003-idea.svg';
import Icon4 from '../../assets/img/icons/006-idea-1.svg';
import Icon5 from '../../assets/img/icons/menu-boczne-numery-alarm.svg';
import Icon6 from '../../assets/img/icons/007-contract.svg';
import Icon7 from '../../assets/img/icons/008-settings.svg';
import Icon8 from '../../assets/img/icons/009-gear.svg';
import Icon9 from '../../assets/img/icons/menu-boczne-moje-dane.svg';

import Menu from './Menu';
import useMenuContext from '../../hooks/useMenuContext';
import Routes from '../../routes';

const MenuContainer = () => {
  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const items = [
    {
      icon: Icon1,
      path: Routes.Daily,
      slug: 'dziennik',
      title: 'dziennik zdrowia'
    },
    {
      icon: Icon2,
      path: Routes.RiskTest,
      slug: 'ankieta',
      title: 'test oceny ryzyka'
    },
    {
      icon: Icon3,
      path: Routes.HowItWorks,
      slug: 'jak_to_dziala',
      title: 'jak to działa?'
    },
    {
      icon: Icon4,
      path: Routes.QuarantineInformation,
      slug: 'co_zrobic',
      title: 'czuję się źle, co zrobić?'
    },
    {
      icon: Icon5,
      path: Routes.EmergencyNumbers,
      slug: 'numery_alarmowe',
      title: 'numery alarmowe'
    },
    {
      icon: Icon6,
      path: Routes.PrivacyPolicy,
      slug: 'polityka_prywatnosci',
      title: 'polityka prywatności'
    },
    {
      disable: true,
      icon: Icon7,
      path: Routes.Settings,
      slug: 'ustawienia',
      title: 'ustawienia'
    },
    {
      icon: Icon8,
      path: Routes.ReportBug,
      slug: 'zglos_blad',
      title: 'zgłoś błąd'
    },
    {
      icon: Icon9,
      path: Routes.UserData,
      slug: 'moje_dane',
      title: 'moje dane'
    }
  ];

  return <Menu items={items} />;
};

export default MenuContainer;
