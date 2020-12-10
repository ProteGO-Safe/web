import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, VersionApp, Layout, T } from '../../components';
import './Menu.scss';

import { ReactComponent as LogoSafeSafe } from '../../assets/img/logo/stopcovid_protegosafe_logo_sygnet.svg';

const Menu = ({ items }) => {
  const renderItems = items.map(item => {
    const { bottom, bold, color, disable, icon, path, slug, title, invisible } = item;

    const isBottom = bottom ? 'bottom' : '';
    const isBold = bold ? 'text-bold' : '';
    const isDisable = disable ? 'disable' : '';
    const isInvisible = invisible ? 'invisible' : '';

    if (!title) {
      return <li className="menu__item menu__item--empty" key={slug} />;
    }

    return (
      !isInvisible && (
        <li className={`menu__item ${isBottom} ${isDisable}`} key={slug}>
          <NavLink className={`menu__item__link ${isBold} ${isDisable} ${color}`} onClick={() => null} to={path}>
            <img className="menu__item__icon" src={icon} alt={<T i18nKey={title} />} />
            <T i18nKey={title} />
          </NavLink>
        </li>
      )
    );
  });

  return (
    <Layout hideBackButton isNavigation noMargin>
      <div className="menu__overlay" onClick={() => null} />
      <div className="menu menu__wrapper visible">
        <div className="menu__user">
          <LogoSafeSafe />
        </div>
        <ul className="menu__items">{renderItems}</ul>
        <VersionApp />
      </div>
    </Layout>
  );
};

Menu.defaultProps = {
  items: []
};

Menu.propTypes = {
  items: PropTypes.array
};

export default Menu;
