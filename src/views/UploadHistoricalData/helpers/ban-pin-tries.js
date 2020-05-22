import React from 'react';
import pinTimeouts from '../../../pin-timeouts.json';

const MINUTE = 60 * 1000;

const getAttemptFromTheEnd = (listOfTries, numberOfTries) => {
  const attempFromEndIndex = listOfTries.length - numberOfTries;
  return listOfTries[attempFromEndIndex];
};

export const getBanData = listOfTries => {
  const now = new Date().getTime();
  const banData = pinTimeouts.reduce(
    (prev, curr, index) => {
      const interval = curr.intervalInMinutes * MINUTE;
      let firstTimeTry = listOfTries[0];
      const lastTimeTry = listOfTries[listOfTries.length - 1];
      const isLastTimeout = index + 1 === pinTimeouts.length;

      if (listOfTries.length < curr.numberOfTries) {
        return prev;
      }

      if (isLastTimeout && listOfTries.length > curr.numberOfTries) {
        firstTimeTry = getAttemptFromTheEnd(listOfTries, curr.numberOfTries);
      }

      const timeBeetweenFirstAndLastTry = lastTimeTry - firstTimeTry;
      const timeSinceLastTry = now - lastTimeTry;
      if (
        timeBeetweenFirstAndLastTry < interval &&
        timeSinceLastTry < curr.lockdownInMinutes * MINUTE
      ) {
        return {
          lockdownTime: curr.lockdownInMinutes * MINUTE,
          currentLimitOfTries: curr.numberOfTries
        };
      }
      const currentLimitOfTries = isLastTimeout
        ? prev.currentLimitOfTries + curr.numberOfTries
        : pinTimeouts[index + 1].numberOfTries;
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

const getCorrentMinuteForm = lockdownTimeInMinutes => {
  if (lockdownTimeInMinutes === 1) {
    return `${lockdownTimeInMinutes} minutę`;
  }
  if (lockdownTimeInMinutes > 4 && lockdownTimeInMinutes <= 21) {
    return `${lockdownTimeInMinutes} minut`;
  }
  const modulo = lockdownTimeInMinutes % 10;
  if (modulo > 1 && modulo <= 4) {
    return `${lockdownTimeInMinutes} minuty`;
  }
  return `${lockdownTimeInMinutes} minut`;
};

const getLockdownInfo = lockdownTime => {
  const lockdownTimeInMinutes = lockdownTime / MINUTE;
  const lockdownTimeInHours = Math.floor(lockdownTimeInMinutes / 60);
  if (lockdownTimeInHours === 1) {
    return `${lockdownTimeInHours} godzinę`;
  }
  if (lockdownTimeInHours > 1) {
    return `${lockdownTimeInHours} godziny`;
  }
  return getCorrentMinuteForm(lockdownTimeInMinutes);
};

export const createErrorMessage = (
  { lockdownTime, currentLimitOfTries },
  numberOfTries
) => {
  if (!numberOfTries) {
    return null;
  }
  if (lockdownTime) {
    const lockdownMessage = getLockdownInfo(lockdownTime);
    return `PIN ${numberOfTries}-krotnie został wpisany niepoprawnie. Odczekaj ${lockdownMessage} i spróbuj ponownie.`;
  }
  return (
    <>
      Twój PIN jest niepoprawny lub wygasł. Sprawdź poprawność kodu PIN i
      spróbuj ponownie. (Próba {numberOfTries} z {currentLimitOfTries})
    </>
  );
};
