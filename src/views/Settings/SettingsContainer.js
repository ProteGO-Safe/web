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
      onChange: toggleChecked,
      label: 'Zgoda na użycie przez aplikację funkcji Bluetooth',
      name: 'bluetooth'
    }
  ];

  return (
    <Settings items={items} title="Ustawienia">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Settings>
  );
};

export default SettingsContainer;
