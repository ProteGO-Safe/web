import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeRoute,
  goToHomeRoute,
  goToPreviousRoute
} from '../../store/actions/navigation';
import {
  getCurrentParams,
  getCurrentRoute,
  isBackToPreviousRequested
} from '../../store/selectors/navigation';

const useNavigation = () => {
  const dispatch = useDispatch();

  const currentParams = useSelector(getCurrentParams);
  const currentRoute = useSelector(getCurrentRoute);
  const backToPreviousRequested = useSelector(isBackToPreviousRequested);

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentRoute]);

  const goHome = () => {
    dispatch(goToHomeRoute());
  };

  const goBack = () => {
    dispatch(goToPreviousRoute());
  };

  const goTo = (route, params) => {
    if (currentRoute === route) {
      return;
    }
    dispatch(changeRoute({ route, params }));
  };

  const getParam = param => {
    return currentParams && currentParams[param];
  };

  return {
    getParam,
    goBack,
    goHome,
    goTo,
    backToPreviousRequested,
    route: currentRoute
  };
};

export default useNavigation;
