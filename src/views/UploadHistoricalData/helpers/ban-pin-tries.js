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
    return `${numberOfTries}-krotnie wpisałeś nieprawidłowy PIN, odczekaj ${lockdownTimeInMinutes}min aby spróbować ponownie.`;
  }
  return (
    <>
      KOD PIN jest wprowadzony niepoprawnie lub wygasł. Sprawdź poprawność KODU
      PIN i spróbuj ponownie.{' '}
      <strong>
        (Próba {numberOfTries} z {currentLimitOfTries})
      </strong>
    </>
  );
};
