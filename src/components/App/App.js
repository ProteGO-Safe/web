import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Registration } from '../../views';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
