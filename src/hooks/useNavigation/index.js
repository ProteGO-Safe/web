import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoute, goToPreviousRoute } from '../../store/actions/navigation';
import { getCurrentParams, getCurrentRoute } from '../../store/selectors/navigation';
import { Routes } from '../../services/navigationService/routes';

const useNavigation = () => {
  const dispatch = useDispatch();

  const currentParams = useSelector(getCurrentParams);
  const currentRoute = useSelector(getCurrentRoute);

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentRoute]);

  const goBack = () => {
    dispatch(goToPreviousRoute());
  };

  const goTo = (route, params) => {
    if (currentRoute === route) {
      return;
    }
    dispatch(changeRoute({ route, params }));
  };

  const goToWithCustomBack = (route, backRoute) => {
    dispatch(changeRoute({ route, backRoute }));
  };

  const gotToWithHomeAsBack = route => {
    dispatch(changeRoute({ route, backRoute: Routes.Home }));
  };

  const getParam = param => {
    return currentParams && currentParams[param];
  };

  return {
    getParam,
    goBack,
    goTo,
    goToWithCustomBack,
    gotToWithHomeAsBack,
    route: currentRoute
  };
};

export default useNavigation;
