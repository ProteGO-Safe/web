import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Numbers, PrivacyPolicy, Registration, Regulations } from '../../views';
import { Menu } from '../Menu';

import './App.scss';
import useMenuContext from '../../hooks/useMenuContext';

function App() {
  const { inProgress, visible } = useMenuContext();
  const menuVisible = visible && !inProgress ? 'menu-visible' : '';

  return (
    <div className={`app ${menuVisible}`}>
      <div className="app__inner">
        <Switch>
          {/* <Route exact path="/" component={Registration} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/regulations" component={Regulations} />
          <Route exact path="/numbers" component={Numbers} />
        </Switch>
        <Menu />
      </div>
    </div>
  );
}

export default App;
