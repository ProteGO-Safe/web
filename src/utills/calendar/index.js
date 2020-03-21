import moment from 'moment';
import PropTypes from 'prop-types';
import 'moment/locale/pl';

const dateFormat = 'dddd - D-MM-YYYY';
const todayFormat = 'D-MM-YYYY';

const createCalendar = (filledDays = []) => {
  moment.locale('pl');

  const day = moment();
  const today = day.format(todayFormat);

  const previousDays = [];

  for (let index = 0; index < 14; index++) {
    const dayBefore = day.subtract(1, 'days');
    const isFilled = filledDays.some(value =>
      moment(value).isSame(dayBefore, 'day')
    );
    previousDays.push({ day: dayBefore.format(dateFormat), isFilled });
  }

  return { today, previousDays };
};

export default createCalendar;

export const calendarPropType = PropTypes.shape({
  previousDays: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      isFilled: PropTypes.bool.isRequired
    })
  ).isRequired,
  today: PropTypes.string.isRequired
}).isRequired;
