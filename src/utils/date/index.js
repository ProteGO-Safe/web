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
