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
    servicesStatus: { isBtServiceOn = false, isBtSupported = false }
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
      disabled: !isBtSupported,
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
