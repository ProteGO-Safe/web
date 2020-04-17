import { useEffect } from 'react';

const useInterval = (callback, time) => {
  useEffect(() => {
    callback();
    const interval = setInterval(callback, time);

    return () => clearInterval(interval);
  });
};

export default useInterval;
