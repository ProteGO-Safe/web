import moment from 'moment';
import PropTypes from 'prop-types';

const dateFormat = 'D-MM-YYYY';
const dayWeekFormat = 'dddd';
const todayFormat = 'D-MM-YYYY';

// filledDays contains moments
const createCalendar = (filledDays = []) => {

  const day = moment();
  const today = day.format(todayFormat);

  const previousDays = [];

  for (let index = 0; index < 14; index++) {
    const dayBefore = day.subtract(1, 'days');
    const filledDay = filledDays.find(value => value.isSame(dayBefore, 'day'));
    previousDays.push({
      day: dayBefore.format(dateFormat),
      dayWeek: dayBefore.format(dayWeekFormat),
      isFilled: !!filledDay,
      timestamp: filledDay && filledDay.unix()
    });
  }

  return { today, previousDays };
};

export default createCalendar;

export const calendarPropType = PropTypes.shape({
  previousDays: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      isFilled: PropTypes.bool.isRequired,
      timestamp: PropTypes.number
    })
  ).isRequired,
  today: PropTypes.string.isRequired
}).isRequired;
