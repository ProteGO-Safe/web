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
        "type": "group_multiple",
        "text": "Please select if you've got any of the following symptoms:",
        "items": [
            {
                "id": "s_0",
                "name": "Fever",
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
            },
            {
                "id": "s_1",
                "name": "Cough",
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
            },
            {
                "id": "s_2",
                "name": "Shortness of breath",
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
    console.log(data)
    return dispatch => {
        dispatch(diagnosisFetchRequested({data}));
        dispatch(diagnosisFetchSuccess({data: exampleResponse}))
        // DiagnosisRepository.getDiagnosis(data)
        //   .then(data => dispatch(diagnosisFetchSuccess(data)))
        //   .catch(error => dispatch(diagnosisFetchError(error)))
    }
}
