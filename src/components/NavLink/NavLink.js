import React from 'react';
import useNavigation from '../../hooks/useNavigation';

const NavLink = ({ className, children, onClick, to }) => {
  const { goTo } = useNavigation();
  const handleGoTo = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      goTo(to);
    }
  };
  return (
    <span className={className} onClick={handleGoTo}>
      {children}
    </span>
  );
};

export default NavLink;
