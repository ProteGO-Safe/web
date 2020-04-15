import moment from 'moment';
import PropTypes from 'prop-types';

const dayWeekFormat = 'dddd';
const dateFormat = 'D-MM-YYYY';

// filledDays contains moments
const createDaysDetails = (filledDays = []) => {
  const descending = (a, b) => b - a;

  return filledDays.sort(descending).map(_timestamp => {
    return {
      day: moment.unix(_timestamp).format(dateFormat),
      dayWeek: moment.unix(_timestamp).format(dayWeekFormat),
      timestamp: _timestamp
    };
  });
};

export default createDaysDetails;

export const daysDetailsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    day: PropTypes.string.isRequired,
    dayWeek: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  })
).isRequired;
