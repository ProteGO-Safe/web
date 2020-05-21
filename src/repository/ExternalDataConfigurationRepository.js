import axios from 'axios';

const baseDomain = process.env.REACT_APP_EXTERNAL_DATA_API_DOMAIN;
const baseURL = `${baseDomain}`;

const ExternalDataConfigurationRepository = axios.create({ baseURL });

export default ExternalDataConfigurationRepository;
