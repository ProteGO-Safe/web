import React from 'react';
import { useSelector } from 'react-redux';
import packageJson from '../../../package.json';
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

import Routes from '../../routes';
import { isVersionCompatibilityWithBluetoothModule } from '../../utils/version';

const MenuContainer = () => {
  const { servicesStatus } = useSelector(state => state.nativeData);
  const { visible } = useMenuContext();

  if (!visible) {
    return null;
  }

  const items = [
    {
      icon: Icon1,
      path: Routes.Daily,
      slug: 'dziennik',
      title: 'Dziennik zdrowia'
    },
    {
      icon: Icon2,
      path: Routes.RiskTest,
      slug: 'test_oceny_ryzyka',
      title: 'Test oceny ryzyka'
    },
    {
      icon: Icon3,
      path: Routes.HowItWorks,
      slug: 'jak_to_dziala',
      title: 'Jak to działa?'
    },
    {
      icon: Icon4,
      path: Routes.IAmSick,
      slug: 'co_zrobic',
      title: 'Czuję się źle, co zrobić?'
    },
    {
      icon: Icon5,
      path: Routes.EmergencyNumbers,
      slug: 'numery_alarmowe',
      title: 'Numery alarmowe'
    },
    {
      icon: Icon6,
      path: Routes.PrivacyPolicy,
      slug: 'regulamin_i_polityka_prywatności',
      title: 'Regulamin i Polityka prywatności'
    },
    {
      icon: Icon7,
      path: Routes.Settings,
      slug: 'ustawienia',
      title: 'Ustawienia',
      disable: !isVersionCompatibilityWithBluetoothModule(servicesStatus)
    },
    {
      icon: Icon8,
      path: Routes.UserData,
      slug: 'moje_dane',
      title: 'Moje dane'
    },
    {
      icon: Icon9,
      path: Routes.ReportBug,
      slug: 'zglos_blad',
      title: 'Zgłoś błąd'
    }
  ];

  return <Menu items={items} version={packageJson.version} />;
};

export default MenuContainer;
