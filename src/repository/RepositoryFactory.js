import TriageRepository from './TriageRepository';
import ExternalDataRepository from './ExternalDataRepository';

const repositories = {
  triage: TriageRepository,
  externalData: ExternalDataRepository
};

export default {
  get: name => repositories[name]
};
