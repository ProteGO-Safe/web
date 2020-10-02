import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './CallHotline.styled';

const CallHotline = ({ content, icon, numberPhone, title }) => {
  const parsedNumber = numberPhone.replace(/[^0-9+]+/g, '');

  return (
    <Styled.CallHotline href={`tel:${parsedNumber}`}>
      <Styled.Icon>
        <Styled.Image src={icon} alt={title} />
      </Styled.Icon>
      <Styled.Description>
        <Styled.Title>
          {title}
          <br />
          {numberPhone}
        </Styled.Title>
        <Styled.Text>{content}</Styled.Text>
      </Styled.Description>
    </Styled.CallHotline>
  );
};

CallHotline.defaultProps = {
  content: null
};

CallHotline.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string.isRequired,
  numberPhone: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CallHotline;
