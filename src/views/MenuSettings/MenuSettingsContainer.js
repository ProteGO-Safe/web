import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, T } from '../../components';
import MenuSettings from './MenuSettings';
import { isVersionCompatibilityWithBluetoothModule } from '../../utils/version';
import { Routes } from '../../services/navigationService/routes';

import { ReactComponent as LanguageIcon } from '../../assets/img/icons/language.svg';
import { ReactComponent as Bluetooth } from '../../assets/img/icons/bluetooth.svg';
import { ReactComponent as Notifications } from '../../assets/img/icons/notifications.svg';
import { ReactComponent as FlagUE } from '../../assets/img/icons/flag-ue.svg';

const MenuSettingsContainer = () => {
  const { servicesStatus } = useSelector(state => state.nativeData);

  const MENU_ITEMS = [
    {
      icon: <Bluetooth />,
      name: <T i18nKey="menu_settings_item1" />,
      path: Routes.SettingsBluetooth,
      disabled: !isVersionCompatibilityWithBluetoothModule(servicesStatus)
    },
    {
      icon: <Notifications />,
      name: <T i18nKey="menu_settings_item4" />,
      path: Routes.SettingsNotifications
    },
    {
      icon: <LanguageIcon />,
      name: <T i18nKey="menu_settings_item2" />,
      path: Routes.SettingsLanguages
    },
    {
      icon: <FlagUE />,
      name: <T i18nKey="menu_settings_item3" />,
      path: Routes.WarningInEurope
    }
  ];

  return (
    <Layout isNavigation noMargin noPadding>
      <MenuSettings items={MENU_ITEMS} />
    </Layout>
  );
};

export default MenuSettingsContainer;
