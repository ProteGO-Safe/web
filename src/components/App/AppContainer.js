import React from 'react';

import { LoaderProvider } from '../../context/LoaderContext';
import { MenuProvider } from '../../context/MenuContext';
import { ModalProvider } from '../../context/ModalContext';
import { Cookie } from '../Cookie';
import App from './App';

const AppContainer = () => {
  return (
    <MenuProvider>
      <LoaderProvider>
        <ModalProvider>
          <Cookie />
          <App />
        </ModalProvider>
      </LoaderProvider>
    </MenuProvider>
  );
};

export default AppContainer;
