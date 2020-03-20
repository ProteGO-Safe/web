import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const [inProgress, setProgress] = useState(false);
  const [visible, setVisible] = useState(false);

  const startHiding = () => setProgress(true);

  useEffect(() => {
    if (inProgress) {
      setTimeout(() => setVisible(false), 250);
    }
  }, [inProgress]);

  useEffect(() => {
    if (!visible) {
      setProgress(false);
    }
  }, [visible]);

  return (
    <MenuContext.Provider
      value={{
        inProgress,
        setVisible,
        startHiding,
        visible
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default MenuContext;
