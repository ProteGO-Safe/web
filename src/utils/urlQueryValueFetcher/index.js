const fetchParamValue = (query, param) =>
  query
    ? new URLSearchParams(query.split('?')[1]).get(param) || undefined
    : undefined;

export default fetchParamValue;
