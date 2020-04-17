import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../../../assets/img/icons/angle-right-grey.svg';

import './Collapsible.scss';

const Collapsible = ({ toggle, open, title, children }) => (
  <div
    className={classNames({
      collapsible: true,
      open
    })}
  >
    <div className="collapsible__header" role="presentation" onClick={toggle}>
      <span>{title}</span>
      <img src={Icon} alt="Icon" className="collapsible__header__icon" />
    </div>
    <div className="collapsible__content">{children}</div>
  </div>
);

Collapsible.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default Collapsible;
