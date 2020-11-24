import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './CallHotline.styled';

const CallHotline = ({ content, icon, title }) => {
  return (
    <Styled.CallHotline>
      <Styled.Icon>
        <Styled.Image src={icon} alt={title} />
      </Styled.Icon>
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Text>{content}</Styled.Text>
      </Styled.Description>
    </Styled.CallHotline>
  );
};

CallHotline.defaultProps = {
  content: null
};

CallHotline.propTypes = {
  content: PropTypes.object,
  icon: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired
};

export default CallHotline;
