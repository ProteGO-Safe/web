import axios from "axios";

const baseDomain = "https://api.safesafe.app";
const baseURL = `${baseDomain}/covid19`;

const Repository = axios.create({ baseURL });

Repository.interceptors.request.use(config => {
  config.headers = { "Model": "infermedica-pl" };
  return config;
}, error => Promise.reject(error));

Repository.interceptors.response.use(
    response => Promise.resolve(response),
    ({ response }) => {
        if (!response) {
            // handle error
        }

        const {
            data,
            data: { error: message, errors },
            status
        } = response;

        // handle error message

        return Promise.reject({
            errors,
            message,
            status
        });
    }
);

export default Repository;
