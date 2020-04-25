import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Onboarding from './Onboarding';
import { Icon3, Icon5, Icon6 } from './Onboarding.styled';
import {
  finishOnboarding,
  disagreeModuleBluetooth,
  showOnboardingNotificationPermission,
  showOnboardingBluetoothPermission
} from '../../store/actions/app';
import {
  showNativeBluetoothPermission,
  showNativeNotificationPermission
} from '../../store/actions/nativeData';

const OnboardingIOS = () => {
  const dispatch = useDispatch();

  const {
    rejectedService,
    servicesStatus: { isNotificationEnabled, isBtOn } = {}
  } = useSelector(state => state.nativeData);
  const {
    onboardingNotificationPermissionShowed,
    onboardingBluetoothPermissionShowed
  } = useSelector(state => state.app);
  const [screen, setScreen] = useState('');

  useEffect(() => {
    if (rejectedService === 'notification' || isNotificationEnabled) {
      dispatch(showOnboardingNotificationPermission());
    }
    if (rejectedService === 'bluetooth' || isBtOn) {
      dispatch(showOnboardingBluetoothPermission());
    }
    if (!isNotificationEnabled && !onboardingNotificationPermissionShowed) {
      setScreen('notification');
      return;
    }
    if (!isBtOn && !onboardingBluetoothPermissionShowed) {
      setScreen('bluetooth');
      return;
    }
    if (isBtOn) {
      setScreen('bluetoothSummary');
    }
  }, [
    isNotificationEnabled,
    isBtOn,
    rejectedService,
    onboardingNotificationPermissionShowed,
    onboardingBluetoothPermissionShowed,
    dispatch
  ]);

  const notificationYes = () => {
    dispatch(showNativeNotificationPermission());
  };
  const notificationNo = () => {
    dispatch(disagreeModuleBluetooth());
  };

  const bluetoothYes = () => {
    dispatch(showNativeBluetoothPermission());
  };
  const bluetoothNo = () => {
    dispatch(disagreeModuleBluetooth());
  };

  const screens = {
    notification: {
      icon: <Icon5 />,
      title: 'Włącz powiadomienia',
      content: (
        <>
          <p>
            Do prawidłowego działania aplikacji potrzebna jest Twoja zgoda na
            wyświetlanie powiadomień. Kliknij poniżej i pozwól ProteGO Safe
            wspierać ochronę zdrowia każdego z nas.
          </p>
        </>
      ),
      buttons: [
        {
          text: 'Włącz powiadomienia',
          onClick: notificationYes
        },
        {
          text: 'nie powiadamiaj mnie o zagrożeniach',
          onClick: notificationNo,
          type: 'tertiary'
        }
      ]
    },
    bluetooth: {
      icon: <Icon3 />,
      title: 'Włącz bluetooth',
      content: (
        <>
          <p>
            KKorzystając z modułu Bluetooth dbasz o siebie i bliskich. Włącz go,
            żeby aplikacja mogła ostrzegać Cię o zagrożeniach.
          </p>
          <br />
          <p>
            Włącz w swoim urządzeniu Bluetooth i pozwól ProteGO Safe wspierać
            ochronę zdrowia każdego z nas..
          </p>
        </>
      ),
      buttons: [
        {
          text: 'włącz bluetooth',
          onClick: bluetoothYes
        },
        {
          text: 'nie powiadamiaj mnie o zagrożeniach',
          onClick: bluetoothNo,
          type: 'tertiary'
        }
      ]
    },
    bluetoothSummary: {
      icon: <Icon6 />,
      title: 'Nie zamykaj aplikacji',
      content: (
        <>
          <p>
            Aby aplikacja zbierała informacje o spotkanych urządzeniach,
            pozostaw ją włączoną.
          </p>
          <br />
          <p>
            Możesz odwrócić urządzenie <strong>ekranem do dołu</strong>, lub
            trzymać je w kieszeni do <strong>góry nogami.</strong>
          </p>
        </>
      ),
      buttons: [
        {
          text: 'OK',
          onClick: () => dispatch(finishOnboarding())
        }
      ]
    }
  };

  if (screen === '') {
    return null;
  }

  return <Onboarding screen={screens[screen]} />;
};

export default OnboardingIOS;
