import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../../components';

const LoaderContext = createContext(null);

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <LoaderContext.Provider
      value={{
        setLoader
      }}
    >
      {children}
      {loader && <Loader />}
    </LoaderContext.Provider>
  );
};

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default LoaderContext;
