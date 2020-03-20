import Repository from '../Repository';

const resource = 'triage';

export default {
  getTriage(data) {
    const { sex, age, evidence } = data;
    return Repository.post(`${resource}`, {
      sex,
      age,
      evidence
    });
  }
};
