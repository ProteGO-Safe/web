import React from 'react';
import ok from '../../assets/img/icons/ok.svg';
import info from '../../assets/img/icons/info.svg';
import warning from '../../assets/img/icons/warning.svg';
import bad from '../../assets/img/icons/bad.svg';
import close from '../../assets/img/icons/notifi_close.svg';
import './Notification.scss';

const Notification = ({ title, content, status, onClick }) => {
  const renderIconStatus = (() => {
    switch (status) {
      case 'ok': {
        return ok;
      }
      case 'info': {
        return info;
      }
      case 'warning': {
        return warning;
      }
      case 'bad': {
        return bad;
      }
      default: {
        return info;
      }
    }
  })();

  return (
    <div className="notification">
      <div className="notification__overlay" onClick={onClick} />
      <div className={`notification__wrapper notification__${status}`}>
        <span className="notification__close" onClick={onClick}>
          <img src={close} alt="Close" />
        </span>
        <img src={renderIconStatus} alt={status} />
        <div className="notification__text">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
