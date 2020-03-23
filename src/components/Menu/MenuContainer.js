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

import Menu from './Menu';

const MenuContainer = () => {
  const userName = useSelector(state => state.user.name);

  const items = [
    {
      icon: Icon1,
      path: '/daily',
      slug: 'dziennik',
      title: 'Mój dziennik zdrowia'
    },
    {
      icon: Icon2,
      path: '/risk-test',
      slug: 'ankieta',
      title: 'Ankieta oceny ryzyka'
    },
    {
      icon: Icon3,
      path: '/how-it-works',
      slug: 'jak_to_dziala',
      title: 'Jak to działa?'
    },
    {
      icon: Icon4,
      path: '',
      slug: 'jak_sie_chronic',
      title: 'Jak się chronić?'
    },
    {
      icon: Icon5,
      path: '/numbers',
      slug: 'numery_alarmowe',
      title: 'Numery alarmowe'
    },
    {
      bold: true,
      bottom: true,
      icon: Icon6,
      path: '',
      slug: 'co_zrobic',
      title: 'Czuję się źle, co zrobić?'
    },
    {
      icon: Icon7,
      path: '/privacy-policy',
      slug: 'polityka_prywatnosci',
      title: 'Polityka prywatności'
    },
    {
      disable: true,
      icon: Icon8,
      path: '',
      slug: 'ustawienia',
      title: 'Ustawienia'
    }
  ];

  return <Menu items={items} userName={userName} />;
};

export default MenuContainer;
