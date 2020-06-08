import ExternalDataConfigurationRepository from '../ExternalDataConfigurationRepository';

export default {
  getFaq() {
    return ExternalDataConfigurationRepository.get(`faq.json`);
  },
  getHospitals() {
    return ExternalDataConfigurationRepository.get(`hospitals.json`);
  },
  getAdvices() {
    return ExternalDataConfigurationRepository.get(`advices.json`);
  }
};
