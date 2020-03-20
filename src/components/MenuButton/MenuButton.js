import React from 'react';
import useMenuContext from '../../hooks/useMenuContext';
import Icon from '../../assets/img/icons/menu-white.svg';
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
    <button className="menu__button" onClick={handleClick} type="button">
      <img src={Icon} alt="Menu" />
    </button>
  );
};

export default MenuButton;
