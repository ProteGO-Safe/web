import React, { useState } from 'react';
import Settings from './Settings';

const SettingsContainer = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const items = [
    {
      checked,
      disabled: true,
      onChange: toggleChecked,
      label: 'Zgoda na użycie przez aplikację funkcji Bluetooth',
      name: 'bluetooth'
    }
  ];

  return (
    <Settings items={items} title="Ustawienia">
      Włącz Moduł Bluetooth. Umożliwia on informowanie o potencjalnym
      zagrożeniu.
    </Settings>
  );
};

export default SettingsContainer;
