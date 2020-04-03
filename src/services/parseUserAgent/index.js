import UAParser from 'ua-parser-js';

const parser = new UAParser();

const parseUserAgent = () => {
  const result = parser.getResult();
  return result;
};

export default parseUserAgent;
