import React from 'react';
import pinTimeouts from './pin-timeouts.json';
import { T } from '../../components/T';
import { LAB_TEST, UPLOAD_DATA } from './pin.types';

const MINUTE = 60 * 1000;

const getAttemptFromTheEnd = (listOfTries, numberOfTries) => {
  const attempFromEndIndex = listOfTries.length - numberOfTries;
  return listOfTries[attempFromEndIndex];
};

const getBanData = listOfTries => {
  const now = new Date().getTime();
  return pinTimeouts.reduce(
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
      if (timeBeetweenFirstAndLastTry < interval && timeSinceLastTry < curr.lockdownInMinutes * MINUTE) {
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
};

const getCorrentMinuteForm = lockdownTimeInMinutes => {
  if (lockdownTimeInMinutes === 1) {
    return { key: 'upload_historical_data_text6', time: lockdownTimeInMinutes };
  }
  if (lockdownTimeInMinutes > 4 && lockdownTimeInMinutes <= 21) {
    return { key: 'upload_historical_data_text7', time: lockdownTimeInMinutes };
  }
  const modulo = lockdownTimeInMinutes % 10;
  if (modulo > 1 && modulo <= 4) {
    return { key: 'upload_historical_data_text8', time: lockdownTimeInMinutes };
  }
  return { key: 'upload_historical_data_text7', time: lockdownTimeInMinutes };
};

const getLockdownInfo = lockdownTime => {
  const lockdownTimeInMinutes = lockdownTime / MINUTE;
  const lockdownTimeInHours = Math.floor(lockdownTimeInMinutes / 60);
  if (lockdownTimeInHours === 1) {
    return { key: 'upload_historical_data_text4', time: lockdownTimeInHours };
  }
  if (lockdownTimeInHours > 1) {
    return { key: 'upload_historical_data_text5', time: lockdownTimeInHours };
  }
  return getCorrentMinuteForm(lockdownTimeInMinutes);
};

const resolveMessageKey = pinType => {
  if (pinType === UPLOAD_DATA) {
    return 'ban-pin-tries_text1';
  }
  if (pinType === LAB_TEST) {
    return 'ban-pin-tries_text2';
  }
  return '';
};

const createErrorMessage = ({ lockdownTime, currentLimitOfTries }, numberOfTries, pinType) => {
  if (!numberOfTries) {
    return null;
  }
  if (lockdownTime) {
    const { key, time } = getLockdownInfo(lockdownTime);
    return (
      <T
        i18nKey={key}
        variables={{
          amount: numberOfTries,
          time
        }}
      />
    );
  }
  return (
    <T
      i18nKey={resolveMessageKey(pinType)}
      variables={{
        amount: numberOfTries,
        limit: currentLimitOfTries
      }}
    />
  );
};

export default { createErrorMessage, getBanData };
