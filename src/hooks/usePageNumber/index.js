import { useLocation } from 'react-router-dom';
import fetchParamValue from '../../utils/urlQueryValueFetcher';

const usePageNumber = () => {
  const location = useLocation();
  const { search } = location;

  const paramValue = fetchParamValue(search, 'p') || '0';
  const page = parseInt(paramValue);

  return { page };
};

export default usePageNumber;
