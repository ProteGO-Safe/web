import DiagnosisRepository from './DiagnosisRepository';
import TriageRepository from './TriageRepository';

const repositories = {
  diagnosis: DiagnosisRepository,
  triage: TriageRepository
};

export default {
  get: name => repositories[name]
};
