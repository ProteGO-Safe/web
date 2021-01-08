import { ReactComponent as HomeIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-Home-white.svg';
import { ReactComponent as ImportantInfo } from '../../assets/img/icons/SafeSafe-dolne-menu-important-info.svg';
import { ReactComponent as BurgerIcon } from '../../assets/img/icons/SafeSafe-dolne-menu-More-white.svg';
import { Routes } from '../../services/navigationService/routes';

export const HomeItem = {
  id: 'home',
  label: 'bottom_navigation_home',
  Icon: HomeIcon,
  path: Routes.Home
};

export const InfoItem = {
  id: 'advice_information',
  label: 'bottom_navigation_important_info',
  Icon: ImportantInfo,
  path: Routes.ImportantInformation,
  customButton: true
};

export const BurgerItem = {
  id: 'nav_menu_button',
  label: 'bottom_navigation_more',
  Icon: BurgerIcon,
  path: Routes.Menu
};

export const menuItems = [HomeItem, InfoItem, BurgerItem];
