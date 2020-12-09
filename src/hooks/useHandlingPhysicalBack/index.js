import { useSelector } from 'react-redux';
import { backPressedMarker } from '../../store/selectors/navigation';
import { Routes } from '../../services/navigationService/routes';
import nativeBridge from '../../services/nativeBridge';
import useNavigation from '../useNavigation';
import useSkippingFirstUpdate from '../useSkippingFirstUpdate';

const useHandlingPhysicalBack = backClick => {
  const { route, goTo } = useNavigation();
  const backPressed = useSelector(backPressedMarker);

  useSkippingFirstUpdate(() => {
    if (route === Routes.Home) {
      nativeBridge.turnOff();
      return;
    }
    if (route === Routes.ImportantInformation) {
      goTo(Routes.Home);
      return;
    }

    backClick();
    // eslint-disable-next-line
  }, [backPressed])
};

export default useHandlingPhysicalBack;
