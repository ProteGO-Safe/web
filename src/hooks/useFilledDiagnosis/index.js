import { useSelector } from 'react-redux';
import moment from 'moment';

const dateFormat = 'D-MM-YYYY';
const descending = (a, b) => b - a;

const getLastDate = (filledDays = []) => {
  const sortedDays = filledDays
    .sort(descending)
    .map(_timestamp => moment.unix(_timestamp).format(dateFormat));

  if (sortedDays.length > 0) {
    return sortedDays[0];
  }
  return '';
};

const useFilledDiagnosis = () => {
  const riskTest = useSelector(state => state.riskTest);
  const filledDays = Object.keys(riskTest);
  const lastDate = getLastDate(filledDays);
  const hasFilledAnyDiagnosis = filledDays > 0;

  return { lastDate, hasFilledAnyDiagnosis };
};

export default useFilledDiagnosis;
