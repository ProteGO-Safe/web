import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  Daily,
  Home,
  HowItWorks,
  MyHealth,
  Numbers,
  PrivacyPolicy,
  Registration,
  Regulations
} from '../../views';
import { Menu } from '../Menu';

import './App.scss';
import useMenuContext from '../../hooks/useMenuContext';

function App() {
  const { name } = useSelector(state => state.user);
  const { inProgress, visible } = useMenuContext();
  const menuVisible = visible && !inProgress ? 'menu-visible' : '';

  return (
    <div className={`app ${menuVisible}`}>
      <div className="app__inner">
        <Switch>
          <Route exact path="/" component={name ? Home : Registration} />
          {name && (
            <>
              <Route exact path="/daily" component={Daily} />
              <Route exact path="/how-it-works" component={HowItWorks} />
              <Route exact path="/my-health" component={MyHealth} />
              <Route exact path="/numbers" component={Numbers} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/regulations" component={Regulations} />
            </>
          )}
        </Switch>
        <Menu />
      </div>
    </div>
  );
}

export default App;
