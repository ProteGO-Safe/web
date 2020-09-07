import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

import { App } from './components';
import _store from './store';
import StoreRegistry from './store/storeRegistry';
import { GlobalStyle } from './theme/global';
import { materialTheme } from './theme/materialTheme';
import './locales/i18n';

StoreRegistry.setStore(_store.store);

ReactDOM.render(
  (() => {
    const { store, persistor } = _store;
    return (
      <HashRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={materialTheme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </HashRouter>
    );
  })(),
  document.getElementById('root')
);
