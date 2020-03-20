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

export function getDiagnosis(data) {
    return dispatch => {
        dispatch(diagnosisFetchRequested({data}));
        DiagnosisRepository.getDiagnosis(data)
          .then(data => dispatch(diagnosisFetchSuccess(data)))
          .catch(error => dispatch(diagnosisFetchError(error)))
    }
}
