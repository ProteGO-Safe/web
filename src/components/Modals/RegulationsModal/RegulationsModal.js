import React from 'react';
import PropTypes from 'prop-types';
import { TextLink } from '../../../theme/typography';
import { RegulationsContent } from '../../../views/Regulations/component/RegulationsContent';
import useModalContext from '../../../hooks/useModalContext';

const RegulationsModal = ({ text }) => {
  const { openModal } = useModalContext();
  const onOpenModal = content => {
    openModal({ value: content });
  };

  return (
    <TextLink
      onClick={e => {
        e.preventDefault();
        onOpenModal(<RegulationsContent small />);
      }}
      role="button"
    >
      {text}
    </TextLink>
  );
};

RegulationsModal.propTypes = {
  text: PropTypes.string.isRequired
};

export default RegulationsModal;
