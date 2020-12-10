import React from 'react';
import { LoaderProvider } from '../../context/LoaderContext';
import { ModalProvider } from '../../context/ModalContext';
import App from './App';

const AppContainer = () => {
  return (
    <LoaderProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </LoaderProvider>
  );
};

export default AppContainer;
