import pinTimeouts from './pin-timeouts.json';

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
};

const getCorrentMinuteForm = (lockdownTimeInMinutes, t) => {
  if (lockdownTimeInMinutes === 1) {
    return `${lockdownTimeInMinutes} ${t('upload_historical_data_text6')}`;
  }
  if (lockdownTimeInMinutes > 4 && lockdownTimeInMinutes <= 21) {
    return `${lockdownTimeInMinutes} ${t('upload_historical_data_text7')}`;
  }
  const modulo = lockdownTimeInMinutes % 10;
  if (modulo > 1 && modulo <= 4) {
    return `${lockdownTimeInMinutes} ${t('upload_historical_data_text8')}`;
  }
  return `${lockdownTimeInMinutes} ${t('upload_historical_data_text7')}`;
};

const getLockdownInfo = (lockdownTime, t) => {
  const lockdownTimeInMinutes = lockdownTime / MINUTE;
  const lockdownTimeInHours = Math.floor(lockdownTimeInMinutes / 60);
  if (lockdownTimeInHours === 1) {
    return `${lockdownTimeInHours} ${t('upload_historical_data_text4')}`;
  }
  if (lockdownTimeInHours > 1) {
    return `${lockdownTimeInHours} ${t('upload_historical_data_text5')}`;
  }
  return getCorrentMinuteForm(lockdownTimeInMinutes, t);
};

const createErrorMessage = (
  { lockdownTime, currentLimitOfTries },
  numberOfTries,
  t
) => {
  if (!numberOfTries) {
    return null;
  }
  if (lockdownTime) {
    const lockdownMessage = getLockdownInfo(lockdownTime, t);
    return t('upload_historical_data_text1', {
      amount: numberOfTries,
      seconds: lockdownMessage
    });
  }
  return t('ban-pin-tries_text1', {
    amount: numberOfTries,
    limit: currentLimitOfTries
  });
};

export default { createErrorMessage, getBanData };
