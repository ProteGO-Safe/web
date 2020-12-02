import React, { useEffect } from 'react';
import classNames from 'classnames';
import 'moment/locale/pl';
import 'moment/locale/de';
import 'moment/locale/tr';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-gb';
import { useDispatch, useSelector } from 'react-redux';
import { FirstDiagnosisAsking, Home, NotSupported, Onboarding, Registration, StartScreen } from '../../views';
import { Menu } from '../index';
import { fetchNativeVersion } from '../../store/actions/nativeData';
import useMenuContext from '../../hooks/useMenuContext';
import { Notification } from '../Notification';
import useFilledDiagnosis from '../../hooks/useFilledDiagnosis';
import {
  fetchFontScale,
  hideUploadHistoricalDataErrorMessage,
  markDataFromNewestVersion
} from '../../store/actions/app';
import { isLocalPWA, isWebView } from '../../utils/native';
import useMigration from '../../hooks/useMigration';
import useCheckLanguage from '../../hooks/useCheckLanguage';
import useNotification from '../../hooks/useNotification';
import useModalContext from '../../hooks/useModalContext';
import useClearData from '../../hooks/useClearData';
import * as Styled from './App.styled';
import { fetchSubscribedDistricts } from '../../store/actions/restrictions';
import useNavigation from '../../hooks/useNavigation';
import ScreenFactory from '../../services/navigationService/Screen.factory';
import { Routes } from '../../services/navigationService/routes';
import useFirstRun from '../../hooks/useFirstRun';

function App() {
  const dispatch = useDispatch();
  const { modal } = useModalContext();
  const {
    dataFromNewestVersionMarked = false,
    onboardingFinished = false,
    startScreenShowed,
    firstDiagnosisFinished,
    registrationFinished
  } = useSelector(state => state.app);
  const { notification } = useNotification();
  const { inProgress, visible: menuIsVisible } = useMenuContext();
  const { hasFilledAnyDiagnosis } = useFilledDiagnosis();
  useMigration();
  useCheckLanguage();
  useClearData();
  useFirstRun();
  const { goTo, route } = useNavigation();

  useEffect(() => {
    dispatch(fetchNativeVersion());
  }, [dispatch, startScreenShowed]);

  useEffect(() => {
    dispatch(hideUploadHistoricalDataErrorMessage());
    dispatch(fetchFontScale());
    dispatch(fetchSubscribedDistricts());
    goTo(Routes.Home);
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    const navMenuButton = document.getElementById('nav_menu_button');

    if (navMenuButton) {
      setTimeout(() => navMenuButton.blur(), 100);
    }
  }, [menuIsVisible]);

  useEffect(() => {
    if (!dataFromNewestVersionMarked && hasFilledAnyDiagnosis) {
      dispatch(markDataFromNewestVersion());
    }
  }, [dataFromNewestVersionMarked, hasFilledAnyDiagnosis, dispatch]);

  const className = classNames({
    app: true,
    'menu-visible': menuIsVisible && !inProgress
  });

  const resolveHomeComponent = (() => {
    if (isWebView() && !isLocalPWA()) {
      return NotSupported;
    }
    if (!startScreenShowed && !registrationFinished) {
      return StartScreen;
    }
    if (!onboardingFinished) {
      return Onboarding;
    }
    if (!registrationFinished) {
      return Registration;
    }
    if (!firstDiagnosisFinished) {
      return FirstDiagnosisAsking;
    }
    return Home;
  })();

  const CurrentComponent = (() => {
    if (!registrationFinished) {
      return resolveHomeComponent;
    }
    return ScreenFactory.get(route) || resolveHomeComponent;
  })();

  return (
    <Styled.Container className={`${className} ${modal ? 'open-modal' : ''}`}>
      <CurrentComponent />
      <Menu />
      {notification && <Notification />}
    </Styled.Container>
  );
}

export default App;
