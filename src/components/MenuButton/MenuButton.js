import React from 'react';
import './MenuButton.scss';

const MenuButton = () => {
  return (
    <button className="menu__button" type="button">
      <div className="menu__button__line" />
      <div className="menu__button__line" />
      <div className="menu__button__line" />
    </button>
  );
};

export default MenuButton;
