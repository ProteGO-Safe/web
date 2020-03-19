import * as types from "../types/diagnosis"

import RepositoryFactory from "../../repository/RepositoryFactory";
const DiagnosisRepository = RepositoryFactory.get("diagnosis");

export const diagnosisFetchRequested = ({ data }) => ({
    data,
    type: types.DIAGNOSIS_FETCH_REQUESTED
});

export const diagnosisFetchSuccess = ({ data }) => ({
    data,
    type: types.DIAGNOSIS_FETCH_SUCCESS
});

export const diagnosisFetchError = ({ message, status }) => ({
    message,
    status,
    type: types.DIAGNOSIS_FETCH_ERROR
});

const exampleResponse = {
    "conditions": [],
    "question": {
        "type": "single",
        "text": "Are you breathing very fast?",
        "items": [
            {
                "id": "s_13",
                "name": "Accelerated breathing",
                "choices": [
                    {
                        "id": "present",
                        "label": "Yes"
                    },
                    {
                        "id": "absent",
                        "label": "No"
                    }
                ]
            }
        ],
        "extras": {}
    }
};

export function getDiagnosis(data) {
    return dispatch => {
        dispatch(diagnosisFetchRequested({data}));
        dispatch(diagnosisFetchSuccess({data: exampleResponse}))
        // DiagnosisRepository.getDiagnosis(data)
        //   .then(data => dispatch(diagnosisFetchSuccess(data)))
        //   .catch(error => dispatch(diagnosisFetchError(error)))
    }
}
