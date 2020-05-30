import React from 'react';

import { LoaderProvider } from '../../context/LoaderContext';
import { MenuProvider } from '../../context/MenuContext';
import { ModalProvider } from '../../context/ModalContext';
import App from './App';

const AppContainer = () => {
  return (
    <MenuProvider>
      <LoaderProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </LoaderProvider>
    </MenuProvider>
  );
};

export default AppContainer;
