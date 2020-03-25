import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getMobileOperatingSystem from '../../services/getMobileOperationSystem';
import checkPWA from '../../services/checkPWA';

const useInstallApp = () => {
  const history = useHistory();
  const system = getMobileOperatingSystem();

  // eslint-disable-next-line
  useEffect(() => {
    if (!system) return undefined;

    const isPWA = checkPWA();

    if (!isPWA) return undefined;

    console.warn('history push');

    history.push({
      pathname: '/install',
      state: {
        system
      }
    });
  }, []);
};

export default useInstallApp;
