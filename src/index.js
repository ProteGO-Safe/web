import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core';
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

const Router = () => {
  const { store, persistor } = _store;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={materialTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render((() => <Router />)(), document.getElementById('root'));
