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
  InstallAppIOS
} from '../../views';

import { Menu } from '../Menu';
import './App.scss';
import useMenuContext from '../../hooks/useMenuContext';

function App() {
  moment.locale('pl');

  const { name } = useSelector(state => state.user);
  const { inProgress, visible: menuIsVisible } = useMenuContext();

  return (
    <div
      className={classNames({
        app: true,
        'menu-visible': menuIsVisible && !inProgress
      })}
    >
      <div className="app__inner">
        <Switch>
          <Route exact path="/" component={name ? Home : Registration} />
          {!name && <Route exact path="/install" component={InstallApp} />}
          {!name && (
            <Route
              exact
              path="/install/android"
              component={InstallAppAndroid}
            />
          )}
          {!name && (
            <Route exact path="/install/ios" component={InstallAppIOS} />
          )}
          {name && (
            <>
              <Route exact path="/daily" component={Daily} />
              <Route exact path="/daily/:id" component={DailyData} />
              <Route exact path="/daily-data" component={DailyData} />
              <Route exact path="/how-it-works" component={HowItWorks} />
              <Route exact path="/risk-test" component={RiskTest} />
              <Route
                exact
                path="/risk-test-data/:id"
                component={RiskTestData}
              />
              <Route
                exact
                path="/risk-information/:triage"
                component={RiskInformation}
              />
              <Route exact path="/numbers" component={Numbers} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route
                exact
                path="/privacy-policy-details"
                component={PrivacyPolicyDetails}
              />
              <Route exact path="/regulations" component={Regulations} />
              <Route exact path="/diagnosis" component={Diagnosis} />
              <Route exact path="/user-data" component={UserData} />
              <Route
                exact
                path="/user-data/settings"
                component={UserDataSettings}
              />
            </>
          )}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        <Menu />
      </div>
    </div>
  );
}

export default App;
