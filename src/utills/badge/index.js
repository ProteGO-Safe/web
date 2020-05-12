import moment from 'moment';

const containsDayAgo = (daysAmount, today, days) => {
  return (
    days.filter(timestamp => {
      const day = moment.unix(timestamp);
      return today.diff(day, 'days') === daysAmount;
    }).length > 0
  );
};

const containsThisDay = (today, days) => {
  return (
    days.filter(timestamp => {
      const day = moment.unix(timestamp);
      return day.isSame(today, 'day');
    }).length > 0
  );
};

// filledDays contains timestamps
const hasBadge = (filledDays = []) => {
  const today = moment();

  if (filledDays.length < 3) {
    return false;
  }

  return (
    containsThisDay(today, filledDays) &&
    containsDayAgo(1, today, filledDays) &&
    containsDayAgo(2, today, filledDays)
  );
};

export default hasBadge;
