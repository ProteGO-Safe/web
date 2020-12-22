import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import WarningInEuropeTerm from './WarningInEuropeTerm';
import { getWarningInEuropeTermState } from '../../store/selectors/app';
import { warningInEuropeTermToggle } from '../../store/actions/app';

const WarningInEuropeTermContainer = ({ forceOpen }) => {
  const dispatch = useDispatch();
  const checked = useSelector(getWarningInEuropeTermState);

  const onChange = () => {
    dispatch(warningInEuropeTermToggle());
  };

  return <WarningInEuropeTerm checked={checked} forceOpen={forceOpen} onChange={onChange} name="term" />;
};

WarningInEuropeTerm.defaultProps = {
  forceOpen: false
};

WarningInEuropeTerm.propTypes = {
  forceOpen: PropTypes.bool
};

export default WarningInEuropeTermContainer;
