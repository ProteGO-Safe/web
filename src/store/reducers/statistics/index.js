import data from './voivodeships.json';
import summary from './summary.json';

const INITIAL_STATE = {
  data,
  summary
};

const statisticsReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default statisticsReducer;
