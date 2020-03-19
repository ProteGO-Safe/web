import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Registration } from '../../views';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
