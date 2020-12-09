import { lte } from 'ramda';

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
  const fullDate = getDate(timestamp).toLocaleString();
  const time = fullDate.split(', ')[1];
  const hour = time.split(':')[0];
  const minutes = time.split(':')[1];
  return `${hour}:${minutes}`;
};

// 27.10.2020, 15:35
export const getFormattedDate = timestamp => {
  const fullDate = getDate(timestamp).toLocaleString();
  const date = fullDate.split(', ')[0];
  const year = date.split('/')[0];
  const month = date.split('/')[1];
  const day = date.split('/')[2];
  return `${day}.${month}.${year}, ${getFormattedTime(timestamp)}`;
};
