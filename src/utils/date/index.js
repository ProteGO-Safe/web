import { lte } from 'ramda';

const LOCAL_PL = 'pl-PL';

export const getTimestamp = () => new Date().getTime() / 1000;

export const someTimeWasUp = (timestamps = []) => {
  const now = getTimestamp();
  return timestamps.some(value => lte(value, now));
};

export const addDays = (timestamp, number) => {
  const date = new Date(timestamp * 1000);
  date.setDate(date.getDate() + number);
  return date.getTime() / 1000;
};

export const getDate = timestamp => new Date(timestamp * 1000);

export const getFormattedDateWithoutTime = timestamp =>
  getDate(timestamp)
    .toLocaleString()
    .split(', ')[0];

// 15:35
export const getFormattedTime = timestamp => {
  if (!timestamp) {
    return undefined;
  }
  const fullDate = getDate(timestamp).toLocaleString(LOCAL_PL);
  const time = fullDate.split(', ')[1];
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];
  return `${hour}:${minutes}`;
};

// 27.10.2020
export const getFormattedDay = timestamp => {
  if (!timestamp) {
    return undefined;
  }
  const fullDate = getDate(timestamp).toLocaleString(LOCAL_PL);
  return fullDate.split(', ')[0];
};

// 27.10.2020, 15:35
export const getFormattedDate = timestamp => {
  if (!timestamp) {
    return undefined;
  }
  return `${getFormattedDay(timestamp)}, ${getFormattedTime(timestamp)}`;
};

export const getYear = timestamp => {
  if (!timestamp) {
    return undefined;
  }
  const fullDate = getDate(timestamp).toLocaleString(LOCAL_PL);
  const date = fullDate.split(', ')[0];
  return date.split('.')[2];
};
