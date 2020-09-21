import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../components';

const ModalContext = createContext(null);

export const EMPTY_MODAL_CONTENT = ' ';

export const ModalProvider = ({ children }) => {
  const [footer, setFooter] = useState([]);
  const [content, setContent] = useState(null);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [type, setType] = useState('');

  const onClose = () => setContent(null);
  const openModal = (value, modalType, modalTitle, modalFooter) => {
    setContent(value || EMPTY_MODAL_CONTENT);
    setType(modalType || 'normal');
    setTitle(modalTitle || null);
    setFooter(modalFooter || null);
  };

  useEffect(() => {
    setModal(!!content);
  }, [content]);

  return (
    <ModalContext.Provider
      value={{
        footer,
        content,
        modal,
        onClose,
        openModal,
        title,
        type
      }}
    >
      {children}
      {modal && <Modal />}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalContext;
