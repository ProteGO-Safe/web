import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import WarningInEuropeTerm from './WarningInEuropeTerm';
import useModalContext from '../../hooks/useModalContext';
import PrivacyPolicyContent from '../../views/PrivacyPolicyDetails/component/PrivacyPolicyContent/PrivacyPolicyContent';
import { getWarningInEuropeTermState } from '../../store/selectors/app';
import { warningInEuropeTermToggle } from '../../store/actions/app';

const WarningInEuropeTermContainer = ({ forceOpen }) => {
  const dispatch = useDispatch();
  const checked = useSelector(getWarningInEuropeTermState);
  const { openModal } = useModalContext();

  const onChange = () => {
    dispatch(warningInEuropeTermToggle());
  };

  const handleOpenModal = e => {
    e.preventDefault();
    openModal(<PrivacyPolicyContent small />, 'normal', null, null);
  };

  return (
    <WarningInEuropeTerm
      checked={checked}
      forceOpen={forceOpen}
      handleClick={handleOpenModal}
      onChange={onChange}
      name="term"
    />
  );
};

WarningInEuropeTerm.defaultProps = {
  forceOpen: false
};

WarningInEuropeTerm.propTypes = {
  forceOpen: PropTypes.bool
};

export default WarningInEuropeTermContainer;
