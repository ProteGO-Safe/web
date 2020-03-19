import {
    USER_SAVE
} from "../../types/user";

const INITIAL_STATE = {
    sex: "male",
    age: 30
};

const diagnosisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case USER_SAVE:
        return (() => {
            const {
                data: { name, sex, age }
            } = action;

            return {
                ...state,
                name,
                sex,
                age
            };
        })();
    default:
        return state;
    }
};

export default diagnosisReducer;
