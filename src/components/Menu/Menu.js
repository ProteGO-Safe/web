import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LogoSafeSafe from '../../assets/img/logo/protegosafe_logo_white.svg';
import useMenuContext from '../../hooks/useMenuContext';
import { VersionApp } from '../index';
import './Menu.scss';

const Menu = ({ items }) => {
  const { visible, startHiding, inProgress } = useMenuContext();
  const handleClose = () => startHiding();

  const isVisible = visible ? 'visible' : '';
  const isHidden = inProgress ? 'hidden' : '';

  const renderItems = items.map(item => {
    const { bottom, bold, disable, icon, path, slug, title } = item;

    const isBottom = bottom ? 'bottom' : '';
    const isBold = bold ? 'text-bold' : '';
    const isDisable = disable ? 'disable' : '';

    if (!title) {
      return <li className="menu__item menu__item--empty" key={slug} />;
    }

    return (
      <li className={`menu__item ${isBottom} ${isDisable}`} key={slug}>
        <NavLink
          className={`menu__item__link ${isBold} ${isDisable}`}
          onClick={handleClose}
          to={path}
        >
          <img className="menu__item__icon" src={icon} alt={title} />
          {title}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      {visible && <div className="menu__overlay" onClick={handleClose} />}
      <div className={`menu menu__wrapper ${isVisible} ${isHidden}`}>
        <div className="menu__user">
          <img src={LogoSafeSafe} alt="ProteGO Safe" />
        </div>
        <ul className="menu__items">{renderItems}</ul>
        <VersionApp />
      </div>
    </>
  );
};

Menu.defaultProps = {
  items: [],
  userName: undefined
};

Menu.propTypes = {
  items: PropTypes.array,
  userName: PropTypes.string,
  version: PropTypes.string
};

export default Menu;
