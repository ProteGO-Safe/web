import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import { App, RouteLeavingGuard } from './components';
import _store from './store';
import StoreRegistry from './store/storeRegistry';
import { GlobalStyle } from './theme/global';
import { materialTheme } from './theme/materialTheme';
import './locales/i18n';

StoreRegistry.setStore(_store.store);

const Router = () => {
  const { store, persistor } = _store;

  const [routeConfirmationCallback, setRouteConfirmationCallback] = useState();
  const [routeConfirmationMessage, setRouteConfirmationMessage] = useState();
  const [
    showLeavingRouteConfirmation,
    setShowLeavingRouteConfirmation
  ] = useState(false);

  const getUserConfirmation = (message, callback) => {
    setRouteConfirmationCallback(() => {
      return leaveRoute => {
        setShowLeavingRouteConfirmation(false);
        callback(leaveRoute);
      };
    });
    setRouteConfirmationMessage(message);
    setShowLeavingRouteConfirmation(true);
  };

  return (
    <HashRouter getUserConfirmation={getUserConfirmation}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={materialTheme}>
            <GlobalStyle />
            <App />
            {showLeavingRouteConfirmation && (
              <RouteLeavingGuard
                callback={routeConfirmationCallback}
                message={routeConfirmationMessage}
              />
            )}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </HashRouter>
  );
};

ReactDOM.render((() => <Router />)(), document.getElementById('root'));
