import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiagnosis } from '../../../../store/actions/diagnosis';
import Country from './Country';

const CountryContainer = () => {
  const dispatch = useDispatch();
  const { evidence: existingEvidence } = useSelector(state => state.diagnosis);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleSubmit = () => {
    const data = {
      evidence: [...existingEvidence, ...selectedCountries]
    };
    dispatch(getDiagnosis(data)).then(() =>
      window.scrollTo ? window.scrollTo(0, 0) : null
    );
  };

  return (
    <Country
      handleSubmit={handleSubmit}
      selectedCountries={selectedCountries}
      setSelectedCountries={setSelectedCountries}
    />
  );
};

export default CountryContainer;
