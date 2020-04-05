import React from 'react';

import { useSelector } from 'react-redux';
import Icon1 from '../../assets/img/icons/001-care.svg';
import Icon2 from '../../assets/img/icons/002-laptop.svg';
import Icon3 from '../../assets/img/icons/003-idea.svg';
import Icon4 from '../../assets/img/icons/004-group.svg';
import Icon5 from '../../assets/img/icons/005-panel.svg';
import Icon6 from '../../assets/img/icons/006-idea-1.svg';
import Icon7 from '../../assets/img/icons/007-contract.svg';
import Icon8 from '../../assets/img/icons/008-settings.svg';
import Icon9 from '../../assets/img/icons/Group 464__grey.svg';

import Menu from './Menu';
import useMenuContext from '../../hooks/useMenuContext';
import Routes from '../../routes';

const MenuContainer = () => {
  const userName = useSelector(state => state.user.name);

  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const items = [
    {
      icon: Icon1,
      path: Routes.Daily,
      slug: 'dziennik',
      title: 'Mój dziennik zdrowia'
    },
    {
      icon: Icon2,
      path: Routes.RiskTest,
      slug: 'ankieta',
      title: 'Ankieta oceny ryzyka'
    },
    {
      icon: Icon2,
      path: Routes.MatchedDevices,
      slug: 'devices',
      title: 'Spotkanie urządzenia'
    },
    {
      icon: Icon3,
      path: Routes.HowItWorks,
      slug: 'jak_to_dziala',
      title: 'Jak to działa?'
    },
    {
      icon: Icon4,
      path: Routes.NoRiskInformation,
      slug: 'jak_sie_chronic',
      title: 'Jak się chronić?'
    },
    {
      icon: Icon5,
      path: Routes.EmergencyNumbers,
      slug: 'numery_alarmowe',
      title: 'Numery alarmowe'
    },
    {
      bold: false,
      icon: Icon9,
      path: Routes.HospitalsList,
      slug: 'lista_szpitali',
      title: 'Szpitale zakaźne w Polsce'
    },
    {
      slug: 'empty_1'
    },
    {
      bold: true,
      icon: Icon6,
      path: Routes.QuarantineInformation,
      slug: 'co_zrobic',
      title: 'Czuję się źle, co zrobić?'
    },
    {
      icon: Icon7,
      path: Routes.PrivacyPolicy,
      slug: 'polityka_prywatnosci',
      title: 'Polityka prywatności'
    },
    {
      disable: true,
      icon: Icon8,
      path: Routes.Settings,
      slug: 'ustawienia',
      title: 'Ustawienia'
    }
  ];

  return <Menu items={items} userName={userName} />;
};

export default MenuContainer;
