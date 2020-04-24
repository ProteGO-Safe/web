import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Onboarding from './Onboarding';
import { Icon2, Icon3, Icon4 } from './Onboarding.styled';
import {
  disagreeModuleBluetooth,
  finishOnboarding
} from '../../store/actions/app';
import {
  showNativeBatteryOptimizationPermission,
  showNativeBluetoothPermission,
  showNativeLocationPermission
} from '../../store/actions/nativeData';

const OnboardingAndroid = () => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState('');

  const {
    servicesStatus: {
      isLocationEnabled = false,
      isBtOn = false,
      isBatteryOptimizationOn = true
    } = {}
  } = useSelector(state => state.nativeData);

  useEffect(() => {
    if (isLocationEnabled && isBtOn && !isBatteryOptimizationOn) {
      dispatch(finishOnboarding());
    }

    if (!isLocationEnabled) {
      setScreen('location');
      return;
    }
    if (!isBtOn) {
      setScreen('bluetooth');
      return;
    }
    if (isBatteryOptimizationOn) {
      setScreen('battery');
    }
  }, [isLocationEnabled, isBtOn, isBatteryOptimizationOn, dispatch]);

  const locationYes = () => {
    dispatch(showNativeLocationPermission());
  };
  const locationNo = () => {
    dispatch(disagreeModuleBluetooth());
  };

  const bluetoothYes = () => {
    dispatch(showNativeBluetoothPermission());
  };
  const bluetoothNo = () => {
    dispatch(disagreeModuleBluetooth());
  };

  const batteryYes = () => {
    dispatch(showNativeBatteryOptimizationPermission());
  };
  const batteryNo = () => {
    dispatch(disagreeModuleBluetooth());
  };

  const screens = {
    location: {
      icon: <Icon2 />,
      title: 'Włącz usługę lokalizacji',
      content: (
        <>
          <p>
            Usługi lokalizacyjne w systemie wspomagają działanie Bluetooth,
            który będzie w stanie odszukać inne urządzenia ProteGO Safe w
            okolicy.
          </p>
          <br />
          <p>
            Korzystamy tylko z Bluetooth. Nie korzystamy w żaden sposób z GPS i
            aplikacja nie wie gdzie jesteś lub byłeś.
          </p>
          <br />
          <p>
            Włącz w swoim urządzeniu usługę lokalizacji i pozwól ProteGO Safe
            wspierać ochronę zdrowia każdego z nas.
          </p>
        </>
      ),
      buttons: [
        {
          text: 'włącz lokalizację',
          onClick: locationYes
        },
        {
          text: 'Nie powiadamiaj mnie o zagrożeniach',
          type: 'tertiary',
          onClick: locationNo
        }
      ]
    },
    bluetooth: {
      icon: <Icon3 />,
      title: 'Włącz bluetooth',
      content: (
        <>
          <p>
            Korzystając z modułu Bluetooth dbasz o siebie i bliskich. Włącz go,
            żeby aplikacja mogła ostrzegać Cię o zagrożeniach.
          </p>
          <br />
          <p>
            Włącz w swoim urządzeniu Bluetooth i pozwól ProteGO Safe wspierać
            ochronę zdrowia każdego z nas.
          </p>
        </>
      ),
      buttons: [
        {
          text: 'WŁĄCZ BLUETOOTH',
          onClick: bluetoothYes
        },
        {
          text: 'Nie powiadamiaj mnie o zagrożeniach',
          type: 'tertiary',
          onClick: bluetoothNo
        }
      ]
    },
    battery: {
      icon: <Icon4 />,
      title: 'Wyłącz optymalizację zużycia energii',
      content: (
        <>
          <p>
            Optymalizacja zużycia energii ogranicza funkcjonalności ProteGO
            Safe, uniemożliwiając poprawne funkcjonowanie aplikacji.
          </p>
          <br />
          <p>
            Czy chcesz wyłączyć optymalizację zużycia energii żeby aplikacja
            mogła powiadamiać o zagrożeniach?
          </p>
        </>
      ),
      buttons: [
        {
          text: 'wyłącz',
          onClick: batteryYes
        },
        {
          type: 'tertiary',
          text: 'Nie powiadamiaj mnie o zagrożeniach',
          onClick: batteryNo
        }
      ]
    }
  };

  if (screen === '') {
    return null;
  }

  return <Onboarding screen={screens[screen]} />;
};

export default OnboardingAndroid;
