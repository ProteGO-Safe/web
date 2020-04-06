import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Imprint from './Imprint';

const ImprintContainer = ({ hidePhoneNumber }) => {
  const user = useSelector(state => state.user);
  return <Imprint hidePhoneNumber={hidePhoneNumber} user={user} />;
};

ImprintContainer.defaultProps = {
  hidePhoneNumber: false
};

ImprintContainer.propTypes = {
  hidePhoneNumber: PropTypes.bool
};

export default ImprintContainer;
