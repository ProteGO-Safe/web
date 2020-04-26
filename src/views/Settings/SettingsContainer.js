import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import {
  disableBluetoothModule,
  enableBluetoothModule
} from '../../store/actions/nativeData';
import { Text } from './Settings.styled';

const SettingsContainer = () => {
  const dispatch = useDispatch();
  const {
    rejectedService,
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
      disabled: !isBtSupported || rejectedService === 'bluetooth',
      onChange: toggleChecked,
      label: 'Zgoda na używanie Bluetooth w celu wykrycia zagrożeń',
      name: 'bluetooth'
    }
  ];

  const info = (() => {
    if (rejectedService === 'bluetooth') {
      return (
        <Text>
          Udziel aplikacji ProteGO Safe zgody na użycie bluetooth w
          &lt;ustawieniach systemu&gt; aby korzystać z ochrony, jaką daje Moduł
          Bluetooth.
        </Text>
      );
    }
    return null;
  })();

  return (
    <Settings items={items} title="Ustawienia" info={info}>
      Korzystamy z Modułu Bluetooth aby móc chronić się wzajemnie i umożliwić
      aplikacji informowanie o zagrożeniach.
    </Settings>
  );
};

export default SettingsContainer;
