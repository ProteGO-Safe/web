const checkPWA = () =>
  window.matchMedia
    ? window.matchMedia('(display-mode: standalone)').matches
    : false;

export default checkPWA;
