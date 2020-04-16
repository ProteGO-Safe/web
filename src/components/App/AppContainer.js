import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import { LoaderProvider } from '../../context/LoaderContext';
import { MenuProvider } from '../../context/MenuContext';
import { ModalProvider } from '../../context/ModalContext';
import App from './App';

const AppContainer = () => {
  const history = useHistory();

  useEffect(() => {
    ReactGA.initialize('UA-143293519-2');
    history.listen(location => {
      window.scroll(0, 0);
      ReactGA.pageview(location.pathname);
    });
  }, [history]);

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
