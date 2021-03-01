import React from 'react';
import { T } from '../../components';

export const numberWithSpaces = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const prepareKeyTranslation = ({
  number,
  labels: { number1, number2to4, number5to9999, number10000to999999, number1000000toInf }
}) => {
  if (!number) {
    return null;
  }

  if (number === 1) {
    return <T i18nKey={number1} variables={{ keys: number }} />;
  }

  if (number >= 2 && number <= 4) {
    return <T i18nKey={number2to4} variables={{ keys: number }} />;
  }

  if (number >= 5 && number <= 9999) {
    return <T i18nKey={number5to9999} variables={{ keys: numberWithSpaces(number) }} />;
  }

  if (number >= 10000 && number <= 999999) {
    const thousandNumber = number / 1000;
    return <T i18nKey={number10000to999999} variables={{ keys: Math.floor(thousandNumber) }} />;
  }

  if (number >= 1000000) {
    const millionNumber = number / 1000000;
    return (
      <T
        i18nKey={number1000000toInf}
        variables={{
          keys: millionNumber
            .toFixed(3)
            .toString()
            .replace('.', ', ')
        }}
      />
    );
  }

  return number;
};
