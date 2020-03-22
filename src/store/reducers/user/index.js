import { HIDE_INFORMATION_SCREEN, USER_SAVE } from '../../types/user';

const INITIAL_STATE = {
  age: '',
  bloodGroup: '',
  chronicSicks: [], // { name, time }
  name: '',
  sex: '',
  showInformationScreen: true,
  smokeNumber: ''
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SAVE:
      return (() => {
        const {
          data: { name, sex, age, chronicSicks, bloodGroup, smokeNumber }
        } = action;

        return {
          ...state,
          name,
          sex,
          age,
          chronicSicks: [...chronicSicks],
          bloodGroup,
          smokeNumber
        };
      })();
    case HIDE_INFORMATION_SCREEN:
      return {
        ...state,
        showInformationScreen: false
      };
    default:
      return state;
  }
};

export default diagnosisReducer;
