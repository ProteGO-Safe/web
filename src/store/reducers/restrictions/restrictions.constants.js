export const FETCH_DISTRICTS_STATUSES = {
  SUCCESS: 1,
  FAILED: 2
};

export const resolveStatusByNumber = number => {
  return Object.keys(FETCH_DISTRICTS_STATUSES).find(
    value => FETCH_DISTRICTS_STATUSES[value] === number
  );
};
