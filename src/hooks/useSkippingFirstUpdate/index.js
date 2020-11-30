import { useLayoutEffect, useRef } from 'react';

const useSkippingFirstUpdate = (callback, params) => {
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    callback();
    // eslint-disable-next-line
  }, params);
};

export default useSkippingFirstUpdate;
