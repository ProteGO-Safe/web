import DiagnosisRepository from './DiagnosisRepository';
import TriageRepository from './TriageRepository';
import ExternalDataRepository from './ExternalDataRepository';

const repositories = {
  diagnosis: DiagnosisRepository,
  triage: TriageRepository,
  externalData: ExternalDataRepository
};

export default {
  get: name => repositories[name]
};
