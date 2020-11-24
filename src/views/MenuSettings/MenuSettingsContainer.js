import React from 'react';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import MenuSettings from './MenuSettings';

import LanguageIcon from '../../assets/img/icons/language.svg';
import Bluetooth from '../../assets/img/icons/bluetooth.svg';
import FlagUE from '../../assets/img/icons/flag-ue.svg';
import { isVersionCompatibilityWithBluetoothModule } from '../../utils/version';
import { Routes } from '../../services/navigationService/routes';

const MenuSettingsContainer = ({ t }) => {
  const { servicesStatus } = useSelector(state => state.nativeData);

  const MENU_ITEMS = [
    {
      icon: Bluetooth,
      name: t('menu_settings_item1'),
      path: Routes.SettingsBluetooth,
      disabled: !isVersionCompatibilityWithBluetoothModule(servicesStatus)
    },
    {
      icon: LanguageIcon,
      name: t('menu_settings_item2'),
      path: Routes.SettingsLanguages
    },
    {
      icon: FlagUE,
      name: t('menu_settings_item3'),
      path: Routes.WarningInEurope
    }
  ];

  return (
    <Layout isNavigation noMargin>
      <MenuSettings items={MENU_ITEMS} />
    </Layout>
  );
};

export default withTranslation()(MenuSettingsContainer);
