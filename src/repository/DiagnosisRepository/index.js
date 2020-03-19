import Repository from "../Repository";

const resource = "diagnosis";

export default {
    getDiagnosis(data) {
        const {
            sex,
            age,
            evidence
        } = data;
        return Repository.post(`${resource}`, {
            sex,
            age,
            evidence
        });
    }
};
