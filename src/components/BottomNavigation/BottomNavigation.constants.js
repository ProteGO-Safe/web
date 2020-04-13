import Routes from '../../routes';
import { ReactComponent as HomeIcon } from '../../assets/img/icons/menu-home.svg';
import { ReactComponent as InfoIcon } from '../../assets/img/icons/menu-info.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/icons/menu-search.svg';

export const HomeItem = {
  label: 'Home',
  Icon: HomeIcon,
  path: Routes.Home
};

export const SearchItem = {
  label: 'Porady',
  Icon: SearchIcon,
  disabled: true
  // path: Routes.Home
};

export const InfoItem = {
  label: 'Aktualności',
  Icon: InfoIcon,
  disabled: true
  // path: Routes.Home
};

export const menuItems = [HomeItem, SearchItem, InfoItem];
