import { USER_NAME_SAVE, USER_SAVE } from '../../types/user';

const INITIAL_STATE = {
  bloodGroup: undefined,
  chronicSicks: undefined,
  name: undefined,
  isSmoking: undefined,
  smokeNumber: undefined
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME_SAVE:
      return (() => {
        const {
          data: { name }
        } = action;
        return {
          ...state,
          name
        };
      })();
    case USER_SAVE:
      return (() => {
        const {
          data: { bloodGroup, chronicSicks, isSmoking, name, smokeNumber }
        } = action;
        return {
          ...state,
          bloodGroup,
          chronicSicks,
          name,
          smokeNumber,
          isSmoking
        };
      })();

    default:
      return state;
  }
};

export default diagnosisReducer;
