import React from 'react';
import PropTypes from 'prop-types';
import { TextLink } from '../../../theme/typography';
import { PrivacyPolicyContent } from '../../../views/PrivacyPolicyDetails/component/PrivacyPolicyContent';
import useModalContext from '../../../hooks/useModalContext';

const PrivacyPolicyModal = ({ text }) => {
  const { openModal } = useModalContext();

  const onOpenModal = content => {
    openModal({ value: content });
  };

  return (
    <TextLink
      onClick={e => {
        e.preventDefault();
        onOpenModal(<PrivacyPolicyContent small />);
      }}
      role="button"
    >
      {text}
    </TextLink>
  );
};

PrivacyPolicyModal.propTypes = {
  text: PropTypes.string.isRequired
};

export default PrivacyPolicyModal;
