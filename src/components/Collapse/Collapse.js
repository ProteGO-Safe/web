import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CollapseWrapper, Title, Description } from './Collapse.styled';
import arrow from '../../assets/img/icons/angle-right.svg';

const Collapse = ({ children, title }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(prev => !prev);
  const isOpen = open ? 'open' : '';

  return (
    <CollapseWrapper>
      <Title onClick={handleClick} className={isOpen}>
        {title}
        <img src={arrow} alt="Arrow" />
      </Title>
      {open && <Description>{children}</Description>}
    </CollapseWrapper>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
  title: PropTypes.bool
};

export default Collapse;
