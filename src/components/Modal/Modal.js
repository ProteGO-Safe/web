import React, { useEffect, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Icon from '../../assets/img/icons/close.svg';
import useModalContext from '../../hooks/useModalContext';
import './Modal.scss';

const Modal = () => {
  const { content, onClose } = useModalContext();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      // eslint-disable-next-line
      scrollRef.current._ps.update();
    }
  }, [scrollRef]);

  return (
    <div className="modal">
      {/* eslint-disable-next-line */}
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__wrapper">
        <div className="modal__header">
          <button onClick={onClose} type="button">
            <img src={Icon} alt="Zamknij" />
          </button>
        </div>
        <div className="modal__content">
          <PerfectScrollbar ref={scrollRef}>
            <div className="modal__content__inner">{content}</div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Modal;
