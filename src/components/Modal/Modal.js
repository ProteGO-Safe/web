import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import * as Styled from './Modal.styled';
import { EMPTY_MODAL_CONTENT } from '../../context/ModalContext';

const Modal = () => {
  const { content, footer, onClose, title, type } = useModalContext();
  const [scrollHeight, setScrollHeight] = useState(null);
  const scrollRef = useRef(null);

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
      <Styled.Content type={type} height={scrollHeight}>
        {type === 'inner-content' ? (
          content
        ) : (
          <>
            {type !== 'dialog' && <ModalClose onClick={onClose} />}
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
          <Styled.Footer type={type}>{footer}</Styled.Footer>
        )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
