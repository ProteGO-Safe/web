import React from 'react';
import ok from '../../assets/img/icons/ok.svg';
import info from '../../assets/img/icons/info.svg';
import warning from '../../assets/img/icons/warning.svg';
import bad from '../../assets/img/icons/bad.svg';
import close from '../../assets/img/icons/notifi_close.svg';
import './Notification.scss';

const Notification = ({ title, content, status, onClick }) => {
  const lowerCaseStatus = status.toLowerCase();
  const renderIconStatus = (() => {
    switch (lowerCaseStatus) {
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
        return bad;
      }
    }
  })();

  return (
    <div className="notification">
      <div className="notification__overlay" onClick={onClick} />
      <div className={`notification__wrapper notification__${lowerCaseStatus}`}>
        <span className="notification__close" onClick={onClick}>
          <img src={close} alt="Close" />
        </span>
        <img src={renderIconStatus} alt={lowerCaseStatus} />
        <div className="notification__text">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
