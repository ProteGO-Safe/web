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
        "type": "group_single",
        "text": "How high is your fever?",
        "items": [
            {
                "id": "s_3",
                "name": "Between 37.5°C and 40°C (99.5°F and 104°F)",
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
                "id": "s_4",
                "name": "Greater than 40°C (104°F)",
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
                "id": "s_5",
                "name": "I haven’t measured",
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
