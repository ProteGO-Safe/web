import React from 'react';
import PropTypes from 'prop-types';
import useModalContext from '../../hooks/useModalContext';
import { TooltipContent } from './components';
import * as Styled from './Tooltip.styled';

const Tooltip = ({ content, title, sticky }) => {
  const { openModal } = useModalContext();

  const handleOpenModal = e => {
    e.preventDefault();
    openModal(<TooltipContent content={content} />, '', title);
  };

  return (
    <Styled.Tooltip sticky={sticky} onClick={handleOpenModal}>
      <Styled.Test1>
        <Styled.IconInfo />
      </Styled.Test1>
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
