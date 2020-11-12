import { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { backPressedMarker } from '../../store/selectors/navigation';
import { Routes } from '../../services/navigationService/routes';
import nativeBridge from '../../services/nativeBridge';
import useNavigation from '../useNavigation';

const useHandlingPhysicalBack = backClick => {
  const { route } = useNavigation();
  const backPressed = useSelector(backPressedMarker);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (route === Routes.Home) {
      nativeBridge.turnOff();
      return;
    }
    backClick();
    // eslint-disable-next-line
  }, [backPressed]);
};

export default useHandlingPhysicalBack;
