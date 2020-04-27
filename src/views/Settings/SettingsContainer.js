import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from './Settings';
import {
  disableBluetoothModule,
  enableBluetoothModule,
  showNativeBatteryOptimizationPermission,
  showNativeBluetoothPermission,
  showNativeLocationPermission
} from '../../store/actions/nativeData';
import { isAndroidWebView, isIOSWebView } from '../../utills/native';

const SettingsContainer = () => {
  const dispatch = useDispatch();
  const {
    servicesStatus: {
      isBtServiceOn = false,
      isBtSupported = false,
      isBtOn = false,
      isLocationEnabled = false,
      isBatteryOptimizationOn = true
    }
  } = useSelector(state => state.nativeData);

  const isModuleBluetoothEnable = (() => {
    if (isIOSWebView()) {
      return isBtServiceOn && isBtOn;
    }

    if (isAndroidWebView()) {
      return (
        isBtServiceOn && isBtOn && isLocationEnabled && !isBatteryOptimizationOn
      );
    }
    return false;
  })();

  const toggleChecked = () => {
    if (isModuleBluetoothEnable) {
      dispatch(disableBluetoothModule());
    } else {
      dispatch(showNativeBluetoothPermission());
      if (isAndroidWebView()) {
        dispatch(showNativeLocationPermission());
        dispatch(showNativeBatteryOptimizationPermission());
      }
      dispatch(enableBluetoothModule());
    }
  };

  const items = [
    {
      checked: isModuleBluetoothEnable,
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
