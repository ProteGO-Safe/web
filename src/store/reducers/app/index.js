import { ONBOARDING_FINISHED, START_SCREEN_SHOWED } from '../../types/app';

const INITIAL_STATE = {
  onboardingFinished: false,
  startScreenShowed: false
};
const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONBOARDING_FINISHED:
      return {
        ...state,
        onboardingFinished: true
      };
    case START_SCREEN_SHOWED:
      return {
        ...state,
        startScreenShowed: true
      };
    default:
      return state;
  }
};

export default appReducer;
