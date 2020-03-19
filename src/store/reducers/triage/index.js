import {
    TRIAGE_FETCH_REQUESTED,
    TRIAGE_FETCH_SUCCESS,
    TRIAGE_FETCH_ERROR
} from "../../types/triage";

const INITIAL_STATE = {

};

const triageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TRIAGE_FETCH_REQUESTED:
        return {
            ...state,
            isLoading: true
        };
    case TRIAGE_FETCH_SUCCESS:
        return (() => {
            const {
                data: { triage_level, label, description, serious, root_cause }
            } = action;

            return {
                ...state,
                triage_level,
                label,
                description,
                serious,
                root_cause,
                isLoading: false
            };
        })();
    case TRIAGE_FETCH_ERROR:
        return {
            ...state,
            isLoading: false
        };
    default:
        return state;
    }
};

export default triageReducer;
