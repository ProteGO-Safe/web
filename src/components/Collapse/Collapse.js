import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Collapse.styled';
import arrow from '../../assets/img/icons/angle-right.svg';

const Collapse = ({ children, className, forceOpen, title }) => {
  const [open, setOpen] = useState(false);

  const isOpen = open || forceOpen;

  const handleClick = () => setOpen(prev => !prev);

  return (
    <Styled.CollapseWrapper className={className}>
      <Styled.Header onClick={handleClick} open={isOpen}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Icon alt="Arrow" open={isOpen} src={arrow} />
      </Styled.Header>
      {isOpen && <Styled.Description>{children}</Styled.Description>}
    </Styled.CollapseWrapper>
  );
};

Collapse.defaultProps = {
  className: '',
  forceOpen: false
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  forceOpen: PropTypes.bool,
  title: PropTypes.node.isRequired
};

export default Collapse;
