import Routes from '../../routes';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Home-white.svg';
import { ReactComponent as FAQIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-FAQ-white.svg';
import { ReactComponent as InfoIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Info-white.svg';
import { ReactComponent as BurgerIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-More-white.svg';

export const HomeItem = {
  id: 'home',
  label: 'Home',
  Icon: HomeIcon,
  path: Routes.Home
};

export const InfoItem = {
  id: 'porady',
  label: 'Porady',
  Icon: InfoIcon,
  path: Routes.AdviceInformation
};

export const FAQItem = {
  id: 'questions',
  label: 'Pytania i odp.',
  Icon: FAQIcon,
  path: Routes.FaqPage
};

export const BurgerItem = {
  id: 'nav_menu_button',
  label: 'Więcej',
  Icon: BurgerIcon,
  openMenu: true
};

export const menuItems = [HomeItem, InfoItem, FAQItem, BurgerItem];
