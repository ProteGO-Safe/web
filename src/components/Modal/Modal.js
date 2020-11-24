import React from 'react';
import useModalContext from '../../hooks/useModalContext';
import { ModalClose } from './components';
import { TYPE } from './Modal.helpers';
import * as Styled from './Modal.styled';

const Modal = ({ open }) => {
  const { content, footer, onClose, title, type } = useModalContext();

  return (
    <Styled.Wrapper open={open}>
      <Styled.Overlay onClick={onClose} open={open} />
      <Styled.Content type={type}>
        {(type !== TYPE.DIALOG ||
          type === TYPE.NORMAL ||
          type === TYPE.RATING_APP) && <ModalClose onClick={onClose} />}

        {type === TYPE.INNER_CONTENT || type === TYPE.RATING_APP ? (
          <Styled.ContentWrapper>{content}</Styled.ContentWrapper>
        ) : (
          <>
            {title && <Styled.Title>{title}</Styled.Title>}

            <Styled.Description>
              <Styled.Text>{content}</Styled.Text>
            </Styled.Description>
          </>
        )}

        {footer &&
          (type === TYPE.DIALOG ||
            type === TYPE.INNER_CONTENT ||
            type === TYPE.RATING_APP) && (
            <Styled.Footer type={type}>{footer}</Styled.Footer>
          )}
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default Modal;
