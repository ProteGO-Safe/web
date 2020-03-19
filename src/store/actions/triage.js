import * as types from "../types/triage"

import RepositoryFactory from "../../repository/RepositoryFactory";
const DiagnosisRepository = RepositoryFactory.get("triage");

export const triageFetchRequested = () => ({
    type: types.TRIAGE_FETCH_REQUESTED
});

export const triageFetchSuccess = ({ data }) => ({
    data,
    type: types.TRIAGE_FETCH_SUCCESS
});

export const triageFetchError = ({ message, status }) => ({
    message,
    status,
    type: types.TRIAGE_FETCH_ERROR
});

const exampleResponse = {
    "triage_level": "isolation_call_ambulance",
    "label": "Call the emergency number. Avoid all contact.",
    "description": "Your symptoms are very serious, and you may be infected with COVID-19.",
    "serious": [
        {
            "id": "s_2",
            "name": "Dyspnea",
            "common_name": "Shortness of breath",
            "is_emergency": true
        },
    ],
    "root_cause" : null
};

export function getTriage(data) {
    return dispatch => {
        dispatch(triageFetchRequested());
        dispatch(triageFetchSuccess({data: exampleResponse}))
        // DiagnosisRepository.getDiagnosis(data)
        //   .then(data => dispatch(triageFetchSuccess(data)))
        //   .catch(error => dispatch(triageFetchError(error)))
    }
}
