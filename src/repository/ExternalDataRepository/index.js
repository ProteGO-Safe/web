import ExternalDataConfigurationRepository from '../ExternalDataConfigurationRepository';

export default {
  getFaq() {
    return ExternalDataConfigurationRepository.get(`faq.json?alt=media`);
  },
  getHospitals() {
    return ExternalDataConfigurationRepository.get(`hospitals.json?alt=media`);
  },
  getAdvices() {
    return ExternalDataConfigurationRepository.get(`advices.json?alt=media`);
  }
};
