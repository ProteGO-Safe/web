import React from 'react';
import PropTypes from 'prop-types';
import useModalContext from '../../hooks/useModalContext';
import { TooltipContent } from './components';
import * as Styled from './Tooltip.styled';

const Tooltip = ({ content, title }) => {
  const { openModal } = useModalContext();

  const handleOpenModal = () => {
    openModal(<TooltipContent content={content} />, '', title);
  };

  return (
    <Styled.Tooltip onClick={handleOpenModal}>
      <Styled.IconInfo />
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
