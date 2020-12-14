import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Collapse.styled';

const Collapse = ({ children, className, forceOpen, noPadding, title }) => {
  const [open, setOpen] = useState(false);

  const isOpen = open || forceOpen;

  const handleClick = () => setOpen(prev => !prev);

  return (
    <Styled.CollapseWrapper className={className}>
      <Styled.Header onClick={handleClick} open={isOpen} padding={noPadding}>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Icon open={isOpen} />
      </Styled.Header>
      <Styled.Description open={isOpen} padding={noPadding}>
        {children}
      </Styled.Description>
    </Styled.CollapseWrapper>
  );
};

Collapse.defaultProps = {
  className: '',
  forceOpen: false,
  noPadding: false
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  forceOpen: PropTypes.bool,
  noPadding: PropTypes.bool,
  title: PropTypes.node.isRequired
};

export default Collapse;
