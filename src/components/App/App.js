import React, { useEffect } from 'react';
import classNames from 'classnames';
import 'moment/locale/pl';
import 'moment/locale/uk';
import 'moment/locale/en-gb';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {
  AddTranslation,
  CurrentRestrictions,
  Daily,
  DailyData,
  Diagnosis,
  FirstDiagnosisAsking,
  Home,
  HowItWorks,
  IAmSick,
  ImportantInfo,
  LabTest,
  RiskTest,
  NotSupported,
  Onboarding,
  PrivacyPolicy,
  PrivacyPolicyDetails,
  Registration,
  Regulations,
  RiskTestData,
  Settings,
  SettingsLanguages,
  MenuSettings,
  StartScreen,
  SummaryRiskTest,
  UserData,
  UserDataChange,
  UserDataSettings,
  HospitalsList,
  ReportBug,
  AdviceInformation,
  UploadHistoricalData,
  FaqPage
} from '../../views';
import { Menu } from '../index';
import { fetchNativeVersion } from '../../store/actions/nativeData';
import useMenuContext from '../../hooks/useMenuContext';
import Routes from '../../routes';
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
import useTurnOffApplication from '../../hooks/useTurnOffApplication';
import * as Styled from './App.styled';
import { fetchDistrictsStatus } from '../../store/actions/restrictions';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
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
  useTurnOffApplication();

  useEffect(() => {
    dispatch(fetchNativeVersion());
  }, [dispatch, startScreenShowed]);

  useEffect(() => {
    dispatch(hideUploadHistoricalDataErrorMessage());
    dispatch(fetchFontScale());
    dispatch(fetchDistrictsStatus());
  }, [dispatch]);

  history.listen(() => {
    window.scroll(0, 0);
  });

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

  return (
    <Styled.Container className={`${className} ${modal ? 'open-modal' : ''}`}>
      <Switch>
        <Route exact path={Routes.Home} component={resolveHomeComponent} />
        {registrationFinished && (
          <>
            <Route
              exact
              path={Routes.AddTranslation}
              component={AddTranslation}
            />
            <Route
              exact
              path={Routes.CurrentRestrictions}
              component={CurrentRestrictions}
            />
            <Route
              exact
              path={Routes.SummaryRiskTest}
              component={SummaryRiskTest}
            />
            <Route exact path={Routes.Daily} component={Daily} />
            <Route exact path="/daily/:id" component={DailyData} />
            <Route exact path={Routes.DailyData} component={DailyData} />
            <Route exact path={Routes.HowItWorks} component={HowItWorks} />
            <Route exact path={Routes.IAmSick} component={IAmSick} />
            <Route
              exact
              path={`${Routes.LabTest}/:step(1|2|3)`}
              component={LabTest}
            />
            <Route exact path={Routes.RiskTest} component={RiskTest} />
            <Route exact path={Routes.Settings} component={MenuSettings} />
            <Route exact path={Routes.SettingsBluetooth} component={Settings} />
            <Route
              exact
              path={Routes.SettingsLanguages}
              component={SettingsLanguages}
            />
            <Route exact path="/risk-test-data/:id" component={RiskTestData} />
            <Route
              exact
              path={Routes.PrivacyPolicy}
              component={PrivacyPolicy}
            />
            <Route
              exact
              path={Routes.PrivacyPolicyDetails}
              component={PrivacyPolicyDetails}
            />
            <Route exact path={Routes.Regulations} component={Regulations} />
            <Route exact path={Routes.Diagnosis} component={Diagnosis} />
            <Route exact path={Routes.UserData} component={UserData} />
            <Route
              exact
              path={Routes.HospitalsList}
              component={HospitalsList}
            />
            <Route exact path={Routes.ReportBug} component={ReportBug} />
            <Route
              exact
              path={Routes.UserDataChange}
              component={UserDataChange}
            />
            <Route
              exact
              path={Routes.UserDataSettings}
              component={UserDataSettings}
            />
            <Route
              exact
              path={Routes.AdviceInformation}
              component={AdviceInformation}
            />
            <Route exact path={Routes.FaqPage} component={FaqPage} />
            <Route
              exact
              path={Routes.UploadHistoricalData}
              component={UploadHistoricalData}
            />
            <Route
              exact
              path={Routes.ImportantInformation}
              component={ImportantInfo}
            />
          </>
        )}
        <Route render={() => <Redirect to={Routes.Home} />} />
      </Switch>
      <Menu />
      {notification && <Notification />}
    </Styled.Container>
  );
}

export default App;
