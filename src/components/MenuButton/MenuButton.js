import React from 'react';
import useMenuContext from '../../hooks/useMenuContext';
import './MenuButton.scss';

const MenuButton = () => {
  const { visible, setVisible, startHiding } = useMenuContext();
  const handleClick = () => {
    if (visible) {
      return startHiding();
    }

    return setVisible(true);
  };

  return (
    <button
      className="menu__button"
      onClick={handleClick}
      type="button">
      <div className="menu__button__line" />
      <div className="menu__button__line" />
      <div className="menu__button__line" />
    </button>
  );
};

export default MenuButton;
