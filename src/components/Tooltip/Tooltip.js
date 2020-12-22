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
    openModal({
      value: <TooltipContent content={content} />,
      modalType: TYPE.TOOLTIP,
      modalTitle: title
    });
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
  content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Tooltip;
