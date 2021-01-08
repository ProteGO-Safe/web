import moment from 'moment';
import PropTypes from 'prop-types';

const dayWeekFormat = 'dddd';
const dateFormat = 'D.MM.YYYY';

const createTimestampForDay = timestamp => {
  const { data } = timestamp[1];
  const { time } = data;
  if (time) {
    return moment(time).unix();
  }
  return timestamp[0];
};

const descending = (a, b) => {
  return createTimestampForDay(b) - createTimestampForDay(a);
};

// filledDays contains moments
export const createDaysDetailsByTimestamp = (
  filledDays = [],
  dateFormatIn = dateFormat
) => {
  return filledDays
    .sort((a, b) => b - a)
    .map(_timestamp => {
      return {
        day: moment.unix(_timestamp).format(dateFormatIn),
        dayWeek: moment.unix(_timestamp).format(dayWeekFormat),
        timestamp: _timestamp
      };
    });
};

export const createDaysDetails = (
  filledDays = [],
  dateFormatIn = dateFormat
) => {
  return filledDays.sort(descending).map(_timestamp => {
    const timestamp = createTimestampForDay(_timestamp);

    return {
      day: moment.unix(timestamp).format(dateFormatIn),
      dayWeek: moment.unix(timestamp).format(dayWeekFormat),
      timestamp: _timestamp[0]
    };
  });
};

export const daysDetailsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    day: PropTypes.string.isRequired,
    dayWeek: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
).isRequired;
