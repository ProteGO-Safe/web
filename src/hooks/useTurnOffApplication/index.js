import { useEffect } from 'react';
import useNavigation from '../useNavigation';
import { Routes } from '../../services/navigationService/routes';
import nativeBridge from '../../services/nativeBridge';

const useTurnOffApplication = () => {
  const { route, backToPreviousRequested } = useNavigation();

  useEffect(() => {
    if (backToPreviousRequested && route === Routes.Home) {
      nativeBridge.turnOff();
    }
  }, [backToPreviousRequested, route]);
};

export default useTurnOffApplication;
