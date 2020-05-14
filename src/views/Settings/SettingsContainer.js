import React from 'react';
import Settings from './Settings';

const SettingsContainer = () => {
  const toggleChecked = () => {};

  const items = [
    {
      checked: false,
      disabled: false,
      onChange: toggleChecked,
      label: 'Zgoda na używanie Bluetooth w celu wykrycia zagrożeń',
      name: 'bluetooth'
    }
  ];

  return (
    <Settings items={items} title="Ustawienia">
      Korzystamy z Modułu Bluetooth aby móc chronić się wzajemnie i umożliwić
      aplikacji informowanie o zagrożeniach.
    </Settings>
  );
};

export default SettingsContainer;
