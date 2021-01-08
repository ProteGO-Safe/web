import React from 'react';
import useNavigation from '../../hooks/useNavigation';
import useDelayedAction from '../../hooks/useDelayedAction';

const NavLink = ({ className, children, onClick, to }) => {
  const { timeout } = useDelayedAction();
  const { goTo } = useNavigation();

  const handleGoTo = () => {
    timeout(() => {
      if (onClick) {
        onClick();
      }
      if (to) {
        goTo(to);
      }
    });
  };

  return (
    <span className={className} onClick={handleGoTo}>
      {children}
    </span>
  );
};

export default NavLink;
