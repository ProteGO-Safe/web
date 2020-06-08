import React from 'react';
import { useFormikContext } from 'formik';

import Terms from './Terms';

const TermsContainer = () => {
  const { setFieldValue } = useFormikContext();

  const handleClick = () => {
    setFieldValue('step', 3);
  };

  return <Terms handleClick={handleClick} />;
};

export default TermsContainer;
