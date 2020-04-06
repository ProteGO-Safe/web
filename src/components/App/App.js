import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import 'moment/locale/pl';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Daily,
  DailyData,
  Diagnosis,
  Home,
  HowItWorks,
  InstallApp,
  RiskTest,
  RiskInformation,
  Numbers,
  PrivacyPolicy,
  PrivacyPolicyDetails,
  Registration,
  Regulations,
  RiskTestData,
  UserData,
  UserDataSettings,
  InstallAppAndroid,
  InstallAppIOS,
  MatchedDevices,
  HospitalsList,
  ReportBug
} from '../../views';

import useMenuContext from '../../hooks/useMenuContext';
import { Menu } from '../Menu';
import Routes from '../../routes';
import './App.scss';

function App() {
  moment.locale('pl');

  const { name } = useSelector(state => state.user);
  const { inProgress, visible: menuIsVisible } = useMenuContext();

  const className = classNames({
    app: true,
    'menu-visible': menuIsVisible && !inProgress
  });

  return (
    <div className={className}>
      <div className="app__inner">
        <Switch>
          <Route
            exact
            path={Routes.Home}
            component={name ? Home : Registration}
          />
          {!name && (
            <Route exact path={Routes.Install} component={InstallApp} />
          )}
          {!name && (
            <Route
              exact
              path={Routes.InstallAndroid}
              component={InstallAppAndroid}
            />
          )}
          {!name && (
            <Route
              exact
              path={Routes.InstallAppIOS}
              component={InstallAppIOS}
            />
          )}
          {name && (
            <>
              <Route exact path={Routes.Daily} component={Daily} />
              <Route exact path="/daily/:id" component={DailyData} />
              <Route exact path="/daily-data" component={DailyData} />
              <Route exact path={Routes.HowItWorks} component={HowItWorks} />
              <Route exact path={Routes.RiskTest} component={RiskTest} />
              <Route
                exact
                path="/risk-test-data/:id"
                component={RiskTestData}
              />
              <Route
                exact
                path={Routes.RiskInoformationTriage}
                component={RiskInformation}
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
              <Route exact path={Routes.HospitalsList} component={HospitalsList} />
              <Route exact path={Routes.ReportBug} component={ReportBug} />
              <Route
                exact
                path={Routes.MatchedDevices}
                component={MatchedDevices}
              />
              <Route
                exact
                path={Routes.UserDataSettings}
                component={UserDataSettings}
              />
            </>
          )}
          <Route render={() => <Redirect to={Routes.Home} />} />
        </Switch>
        <Menu />
      </div>
    </div>
  );
}

export default App;
