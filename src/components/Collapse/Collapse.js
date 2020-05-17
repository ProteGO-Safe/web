import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CollapseWrapper, Title, Description } from './Collapse.styled';
import arrow from '../../assets/img/icons/angle-right.svg';

const Collapse = ({ children, title, className, forceOpen }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(prev => !prev);
  const isOpen = open || forceOpen ? 'open' : '';

  return (
    <CollapseWrapper className={className}>
      <Title onClick={handleClick} className={isOpen}>
        <span>{title}</span>
        <img src={arrow} alt="Arrow" />
      </Title>
      {(open || forceOpen) && <Description>{children}</Description>}
    </CollapseWrapper>
  );
};

Collapse.defaultProps = {
  className: ''
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Collapse;
