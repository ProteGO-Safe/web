import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Onboarding from './Onboarding';
import { Icon2, Icon3, Icon4 } from './Onboarding.styled';
import {
  finishOnboarding,
  disagreeModuleBluetooth
} from '../../store/actions/app';
import {
  showNativeBatteryOptimizationPermission,
  showNativeBluetoothPermission,
  showNativeLocationPermission
} from '../../store/actions/nativeData';

const OnboardingAndroid = () => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(1);

  const {
    servicesStatus: { isLocationEnabled, isBtOn, isBatteryOptimizationOn } = {}
  } = useSelector(state => state.nativeData);

  useEffect(() => {
    if (isBatteryOptimizationOn && isLocationEnabled && isBtOn) {
      dispatch(finishOnboarding());
      return;
    }
    if (isLocationEnabled && isBtOn) {
      setScreen(3);
      return;
    }
    if (isLocationEnabled) {
      setScreen(2);
    }
  }, [isLocationEnabled, isBtOn, isBatteryOptimizationOn, dispatch]);

  const screens = {
    1: {
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
          onClick: () => dispatch(showNativeLocationPermission())
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
          onClick: () => dispatch(disagreeModuleBluetooth())
        }
      ]
    },
    2: {
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
          onClick: () => dispatch(showNativeBluetoothPermission())
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
          onClick: () => dispatch(disagreeModuleBluetooth())
        }
      ]
    },
    3: {
      icon: <Icon4 />,
      title: 'Włącz optymalizację zużycia energii',
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
          onClick: () => dispatch(showNativeBatteryOptimizationPermission())
        },
        {
          border: true,
          text: 'rozmyśliłem się, nie chce korzystać w Modułu Bluetooth',
          onClick: () => dispatch(disagreeModuleBluetooth())
        }
      ]
    }
  };

  return <Onboarding screen={screens[screen]} />;
};

export default OnboardingAndroid;
