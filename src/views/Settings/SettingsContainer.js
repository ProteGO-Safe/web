import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import {
  disableBluetoothModule,
  enableBluetoothModule
} from '../../store/actions/nativeData';

const SettingsContainer = () => {
  const dispatch = useDispatch();
  const {
    servicesStatus: { isBtServiceOn = false }
  } = useSelector(state => state.nativeData);

  const toggleChecked = () => {
    if (isBtServiceOn) {
      dispatch(disableBluetoothModule());
    } else {
      dispatch(enableBluetoothModule());
    }
  };

  const items = [
    {
      checked: isBtServiceOn,
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
