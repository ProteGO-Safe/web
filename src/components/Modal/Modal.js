import React, { useEffect, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import * as Styled from './Modal.styled';

const Modal = () => {
  const { content, footer, onClose, title, type } = useModalContext();
  const scrollRef = useRef(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      // eslint-disable-next-line
      scrollRef.current._ps.update();
      // eslint-disable-next-line no-underscore-dangle
      setHeight(scrollRef.current._ps.containerHeight);
    }
  }, [scrollRef]);

  return (
    <Styled.Wrapper>
      <Styled.Overlay onClick={onClose} />
      <Styled.Content type={type} height={height}>
        {type !== 'dialog' && <ModalClose onClick={onClose} />}
        {title && <Styled.Title>{title}</Styled.Title>}

        <Styled.ScrollbarContent>
          <PerfectScrollbar ref={scrollRef}>
            <Styled.Text>{content}</Styled.Text>
          </PerfectScrollbar>
        </Styled.ScrollbarContent>

        {footer && type === 'dialog' && <Styled.Footer>{footer}</Styled.Footer>}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
