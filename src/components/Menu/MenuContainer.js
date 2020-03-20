import React from 'react';

import Icon1 from '../../assets/img/icons/001-care.svg';
import Icon2 from '../../assets/img/icons/002-laptop.svg';
import Icon3 from '../../assets/img/icons/003-idea.svg';
import Icon4 from '../../assets/img/icons/004-group.svg';
import Icon5 from '../../assets/img/icons/005-panel.svg';
import Icon6 from '../../assets/img/icons/006-idea-1.svg';
import Icon7 from '../../assets/img/icons/007-contract.svg';
import Icon8 from '../../assets/img/icons/008-settings.svg';

import Menu from './Menu';
import useMenuContext from '../../hooks/useMenuContext';

const MenuContainer = () => {
  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const userName = 'Mateusz';

  const items = [
    {
      icon: Icon1,
      path: '',
      slug: 'moje_zdrowie',
      title: 'Moje zdrowie'
    },
    {
      icon: Icon2,
      path: '',
      slug: 'dziennik',
      title: 'Dziennik'
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
      icon: Icon8,
      path: '',
      slug: 'ustawienia',
      title: 'Ustawienia'
    }
  ];

  return <Menu items={items} userName={userName} />;
};

export default MenuContainer;
