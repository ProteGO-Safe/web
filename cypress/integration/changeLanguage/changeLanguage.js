import { visitBaseUrl } from '../../utils/visitBaseUrl';
import { resolveChangeLanguage } from './changeLanguage.helpers';
import { clearLocalStorage } from '../../utils/clearLocalStorage';

/**
 * Change language
 */
describe('Choose language on first screen', () => {
  clearLocalStorage();
  visitBaseUrl();

  const changeToPolish = resolveChangeLanguage('#select_flag_PL', 'PL');
  const changeToEnglish = resolveChangeLanguage('#select_flag_GB', 'GB');
  const changeToUkrainian = resolveChangeLanguage('#select_flag_UA', 'UA');

  it('should change language to polish', () => {
    changeToPolish();
  });

  it('should change language to english', () => {
    changeToEnglish();
  });

  it('should change language to ukrainian', () => {
    changeToUkrainian();
  });

  it('should change language to english', () => {
    changeToEnglish();
  });

  it('should change language to polish', () => {
    changeToPolish();
  });

  it('should change language to ukrainian', () => {
    changeToEnglish();
  });

  it('should change language to polish', () => {
    changeToPolish();
  });
});
