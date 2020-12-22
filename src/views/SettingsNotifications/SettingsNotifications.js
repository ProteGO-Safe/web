import React, { useEffect, useState } from 'react';
import { Layout, Settings, T } from '../../components';
import nativeBridge from '../../services/nativeBridge';

const SettingsNotifications = () => {
  const [covidStatsNotificationEnabled, setCovidStatsNotificationEnabled] = useState(false);

  useEffect(() => {
    nativeBridge
      .getNotificationStatus()
      .then(({ isCovidStatsNotificationEnabled }) => setCovidStatsNotificationEnabled(isCovidStatsNotificationEnabled));
  }, []);

  const toggleChecked = () => {
    nativeBridge
      .setNotificationStatus(!covidStatsNotificationEnabled)
      .then(({ isCovidStatsNotificationEnabled }) => setCovidStatsNotificationEnabled(isCovidStatsNotificationEnabled));
  };

  const items = [
    {
      checked: covidStatsNotificationEnabled,
      disabled: false,
      onChange: toggleChecked,
      label: <T i18nKey="settings_notifications_text2" />,
      name: 'notifications'
    }
  ];

  return (
    <Layout isNavigation>
      <Settings items={items} title={<T i18nKey="settings_notifications_text1" />} />
    </Layout>
  );
};

export default SettingsNotifications;
