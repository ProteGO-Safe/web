import React from 'react';
import { T } from '../../../../../../components';

const numberWithSpaces = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const prepareKeyTranslation = number => {
  if (!number) {
    return null;
  }

  if (number === 1) {
    return <T i18nKey="statistics_text_11" variables={{ keys: number }} />;
  }

  if (number >= 2 && number <= 4) {
    return <T i18nKey="statistics_text_12" variables={{ keys: number }} />;
  }

  if (number >= 5 && number <= 9999) {
    return <T i18nKey="statistics_text_10" variables={{ keys: numberWithSpaces(number) }} />;
  }

  if (number >= 10000 && number <= 999999) {
    const thousandNumber = number / 1000;
    return <T i18nKey="statistics_text_13" variables={{ keys: Math.floor(thousandNumber) }} />;
  }

  if (number >= 1000000) {
    const millionNumber = number / 1000000;
    return (
      <T
        i18nKey="statistics_text_14"
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
