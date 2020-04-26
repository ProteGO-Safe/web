import React, { useEffect } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import 'moment/locale/pl';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {
  Daily,
  DailyData,
  Diagnosis,
  Home,
  HowItWorks,
  IAmSick,
  RiskTest,
  Numbers,
  Onboarding,
  PrivacyPolicy,
  PrivacyPolicyDetails,
  Registration,
  Regulations,
  RiskTestData,
  Settings,
  StartScreen,
  UserData,
  UserDataChange,
  UserDataSettings,
  HospitalsList,
  ReportBug,
  AdviceInformation,
  FaqPage
} from '../../views';

import {
  fetchNativeServicesStatus,
  fetchNotification
} from '../../store/actions/nativeData';
import useMenuContext from '../../hooks/useMenuContext';
import { Menu } from '../Menu';
import Routes from '../../routes';
import './App.scss';
import { Notification } from '../Notification';
import { showOnboarding } from '../../utills/servicesStatus';
import { isWebView } from '../../utills/native';

function App() {
  moment.locale('pl');
  const dispatch = useDispatch();
  const history = useHistory();

  const { name } = useSelector(state => state.user);
  const { servicesStatus } = useSelector(state => state.nativeData);
  const {
    onboardingFinished,
    startScreenShowed
  } = useSelector(state => state.app);
  const { notification } = useSelector(state => state.nativeData);
  const { inProgress, visible: menuIsVisible } = useMenuContext();

  useEffect(() => {
    if (!notification) {
      const interval = setInterval(() => dispatch(fetchNotification()), 1000);
      return () => clearInterval(interval);
    }
    return () => null;
  }, [notification, dispatch]);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch(fetchNativeServicesStatus()),
      1000
    );
    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchNativeServicesStatus());
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

  const className = classNames({
    app: true,
    'menu-visible': menuIsVisible && !inProgress
  });

  const resolveHomeComponent = (() => {
    if (!startScreenShowed && !name) {
      return StartScreen;
    }
    if (
      isWebView() &&
      !onboardingFinished &&
      showOnboarding(servicesStatus, onboardingFinished)
    ) {
      return Onboarding;
    }
    if (!name) {
      return Registration;
    }
    return Home;
  })();

  return (
    <div className={className}>
      <div className="app__inner">
        <Switch>
          <Route exact path={Routes.Home} component={resolveHomeComponent} />
          {name && true && (
            <>
              <Route exact path={Routes.Daily} component={Daily} />
              <Route exact path="/daily/:id" component={DailyData} />
              <Route exact path="/daily-data" component={DailyData} />
              <Route exact path={Routes.HowItWorks} component={HowItWorks} />
              <Route exact path={Routes.IAmSick} component={IAmSick} />
              <Route exact path={Routes.RiskTest} component={RiskTest} />
              <Route exact path={Routes.Settings} component={Settings} />
              <Route
                exact
                path="/risk-test-data/:id"
                component={RiskTestData}
              />
              <Route exact path={Routes.EmergencyNumbers} component={Numbers} />
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
            </>
          )}
          <Route render={() => <Redirect to={Routes.Home} />} />
        </Switch>
        <Menu />
        {notification && <Notification />}
      </div>
    </div>
  );
}

export default App;
