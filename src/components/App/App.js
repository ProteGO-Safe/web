import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Registration } from '../../views';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
