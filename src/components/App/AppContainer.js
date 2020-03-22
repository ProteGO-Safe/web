import React from 'react';
import { MenuProvider } from '../../context/MenuContext';
import { LoaderProvider } from '../../context/LoaderContext';
import App from './App';

const AppContainer = () => (
  <MenuProvider>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </MenuProvider>
);

export default AppContainer;
