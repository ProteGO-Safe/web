import React from 'react';
import { MenuProvider } from '../../context/MenuContext';
import App from './App';

const AppContainer = () => (
  <MenuProvider>
    <App />
  </MenuProvider>
);

export default AppContainer;
