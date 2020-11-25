import React from 'react';
import PropTypes from 'prop-types';
import useModalContext from '../../hooks/useModalContext';
import { TooltipContent } from './components';
import * as Styled from './Tooltip.styled';
import { TYPE } from '../Modal/Modal.helpers';

const Tooltip = ({ content, title, sticky }) => {
  const { openModal } = useModalContext();

  const handleOpenModal = e => {
    e.preventDefault();
    openModal(<TooltipContent content={content} />, TYPE.TOOLTIP, title, null);
  };

  return (
    <Styled.Tooltip sticky={sticky} onClick={handleOpenModal}>
      <Styled.IconWrapper>
        <Styled.IconInfo />
      </Styled.IconWrapper>
    </Styled.Tooltip>
  );
};

Tooltip.defaultProps = {
  content: '',
  title: ''
};

Tooltip.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string
};

export default Tooltip;
