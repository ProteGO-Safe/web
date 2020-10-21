import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { usePrevious } from '../usePrevious';
import Routes from '../../routes';
import nativeBridge from '../../services/nativeBridge';

const useTurnOffApplication = () => {
  const location = useLocation();
  const history = useHistory();
  const previousLocation = usePrevious(location);

  useEffect(() => {
    if (!previousLocation) {
      return;
    }
    const { action } = history;
    const { pathname } = location;
    const { pathname: previousPathname = undefined } = previousLocation;
    if (
      pathname !== Routes.Home &&
      previousPathname === Routes.Home &&
      action === 'POP'
    ) {
      nativeBridge.turnOff();
    }
  }, [location, previousLocation, history]);
};

export default useTurnOffApplication;
