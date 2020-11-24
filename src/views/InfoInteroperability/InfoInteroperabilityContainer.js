import React from 'react';
import { useSelector } from 'react-redux';
import InfoInteroperability from './InfoInteroperability';
import { getInteroperabilityModalShowed } from '../../store/selectors/app';

const InfoInteroperabilityContainer = () => {
  const interoperabilityModalShowed = useSelector(
    getInteroperabilityModalShowed
  );

  return !interoperabilityModalShowed && <InfoInteroperability />;
};

export default InfoInteroperabilityContainer;
