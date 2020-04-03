import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import isWebview from 'is-ua-webview';
import checkPWA from '../../services/checkPWA';
import parseUserAgent from '../../services/parseUserAgent';
import { ANDROID, IOS } from '../../constants';

const useInstallApp = () => {
  const history = useHistory();
  const { os, browser } = parseUserAgent();

  // eslint-disable-next-line
  useEffect(() => {
    if (![ANDROID, IOS].includes(os.name)) return undefined;

    const isPWA = checkPWA();

    if (isPWA) return undefined;
    if (isWebview) return undefined;

    history.push({
      pathname: '/install',
      state: {
        system: os.name,
        browser: browser.name.toLowerCase().replace(' ', '-')
      }
    });
    // eslint-disable-next-line
  }, []);
};

export default useInstallApp;
