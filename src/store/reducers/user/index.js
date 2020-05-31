import { USER_SAVE } from '../../types/user';

const INITIAL_STATE = {
  age: '',
  bloodGroup: '',
  chronicSicks: [], // { name, description }
  name: '',
  sex: '',
  smokeNumber: ''
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SAVE:
      return (() => {
        const {
          data: { name }
        } = action;
        return {
          ...state,
          name
        };
      })();
    default:
      return state;
  }
};

export default diagnosisReducer;
