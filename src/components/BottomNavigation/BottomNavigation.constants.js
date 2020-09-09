import Routes from '../../routes';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Home-white.svg';
import { ReactComponent as FAQIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-FAQ-white.svg';
import { ReactComponent as InfoIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Info-white.svg';
import { ReactComponent as BurgerIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-More-white.svg';

export const HomeItem = {
  id: 'home',
  label: 'bottom_navigation_home',
  Icon: HomeIcon,
  path: Routes.Home
};

export const InfoItem = {
  id: 'porady',
  label: 'bottom_navigation_advice',
  Icon: InfoIcon,
  path: Routes.AdviceInformation
};

export const FAQItem = {
  id: 'questions',
  label: 'bottom_navigation_faq',
  Icon: FAQIcon,
  path: Routes.FaqPage
};

export const BurgerItem = {
  id: 'nav_menu_button',
  label: 'bottom_navigation_more',
  Icon: BurgerIcon,
  openMenu: true
};

export const menuItems = [HomeItem, InfoItem, FAQItem, BurgerItem];
