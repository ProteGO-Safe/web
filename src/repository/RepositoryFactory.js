import ExternalDataRepository from './ExternalDataRepository';

const repositories = {
  externalData: ExternalDataRepository
};

export default {
  get: name => repositories[name]
};
