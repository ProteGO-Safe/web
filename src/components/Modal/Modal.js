import React from 'react';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import { TYPE } from './Modal.helpers';
import * as Styled from './Modal.styled';

const Modal = ({ disableOverlayClose, hideCloseButton, open }) => {
  const { content, footer, onClose, title, type } = useModalContext();

  return (
    <Styled.Wrapper open={open}>
      <Styled.Overlay onClick={disableOverlayClose ? () => null : () => onClose()} open={open} />
      <Styled.Content type={type}>
        {!hideCloseButton && <ModalClose onClick={onClose} />}

        {type !== TYPE.CUSTOM ? (
          <>
            {title && <Styled.Title>{title}</Styled.Title>}

            <Styled.Description>
              <Styled.Text>{content}</Styled.Text>
            </Styled.Description>
          </>
        ) : (
          <Styled.ContentWrapper>{content}</Styled.ContentWrapper>
        )}

        {footer && type !== TYPE.TOOLTIP && <Styled.Footer>{footer}</Styled.Footer>}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
