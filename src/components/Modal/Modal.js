import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import * as Styled from './Modal.styled';
import { EMPTY_MODAL_CONTENT } from '../../context/ModalContext';

const Modal = () => {
  const { content, footer, onClose, title, type } = useModalContext();
  const [scrollHeight, setScrollHeight] = useState(null);
  const [modalHeight, setModalHeight] = useState(null);
  const [contentHeight, setContentHeight] = useState(null);
  const [footerHeight, setFooterHeight] = useState(null);

  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (modalRef && modalRef.current) {
      setModalHeight(modalRef.current.clientHeight - 50);
    }
    if (contentRef && contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
    if (footerRef && footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight + 30);
    }
  }, []);

  useEffect(() => {
    if (scrollRef && scrollRef.current && scrollRef.current.contentElement) {
      setScrollHeight(scrollRef.current.contentElement.clientHeight);
    }
  }, [scrollRef]);

  useEffect(() => {
    if (content === EMPTY_MODAL_CONTENT) {
      setScrollHeight(0);
    }
  }, [content]);

  return (
    <Styled.Wrapper>
      <Styled.Overlay onClick={onClose} />
      <Styled.Content
        type={type}
        height={scrollHeight}
        maxHeight={
          contentHeight + footerHeight > modalHeight && type === 'inner-content'
        }
        ref={modalRef}
      >
        {type === 'inner-content' ? (
          <Styled.ContentHeight ref={contentRef}>
            {content}
          </Styled.ContentHeight>
        ) : (
          <>
            {(type !== 'dialog' || type === 'normal') && (
              <ModalClose onClick={onClose} />
            )}
            {title && <Styled.Title>{title}</Styled.Title>}

            <Styled.ScrollbarContent height={scrollHeight}>
              <Scrollbar
                ref={scrollRef}
                style={{
                  width: '100%',
                  height: scrollHeight > 260 ? '100%' : `${scrollHeight}px`,
                  maxHeight: '100%'
                }}
              >
                <Styled.Text>{content}</Styled.Text>
              </Scrollbar>
            </Styled.ScrollbarContent>
          </>
        )}

        {footer && (type === 'dialog' || type === 'inner-content') && (
          <Styled.Footer type={type} ref={footerRef}>
            {footer}
          </Styled.Footer>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
