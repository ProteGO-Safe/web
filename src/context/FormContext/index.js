import React, { createContext } from 'react';

const FormContext = createContext(null);

export const FormProvider = ({ children, formProps }) => {
  return (
    <FormContext.Provider value={{ formProps }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
