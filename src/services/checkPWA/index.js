const checkPWA = () =>
  window.matchMedia
    ? window.matchMedia('(display-mode: standalone)').matches ||
      window.innerHeight / window.screen.height > 0.9
    : false;

export default checkPWA;
