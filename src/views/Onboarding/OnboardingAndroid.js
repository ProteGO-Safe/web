import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Onboarding from './Onboarding';
import { Icon2, Icon3, Icon4 } from './Onboarding.styled';
import { disagreeModuleBluetooth } from '../../store/actions/app';
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
            Nie korzystamy w żaden sposób z GPS i nie jesteśmy w stanie
            stwierdzić, gdzie jesteś lub byłeś.
          </p>
          <br />
          <p>
            Usługi lokalizacyjne w systemie wspomagają działanie Bluetooth,
            który bedzie w stanie odszukać inne urządzenia ProteGO Safe w
            okolicy
          </p>
          <br />
          <p>
            Włącz w swoim urządzeniu usługę lokalizacji i pozwół ProteGO Safe
            zatroszczyć się o Twoje zdrowie
          </p>
        </>
      ),
      buttons: [
        {
          border: false,
          text: 'WŁĄCZ LOKALIZACJĘ',
          onClick: locationYes
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
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
            Korzystamy z Modułu Bluetooth, rejestrować anonimowo urządzenia
            użykowników, znajdujących się dookoła Ciebie.
          </p>
          <br />
          <p>
            Włącz w swoim urządzeniu Bluetooth i pozwól ProteGO Safe zatroszczyć
            się o Twoje zdrowie.
          </p>
        </>
      ),
      buttons: [
        {
          border: false,
          text: 'WŁĄCZ BLUETOOTH',
          onClick: bluetoothYes
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
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
            Aby aplikacja zbierała informację o spotkanych urządzeniach,
            pozostaw ją włączoną
          </p>
          <br />
          <p>
            Optymalizacja zużycia energii ogranicza funckjonalności ProteGO
            Safe, uniemożliwiając połączenia z urządzeniami dookoła. Kliknij
            poniżej i&nbsp;wyłącz optymalizaję zużcia energii.
          </p>
        </>
      ),
      buttons: [
        {
          border: false,
          text:
            'Wyłącz optymalizaję zużcia energii (Przejdź do ustawień systemowych)',
          onClick: batteryYes
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
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
