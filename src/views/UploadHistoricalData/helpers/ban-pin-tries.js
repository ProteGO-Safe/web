import React from 'react';
import pinTimeouts from '../../../pin-timeouts.json';

const MINUTE = 60 * 1000;

export const getBanData = listOfTries => {
  const now = new Date();
  const banData = pinTimeouts.reduce(
    (prev, curr, index) => {
      if (listOfTries.length < curr.numberOfTries) {
        return prev;
      }
      const interval = curr.intervalInMinutes * MINUTE;
      const timeSinceFirstTry = now.getTime() - listOfTries[0];
      if (timeSinceFirstTry < interval) {
        return {
          lockdownTime: curr.lockdownInMinutes * MINUTE,
          currentLimitOfTries: curr.numberOfTries
        };
      }
      const currentLimitOfTries = pinTimeouts[index + 1]
        ? pinTimeouts[index + 1].numberOfTries
        : curr.numberOfTries;
      return {
        lockdownTime: null,
        currentLimitOfTries
      };
    },
    {
      lockdownTime: null,
      currentLimitOfTries: pinTimeouts[0].numberOfTries
    }
  );
  return banData;
};

export const createErrorMessage = (
  { lockdownTime, currentLimitOfTries },
  numberOfTries
) => {
  if (!numberOfTries) {
    return null;
  }
  if (lockdownTime) {
    const lockdownTimeInMinutes = lockdownTime / MINUTE;
    return `PIN ${currentLimitOfTries}-krotnie został wpisany niepoprawnie. Odczekaj ${lockdownTimeInMinutes} minut i spróbuj ponownie.`;
  }
  return (
    <>
      Twój PIN jest niepoprawny lub wygasł. Sprawdź poprawność kodu PIN i
      spróbuj ponownie. (Próba {numberOfTries} z {currentLimitOfTries})
    </>
  );
};
