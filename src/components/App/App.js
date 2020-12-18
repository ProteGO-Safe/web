import React, { useEffect } from 'react';
import 'moment/locale/pl';
import 'moment/locale/de';
import 'moment/locale/tr';
import 'moment/locale/ru';
import 'moment/locale/uk';
import 'moment/locale/en-gb';
import { useDispatch, useSelector } from 'react-redux';
import { FirstDiagnosisAsking, Dashboard, NotSupported, Onboarding, Registration, StartScreen } from '../../views';
import { fetchNativeVersion } from '../../store/actions/nativeData';
import useFilledDiagnosis from '../../hooks/useFilledDiagnosis';
import {
  fetchFontScale,
  hideUploadHistoricalDataErrorMessage,
  markDataFromNewestVersion
} from '../../store/actions/app';
import { isLocalPWA, isWebView } from '../../utils/native';
import useMigration from '../../hooks/useMigration';
import useCheckLanguage from '../../hooks/useCheckLanguage';
import useModalContext from '../../hooks/useModalContext';
import useClearData from '../../hooks/useClearData';
import useNavigation from '../../hooks/useNavigation';
import ScreenFactory from '../../services/navigationService/Screen.factory';
import useFirstRun from '../../hooks/useFirstRun';
import { resetNavigationState } from '../../store/actions/navigation';
import useCovidStateCleaner from '../../hooks/useCovidStateCleaner';
import * as Styled from './App.styled';

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
  const { hasFilledAnyDiagnosis } = useFilledDiagnosis();
  useMigration();
  useCheckLanguage();
  useClearData();
  useFirstRun();
  useCovidStateCleaner();
  const { route } = useNavigation();

  useEffect(() => {
    dispatch(fetchNativeVersion());
  }, [dispatch, startScreenShowed]);

  useEffect(() => {
    dispatch(hideUploadHistoricalDataErrorMessage());
    dispatch(fetchFontScale());
    dispatch(resetNavigationState());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (!dataFromNewestVersionMarked && hasFilledAnyDiagnosis) {
      dispatch(markDataFromNewestVersion());
    }
  }, [dataFromNewestVersionMarked, hasFilledAnyDiagnosis, dispatch]);

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
    return Dashboard;
  })();

  const CurrentComponent = (() => {
    if (!registrationFinished) {
      return resolveHomeComponent;
    }
    return ScreenFactory.get(route) || resolveHomeComponent;
  })();

  return (
    <Styled.Container className={`${modal ? 'open-modal' : ''}`}>
      <CurrentComponent />
    </Styled.Container>
  );
}

export default App;
