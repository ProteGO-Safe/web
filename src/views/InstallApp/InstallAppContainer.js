import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import InstallApp from './InstallApp';

const InstallAppContainer = () => {
  const { state } = useLocation();
  const history = useHistory();

  if (!state || (state && !state.system)) {
    history.push('/');
  }


  return <InstallApp showInstallButton={true} />;
};

export default InstallAppContainer;
