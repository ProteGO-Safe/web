import { useSelector } from 'react-redux';

const useFilledDays = () => {
  const riskTest = useSelector(state => state.riskTest);
  return Object.keys(riskTest);
};

export default useFilledDays;
