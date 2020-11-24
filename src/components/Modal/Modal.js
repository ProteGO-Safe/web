import React from 'react';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import * as Styled from './Modal.styled';

const Modal = ({ open }) => {
  const { content, footer, onClose, title, type } = useModalContext();

  return (
    <Styled.Wrapper open={open}>
      <Styled.Overlay onClick={onClose} open={open} />
      <Styled.Content type={type}>
        {type === 'inner-content' ? (
          <Styled.ContentWrapper>{content}</Styled.ContentWrapper>
        ) : (
          <>
            {(type !== 'dialog' || type === 'normal') && (
              <ModalClose onClick={onClose} />
            )}
            {title && <Styled.Title>{title}</Styled.Title>}

            <Styled.Description>
              <Styled.Text>{content}</Styled.Text>
            </Styled.Description>
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
