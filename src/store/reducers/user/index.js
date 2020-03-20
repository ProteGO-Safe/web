import { USER_SAVE } from '../../types/user';

const INITIAL_STATE = {
    name: "tomo",
    sex: "male",
    age: 30
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SAVE:
      return (() => {
        console.log(action);
        const {
          data: {
            name,
            sex,
            age,
            chronic_sick,
            chronic_sick_other,
            term1,
            term2
          }
        } = action;

        return {
          ...state,
          name,
          sex,
          age,
          chronic_sick,
          chronic_sick_other,
          term1,
          term2
        };
      })();
    default:
      return state;
  }
};

export default diagnosisReducer;
