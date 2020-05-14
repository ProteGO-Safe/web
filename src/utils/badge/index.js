import moment from 'moment';

const containsDayAgo = (daysAmount, today, days) => {
  return (
    days.filter(timestamp => {
      const day = moment.unix(timestamp);
      return today.diff(day, 'days') === daysAmount;
    }).length > 0
  );
};

// filledDays contains timestamps
const hasBadge = (filledDays = []) => {
  const today = moment();

  return (
    containsDayAgo(1, today, filledDays) &&
    containsDayAgo(2, today, filledDays) &&
    containsDayAgo(3, today, filledDays)
  );
};

export default hasBadge;
