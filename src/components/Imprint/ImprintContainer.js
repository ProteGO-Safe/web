import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Imprint from './Imprint';
import nativeBridge from '../../services/nativeBridge';

const ImprintContainer = () => {
  const user = useSelector(state => state.user);
  const [labTestPin, setLabTestPin] = useState(null);

  useEffect(() => {
    nativeBridge.getLabTestPin().then(value => {
      if (value && value.code) {
        setLabTestPin(value.code);
      }
    });
  }, []);

  return <Imprint user={user} labTestPin={labTestPin} />;
};

export default ImprintContainer;
